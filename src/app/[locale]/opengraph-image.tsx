import { ImageResponse } from 'next/og';
import { logoDataUri } from '@/lib/logo';

export const alt = 'Codemage — Full-stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#090d12',
          backgroundImage:
            'linear-gradient(90deg, rgba(38,50,65,0.48) 1px, transparent 1px), linear-gradient(180deg, rgba(38,50,65,0.36) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          color: '#e7eef4',
          fontFamily: 'sans-serif'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            fontSize: 30,
            color: '#f4b860',
            fontWeight: 600
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img width={64} height={64} src={logoDataUri('og')} alt="" />
          Codemage
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 82,
            fontWeight: 700,
            lineHeight: 1.05,
            maxWidth: 980
          }}
        >
          Full-stack Web Developer
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            color: '#8a98a8',
            maxWidth: 900
          }}
        >
          Practical interfaces, maintainable code and a clear path to launch
        </div>

        <div
          style={{
            marginTop: 56,
            fontSize: 28,
            color: '#cbd5e1',
            fontWeight: 500
          }}
        >
          React · Next.js · TypeScript · Node.js · Golang
        </div>
      </div>
    ),
    { ...size }
  );
}
