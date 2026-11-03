// Next.js needs a root layout. The real site lives in public/index.html (served at "/"),
// so this layout is only used by the 404 page below.
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'TecHacks 5.0 Hackathon',
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#070A14', color: '#F4EEE1', fontFamily: 'system-ui, sans-serif' }}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
