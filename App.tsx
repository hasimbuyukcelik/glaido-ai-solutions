
import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  ShoppingBag, 
  TrendingUp, 
  ShieldCheck, 
  MessageSquare, 
  Globe, 
  ChevronRight, 
  Menu, 
  X,
  ArrowRight,
  Sparkles,
  Zap,
  BarChart3,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Helper Components
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center glow-shadow">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight">GLAIDO<span className="text-blue-500">.</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-400 hover:text-white transition-colors">Hizmetler</a>
          <a href="#solutions" className="text-gray-400 hover:text-white transition-colors">Çözümler</a>
          <a href="#about" className="text-gray-400 hover:text-white transition-colors">Neden Biz?</a>
          <div className="flex items-center gap-4 ml-4">
            <button className="px-5 py-2 text-sm font-medium hover:text-blue-400 transition-colors">Giriş Yap</button>
            <button className="px-6 py-2.5 bg-blue-600 rounded-full text-sm font-bold hover:bg-blue-500 transition-all glow-shadow">
              Ücretsiz Başla
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass md:hidden border-t border-white/10"
          >
            <div className="flex flex-col p-6 gap-6">
              <a href="#services" onClick={() => setIsOpen(false)}>Hizmetler</a>
              <a href="#solutions" onClick={() => setIsOpen(false)}>Çözümler</a>
              <a href="#about" onClick={() => setIsOpen(false)}>Neden Biz?</a>
              <button className="w-full py-3 bg-blue-600 rounded-xl font-bold">Ücretsiz Başla</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-5">
        <h1 className="text-[20vw] font-black tracking-tighter leading-none">ARTIFICIAL</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">Yapay Zeka Devrimi</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            İşletmenizi <br />
            <span className="text-gradient">Yapay Zeka</span> İle <br />
            Yeniden Tanımlayın
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            Glaido, e-ticaret'ten finansa kadar her sektör için özelleştirilmiş, ölçeklenebilir ve güvenli AI çözümleri sunar.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-blue-600 rounded-full font-bold flex items-center gap-2 hover:bg-blue-500 transition-all glow-shadow">
              Hemen Keşfedin <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 glass rounded-full font-bold hover:bg-white/10 transition-all">
              Demo Talebi
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">500+</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">Entegrasyon</span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">%99.9</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">Çalışma Süresi</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="relative hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Main Visual Placeholder */}
            <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full"></div>
            <img 
              src="https://picsum.photos/800/800?grayscale" 
              className="w-[80%] h-[80%] object-cover rounded-3xl mix-blend-screen opacity-60 animate-float"
              alt="AI Visualization"
            />
            {/* Orbital Elements */}
            <div className="absolute top-10 right-10 p-6 glass rounded-2xl animate-float" style={{ animationDelay: '1s' }}>
              <TrendingUp className="text-blue-500 w-8 h-8" />
            </div>
            <div className="absolute bottom-20 left-0 p-6 glass rounded-2xl animate-float" style={{ animationDelay: '2s' }}>
              <ShieldCheck className="text-green-500 w-8 h-8" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      id: 'ecommerce',
      icon: <ShoppingBag className="w-10 h-10" />,
      title: 'E-Ticaret AI',
      description: 'Akıllı fiyatlandırma, kişiselleştirilmiş öneriler ve sepet hatırlatma otomasyonları ile satışlarınızı %40 artırın.',
      tags: ['Dönüşüm', 'Otomasyon']
    },
    {
      id: 'finance',
      icon: <BarChart3 className="w-10 h-10" />,
      title: 'Finansal Analiz',
      description: 'Risk analizi ve bütçe yönetimi süreçlerini AI algoritmalarımızla optimize edin, maliyetlerinizi düşürün.',
      tags: ['Analiz', 'Ölçeklenebilirlik']
    },
    {
      id: 'support',
      icon: <MessageSquare className="w-10 h-10" />,
      title: 'Müşteri Deneyimi',
      description: '7/24 kesintisiz hizmet veren, 40+ dilde destek sunan gelişmiş yapay zeka chatbotlar ile müşteri memnuniyetini katlayın.',
      tags: ['Chatbot', 'Multilingual']
    },
    {
      id: 'marketing',
      icon: <Zap className="w-10 h-10" />,
      title: 'Pazarlama Otomasyonu',
      description: 'Hedef kitle segmentasyonu ve kampanya yönetimi için AI odaklı stratejiler geliştirin.',
      tags: ['Marketing', 'Strategy']
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">Geleceği Bugün <span className="text-blue-500 underline">Deneyimleyin</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Glaido, karmaşık iş süreçlerinizi basitleştiren akıllı sistemler sunar.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -10 }}
              className="p-8 glass rounded-3xl hover:border-blue-500/50 transition-all flex flex-col h-full"
            >
              <div className="text-blue-500 mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
              <div className="flex gap-2 flex-wrap">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase font-bold text-gray-500 px-2 py-1 border border-white/10 rounded-md italic">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureAccordion = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const features = [
    {
      title: "Tek Sayfada Akıllı Ödeme",
      content: "Yapay zeka, kullanıcı davranışını analiz ederek en uygun ödeme yöntemini dinamik olarak ilk sırada sunar.",
      image: "https://picsum.photos/800/600?1"
    },
    {
      title: "Sınırsız Global Altyapı",
      content: "AWS sunucularımızda barınan sistemimiz, trafik artışlarında otomatik olarak ölçeklenir, kesinti yaşatmaz.",
      image: "https://picsum.photos/800/600?2"
    },
    {
      title: "Derin SEO Entegrasyonu",
      content: "Ürün açıklamalarınızı ve meta verilerinizi Google algoritmalarına uyumlu şekilde AI ile saniyeler içinde oluşturun.",
      image: "https://picsum.photos/800/600?3"
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Satışlarınızı Artırırken Arkanıza Yaslanın</h2>
          <div className="space-y-6">
            {features.map((f, i) => (
              <div 
                key={i} 
                className={`p-6 rounded-2xl cursor-pointer transition-all ${activeTab === i ? 'glass border-l-4 border-l-blue-600' : 'hover:bg-white/5'}`}
                onClick={() => setActiveTab(i)}
              >
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                {activeTab === i && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-gray-400 text-sm leading-relaxed"
                  >
                    {f.content}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-blue-600/10 blur-[80px] rounded-full"></div>
          <motion.img 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            src={features[activeTab].image} 
            alt="Feature"
            className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-video"
          />
        </div>
      </div>
    </section>
  );
};

const TrustedBy = () => {
  return (
    <section className="py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <p className="text-center text-gray-500 font-medium mb-12 tracking-widest uppercase text-sm">GÜVENEN MARKALAR</p>
        <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {['Miniso', 'Vitus', 'Kozvit', 'Harley Davidson', 'Mugo', 'Cook'].map(brand => (
            <span key={brand} className="text-3xl font-black italic">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#020202] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <Cpu className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white uppercase">GLAIDO.</span>
          </div>
          <p className="text-gray-500 max-w-sm mb-8">
            Yapay zekanın gücünü iş süreçlerinize entegre ederek verimliliği ve karlılığı artırıyoruz. Geleceği birlikte inşa edelim.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholder */}
            {[Globe, Users, Zap].map((Icon, i) => (
              <div key={i} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-blue-500 transition-colors cursor-pointer">
                <Icon className="w-5 h-5" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Linkler</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Referanslar</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Kariyer</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">İletişim</h4>
          <ul className="space-y-4 text-gray-500 text-sm font-medium">
            <li>info@glaido.ai</li>
            <li>0850 000 00 00</li>
            <li>Levent No:1, İstanbul</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-xs text-gray-600 uppercase tracking-widest">
        <p>© 2025 GLAIDO AI TECHNOLOGY. TÜM HAKLARI SAKLIDIR.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Gizlilik Politikası</a>
          <a href="#" className="hover:text-white">Kullanım Koşulları</a>
        </div>
      </div>
    </footer>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600/5 -skew-y-3"></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">AI Dönüşümünü Hemen Başlatın</h2>
        <p className="text-gray-400 text-xl mb-12">Binlerce işletme Glaido ile verimliliğini artırdı. Siz de bugün ücretsiz deneyin.</p>
        <div className="flex justify-center gap-4">
          <button className="px-10 py-5 bg-white text-black rounded-full font-black text-lg hover:scale-105 transition-all shadow-xl shadow-white/10">
            HESAP OLUŞTUR
          </button>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <FeatureAccordion />
      <CTASection />
      <Footer />
    </div>
  );
}
