import { motion } from 'motion/react';
import { ArrowRight, Image as ImageIcon, MapPin, Truck } from 'lucide-react';

export default function FactoryBlock() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-slate-200 aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[600px] bg-slate-200"
          >
            {/* Image */}
            <img 
              src="/fabrica.jpg" 
              alt="Fábrica da Lar Plásticos" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            
            {/* Info Card Overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
              <motion.div 
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="bg-transparent rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 group cursor-default"
              >
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center shrink-0 shadow-inner group-hover:bg-brand-600 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-display font-bold text-white text-lg tracking-tight hover:text-white drop-shadow-md">Parque Fabril Próprio</h4>
                    <span className="relative flex h-2 w-2 ml-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-sm">
                    <span className="text-white/90 font-bold drop-shadow-md">Atibaia, São Paulo</span>
                    <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-white/40"></span>
                    <span className="flex items-center gap-1.5 text-white/80 font-medium drop-shadow-md">
                      <Truck className="w-4 h-4 text-brand-400" />
                      <span className="text-base text-[14px]">🇧🇷</span>
                      Distribuição nacional ágil
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start lg:pl-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Garantia de Fábrica</span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Compre Direto da <br className="hidden sm:block" />
              <span className="text-brand-600">Maior Fábrica</span> do Brasil.
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-lg">
              Sem intermediários. Você negocia com a <strong className="text-slate-900">Lar Plásticos</strong> e garante o melhor custo-benefício, reposição ágil e qualidade certificada.
            </p>

            <div className="flex flex-wrap items-center gap-10 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-0.5 h-12 bg-slate-300 rounded-full"></div>
                <div>
                  <span className="block font-display font-extrabold text-3xl text-slate-900 leading-none mb-1.5">15+</span>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-500">Anos de Liderança</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-0.5 h-12 bg-brand-500 rounded-full"></div>
                <div>
                  <span className="block font-display font-extrabold text-3xl text-slate-900 leading-none mb-1.5">10k</span>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-500">Ton / Mês</span>
                </div>
              </div>
            </div>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contato" 
              className="group inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-full text-white bg-slate-900 hover:bg-brand-600 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-900 hover:-translate-y-0.5 shadow-lg shadow-slate-900/20"
            >
              Falar com Especialista
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
