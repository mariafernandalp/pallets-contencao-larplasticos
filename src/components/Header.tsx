import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 border-b border-slate-200 bg-white/95 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          <a href="#" className="flex items-center gap-2">
            <img 
              src="https://i0.wp.com/www.larplasticos.com.br/wp-content/uploads/2017/07/logo.png" 
              alt="Lar Plásticos" 
              className="h-14 w-auto object-contain" 
              referrerPolicy="no-referrer" 
            />
          </a>
          
          <nav className="hidden xl:flex items-center gap-8 text-sm">
            <a href="#solucoes" className="text-slate-600 hover:text-brand-600 transition-colors uppercase tracking-wider font-bold">Diferenciais</a>
            <a href="#produtos" className="text-slate-600 hover:text-brand-600 transition-colors uppercase tracking-wider font-bold">Catálogo</a>
            <a href="#contato" className="text-slate-600 hover:text-brand-600 transition-colors uppercase tracking-wider font-bold">Orçamento</a>
          </nav>
          
          <div className="flex items-center gap-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contato" 
              className="hidden md:inline-flex items-center justify-center px-7 py-3 border border-transparent text-sm font-bold rounded-full text-white bg-brand-500 hover:bg-brand-600 shadow-lg shadow-brand-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 tracking-wide uppercase"
            >
              Solicitar Orçamento
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  );
}
