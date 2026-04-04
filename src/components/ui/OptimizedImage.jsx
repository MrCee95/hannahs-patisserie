import { useState } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  sizes = '(max-width: 768px) 100vw, 50vw',
  priority = false,
  placeholder = 'blur'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const webpSrc = src.replace(/\.(png|jpe?g)$/i, '.webp');
  const avifSrc = src.replace(/\.(png|jpe?g)$/i, '.avif');

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {!isLoaded && placeholder === 'blur' && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      <picture>
        <source srcSet={avifSrc} type="image/avif" sizes={sizes} />
        <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          decoding="async"
        />
      </picture>

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <i className="fas fa-image text-gray-400 text-3xl" aria-hidden="true" />
          <span className="sr-only">Image failed to load</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;