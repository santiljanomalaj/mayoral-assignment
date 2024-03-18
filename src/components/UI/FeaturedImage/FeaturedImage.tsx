import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface FeaturedImageProps extends ImageProps {
  src: string;
  alt: string;
}

export default function FeaturedImage({ src, ...rest }: FeaturedImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const fallbackImg = '/images/fallback-image.svg';

  return <Image src={imageSrc} onErrorCapture={() => setImageSrc(fallbackImg)} {...rest} />;
}
