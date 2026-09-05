import AnimatedSection from './AnimatedSection';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <AnimatedSection
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {subtitle && (
        <p
          className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
            light ? 'text-white/60' : 'text-hs-bright-blue'
          }`}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={`font-heading font-bold ${
          light ? 'text-white' : 'text-hs-text-primary'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          } max-w-2xl ${light ? 'text-white/70' : 'text-hs-text-secondary'}`}
        >
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
