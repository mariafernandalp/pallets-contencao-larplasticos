import { motion } from 'motion/react';
import { AlertTriangle, TrendingDown, CheckCircle2, Shield } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section id="solucoes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Problem Card (Wood) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-slate-800 bg-slate-900 relative overflow-hidden transition-shadow hover:shadow-xl hover:shadow-red-500/10 cursor-default group"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-105 opacity-60 bg-slate-800"
            />
            {/* Overlay to ensure text readability with black tint */}
            <div className="absolute inset-0 bg-black/70 z-0" />
            
            <div className="relative z-10">
              <div className="w-10 h-10 bg-red-500/20 text-red-400 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm border border-red-500/30">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                O Risco de Vazamentos
              </h3>
              <p className="text-slate-300 mb-4 text-sm font-medium">
                Vazamentos não contidos geram riscos ambientais graves e prejuízos financeiros severos.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Contaminação de solo e água",
                  "Desperdício de substâncias valiosas",
                  "Multas por descumprimento de normas"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 border border-red-500/30">
                      <TrendingDown className="w-3 h-3" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Solution Card (Plastic) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-brand-100 bg-brand-600 relative shrink shadow-xl cursor-default"
          >
            <div className="w-10 h-10 bg-white/20 text-white rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">
              A Solução em Contenção
            </h3>
            <p className="text-brand-50 mb-4 text-sm font-medium">
              Proteção máxima com base rotomoldada para conter qualquer derramamento com eficiência e adequação às normas.
            </p>
            <ul className="space-y-2.5">
              {[
                "Atende normas de segurança ambiental",
                "Reutilização do líquido contido",
                "Fácil higienização e transporte"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-white">
                  <div className="w-5 h-5 rounded-full bg-brand-500/50 text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
