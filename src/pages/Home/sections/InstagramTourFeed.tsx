import { useEffect } from 'react';
import AnimatedSection from '../../../components/common/AnimatedSection';

function InstagramIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function InstagramTourFeed() {
  useEffect(() => {
    const scriptSrc = 'https://elfsightcdn.com/platform.js';
    let script = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    } else if (
      typeof window !== 'undefined' &&
      (window as unknown as { eapps?: { platform?: { collectWidgets?: (el: HTMLElement) => void; revise?: () => void } } }).eapps?.platform?.collectWidgets
    ) {
      (window as unknown as { eapps?: { platform?: { collectWidgets?: (el: HTMLElement) => void; revise?: () => void } } }).eapps?.platform?.collectWidgets?.(document.body);
      (window as unknown as { eapps?: { platform?: { collectWidgets?: (el: HTMLElement) => void; revise?: () => void } } }).eapps?.platform?.revise?.();
    }
  }, []);

  return (
    <section
      className="relative pt-12 sm:pt-16 pb-0 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FAF8F2 0%, #FFFDF8 50%, #FAF6EE 100%)',
      }}
      aria-label="Holiday Star Instagram Feed"
    >
      <div className="relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/60 text-xs font-semibold text-rose-700 mb-3 shadow-xs">
            <InstagramIcon className="w-3.5 h-3.5 text-rose-600" />
            <span>@holidaystartours • Instagram Feed</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#0A2540] tracking-tight leading-tight">
            Follow Us on Instagram
          </h2>

          <p className="text-[#64748B] text-xs sm:text-sm md:text-base leading-relaxed mt-2 font-normal max-w-xl mx-auto">
            Travel inspiration, real tour highlights &amp; unforgettable holiday packages curated from Chennai. Click any post to explore!
          </p>

          {/* Profile follow card */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/holidaystartours"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
              aria-label="Follow @holidaystartours on Instagram"
            >
              <InstagramIcon className="w-4 h-4 text-white" />
              <span>Follow @holidaystartours</span>
            </a>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-xs font-medium text-[#0A2540]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Direct Tour Updates &amp; Stories</span>
            </div>
          </div>
        </div>

        {/* Elfsight Instagram Feed */}
        <AnimatedSection>
          <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 min-h-[400px]">
            {/* Elfsight Instagram Feed | Untitled Instagram Feed */}
            <script src="https://elfsightcdn.com/platform.js" async></script>
            <div
              className="elfsight-app-352c15c0-d7b1-4a9c-8010-9080c466e90b"
              data-elfsight-app-lazy
            ></div>
          </div>
        </AnimatedSection>
      </div>

      {/* ── Road & Animated Travel Car Journey Towards Tropical Island ── */}
      <div className="relative w-full h-32 sm:h-40 mt-4 sm:mt-6 overflow-hidden select-none pointer-events-none">
        {/* Scenic Road Dotted Track */}
        <div className="absolute bottom-5 left-0 right-0 border-b-2 border-dashed border-amber-300/40" />

        {/* Tropical Island Illustration on the Right */}
        <div className="absolute right-0 sm:right-6 md:right-12 bottom-0 z-10 w-44 sm:w-56 md:w-64">
          <svg
            viewBox="0 0 260 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto drop-shadow-md"
          >
            {/* Turquoise Island Shore Waters */}
            <path
              d="M10 142 C50 135, 110 138, 170 144 C210 148, 240 140, 255 130 C258 138, 250 152, 230 156 C170 162, 70 160, 10 152 Z"
              fill="#7DD3FC"
              opacity="0.75"
            />
            <path
              d="M25 146 C80 142, 140 144, 200 150 C230 152, 248 145, 252 140"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.8"
            />

            {/* Golden Sand Island Mound */}
            <path
              d="M15 145 C35 125, 75 110, 130 108 C195 106, 235 118, 250 136 C235 148, 175 155, 120 154 C60 153, 25 150, 15 145 Z"
              fill="#F6D397"
            />
            {/* Sand Shadow / Texture */}
            <path
              d="M20 143 C65 132, 125 128, 185 133 C220 136, 242 142, 248 136 C232 146, 175 152, 120 152 C65 152, 30 148, 20 143 Z"
              fill="#E9BC74"
            />

            {/* Coconut Palm Trees & Tropical Foliage */}
            {/* Left Palm Tree */}
            <path
              d="M75 125 C72 95, 65 65, 55 45"
              stroke="#8B5A2B"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <g transform="translate(55, 45)">
              <path
                d="M0 0 C-15 -18, -35 -20, -50 -10 C-35 5, -20 2, 0 0 Z"
                fill="#2E7D32"
              />
              <path
                d="M0 0 C-10 -25, -5 -40, 10 -45 C15 -30, 5 -15, 0 0 Z"
                fill="#388E3C"
              />
              <path
                d="M0 0 C15 -25, 35 -25, 45 -12 C30 2, 15 2, 0 0 Z"
                fill="#43A047"
              />
              <path
                d="M0 0 C25 -10, 45 -5, 55 12 C35 15, 18 10, 0 0 Z"
                fill="#2E7D32"
              />
              <path
                d="M0 0 C-22 -8, -42 2, -48 18 C-35 12, -18 8, 0 0 Z"
                fill="#1B5E20"
              />
            </g>

            {/* Center Tall Coconut Palm Tree */}
            <path
              d="M140 120 C145 85, 155 50, 168 25"
              stroke="#795548"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <g transform="translate(168, 25)">
              <path
                d="M0 0 C-18 -20, -42 -22, -60 -12 C-45 5, -22 2, 0 0 Z"
                fill="#2E7D32"
              />
              <path
                d="M0 0 C-12 -28, -6 -48, 12 -52 C18 -35, 6 -18, 0 0 Z"
                fill="#43A047"
              />
              <path
                d="M0 0 C18 -28, 42 -28, 55 -15 C35 2, 18 2, 0 0 Z"
                fill="#388E3C"
              />
              <path
                d="M0 0 C28 -12, 52 -6, 65 14 C42 18, 22 12, 0 0 Z"
                fill="#2E7D32"
              />
              <path
                d="M0 0 C-25 -10, -50 2, -56 22 C-42 14, -22 8, 0 0 Z"
                fill="#1B5E20"
              />
              {/* Coconuts */}
              <circle cx="-2" cy="2" r="3" fill="#4E342E" />
              <circle cx="3" cy="3" r="3.2" fill="#5D4037" />
              <circle cx="0" cy="6" r="3" fill="#3E2723" />
            </g>

            {/* Right Slanted Palm Tree */}
            <path
              d="M185 125 C195 95, 210 70, 225 45"
              stroke="#8D6E63"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <g transform="translate(225, 45)">
              <path
                d="M0 0 C-15 -18, -35 -18, -48 -8 C-35 5, -18 2, 0 0 Z"
                fill="#388E3C"
              />
              <path
                d="M0 0 C-8 -25, 2 -38, 18 -40 C18 -25, 8 -12, 0 0 Z"
                fill="#4CAF50"
              />
              <path
                d="M0 0 C15 -22, 35 -20, 42 -8 C28 4, 14 2, 0 0 Z"
                fill="#2E7D32"
              />
              <path
                d="M0 0 C22 -8, 40 -2, 48 12 C30 14, 15 8, 0 0 Z"
                fill="#1B5E20"
              />
            </g>

            {/* Lush Island Shrubs at Base */}
            <path
              d="M45 132 C55 118, 80 115, 95 125 C108 116, 130 115, 145 125 C160 115, 185 116, 198 126 C210 118, 230 120, 238 132 Z"
              fill="#2E7D32"
            />
            <path
              d="M60 134 C70 124, 90 122, 102 130 C115 122, 135 122, 148 130 C160 122, 180 124, 190 132 Z"
              fill="#43A047"
            />
          </svg>
        </div>

        {/* ── Animated Adventure Car driving from one end to another end ── */}
        <div className="animate-car-drive absolute bottom-4 left-0 z-20">
          <div className="animate-car-bounce flex flex-col items-center">
            {/* SVG Illustration of Travel SUV / Wagon with Roof Luggage */}
            <svg
              width="210"
              height="105"
              viewBox="0 0 210 105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-md"
            >
              {/* ── Luggage Packed on Roof Rack ── */}
              {/* Roof Rack Crossbars */}
              <rect x="52" y="28" width="85" height="3" rx="1.5" fill="#475569" />
              <rect x="62" y="29" width="4" height="4" fill="#334155" />
              <rect x="122" y="29" width="4" height="4" fill="#334155" />

              {/* Big Vintage Brown Leather Suitcase */}
              <rect
                x="55"
                y="10"
                width="42"
                height="18"
                rx="2"
                fill="#A0522D"
                stroke="#6B3410"
                strokeWidth="1.2"
              />
              <line x1="68" y1="10" x2="68" y2="28" stroke="#D4A373" strokeWidth="1.5" />
              <line x1="84" y1="10" x2="84" y2="28" stroke="#D4A373" strokeWidth="1.5" />
              <rect x="73" y="7" width="8" height="3" rx="1" fill="#6B3410" />

              {/* Red Travel Case */}
              <rect
                x="98"
                y="13"
                width="36"
                height="15"
                rx="2"
                fill="#E63946"
                stroke="#9B1B26"
                strokeWidth="1.2"
              />
              <line x1="108" y1="13" x2="108" y2="28" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="2 2" />
              <line x1="124" y1="13" x2="124" y2="28" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="2 2" />
              <rect x="112" y="10" width="8" height="3" rx="1" fill="#9B1B26" />

              {/* Green Duffel Bag on top */}
              <ellipse cx="80" cy="8" rx="14" ry="6.5" fill="#2A9D8F" />
              <ellipse cx="80" cy="8" rx="14" ry="6.5" stroke="#1D6A61" strokeWidth="1" />
              <line x1="72" y1="3" x2="88" y2="3" stroke="#E9C46A" strokeWidth="1" />

              {/* ── Car Body (Light Sky Blue / White Adventure Wagon) ── */}
              {/* Upper Cabin */}
              <path
                d="M48 56 L68 32 L142 32 L168 56 Z"
                fill="#E2E8F0"
                stroke="#CBD5E1"
                strokeWidth="1.5"
              />
              {/* Tinted Windows */}
              <path
                d="M54 54 L71 36 L102 36 L102 54 Z"
                fill="#60A5FA"
                opacity="0.8"
              />
              <path
                d="M106 36 L138 36 L160 54 L106 54 Z"
                fill="#38BDF8"
                opacity="0.8"
              />
              {/* Window divider post */}
              <line x1="104" y1="34" x2="104" y2="56" stroke="#94A3B8" strokeWidth="2.5" />

              {/* Main Lower Car Body */}
              <path
                d="M25 56 C25 56, 32 54, 46 54 L170 54 C185 54, 196 62, 198 72 L198 84 C198 86, 195 88, 190 88 L185 88 C185 80, 172 74, 160 74 C148 74, 137 82, 137 88 L72 88 C72 80, 59 74, 47 74 C35 74, 25 82, 25 88 L20 88 C18 88, 16 86, 16 84 L16 66 C16 60, 20 56, 25 56 Z"
                fill="#EAF3FA"
                stroke="#94A3B8"
                strokeWidth="1.5"
              />

              {/* Front Bumper & Grill */}
              <rect x="194" y="74" width="8" height="12" rx="2" fill="#CBD5E1" stroke="#94A3B8" />
              {/* Front Headlight */}
              <path
                d="M194 62 C194 62, 197 64, 197 68 C197 72, 194 74, 194 74 Z"
                fill="#FBBF24"
                stroke="#D97706"
                strokeWidth="1"
              />
              {/* Rear Taillight */}
              <rect x="16" y="60" width="3.5" height="10" rx="1" fill="#EF4444" />

              {/* Car Side Details & Door Line */}
              <line x1="104" y1="56" x2="104" y2="84" stroke="#CBD5E1" strokeWidth="1.2" />
              <line x1="68" y1="56" x2="68" y2="76" stroke="#CBD5E1" strokeWidth="1.2" />
              <line x1="145" y1="56" x2="145" y2="76" stroke="#CBD5E1" strokeWidth="1.2" />
              <rect x="110" y="62" width="6" height="2" rx="1" fill="#64748B" />
              <rect x="74" y="62" width="6" height="2" rx="1" fill="#64748B" />

              {/* ── Spinning Front & Rear Wheels ── */}
              {/* Rear Wheel */}
              <g transform="translate(48, 86)">
                {/* Tire */}
                <circle cx="0" cy="0" r="14" fill="#1E293B" />
                <circle cx="0" cy="0" r="9" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
                {/* Spinning Rim Spokes */}
                <g className="animate-spin-wheel" style={{ transformOrigin: '0px 0px' }}>
                  <line x1="-7" y1="0" x2="7" y2="0" stroke="#475569" strokeWidth="2" />
                  <line x1="0" y1="-7" x2="0" y2="7" stroke="#475569" strokeWidth="2" />
                  <line x1="-5" y1="-5" x2="5" y2="5" stroke="#475569" strokeWidth="1.5" />
                  <line x1="-5" y1="5" x2="5" y2="-5" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="0" cy="0" r="2.5" fill="#0F172A" />
                </g>
              </g>

              {/* Front Wheel */}
              <g transform="translate(162, 86)">
                {/* Tire */}
                <circle cx="0" cy="0" r="14" fill="#1E293B" />
                <circle cx="0" cy="0" r="9" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
                {/* Spinning Rim Spokes */}
                <g className="animate-spin-wheel" style={{ transformOrigin: '0px 0px' }}>
                  <line x1="-7" y1="0" x2="7" y2="0" stroke="#475569" strokeWidth="2" />
                  <line x1="0" y1="-7" x2="0" y2="7" stroke="#475569" strokeWidth="2" />
                  <line x1="-5" y1="-5" x2="5" y2="5" stroke="#475569" strokeWidth="1.5" />
                  <line x1="-5" y1="5" x2="5" y2="-5" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="0" cy="0" r="2.5" fill="#0F172A" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
