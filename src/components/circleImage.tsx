import React from 'react';

interface CircleImageProps {
  src: string;
  alt: string;
  size: number;
}

const CircleImage: React.FC<CircleImageProps> = ({ src, alt, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

export default CircleImage;