import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl ${alignClasses} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-lime-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="display-md text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg text-gray-400 leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
};
