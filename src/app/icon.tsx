import { ImageResponse } from 'next/og';
import { logoDataUri } from '@/lib/logo';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      // eslint-disable-next-line @next/next/no-img-element
      <img width={32} height={32} src={logoDataUri('icon')} alt="" />
    ),
    { ...size }
  );
}
