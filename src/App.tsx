import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChartBarIcon, CurrencyDollarIcon, UserGroupIcon, ShieldCheckIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './App.css'

interface Section {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  ref?: React.RefObject<HTMLElement>;
}

const sections: Section[] = [
  {
    id: 'hero',
    title: 'BBGG Staking Bot',
    subtitle: 'Revolutionizing Cryptocurrency Staking',
    content: (
      <div className="flex flex-col items-center justify-center min-h-[70vh] w-full text-center gap-2 md:gap-8 px-2">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title text-base sm:text-lg md:text-5xl mb-2"
        >
          BBGG Staking Bot
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="section-subtitle text-sm sm:text-base md:text-2xl mb-2"
        >
          Revolutionizing Cryptocurrency Staking
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-secondary max-w-2xl mx-auto mb-2 md:mb-8"
        >
          The Future of Automated Cryptocurrency Staking. <span className="font-bold text-hulyBlue">Secure. Effortless. Multi-chain.</span> <span className="text-hulyPink font-bold">Built for the next generation of investors.</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4"
        >
          <button className="bg-gradient-to-r from-hulyPurple to-hulyBlue text-black px-4 py-2 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-lg shadow hover:from-hulyBlue hover:to-hulyPurple transition-all duration-300 border border-black/10">
            Request Demo
          </button>
          {/* <button className="bg-white/90 text-black px-8 py-4 rounded-full font-bold text-lg border border-hulyPurple/20 hover:bg-hulyGlass transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-hulyBlue/40">
            Learn More
          </button> */}
        </motion.div>
      </div>
    )
  },
  {
    id: 'problem',
    title: 'The Problem',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: 'Complex staking processes',
            description: 'Users struggle with technical complexity and multiple steps',
            icon: '🔧'
          },
          {
            title: 'Multiple wallet management',
            description: 'Managing different wallets across chains is time-consuming',
            icon: '👛'
          },
          {
            title: 'Security vulnerabilities',
            description: 'Private key management poses significant risks',
            icon: '⚠️'
          },
          {
            title: 'Manual reward distribution',
            description: 'Calculating and distributing rewards is error-prone',
            icon: '📊'
          },
          {
            title: 'High technical barriers',
            description: 'Complex setup process deters potential users',
            icon: '🚧'
          },
          {
            title: 'Lack of automation',
            description: 'Manual processes lead to missed opportunities',
            icon: '⚙️'
          }
        ].map((problem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass p-6 rounded-xl shadow hover:bg-hulyGlass transition-all duration-300"
          >
            <div className="text-4xl mb-4">{problem.icon}</div>
            <h3 className="font-bold text-xl mb-2 section-title" style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>{problem.title}</h3>
            <p className="text-secondary">{problem.description}</p>
          </motion.div>
        ))}
      </div>
    )
  },
  {
    id: 'solution',
    title: 'Our Solution',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: 'Multi-Chain Support',
            description: '14 major cryptocurrencies supported with seamless integration',
            icon: '🔗',
            features: [
              'BTC', 'ETH', 'SOL', 'SUI', 'LINK', 'XRP', 'AVAX', 'DOGE', 'ADA', 'APT', 'BNB', 'DOT', 'OP', 'LTC'
            ]
          },
          {
            title: 'Automated Staking',
            description: 'Intelligent staking management with minimum requirements',
            icon: '⚡',
            features: ['Smart allocation', 'Auto-compounding', 'Yield optimization']
          },
          {
            title: 'Secure Wallets',
            description: 'Enterprise-grade security with multi-signature support',
            icon: '🔒',
            features: ['Encrypted storage', 'Cold wallet integration', 'Audit trails']
          },
          {
            title: 'Smart Rewards',
            description: 'Automated distribution system with real-time tracking',
            icon: '💰',
            features: ['Instant calculations', 'Transparent distribution', 'Tax reporting']
          },
          {
            title: 'Admin Controls',
            description: 'Comprehensive management dashboard',
            icon: '👨‍💼',
            features: ['User management', 'System monitoring', 'Maintenance mode']
          },
          {
            title: 'Telegram Bot',
            description: 'User-friendly interface with 24/7 availability',
            icon: '🤖',
            features: ['Instant notifications', 'Quick actions', 'Portfolio tracking']
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass p-2 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow hover:bg-hulyGlass transition-all duration-300 w-full max-w-xs mx-auto"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="font-bold text-xl mb-2 section-title" style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>{feature.title}</h3>
            <p className="text-secondary mb-4">{feature.description}</p>
            {feature.title === 'Multi-Chain Support' ? (
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 sm:gap-2 mt-1 sm:mt-2 w-full overflow-x-auto">
                {feature.features.map((f, i) => (
                  <li key={i} className="px-2 py-1 rounded-full bg-white/80 text-black font-semibold shadow text-center border border-hulyBlue/30 text-sm">
                    {f}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="space-y-2">
                {feature.features.map((f, i) => (
                  <li key={i} className="flex items-center text-sm text-secondary">
                    <span className="w-1.5 h-1.5 bg-hulyBlue rounded-full mr-2"></span>
                    {f}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    )
  },
  {
    id: 'market',
    title: 'Market Opportunity',
    content: (
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { value: '$2.1T', label: 'Total Crypto Market Cap', icon: <ChartBarIcon className="w-8 h-8 text-hulyPurple" /> },
            { value: '$300B', label: 'Staking Market Size', icon: <CurrencyDollarIcon className="w-8 h-8 text-hulyPurple" /> },
            { value: '25%', label: 'CAGR Growth', icon: <ChartBarIcon className="w-8 h-8 text-hulyPurple" /> },
            { value: '50M+', label: 'Active Stakers', icon: <UserGroupIcon className="w-8 h-8 text-hulyPurple" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-xl shadow text-center hover:bg-hulyGlass transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-hulyPurple mb-2">{stat.value}</div>
              <div className="text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="glass p-8 rounded-xl shadow">
          <h3 className="section-title text-2xl mb-6">Market Growth Projection</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { year: '2024', value: '$300B', growth: '25%' },
              { year: '2025', value: '$375B', growth: '25%' },
              { year: '2026', value: '$469B', growth: '25%' }
            ].map((projection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 glass rounded-xl"
              >
                <div className="text-2xl font-bold text-hulyPurple">{projection.year}</div>
                <div className="text-xl font-semibold mt-2 text-black">{projection.value}</div>
                <div className="text-green-600 mt-1">{projection.growth} Growth</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: 'Enterprise Security',
            description: 'Multi-layer security architecture with encryption and audit trails',
            icon: <ShieldCheckIcon className="w-8 h-8 text-hulyPurple" />
          },
          {
            title: 'Compliance Ready',
            description: 'Built-in KYC/AML features and regulatory reporting',
            icon: <ShieldCheckIcon className="w-8 h-8 text-hulyPurple" />
          },
          {
            title: 'Smart Contract Audits',
            description: 'Regular security audits by leading blockchain security firms',
            icon: <ShieldCheckIcon className="w-8 h-8 text-hulyPurple" />
          },
          {
            title: 'Insurance Coverage',
            description: 'Comprehensive insurance for digital assets',
            icon: <ShieldCheckIcon className="w-8 h-8 text-hulyPurple" />
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass p-6 rounded-xl shadow hover:bg-hulyGlass transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              {item.icon}
              <h3 className="font-bold text-xl ml-3 section-title" style={{fontSize: '1.5rem', marginBottom: 0}}>{item.title}</h3>
            </div>
            <p className="text-secondary">{item.description}</p>
          </motion.div>
        ))}
      </div>
    )
  },
  {
    id: 'investment',
    title: 'Investment Opportunity',
    content: (
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass p-8 rounded-xl shadow"
        >
          <h3 className="section-title text-2xl mb-6">Seed Round: $2M</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Development', value: '40%', color: 'bg-hulyPurple' },
              { label: 'Marketing', value: '30%', color: 'bg-hulyBlue' },
              { label: 'Operations', value: '20%', color: 'bg-hulyPink' },
              { label: 'Legal/Compliance', value: '10%', color: 'bg-hulyBlue' }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-secondary">{item.label}</span>
                  <span className="text-hulyPurple font-bold">{item.value}</span>
                </div>
                <div className="h-2 bg-hulyGlass rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.value }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className={`h-full ${item.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass p-8 rounded-xl shadow"
        >
          <h3 className="section-title text-2xl mb-6">Use of Funds</h3>
          <div className="space-y-4">
            {[
              'Expand development team',
              'Launch marketing campaigns',
              'Scale infrastructure',
              'Obtain regulatory licenses',
              'Partnership development',
              'Security audits'
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-hulyBlue rounded-full"></div>
                <span className="text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'contact',
    title: 'Get in Touch',
    content: (
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 rounded-xl text-center"
        >
          {/* <h3 className="section-title text-2xl mb-6">Ready to Invest?</h3> */}
          <p className="text-secondary mb-8">Join us in revolutionizing the cryptocurrency staking industry</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-hulyPurple to-hulyBlue text-black px-8 py-3 rounded-full font-bold hover:from-hulyBlue hover:to-hulyPurple transition-all duration-300 shadow">
              Schedule a Call
            </button>
            {/* <button className="border-2 border-hulyPurple/20 text-black px-8 py-3 rounded-full font-bold hover:bg-hulyGlass transition-all duration-300">
              Download Deck
            </button> */}
          </div>
        </motion.div>
      </div>
    )
  }
];

function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const sectionRefs = sections.map(() => useRef<HTMLElement>(null))
  const touchStartY = useRef<number | null>(null)
  const touchEndY = useRef<number | null>(null)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

  const headerHeight = 100; // px, adjust to your actual header height

  // Direct navigation for header clicks (no smooth scroll)
  const navigateToSection = (index: number) => {
    if (isScrolling) return;
    setCurrentSection(index);
    
    const sectionEl = sectionRefs[index].current;
    if (sectionEl) {
      const rect = sectionEl.getBoundingClientRect();
      const scrollTop = window.scrollY + rect.top - headerHeight;
      
      window.scrollTo({
        top: scrollTop,
        behavior: 'auto' // Changed from 'smooth' to 'auto' for instant navigation
      });
    }
  };

  // Improved scroll handler with better timing and offset handling
  const scrollToSection = (index: number) => {
    if (isScrolling) return;
    setIsScrolling(true);
    setCurrentSection(index);
    
    const sectionEl = sectionRefs[index].current;
    if (sectionEl) {
      const rect = sectionEl.getBoundingClientRect();
      const scrollTop = window.scrollY + rect.top - headerHeight;
      
      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
    }

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => setIsScrolling(false), 1000);
  };

  // Debounced wheel scroll handler
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return;
      
      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = Math.max(0, Math.min(sections.length - 1, currentSection + direction));
      
      if (nextSection !== currentSection) {
        scrollToSection(nextSection);
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentSection, isScrolling]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;
      
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        const nextSection = Math.min(sections.length - 1, currentSection + 1);
        if (nextSection !== currentSection) {
          scrollToSection(nextSection);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        const prevSection = Math.max(0, currentSection - 1);
        if (prevSection !== currentSection) {
          scrollToSection(prevSection);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, isScrolling]);

  // Touch swipe support for mobile
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEndY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (touchStartY.current !== null && touchEndY.current !== null) {
        const deltaY = touchStartY.current - touchEndY.current;
        if (Math.abs(deltaY) > 50 && !isScrolling) {
          if (deltaY > 0 && currentSection < sections.length - 1) {
            scrollToSection(currentSection + 1);
          } else if (deltaY < 0 && currentSection > 0) {
            scrollToSection(currentSection - 1);
          }
        }
      }
      touchStartY.current = null;
      touchEndY.current = null;
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, isScrolling]);

  return (
    <div className="relative min-h-screen w-full font-sans">
      {/* Animated Huly-style Background Blobs */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[60vw] h-[60vw] bg-gradient-to-br from-hulyPurple via-hulyBlue to-hulyPink opacity-30 rounded-full blur-3xl animate-pulse" style={{animationDuration: '12s'}} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-gradient-to-tr from-hulyBlue via-hulyPink to-hulyPurple opacity-20 rounded-full blur-2xl animate-pulse" style={{animationDuration: '16s'}} />
        <div className="absolute top-[30%] right-[-15%] w-[40vw] h-[40vw] bg-gradient-to-br from-hulyPink via-hulyPurple to-hulyBlue opacity-10 rounded-full blur-2xl animate-pulse" style={{animationDuration: '18s'}} />
      </div>

      {/* Logo always in top left, outside nav */}
      <div className="fixed top-4 left-4 z-[60] flex items-center gap-2">
        <img src="/bbgg.jpg" alt="BBGG Logo" className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover border-2 border-black/10 shadow-lg transition-all duration-300" />
        {/* <span className="font-bold text-xl sm:text-2xl text-hulyPurple tracking-tight hidden sm:inline">BBGG</span> */}
      </div>

      {/* Hamburger icon for mobile */}
      <button
        className="fixed top-6 right-4 z-[70] sm:hidden bg-white/80 border border-black/10 rounded-full p-2 shadow"
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Open menu"
      >
        <Bars3Icon className="h-7 w-7 text-hulyPurple" />
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 flex flex-col items-center justify-center gap-8 px-6"
          >
            <button
              className="absolute top-6 right-6 bg-hulyPurple/10 rounded-full p-2"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <XMarkIcon className="h-8 w-8 text-hulyPurple" />
            </button>
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigateToSection(index);
                }}
                className={`text-2xl font-bold px-6 py-3 rounded-full transition-all duration-200 w-full text-center
                  ${currentSection === index
                    ? 'bg-gradient-to-r from-hulyPurple to-hulyBlue text-black shadow-md'
                    : 'text-hulyPurple hover:bg-hulyGlass'}
                `}
              >
                {section.title}
              </button>
            ))}
            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                navigateToSection(sections.length-1);
              }}
              className="bg-gradient-to-r from-hulyBlue to-hulyPurple text-black px-8 py-3 rounded-full font-bold shadow hover:from-hulyPurple hover:to-hulyBlue transition-all duration-200 border border-black/10 text-xl mt-4"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive Premium Glass Navigation Bar */}
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="glass pointer-events-auto mt-6 sm:mt-8 w-[100vw] max-w-none flex-col sm:flex-row items-center justify-center px-2 sm:px-12 py-2 sm:py-4 mx-auto shadow-glass border border-black/10 backdrop-blur-xl rounded-2xl gap-2 sm:gap-0 hidden sm:flex">
          {/* Nav links center, responsive wrap on xs */}
          <div className="flex-1 w-full flex flex-wrap justify-center items-center gap-2 sm:gap-4">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => navigateToSection(index)}
                className={`px-3 sm:px-4 py-2 rounded-full font-bold text-sm sm:text-base transition-all duration-200 mx-1 whitespace-nowrap
                  ${currentSection === index
                    ? 'bg-gradient-to-r from-hulyPurple to-hulyBlue text-black shadow-md'
                    : 'text-black hover:text-hulyPurple hover:bg-hulyGlass'}
                `}
                style={{ letterSpacing: '0.01em' }}
              >
                {section.title}
              </button>
            ))}
          </div>
          {/* CTA right, stack on mobile */}
          <div className="flex items-center gap-2 ml-0 sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto justify-center">
            <a href="#contact" onClick={() => navigateToSection(sections.length-1)}
              className="bg-gradient-to-r from-hulyBlue to-hulyPurple text-black px-5 sm:px-6 py-2 rounded-full font-bold shadow hover:from-hulyPurple hover:to-hulyBlue transition-all duration-200 border border-black/10 text-sm sm:text-base">
              Get Started
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Main Content with top padding for header */}
      <div className="pt-[100px]">
        {/* All Sections including Hero */}
        <main className="relative">
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              ref={sectionRefs[index]}
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: currentSection === index ? 1 : 0,
                y: currentSection === index ? 0 : 50,
              }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ 
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
              }}
              className={`min-h-screen top-10 flex items-center justify-center px-4 py-20 md:py-0 ${currentSection === index ? '' : 'pointer-events-none'}`}
            >
              <motion.div 
                className="max-w-7xl w-full mx-auto"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="glass p-2 sm:p-4 md:p-10 md:mb-8 mb-2 rounded-lg sm:rounded-xl md:rounded-3xl w-full max-w-full"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="section-title text-base sm:text-lg md:text-5xl mb-2"
                  >
                    {section.title}
                  </motion.h2>
                  {section.subtitle && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="section-subtitle text-sm sm:text-base md:text-2xl mb-2"
                    >
                      {section.subtitle}
                    </motion.p>
                  )}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {section.content}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.section>
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
