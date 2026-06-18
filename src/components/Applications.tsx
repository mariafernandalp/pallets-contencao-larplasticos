import { motion } from 'motion/react';
import { 
  CarFront, 
  Fuel, 
  Factory, 
  Wheat, 
  Pill, 
  Tractor, 
  Beaker, 
  Recycle, 
  Stethoscope, 
  CupSoda 
} from 'lucide-react';

const applications = [
  { name: "Indústrias Automotivas", icon: CarFront, image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80" },
  { name: "Distribuidoras de Combustíveis", icon: Fuel, image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80" },
  { name: "Metalúrgicas", icon: Factory, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" },
  { name: "Indústria de Alimentos", icon: Wheat, image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80" },
  { name: "Indústria Farmacêutica", icon: Pill, image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80" },
  { name: "Implementos Agrícolas", icon: Tractor, image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80" },
  { name: "Indústria Química", icon: Beaker, image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80" },
  { name: "Linha Ambiental", icon: Recycle, image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80" },
  { name: "Hospitais", icon: Stethoscope, image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80" },
  { name: "Indústria de Bebidas", icon: CupSoda, image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=600&q=80" },
];

export default function Applications() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900">
      {/* Background Image */}
      <img 
        src="/contencaonichos.JPG" 
        alt="Aplicações e Soluções" 
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/80 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight"
          >
            Aplicações e Soluções Setoriais
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-300"
          >
            Nossa linha de contenção atende aos mais exigentes protocolos de segurança em diversos setores da indústria e serviços.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {applications.map((app, idx) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-brand-500/50 transition-all text-center group relative overflow-hidden min-h-[140px] flex flex-col justify-center items-center"
              >
                <img 
                  src={app.image} 
                  alt={app.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent z-0"></div>
                <div className="w-14 h-14 rounded-full bg-slate-800/80 border border-white/10 text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white group-hover:border-transparent transition-all shadow-sm relative z-10">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-medium text-slate-100 text-sm px-1 relative z-10 group-hover:text-white transition-colors">{app.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
