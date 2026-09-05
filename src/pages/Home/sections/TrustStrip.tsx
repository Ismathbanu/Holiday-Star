import { Award, Handshake, Tag, Users } from 'lucide-react';
import AnimatedSection from '../../../components/common/AnimatedSection';

const trustItems = [
  { icon: Award, text: '11 Years in Tamil Nadu' },
  { icon: Handshake, text: 'Official Tourism Malaysia Campaign Partner, 2026' },
  { icon: Tag, text: 'Real itineraries, real prices' },
  { icon: Users, text: 'End-to-end travel support' },
];

export default function TrustStrip() {
  return (
    <section className="py-6 bg-white border-y border-gray-100 shadow-sm" aria-label="Trust indicators">
      <div className="container-hs">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {trustItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-hs-blue-50 border border-hs-blue-100 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-hs-blue-600" />
                </div>
                <span className="text-xs md:text-sm font-semibold text-hs-navy leading-snug">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
