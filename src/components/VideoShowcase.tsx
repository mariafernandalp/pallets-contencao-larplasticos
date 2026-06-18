import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const videos = [
  {
    title: "Pallet de Contenção em Ação",
    videoId: "contencao1",
    hasVideoFile: true
  },
  {
    title: "Resistência e Durabilidade",
    videoId: "contencao2",
    hasVideoFile: true
  }
];

export default function VideoShowcase() {
  return (
    <section className="pt-24 pb-12 bg-slate-50 relative z-10" id="videos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Aplicações e Resistência
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Confira como os pallets de contenção facilitam o manuseio seguro no seu dia a dia.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-full aspect-[9/16] bg-slate-200 rounded-2xl overflow-hidden relative shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                {video.hasVideoFile ? (
                  <video 
                    src={`/${video.videoId}.mp4#t=0.001`} 
                    className="w-full h-full object-cover" 
                    controls 
                    playsInline 
                    preload="metadata"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-slate-800/10 group-hover:bg-slate-800/20 transition-colors"></div>
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 text-brand-600 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-md">
                        <Play className="w-6 h-6 ml-1" fill="currentColor" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-600 bg-white/80 px-3 py-1 rounded-full shadow-sm">
                        Espaço para Vídeo
                      </span>
                    </div>
                  </>
                )}
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-800 text-center group-hover:text-brand-600 transition-colors">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
