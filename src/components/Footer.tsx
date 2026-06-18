import { MapPin, Mail, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111622] pt-16 pb-8 border-t border-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <div className="flex items-center mb-8">
              <img 
                src="https://i0.wp.com/www.larplasticos.com.br/wp-content/uploads/2017/07/logo.png" 
                alt="Lar Plásticos" 
                className="h-10 w-auto object-contain brightness-0 invert" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400 font-medium">
              Líder em soluções de logística e reciclagem.<br/>Transformamos plásticos em soluções inteligentes para<br/>a sua empresa.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Navegação</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors">Pallets de Plástico</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#solucoes" className="text-slate-400 hover:text-brand-400 transition-colors">Diferenciais</a></li>
              <li><a href="https://www.larplasticos.com.br/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-400 transition-colors">Site Oficial</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-white mb-6">Fale Conosco</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0" />
                <span className="font-bold text-slate-300">São Paulo:</span>
                <span className="text-slate-400">(11) 4416-6868</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0" />
                <span className="font-bold text-slate-300">Rio de Janeiro:</span>
                <span className="text-slate-400">(21) 3956-3885</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0" />
                <span className="font-bold text-slate-300">Nordeste:</span>
                <span className="text-slate-400">(71) 3026-3577</span>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                <a href="mailto:contato@larplasticos.com.br" className="text-slate-400 hover:text-brand-400 transition-colors">contato@larplasticos.com.br</a>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-8">
              <a href="https://www.instagram.com/larplasticos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#1e2638] rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-600 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://br.linkedin.com/company/larplasticos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#1e2638] rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-600 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/user/larplasticos1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#1e2638] rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-600 transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold tracking-widest text-slate-500 uppercase">
          <p>&copy; {new Date().getFullYear()} LAR PLÁSTICOS. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">TERMOS DE PRIVACIDADE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
