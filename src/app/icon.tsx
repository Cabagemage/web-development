import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1b5cf5 0%, #327dff 45%, #06b6d4 100%)',
          color: 'white',
          fontSize: 23,
          fontWeight: 800,
          fontFamily: 'sans-serif',
          letterSpacing: '-1px',
          borderRadius: 8,
          boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.35)'
        }}
      >
        C
      </div>
    ),
    { ...size }
  );
}
