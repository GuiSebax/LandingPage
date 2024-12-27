import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const tipsRef = useRef(null);
  const resourcesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-light-green-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <motion.h1 
          className="text-5xl font-bold text-light-green-900" 
          initial={{ y: -100 }} 
          animate={{ y: 0 }} 
          transition={{ duration: 0.5 }}>
          Controle sua Ansiedade
        </motion.h1>
        <motion.p 
          className="mt-4 text-lg text-light-green-700 max-w-xl" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.3 }}>
          Dicas e técnicas para gerenciar a ansiedade no dia a dia.
        </motion.p>
        <motion.button 
          className="mt-6 bg-light-green-500 text-white px-6 py-2 rounded" 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={() => scrollToSection(tipsRef)}>
          Saiba Mais
        </motion.button>
      </section>

      {/* Dicas e Técnicas Section */}
      <section ref={tipsRef} className="py-16 px-4 text-center">
        <motion.h2 
          className="text-4xl font-bold text-light-green-900" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}>
          Dicas e Técnicas
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            'Respiração Profunda',
            'Exercícios Físicos',
            'Meditação',
            'Manter um Diário',
            'Alimentação Saudável',
            'Limitar Cafeína',
            'Estabelecer Rotina',
            'Técnicas de Relaxamento',
            'Fazer Pausas',
            'Escutar Música Relaxante',
            'Praticar Yoga',
            'Visualização Positiva',
            'Conectar-se com a Natureza',
            'Reduzir o Uso de Redes Sociais',
            'Buscar Ajuda Profissional',
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white shadow-md rounded-lg p-6"
              initial={{ y: 50 }} 
              animate={{ y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }}>
              <h3 className="text-lg font-semibold text-light-green-600">{item}</h3>
              <p className="mt-2 text-light-green-700">
                {item === 'Respiração Profunda' && 'Pratique a respiração profunda para acalmar sua mente e corpo.'}
                {item === 'Exercícios Físicos' && 'A atividade física regular pode ajudar a reduzir os sintomas de ansiedade.'}
                {item === 'Meditação' && 'Dedique alguns minutos por dia para meditar e relaxar.'}
                {item === 'Manter um Diário' && 'Escreva sobre seus sentimentos para ajudar a processá-los.'}
                {item === 'Alimentação Saudável' && 'Uma dieta equilibrada pode melhorar seu humor e energia.'}
                {item === 'Limitar Cafeína' && 'Reduzir o consumo de cafeína pode ajudar a diminuir a ansiedade.'}
                {item === 'Estabelecer Rotina' && 'Criar uma rotina pode proporcionar uma sensação de controle.'}
                {item === 'Técnicas de Relaxamento' && 'Experimente yoga ou alongamentos para aliviar a tensão.'}
                {item === 'Fazer Pausas' && 'Reserve tempo para relaxar e evitar sobrecarga.'}
                {item === 'Escutar Música Relaxante' && 'Música suave pode acalmar a mente e o corpo.'}
                {item === 'Praticar Yoga' && 'Yoga combina movimento e respiração para reduzir a ansiedade.'}
                {item === 'Visualização Positiva' && 'Imagine um lugar calmo e relaxante para aliviar a mente.'}
                {item === 'Conectar-se com a Natureza' && 'Passear ao ar livre pode melhorar seu bem-estar.'}
                {item === 'Reduzir o Uso de Redes Sociais' && 'Menos tempo online pode levar a menos comparações e estresse.'}
                {item === 'Buscar Ajuda Profissional' && 'Não hesite em procurar ajuda de um terapeuta.'}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recursos Section */}
      <section ref={resourcesRef} className="py-16 px-4 bg-light-green-100">
        <motion.h2 
          className="text-4xl font-bold text-light-green-900 text-center" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}>
          Recursos Úteis
        </motion.h2>
        <motion.p 
          className="mt-4 text-lg text-light-green-700 text-center max-w-xl mx-auto" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.3 }}>
          Aqui estão alguns recursos que podem ajudar no controle da ansiedade:
        </motion.p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { name: 'Artigo: Técnicas de Respiração' },
            { name: 'Aplicativo: Headspace' },
            { name: 'Vídeo: Meditação Guiada' },
            { name: 'Livro: A Mente Ansiosa' },
            { name: 'Podcast: The Anxiety Coaches'},
            { name: 'Grupo: Anxiety and Depression Association of America' },
            { name: 'Curso: Mindfulness para Iniciantes' },
            { name: 'Blog: Psicologia Viva' },
            { name: 'Fórum: Reddit - r/Anxiety' },
            { name: 'Artigo: A importância do autocuidado'},
            { name: 'Aplicativo: Calm'},
            { name: 'Vídeo: Técnicas de Relaxamento'},
            { name: 'Livro: O Poder do Agora'},
            { name: 'Podcast: Anxiety Coaches Podcast'},
            { name: 'Grupo: Anxiety Support Group'},
            { name: 'Curso: Gerenciando a Ansiedade'},
          ].map((resource, index) => (
            <motion.div 
              key={index} 
              className="bg-white shadow-md rounded-lg p-4 hover:bg-light-green-200 transition duration-300">
              <a href={resource.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-light-green-600">
                {resource.name}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Depoimentos Section */}
      <section ref={testimonialsRef} className="py-16 px-4">
        <motion.h2 
          className="text-4xl font-bold text-light-green-900 text-center" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}>
          Depoimentos
        </motion.h2>
        <div className="mt-8 space-y-4">
          {[
            '“A meditação mudou a minha vida. Sinto-me muito mais calmo e focado.” - Ana',
            '“As técnicas de respiração que aprendi me ajudam em momentos de crise.” - João',
            '“Fazer exercícios regularmente me faz sentir mais confiante e menos ansioso.” - Maria',
            '“A terapia foi fundamental para eu entender e controlar minha ansiedade.” - Pedro',
          ].map((testimonial, index) => (
            <motion.p 
              key={index} 
              className="text-light-green-700 text-center italic"
              initial={{ y: 50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }}>
              {testimonial}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Chamada para Ação Section */}
      <section ref={ctaRef} className="py-16 px-4 bg-light-green-100 text-center">
        <motion.h2 
          className="text-4xl font-bold text-light-green-900" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}>
          Inscreva-se para Receber Dicas!
        </motion.h2>
        <motion.form 
          className="mt-4" 
          onSubmit={handleSubmit} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.3 }}>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Seu email" 
            required 
            className="border rounded-md px-4 py-2 w-64" />
          <button 
            type="submit" 
            className="ml-2 bg-light-green-500 text-white px-4 py-2 rounded-md">
            Enviar
          </button>
          {submitted && <p className="mt-2 text-green-600">Obrigado por se inscrever!</p>}
        </motion.form>
      </section>

      {/* Footer */}
      <footer className="bg-light-green-900 text-white py-4 text-center">
        <p>© 2024 Guilherme Clemente | <a href="https://github.com/GuiSebax" target="_blank" rel="noopener noreferrer" className="underline">GitHub</a></p>
      </footer>
    </div>
  );
};

export default LandingPage;
