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
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
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
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
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
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
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
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
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
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
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

const LandingPage = () => {
  return (
    <div className="font-inter bg-gray-50">
      <Header />
      <HeroSection />
      <FloatingCTA />
      
      {/* Chatwoot Widget Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
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
          `
        }}
      />
    </div>
  );
};

export default LandingPage;