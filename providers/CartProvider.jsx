'use client';
import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react';

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'INIT':
      return action.payload;
    case 'ADD': {
      const existing = state.items.find((i) => i.id === action.payload.id);
      const items = existing
        ? state.items.map((i) => i.id === action.payload.id ? { ...i, qty: Math.min(99, i.qty + action.payload.qty) } : i)
        : [...state.items, action.payload];
      return { ...state, items };
    }
    case 'REMOVE':
      return { ...state, items: state.items.filter((i) => i.id !== action.payload) };
    case 'QTY':
      return { ...state, items: state.items.map((i) => i.id === action.payload.id ? { ...i, qty: Math.max(1, Math.min(99, action.payload.qty)) } : i) };
    case 'CLEAR':
      return { ...state, items: [] };
    default:
      return state;
  }
}

const initialState = { items: [] };

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('boo_cart_v1');
      if (raw) dispatch({ type: 'INIT', payload: JSON.parse(raw) });
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('boo_cart_v1', JSON.stringify(state));
    } catch {}
  }, [state]);

  const api = useMemo(() => {
    const count = state.items.reduce((n, i) => n + i.qty, 0);
    const total = state.items.reduce((s, i) => s + i.qty * i.price, 0);
    return {
      items: state.items,
      count,
      total,
      add: (item) => dispatch({ type: 'ADD', payload: item }),
      remove: (id) => dispatch({ type: 'REMOVE', payload: id }),
      setQty: (id, qty) => dispatch({ type: 'QTY', payload: { id, qty } }),
      clear: () => dispatch({ type: 'CLEAR' }),
    };
  }, [state]);

  return (
    <CartContext.Provider value={api}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
