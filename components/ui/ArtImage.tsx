import type { Img } from '@/lib/images';
const BASE = '/images/mungale/';

type Props = {
  d: Img; m?: Img; alt: string;
  className?: string;       // on <picture> (give it the size / aspect-ratio)
  imgClassName?: string;    // e.g. "h-full w-full object-cover"
  priority?: boolean;       // true ONLY for the hero
};

export function ArtImage({ d, m, alt, className, imgClassName, priority }: Props) {
  return (
    <picture className={className} style={{ display: 'block' }}>
      {m && <source media="(max-width: 767px)" type="image/avif" srcSet={`${BASE}${m.name}.avif`} />}
      {m && <source media="(max-width: 767px)" type="image/webp" srcSet={`${BASE}${m.name}.webp`} />}
      <source type="image/avif" srcSet={`${BASE}${d.name}.avif`} />
      <source type="image/webp" srcSet={`${BASE}${d.name}.webp`} />
      <img
        src={`${BASE}${d.name}.jpg`} width={d.w} height={d.h} alt={alt}
        className={imgClassName} decoding="async"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </picture>
  );
}
