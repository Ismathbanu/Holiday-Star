import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  Share2,
  ExternalLink,
  MapPin,
  Film,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import type { InstagramPost } from '../../data/instagramPosts';

function InstagramLogoSvg({ className = 'w-4 h-4' }: { className?: string }) {
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

interface InstagramPostModalProps {
  post: InstagramPost | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export default function InstagramPostModal({
  post,
  isOpen,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: InstagramPostModalProps) {
  // Handle keyboard navigation (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, hasPrev, hasNext, onClose, onPrev, onNext]);

  if (!isOpen || !post) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/80 backdrop-blur-sm transition-all"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Instagram Post Preview"
      >
        {/* Navigation Buttons for Large Screens */}
        {hasPrev && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous Instagram post"
            className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-60 w-11 h-11 items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {hasNext && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next Instagram post"
            className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-60 w-11 h-11 items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[82vh] border border-amber-100/30"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors md:top-4 md:right-4 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Left Side: Media Display */}
          <div className="relative w-full md:w-7/12 bg-neutral-950 flex items-center justify-center overflow-hidden shrink-0 min-h-[260px] sm:min-h-[340px] md:min-h-[480px]">
            <img
              src={post.mediaUrl}
              alt={post.caption.slice(0, 80)}
              className="w-full h-full object-cover max-h-[40vh] md:max-h-full"
            />

            {/* Media Type Badge */}
            <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium">
              {post.mediaType === 'reel' && (
                <>
                  <Film className="w-3.5 h-3.5 text-amber-300" />
                  <span>Reel</span>
                </>
              )}
              {post.mediaType === 'carousel' && (
                <>
                  <Layers className="w-3.5 h-3.5 text-sky-300" />
                  <span>Album</span>
                </>
              )}
              {post.mediaType === 'image' && (
                <>
                  <InstagramLogoSvg className="w-3.5 h-3.5 text-pink-400" />
                  <span>Photo</span>
                </>
              )}
            </div>

            {/* Mobile Navigation Arrows */}
            <div className="md:hidden absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none">
              {hasPrev ? (
                <button
                  type="button"
                  onClick={onPrev}
                  className="pointer-events-auto w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-xs"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              ) : <div />}
              {hasNext && (
                <button
                  type="button"
                  onClick={onNext}
                  className="pointer-events-auto w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-xs"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Right Side: Post Details & Comments */}
          <div className="w-full md:w-5/12 flex flex-col justify-between bg-white text-neutral-800 p-4 sm:p-5 md:p-6 overflow-y-auto">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 pb-3 border-b border-neutral-100">
                {/* Avatar with IG gradient border */}
                <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600">
                  <div className="w-10 h-10 rounded-full bg-white overflow-hidden p-0.5">
                    <img
                      src="/images/hslogo.png"
                      alt="Holiday Star Tours"
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        // Fallback if hslogo fails
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-0 pr-6">
                  <div className="flex items-center gap-1.5">
                    <a
                      href="https://www.instagram.com/holidaystartours"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-sm text-[#0A2540] hover:text-[#008080] truncate transition-colors"
                    >
                      holidaystartours
                    </a>
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 fill-sky-500 text-white" />
                  </div>
                  {post.location && (
                    <div className="flex items-center gap-1 text-xs text-neutral-500 truncate mt-0.5">
                      <MapPin className="w-3 h-3 text-[#008080] shrink-0" />
                      <span className="truncate">{post.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Caption Section */}
              <div className="py-4 space-y-2 text-sm leading-relaxed text-neutral-700 max-h-[180px] sm:max-h-[220px] md:max-h-[240px] overflow-y-auto pr-1">
                <p className="whitespace-pre-line text-xs sm:text-sm">
                  {post.caption}
                </p>
                <div className="pt-1 text-[11px] text-neutral-400 font-medium">
                  {post.timestamp}
                </div>
              </div>
            </div>

            {/* Engagement & Actions Bar */}
            <div className="pt-3 border-t border-neutral-100 mt-auto">
              <div className="flex items-center justify-between mb-3 text-neutral-700">
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-rose-600 hover:text-rose-700 transition-colors"
                  >
                    <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
                    <span>{post.likes.toLocaleString()}</span>
                  </button>

                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-600">
                    <MessageCircle className="w-5 h-5 text-neutral-500" />
                    <span>{post.comments}</span>
                  </div>

                  <a
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Share post"
                    className="text-neutral-500 hover:text-neutral-800 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Direct View on Instagram Button */}
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:opacity-95 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <InstagramLogoSvg className="w-4 h-4 text-white" />
                <span>View on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
