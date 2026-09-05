import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Globe, MessageSquare, Users } from 'lucide-react';
import AnimatedSection from '../../../components/common/AnimatedSection';

const features = [
  {
    icon: Calendar,
    title: 'Thoughtfully Planned Itineraries',
    description: 'Know what your holiday looks like before you travel, with clear day-by-day plans for selected packages.',
  },
  {
    icon: Globe,
    title: 'Destination-Focused Expertise',
    description: 'We focus on selected destinations rather than trying to be everything to everyone.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'From your first enquiry to your return journey, our team helps coordinate the details.',
  },
  {
    icon: Users,
    title: 'End-to-End Travel Support',
    description: 'Flights, accommodation, transfers, sightseeing and other arrangements can be coordinated according to your package.',
  },
];

export default function WhyHolidayStar() {
  return (
    <section className="py-20 bg-white border-b border-gray-100" aria-label="Why Holiday Star">
      <div className="container-hs">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold text-hs-blue-600 uppercase tracking-widest block mb-2">
              WHY HOLIDAY STAR
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-hs-navy">
              Your holiday.<br />Our planning.
            </h2>
            <p className="text-hs-text-secondary text-base mt-2">
              We don't believe international travel should feel complicated.
            </p>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-hs-blue-600 hover:text-hs-navy transition-colors shrink-0"
          >
            Learn more about us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-hs-blue-50 border border-hs-blue-100 flex items-center justify-center text-hs-blue-600 mb-5">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-hs-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-hs-text-secondary leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
