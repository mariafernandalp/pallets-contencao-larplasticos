import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Leaf, Package } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-slate-50 overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-brand-50/50 rounded-l-full blur-3xl opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Conformidade ANVISA</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
              A solução definitiva em <span className="text-brand-600">Pallets de Contenção</span> para sua operação.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Projetados para melhorar a segurança e a eficiência, garantem a máxima proteção contra vazamentos, prevenindo acidentes e preservando o meio ambiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contato" 
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-brand-600 hover:bg-brand-500 shadow-lg shadow-brand-500/20 transition-all focus:ring-2 focus:ring-brand-500"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full aspect-[4/3] rounded-3xl flex items-center justify-center overflow-hidden relative shadow-2xl shadow-brand-500/10 group cursor-pointer"
          >
            <img 
              src="/contencaohero.jpg" 
              alt="Pallets de Plástico de Ultra Durabilidade" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute top-6 left-6 sm:top-8 sm:left-8 bg-white/95 backdrop-blur-md shadow-xl rounded-xl p-2.5 flex items-center gap-2.5 border border-white/50 transform transition-transform duration-300 group-hover:-translate-y-1"
            >
              <div className="w-8 h-8 bg-brand-100 flex items-center justify-center rounded-lg text-brand-600">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="pr-1">
                <span className="block text-[8px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Segurança</span>
                <span className="block text-[11px] font-extrabold text-slate-900 leading-none">Anti-Vazamentos</span>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-white/95 backdrop-blur-md shadow-xl rounded-xl p-2.5 flex items-center gap-2.5 border border-white/50 transform transition-transform duration-300 group-hover:-translate-y-1"
            >
              <div className="w-8 h-8 bg-emerald-100 flex items-center justify-center rounded-lg text-emerald-600">
                <Leaf className="w-4 h-4" />
              </div>
              <div className="pr-1">
                <span className="block text-[8px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Sustentável</span>
                <span className="block text-[11px] font-extrabold text-slate-900 leading-none">Preserva o Solo</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
