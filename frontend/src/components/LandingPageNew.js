import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Bot, 
  Zap, 
  Code2, 
  Clock, 
  Shield, 
  TrendingUp, 
  Users, 
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Quote,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  MessageCircle,
  Menu,
  X,
  Calendar
} from 'lucide-react';
import { useForm } from 'react-hook-form';

// Floating CTA Button Component
const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 font-semibold flex items-center gap-2"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <MessageCircle className="w-5 h-5" />
            Agenda Ahora
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Header/Navigation Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Soluciones', href: '#solutions' },
    { name: 'Beneficios', href: '#benefits' },
    { name: 'Historia', href: '#story' },
    { name: 'Contacto', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xl px-4 py-2 rounded-lg">
              Escala
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Agenda Gratis
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-100 py-4"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-full font-semibold"
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Agenda Gratis
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-700 via-blue-600 to-blue-500"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Hero Image */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1" 
          alt="AI Automation"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Automatiza y escala tu
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              negocio con IA
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Implementamos agentes inteligentes y automatizaciones sin código para que tu PYME 
            ahorre tiempo y venda más.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300 flex items-center gap-2"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="w-5 h-5" />
              Agenda tu diagnóstico gratuito
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Ver Demo
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-white/80 mb-4">Más de 50 empresas confían en nosotros</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">Logo 1</div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">Logo 2</div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">Logo 3</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Solutions Section Component
const SolutionsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const solutions = [
    {
      icon: Bot,
      title: "Agentes con IA",
      description: "Automatiza atención al cliente con chatbots conectados a la lógica del negocio.",
      features: ["Respuestas 24/7", "Integración CRM", "Aprendizaje continuo"],
      image: "https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg"
    },
    {
      icon: Zap,
      title: "Automatizaciones Inteligentes", 
      description: "Conecta herramientas como Gmail, WhatsApp, Google Sheets.",
      features: ["Flujos automáticos", "Sincronización real", "Alertas inteligentes"],
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
    },
    {
      icon: Code2,
      title: "Desarrollo sin Código",
      description: "Diseña flujos internos y tableros sin programar.",
      features: ["Interfaz visual", "Plantillas listas", "Escalabilidad total"],
      image: "https://images.unsplash.com/photo-1495576775051-8af0d10f19b1"
    }
  ];

  return (
    <section id="solutions" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Soluciones</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformamos tu negocio con tecnología de vanguardia, sin complicaciones técnicas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <img src={solution.image} alt="" className="w-full h-full object-cover" />
              </div>

              <div className="relative p-8">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>

                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Más Información
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Benefits Section Component
const BenefitsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const benefits = [
    {
      icon: Clock,
      title: "Implementación rápida",
      description: "Resultados visibles en menos de 2 semanas"
    },
    {
      icon: Code2,
      title: "Sin necesidad de programar",
      description: "Soluciones no-code para máxima flexibilidad"
    },
    {
      icon: Users,
      title: "Soporte personalizado", 
      description: "Acompañamiento completo en cada paso"
    },
    {
      icon: TrendingUp,
      title: "Escalable con tu negocio",
      description: "Crece sin límites tecnológicos"
    }
  ];

  return (
    <section id="benefits" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¿Por qué elegir <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">EscalaIA</span>?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      name: "Ana Ruiz",
      company: "ConectaPYME", 
      image: "https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg",
      text: "Reducimos el tiempo operativo un 60% en 3 semanas. El equipo de EscalaIA nos acompañó en cada paso.",
      rating: 5
    },
    {
      name: "Carlos Mendoza",
      company: "TechSolutions",
      image: "https://images.pexels.com/photos/7277960/pexels-photo-7277960.jpeg", 
      text: "La automatización de nuestros procesos de ventas aumentó nuestros ingresos en un 40%. Increíble ROI.",
      rating: 5
    },
    {
      name: "María González",
      company: "Digital Marketing Pro",
      image: "https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg",
      text: "Implementación súper rápida y soporte excepcional. Ahora podemos enfocarnos en crecer el negocio.",
      rating: 5
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">clientes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              
              <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Story Section Component
const StorySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="story" ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <img
              src="https://images.pexels.com/photos/7277960/pexels-photo-7277960.jpeg"
              alt="Andrés - Founder"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </div>
          
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Historia</span>
            </h2>
            
            <div className="prose prose-lg prose-gray">
              <p className="text-xl leading-relaxed text-gray-700 mb-6">
                Soy Andrés, ex-operaciones de DiDiFood. Fundé EscalaIA para ayudar a pequeñas empresas 
                a aprovechar la IA de forma práctica y sin complicaciones.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600 mb-6">
                Después de años trabajando en operaciones a gran escala, vi de primera mano cómo la 
                automatización puede transformar un negocio. Decidí democratizar estas herramientas 
                para que las PYMEs también puedan competir con las grandes empresas.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600">
                Hoy, más de 50 empresas han transformado sus operaciones con nosotros, 
                ahorrando tiempo y aumentando sus ventas de manera significativa.
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              Conoce más sobre nosotros
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para transformar tu negocio?
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Agenda una demostración gratuita y descubre cómo la IA puede revolucionar tu empresa
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-12 py-4 rounded-full font-bold text-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 flex items-center gap-3 mx-auto"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Calendar className="w-6 h-6" />
            Agendar Demostración
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    // Here you would integrate with FormSubmit.co or your preferred form service
    console.log('Form data:', data);
    alert('¡Gracias! Te contactaremos pronto.');
    reset();
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¿Hablamos?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte a transformar tu negocio. Contáctanos y empecemos juntos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre
                </label>
                <input
                  {...register('nombre', { required: 'Este campo es requerido' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tu nombre completo"
                />
                {errors.nombre && (
                  <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  {...register('email', { 
                    required: 'Este campo es requerido',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido'
                    }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa
                </label>
                <input
                  {...register('empresa', { required: 'Este campo es requerido' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nombre de tu empresa"
                />
                {errors.empresa && (
                  <p className="text-red-500 text-sm mt-1">{errors.empresa.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  {...register('mensaje', { required: 'Este campo es requerido' })}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
                {errors.mensaje && (
                  <p className="text-red-500 text-sm mt-1">{errors.mensaje.message}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <span className="text-gray-700">info@escalaminegocio.com</span>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                  <span className="text-gray-700">México, CDMX</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Síguenos en redes sociales
              </h4>
              
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xl px-4 py-2 rounded-lg mb-4 inline-block">
              Escala
            </div>
            <p className="text-gray-400">
              Transformamos pequeñas empresas con IA y automatización inteligente.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#solutions" className="hover:text-white transition-colors">Soluciones</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Beneficios</a></li>
              <li><a href="#story" className="hover:text-white transition-colors">Historia</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Agentes con IA</li>
              <li>Automatizaciones</li>
              <li>Desarrollo No-Code</li>
              <li>Consultoría</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@escalaminegocio.com</li>
              <li>+1 (555) 123-4567</li>
              <li>México, CDMX</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Escala mi Negocio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const LandingPage = () => {
  useEffect(() => {
    // Chatwoot Widget Script
    const script = document.createElement('script');
    script.innerHTML = `
      (function(d,t) {
        var BASE_URL="https://app.chatwoot.com";
        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=BASE_URL+"/packs/js/sdk.js";
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g,s);
        g.onload=function(){
          window.chatwootSDK.run({
            websiteToken: 'SSTs1ZUx61iwNxxRktRyAhCA',
            baseUrl: BASE_URL
          });
        }
      })(document,"script");
    `;
    document.body.appendChild(script);

    return () => {
      // Cleanup function to remove script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="font-inter bg-gray-50">
      <Header />
      <HeroSection />
      <SolutionsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <StorySection />
      <CTASection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default LandingPage;