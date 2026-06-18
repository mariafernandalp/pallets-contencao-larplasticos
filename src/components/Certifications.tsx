import { motion } from 'motion/react';

export default function Certifications() {
  return (
    <section className="py-16 bg-white border-t border-slate-100 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-16 sm:gap-32">
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src="https://www.larplasticos.com.br/wp-content/themes/larplasticos/img/senaplas.png" 
            alt="Senaplas" 
            className="h-36 sm:h-40 w-auto object-contain drop-shadow-sm"
          />
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            src="https://www.larplasticos.com.br/wp-content/themes/larplasticos/img/empresa-nacional.png" 
            alt="100% Empresa Nacional" 
            className="h-16 sm:h-20 w-auto object-contain brightness-0 opacity-80 hover:opacity-100 transition-opacity drop-shadow-sm"
          />
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            src="https://i0.wp.com/www.larplasticos.com.br/wp-content/uploads/2017/07/logo.png" 
            alt="Lar Plásticos" 
            className="h-14 sm:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity drop-shadow-sm"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
