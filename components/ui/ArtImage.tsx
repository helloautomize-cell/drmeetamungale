import type { Img } from '@/lib/images';
const ROOT = '/images/mungale/';

// Path resolves from the Img's own `base` — generated artwork sits at the
// root, real photographs under real/. Callers never build paths.
const src = (img: Img, ext: 'avif' | 'webp' | 'jpg') =>
  `${ROOT}${img.base ? img.base + '/' : ''}${img.name}.${ext}`;

type Props = {
  d: Img; m?: Img; alt: string;
  className?: string;       // on <picture> (give it the size / aspect-ratio)
  imgClassName?: string;    // e.g. "h-full w-full object-cover"
  priority?: boolean;       // true ONLY for the hero
  sizes?: string;           // for real photos: keeps the browser from over-fetching
};

export function ArtImage({ d, m, alt, className, imgClassName, priority, sizes }: Props) {
  return (
    <picture className={className} style={{ display: 'block' }}>
      {m && <source media="(max-width: 767px)" type="image/avif" srcSet={src(m, 'avif')} sizes={sizes} />}
      {m && <source media="(max-width: 767px)" type="image/webp" srcSet={src(m, 'webp')} sizes={sizes} />}
      <source type="image/avif" srcSet={src(d, 'avif')} sizes={sizes} />
      <source type="image/webp" srcSet={src(d, 'webp')} sizes={sizes} />
      <img
        src={src(d, 'jpg')} width={d.w} height={d.h} alt={alt}
        className={imgClassName} decoding="async"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'low'}
        sizes={sizes}
      />
    </picture>
  );
}
