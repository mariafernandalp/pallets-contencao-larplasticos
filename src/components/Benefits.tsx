import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, Leaf, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: ShieldCheck,
    title: "Qualidade de Rotomoldagem",
    description: "Fabricados em Polietileno de Média Densidade (PEMD), alta resistência a agentes químicos e corrosivos."
  },
  {
    icon: Sparkles,
    title: "Segurança e Normas",
    description: "Atende a normas de segurança e responsabilidade ambiental, evitando contaminação do solo e água."
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Conter o líquido derramado permite a reutilização da substância, gerando economia e preservação."
  },
  {
    icon: TrendingUp,
    title: "Praticidade e Logística",
    description: "Leves, com base sólida para paleteiras/empilhadeiras. 100% laváveis e disponíveis em cores vibrantes."
  }
];

export default function Benefits() {
  return (
    <section id="beneficios" className="pb-24 pt-4 bg-slate-50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 hover:border-brand-200 hover:shadow-md transition-all duration-300 group flex flex-col sm:flex-row items-start gap-4"
            >
              <div className="w-10 h-10 shrink-0 bg-slate-50 text-brand-600 rounded-lg flex items-center justify-center border border-slate-100 group-hover:bg-brand-50 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
