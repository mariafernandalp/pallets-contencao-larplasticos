import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          whileTap={{ scale: 0.95 }}
          href="#contato"
          className="fixed bottom-6 right-6 z-50 group flex items-center justify-center h-14 min-w-[56px] bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-full shadow-2xl shadow-brand-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 overflow-hidden"
        >
          <div className="flex items-center justify-center px-4">
            <MessageCircle className="w-6 h-6 fill-current shrink-0" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 ease-in-out">
              Solicitar Cotação
            </span>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
