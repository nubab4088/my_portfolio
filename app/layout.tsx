import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nusrat Jahan Bably | Full-Stack Developer · AI & Research Engineer',
  description: 'Building systems where intelligence meets usability. A research-driven portfolio blending full-stack development, AI, and real-world problem solving.',
  keywords: ['developer', 'researcher', 'full-stack', 'AI', 'systems'],
  authors: [{ name: 'Nusrat Jahan Bably' }],
  openGraph: {
    title: 'Nusrat Jahan Bably | Full-Stack Developer · AI & Research Engineer',
    description: 'Building systems where intelligence meets usability.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>" />
      </head>
      <body className="bg-bg text-text">
        {children}
      </body>
    </html>
  );
}
