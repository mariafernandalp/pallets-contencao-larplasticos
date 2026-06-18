import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function MidCTA() {
  return (
    <section className="py-12 bg-brand-600 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-brand-500/50 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-brand-800/20 blur-3xl" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
              Chegou a hora de garantir a segurança da sua operação
            </h2>
            <p className="text-brand-100 text-sm md:text-base">
              Evite multas e acidentes com vazamentos de substâncias. Descubra qual é o Pallet de Contenção ideal para a sua necessidade.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contato"
              className="group inline-flex items-center justify-center px-6 py-3 text-sm font-bold rounded-lg text-brand-700 bg-white hover:bg-slate-50 shadow-lg focus:ring-2 focus:ring-white transition-all whitespace-nowrap"
            >
              Falar com um Especialista
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
