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
          background: '#070a14',
          backgroundImage:
            'radial-gradient(900px 500px at 20% 0%, rgba(27,92,245,0.35), transparent), radial-gradient(700px 500px at 100% 100%, rgba(6,182,212,0.25), transparent)',
          color: 'white',
          fontFamily: 'sans-serif'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            fontSize: 30,
            color: '#8ec5ff',
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
            letterSpacing: '-0.02em',
            maxWidth: 980
          }}
        >
          Full-stack Web Developer
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            color: '#94a3b8',
            maxWidth: 900
          }}
        >
          I&apos;ll help you reach results
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
