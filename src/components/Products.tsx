import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Image as ImageIcon } from 'lucide-react';

const products = [
  {
    name: "Pallet de Contenção IBC 1000L",
    type: "Capacidade para 1 container IBC (4 tambores)",
    badge: "IBC 1000L",
    imgId: "ibc",
    specs: [
      { label: 'Dimensões (CxLxA)', value: '2010 x 1320 x 685 mm' },
      { label: 'Peso', value: '75 Kg' },
      { label: 'Capacidade de Carga', value: '1300 Kg' },
      { label: 'Capacidade de Contenção', value: '1000 Litros' },
      { label: 'Material', value: 'PEMD ou PEAD' },
      { label: 'Cores', value: 'Amarelo, Laranja, Cinza, Gradil: Cor Preta' }
    ]
  },
  {
    name: "Pallet de Contenção 2 Tambores 75L",
    type: "Capacidade para 2 tambores",
    badge: "75 Litros",
    imgId: "2tambores75",
    specs: [
      { label: 'Dimensões (CxLxA)', value: '1340 x 670 x 210 mm' },
      { label: 'Peso', value: '15 Kg' },
      { label: 'Capacidade de Carga', value: '600 Kg' },
      { label: 'Capacidade de Contenção', value: '75 Litros' },
      { label: 'Material', value: 'PEMD ou PEAD' },
      { label: 'Cores', value: 'Amarelo, Laranja, Cinza, Gradil: Cor Preta' }
    ]
  },
  {
    name: "Pallet de Contenção 1 Tambor 100L",
    type: "Capacidade para 1 tambor",
    badge: "100 Litros",
    imgId: "1tambor100",
    specs: [
      { label: 'Dimensões (CxLxA)', value: '865 x 865 x 270 mm' },
      { label: 'Peso', value: '15 Kg' },
      { label: 'Capacidade de Carga', value: '250 Kg' },
      { label: 'Capacidade de Contenção', value: '100 Litros' },
      { label: 'Material', value: 'PEMD ou PEAD' },
      { label: 'Cores', value: 'Amarelo, Laranja, Cinza, Gradil: Cor Preta' }
    ]
  },
  {
    name: "Pallet de Contenção 4 Tambores 150L",
    type: "Baixo Perfil",
    badge: "150 Litros",
    imgId: "4tambores150L",
    specs: [
      { label: 'Dimensões (CxLxA)', value: '1360 (Sem Rampa) / 2030 (Com Rampa) x 1360 x 210 mm' },
      { label: 'Peso', value: '27 Kg (Sem Rampa) / 42 Kg (Com Rampa)' },
      { label: 'Capacidade de Carga', value: '1200 Kg (Pallet) / 300 Kg (Rampa)' },
      { label: 'Capacidade de Contenção', value: '150 Litros' },
      { label: 'Material', value: 'PEMD ou PEAD' },
      { label: 'Cores', value: 'Amarelo, Cinza, Laranja, Gradil: Cor Preta' }
    ]
  },
  {
    name: "Pallet de Contenção 2 Tambores 255L",
    type: "Capacidade para 2 tambores",
    badge: "255 Litros",
    imgId: "2tambores255L",
    specs: [
      { label: 'Capacidade de Contenção', value: '255 Litros' },
      { label: 'Carga Estática', value: '600 Kg' },
      { label: 'Material', value: 'PEMD' },
      { label: 'Cores', value: 'Amarelo e Laranja / Preto' }
    ]
  },
  {
    name: "Pallet de Contenção 4 Tambores 420L",
    type: "Capacidade para 4 tambores",
    badge: "420 Litros",
    imgId: "4tambores420L",
    specs: [
      { label: 'Dimensões (CxLxA)', value: '1300 x 1300 x 450 mm' },
      { label: 'Peso', value: '37 Kg' },
      { label: 'Capacidade de Carga', value: '1200 Kg' },
      { label: 'Capacidade de Contenção', value: '420 Litros' },
      { label: 'Material', value: 'PEMD ou PEAD' },
      { label: 'Cores', value: 'Amarelo, Cinza, Laranja, Gradil: Cor Preta' }
    ]
  }
];

