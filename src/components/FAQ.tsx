import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "O que é um Pallet de Contenção?",
    answer: "Também conhecido como Dique de Contenção ou Bacia de Contenção, é uma estrutura desenvolvida para reter vazamentos de substâncias líquidas, químicas ou inflamáveis, evitando que atinjam o solo e causem contaminações."
  },
  {
    question: "Quais são as principais aplicações?",
    answer: "São indispensáveis nas indústrias químicas, automotivas, alimentícias, farmacêuticas, agrícolas e para distribuidoras de combustíveis, ou qualquer ambiente que exija manuseio seguro de líquidos e adequação a normas ambientais."
  },
  {
    question: "Do que são fabricados os pallets de contenção?",
    answer: "Eles são fabricados utilizando o robusto processo de rotomoldagem. Utilizamos Polietileno de Média Densidade (PEMD), um material de altíssima resistência a agentes químicos e corrosivos, garantindo durabilidade prolongada."
  },
  {
    question: "Posso movimentar o pallet com empilhadeira?",
    answer: "Sim. A estrutura leve e a base sólida dos nossos pallets garantem estabilidade e facilidade de manuseio com empilhadeiras e paleteiras, otimizando a logística interna com total segurança."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600">
            Tire suas dúvidas sobre o uso e os diferenciais dos diques de contenção de alta durabilidade.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all hover:border-brand-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-display font-semibold text-slate-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-brand-600' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed whitespace-pre-wrap">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
