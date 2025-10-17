export default function Badge({ children, color = 'orange' }) {
  const colorMap = {
    orange: 'bg-halloween-orange text-black',
    green: 'bg-halloween-green text-black',
    purple: 'bg-halloween-purple text-white',
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${colorMap[color]}`}>{children}</span>
  );
}
