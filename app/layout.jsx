import './globals.css';

export const metadata = {
  title: 'BOO Candy — Gen Z Halloween Shop',
  description: 'Spooky-sweet candy drops with neon vibes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen font-display bg-candy">
        {/* Providers + Layout chrome */}
        <div className="relative min-h-screen">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,122,0,0.08),transparent),radial-gradient(60%_40%_at_10%_80%,rgba(0,255,178,0.06),transparent)]" />
          <div className="relative z-10 container mx-auto max-w-6xl px-4 py-6">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