function ProductCard({ product }: { product: any, key?: string | number }) {
  const [activeVariant, setActiveVariant] = useState(0);
  
  const hasVariants = product.variants && product.variants.length > 0;
  const currentSpecs = hasVariants ? product.variants[activeVariant].specs : product.specs;
  const currentTypeName = hasVariants ? product.variants[activeVariant].name : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-300 transition-all group flex flex-col h-full cursor-pointer"
    >
      {/* IMAGE PLACEHOLDER AREA */}
      <div className="w-full aspect-[4/3] bg-slate-100 border-b border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 p-4 text-center relative overflow-hidden">
        {product.imgId === 'ibc' ? (
          <img src="/Pallet-Contencao-IBC-1000-Litros-Larplasticos.jpg" alt={product.name} className="absolute inset-0 w-full h-full object-contain p-2 bg-white" />
        ) : product.imgId === '2tambores75' ? (
          <img src="/Pallet de Contenção para 2 Tambores 75 Litros.jpg" alt={product.name} className="absolute inset-0 w-full h-full object-contain p-2 bg-white" />
        ) : product.imgId === '2tambores255L' ? (
          <img src="/PALLET-DE-CONTENÇÃO-PARA-2-TAMBORES-255-LITROS.jpg" alt={product.name} className="absolute inset-0 w-full h-full object-contain p-2 bg-white" />
        ) : product.imgId === '1tambor100' ? (
          <img src="/Pallet-de-Contenção-para-1-Tambor-100-Litros.jpg" alt={product.name} className="absolute inset-0 w-full h-full object-contain p-2 bg-white" />
        ) : product.imgId === '4tambores150L' ? (
          <img src="/pallet-de-contencao-150-litros-baixo-perfil.png" alt={product.name} className="absolute inset-0 w-full h-full object-contain p-2 bg-white" />
        ) : product.imgId === '4tambores420L' ? (
          <img src="/PALLET-DE-CONTENÇÃO-PARA-4-TAMBORES-420-LITROS.jpg" alt={product.name} className="absolute inset-0 w-full h-full object-contain p-2 bg-white" />
        ) : product.imgId === 'smart' ? (
          <img src="/smartpallets-1.jpg" alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
        ) : product.imgId === 'eco' ? (
          <img src="/EcoPallet.png" alt={product.name} className="absolute inset-0 w-full h-full object-contain p-6 bg-white" />
        ) : product.imgId === 'master' ? (
          <img src="/masterpallets.jpg" alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
        ) : product.imgId === 'flex' ? (
          <img src="/flexpallets.jpg" alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
        ) : product.imgId === 'heavy' ? (
          <img src="/heavypallet.png" alt={product.name} className="absolute inset-0 w-full h-full object-contain p-6 bg-white" />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-slate-200 opacity-50"></div>
            <ImageIcon className="w-10 h-10 mb-3 opacity-60 relative z-10" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 relative z-10">Inserir Foto</span>
            <span className="text-sm font-medium text-slate-600 mt-1 relative z-10">{product.name}</span>
          </>
        )}
      </div>

      {/* PRODUCT INFO */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-display text-xl font-bold text-slate-900">
            {product.name}
          </h3>
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-brand-50 text-brand-700 rounded-md shrink-0 ml-2">
            {product.badge}
          </span>
        </div>
        <p className="text-slate-500 text-sm font-medium">
          {product.type}
        </p>

        {hasVariants && (
          <div className="mt-4 flex flex-wrap gap-2">
            {product.variants.map((v: any, idx: number) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveVariant(idx);
                }}
                className={`py-1.5 px-3 text-[11px] font-semibold rounded-md transition-colors ${activeVariant === idx ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {v.name}
              </button>
            ))}
          </div>
        )}

        {currentSpecs && (
          <div className="mt-4 pt-4 border-t border-slate-100 flex-grow relative">
            <AnimatePresence mode="wait">
              <motion.ul
                key={activeVariant}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="text-xs text-slate-600 space-y-2"
              >
                {currentSpecs.map((spec: any, idx: number) => (
                  <li key={idx} className="flex justify-between items-center">
                    <span className="font-semibold text-slate-700">{spec.label}:</span>
                    <span className="text-right">{spec.value}</span>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Products() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const activeArrowClass = "bg-brand-500 text-white hover:bg-brand-600 hover:scale-105 shadow-brand-500/30 cursor-pointer";
  const inactiveArrowClass = "border border-slate-200 bg-white/90 backdrop-blur-sm text-slate-300 shadow-black/5 cursor-default opacity-50";

  return (
    <section id="produtos" className="py-20 bg-slate-50 border-t border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-2">
              Nossos Modelos
            </h2>
            <p className="text-slate-600">
              Uma solução específica projetada para cada tipo de carga.
            </p>
          </div>
        </div>

        <div className="relative">
          <button 
            onClick={() => scroll(-350)}
            disabled={!canScrollLeft}
            className={`absolute left-0 sm:-left-6 top-[45%] -translate-y-[45%] z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg hidden sm:flex focus:outline-none focus:ring-2 focus:ring-brand-500 ${canScrollLeft ? activeArrowClass : inactiveArrowClass}`}
            aria-label="Rolar para a esquerda"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <div className="relative -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div 
              ref={scrollRef}
              onScroll={checkScroll}
              className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 snap-x snap-mandatory hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {products.map((product, index) => (
                <div key={index} className="w-[85vw] sm:w-[350px] shrink-0 snap-start flex">
                  <div className="w-full h-full">
                    <ProductCard product={product} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={() => scroll(350)}
            disabled={!canScrollRight}
            className={`absolute right-0 sm:-right-6 top-[45%] -translate-y-[45%] z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg hidden sm:flex focus:outline-none focus:ring-2 focus:ring-brand-500 ${canScrollRight ? activeArrowClass : inactiveArrowClass}`}
            aria-label="Rolar para a direita"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
