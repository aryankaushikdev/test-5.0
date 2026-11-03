export const metadata = { title: 'Lost in orbit · TecHacks 5.0' };

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24, textAlign: 'center' }}>
      <div>
        <img src="/img/pilot.webp" alt="The Pilot" width="220" height="220" style={{ display: 'block', margin: '0 auto 24px', width: 220, height: 'auto' }} />
        <p style={{ fontFamily: 'monospace', letterSpacing: '0.18em', color: '#FF8A5C', margin: 0 }}>ERROR 404 · SIGNAL LOST</p>
        <h1 style={{ fontSize: 40, margin: '12px 0 8px' }}>This page drifted out of orbit.</h1>
        <p style={{ color: '#C9CEDC', margin: '0 0 28px' }}>Head back to mission control and try again.</p>
        <a href="/" style={{ display: 'inline-block', background: '#FF5B1F', color: '#0A0E1A', fontWeight: 700, padding: '14px 24px', borderRadius: 999, textDecoration: 'none' }}>
          Back to TecHacks 5.0
        </a>
      </div>
    </main>
  );
}
