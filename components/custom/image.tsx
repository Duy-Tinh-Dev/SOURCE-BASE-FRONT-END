import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import { Skeleton } from '../ui/skeleton';
import { cn } from '@/lib/utils';
import fallbackImage from '@/public/fallbacks/default.jpg';

interface IImageLoadingProps {
  src: StaticImageData | string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

const ImageLoading = ({
  src,
  alt,
  className,
  priority,
  sizes,
}: IImageLoadingProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [imgSrc, setImgSrc] = useState<StaticImageData | string>(src);

  const handleLoadImage = () => {
    setIsLoading(false);
  };

  const handleErrorImage = () => {
    setImgSrc(fallbackImage);
  };

  return (
    <div className={cn('overflow-hidden relative', className)}>
      {isLoading && <Skeleton className="h-full absolute inset-0" />}
      <Image
        sizes={sizes}
        fill
        onLoad={handleLoadImage}
        onError={handleErrorImage}
        src={imgSrc}
        alt={alt}
        priority={priority}
        className={cn('object-cover', {
          'opacity-0': isLoading,
        })}
      />
    </div>
  );
};

export default ImageLoading;
