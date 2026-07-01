import { ImageResponse } from 'next/og';
import { logoDataUri } from '@/lib/logo';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#090d12'
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img width={150} height={150} src={logoDataUri('apple')} alt="" />
      </div>
    ),
    { ...size }
  );
}
