import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChartBarIcon, CurrencyDollarIcon, UserGroupIcon, ShieldCheckIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './App.css'

// TypeScript declaration for global function
declare global {
  interface Window {
    open3CXChat?: () => void;
  }
}

// Function to open 3CX chat modal
const openChatModal = () => {
  // Use the global function from index.html
  if (typeof window !== 'undefined' && window.open3CXChat) {
    console.log('Calling global open3CXChat function...');
    window.open3CXChat();
  } else {
    console.log('Global open3CXChat function not available, falling back to direct approach...');
    // Fallback to direct approach
    const findAndClickChatButton = (attempts = 0) => {
      const chatButton = document.getElementById('wplc-chat-button') as HTMLButtonElement;
      console.log('Attempt', attempts + 1, 'Chat button found:', chatButton);
      
      if (chatButton) {
        console.log('Clicking chat button...');
        chatButton.click();
        return true;
      } else if (attempts < 10) {
        // Retry after 500ms if button not found
        console.log('Chat button not found, retrying in 500ms...');
        setTimeout(() => findAndClickChatButton(attempts + 1), 500);
        return false;
      } else {
        console.log('Chat button not found after 10 attempts');
        return false;
      }
    };
    
    findAndClickChatButton();
  }
};

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
      <div className="flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[70vh] w-full text-center gap-4 sm:gap-6 md:gap-8 px-3 sm:px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-secondary max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 leading-relaxed"
        >
          The Future of Automated Cryptocurrency Staking. <span className="font-bold text-hulyBlue">Secure. Effortless. Multi-chain.</span> <span className="text-hulyPink font-bold">Built for the next generation of investors.</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6"
        >
          {/* <button 
            onClick={openChatModal}
            className="bg-gradient-to-r from-hulyPurple to-hulyBlue text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg md:text-xl shadow-lg hover:shadow-xl hover:from-hulyBlue hover:to-hulyPurple transition-all duration-300 border border-black/10 w-full sm:w-auto"
          >
            Get in Touch
          </button> */}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            className="glass p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl hover:bg-hulyGlass transition-all duration-300 border border-black/5"
          >
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{problem.icon}</div>
            <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 section-title">{problem.title}</h3>
            <p className="text-secondary text-sm sm:text-base leading-relaxed">{problem.description}</p>
          </motion.div>
        ))}
      </div>
    )
  },
  {
    id: 'solution',
    title: 'Our Solution',
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Multi-Chain Support',
            description: '14 major cryptocurrencies supported with seamless integration',
            icon: '🔗',
            features: ['BTC', 'ETH', 'SOL', 'SUI', 'LINK', 'XRP', 'AVAX', 'DOGE', 'ADA', 'APT', 'BNB', 'DOT', 'OP', 'LTC']
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
            title: 'Admin & Bot',
            description: 'Full control via dashboard and our Telegram bot.',
            icon: '👨‍💼🤖',
            features: [
              'User & System Management',
              'Instant Notifications',
              'Portfolio Tracking',
              'Quick Actions via Bot'
            ]
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass p-6 rounded-2xl shadow-lg flex flex-col items-center text-center h-full border border-black/5"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
            <p className="text-secondary text-base mb-6 leading-relaxed flex-grow">{feature.description}</p>
            
            {feature.title === 'Multi-Chain Support' ? (
              <div className="w-full mt-auto">
                <ul className="grid grid-cols-2 gap-2">
                  {feature.features.map((f) => (
                    <li key={f} className="px-2 py-1.5 rounded-lg bg-white/80 text-black font-semibold shadow-sm text-center border border-hulyBlue/30 text-sm">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <ul className="space-y-3 text-left self-start w-full mt-auto">
                {feature.features.map((f, i) => (
                  <li key={i} className="flex items-start text-sm text-secondary">
                    <span className="w-2 h-2 bg-hulyBlue rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>{f}</span>
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
      <div className="space-y-8 sm:space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {[
            { value: '$2.5T', label: 'Total Crypto Market Cap (2024)', icon: <ChartBarIcon className="w-6 h-6 sm:w-8 sm:h-8 text-hulyPurple" /> },
            { value: '$350B', label: 'Total Staked Assets', icon: <CurrencyDollarIcon className="w-6 h-6 sm:w-8 sm:h-8 text-hulyPurple" /> },
            { value: '15%', label: 'CAGR Growth', icon: <ChartBarIcon className="w-6 h-6 sm:w-8 sm:h-8 text-hulyPurple" /> },
            { value: '2.5M+', label: 'Active Stakers', icon: <UserGroupIcon className="w-6 h-6 sm:w-8 sm:h-8 text-hulyPurple" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-4 sm:p-6 rounded-2xl shadow-lg text-center hover:shadow-xl hover:bg-hulyGlass transition-all duration-300 border border-black/5"
            >
              <div className="flex justify-center mb-3 sm:mb-4">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-hulyPurple mb-2">{stat.value}</div>
              <div className="text-secondary text-sm sm:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="glass p-6 sm:p-8 rounded-2xl shadow-lg border border-black/5">
          <h3 className="section-title text-xl sm:text-2xl mb-4 sm:mb-6">Market Growth Projection</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { year: '2024', value: '$350B', growth: '15%' },
              { year: '2025', value: '$402B', growth: '15%' },
              { year: '2026', value: '$462B', growth: '15%' }
            ].map((projection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 sm:p-6 glass rounded-2xl border border-black/5"
              >
                <div className="text-xl sm:text-2xl font-bold text-hulyPurple">{projection.year}</div>
                <div className="text-lg sm:text-xl font-semibold mt-2 text-black">{projection.value}</div>
                <div className="text-green-600 mt-1 text-sm sm:text-base">{projection.growth} Growth</div>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {[
          {
            title: 'Enterprise Security',
            description: 'Multi-layer security architecture with encryption and audit trails',
            icon: <ShieldCheckIcon className="w-6 h-6 sm:w-8 sm:h-8 text-hulyPurple" />
          },
          {
            title: 'Compliance Ready',
            description: 'Built-in KYC/AML features and regulatory reporting',
            icon: <ShieldCheckIcon className="w-6 h-6 sm:w-8 sm:h-8 text-hulyPurple" />
          },
          {
            title: 'Smart Contract Audits',
            description: 'Regular security audits by leading blockchain security firms',
            icon: <ShieldCheckIcon className="w-6 h-6 sm:w-8 sm:h-8 text-hulyPurple" />
          },
          {
            title: 'Insurance Coverage',
            description: 'Comprehensive insurance for digital assets',
            icon: <ShieldCheckIcon className="w-6 h-6 sm:w-8 sm:h-8 text-hulyPurple" />
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl hover:bg-hulyGlass transition-all duration-300 border border-black/5"
          >
            <div className="flex items-center mb-3 sm:mb-4">
              {item.icon}
              <h3 className="font-bold text-lg sm:text-xl ml-3 section-title">{item.title}</h3>
            </div>
            <p className="text-secondary text-sm sm:text-base leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    )
  },
  {
    id: 'investment',
    title: 'Investment Opportunity',
    content: (
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass p-6 sm:p-8 rounded-2xl shadow-lg border border-black/5"
        >
          <h3 className="section-title text-xl sm:text-2xl mb-4 sm:mb-6">Seed Round: $2M</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { label: 'Development', value: '40%', color: 'bg-hulyPurple' },
              { label: 'Marketing', value: '30%', color: 'bg-hulyBlue' },
              { label: 'Operations', value: '20%', color: 'bg-hulyPink' },
              { label: 'Legal/Compliance', value: '10%', color: 'bg-hulyBlue' }
            ].map((item, index) => (
              <div key={index} className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-secondary text-sm sm:text-base">{item.label}</span>
                  <span className="text-hulyPurple font-bold text-sm sm:text-base">{item.value}</span>
                </div>
                <div className="h-2 sm:h-3 bg-hulyGlass rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.value }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className={`h-full ${item.color} rounded-full`}
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
          className="glass p-6 sm:p-8 rounded-2xl shadow-lg border border-black/5"
        >
          <h3 className="section-title text-xl sm:text-2xl mb-4 sm:mb-6">Use of Funds</h3>
          <div className="space-y-3 sm:space-y-4">
            {[
              'Expand development team',
              'Launch marketing campaigns',
              'Scale infrastructure',
              'Obtain regulatory licenses',
              'Partnership development',
              'Security audits'
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-hulyBlue rounded-full flex-shrink-0"></div>
                <span className="text-secondary text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    )
  },
];

function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const sectionRefs = sections.map(() => useRef<HTMLElement>(null))
  const touchStartY = useRef<number | null>(null)
  const touchEndY = useRef<number | null>(null)
  const scrollTimeout = useRef<number | null>(null)

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
    scrollTimeout.current = setTimeout(() => setIsScrolling(false), 1000) as unknown as number;
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
      <div className="fixed top-3 sm:top-4 left-3 sm:left-4 z-[60] flex items-center gap-2">
        <img src="/bbgg.jpg" alt="BBGG Logo" className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 rounded-2xl sm:rounded-full object-cover border-2 border-black/10 shadow-lg transition-all duration-300" />
        {/* <span className="font-bold text-xl sm:text-2xl text-hulyPurple tracking-tight hidden sm:inline">BBGG</span> */}
      </div>

      {/* Hamburger icon for mobile */}
      <button
        className="fixed top-3 sm:top-6 right-3 sm:right-4 z-[70] sm:hidden bg-white/90 border border-black/10 rounded-2xl p-2.5 shadow-lg hover:bg-white/95 transition-all duration-200"
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Open menu"
      >
        <Bars3Icon className="h-6 w-6 text-hulyPurple" />
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center gap-6 px-6"
          >
            <button
              className="absolute top-4 right-4 bg-hulyPurple/10 rounded-2xl p-2.5 hover:bg-hulyPurple/20 transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <XMarkIcon className="h-7 w-7 text-hulyPurple" />
            </button>
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigateToSection(index);
                }}
                className={`text-xl sm:text-2xl font-bold px-6 py-4 rounded-2xl transition-all duration-200 w-full text-center shadow-sm hover:shadow-md
                  ${currentSection === index
                    ? 'bg-gradient-to-r from-hulyPurple to-hulyBlue text-black shadow-lg'
                    : 'text-hulyPurple hover:bg-hulyGlass border border-hulyPurple/20'}
                `}
              >
                {section.title}
              </button>
            ))}
            {/* <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                navigateToSection(sections.length-1);
              }}
              className="bg-gradient-to-r from-hulyBlue to-hulyPurple text-black px-8 py-4 rounded-2xl font-bold shadow-lg hover:from-hulyPurple hover:to-hulyBlue transition-all duration-200 border border-black/10 text-xl mt-4 w-full text-center"
            >
              Get Started
            </a> */}
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
        <div className="glass pointer-events-auto mt-3 sm:mt-4 md:mt-6 lg:mt-8 w-[92vw] sm:w-[95vw] md:w-[100vw] max-w-none flex-col sm:flex-row items-center justify-center px-3 sm:px-4 md:px-6 lg:px-12 py-3 sm:py-3 md:py-4 mx-auto shadow-glass border border-black/10 backdrop-blur-xl rounded-2xl sm:rounded-2xl gap-3 sm:gap-0 hidden sm:flex">
          {/* Nav links center, responsive wrap on xs */}
          <div className="flex-1 w-full flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => navigateToSection(index)}
                className={`px-2.5 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 rounded-xl sm:rounded-full font-bold text-xs sm:text-sm md:text-base transition-all duration-200 mx-0.5 sm:mx-1 whitespace-nowrap shadow-sm hover:shadow-md
                  ${currentSection === index
                    ? 'bg-gradient-to-r from-hulyPurple to-hulyBlue text-black shadow-lg'
                    : 'text-black hover:text-hulyPurple hover:bg-hulyGlass border border-transparent hover:border-hulyPurple/20'}
                `}
                style={{ letterSpacing: '0.01em' }}
              >
                {section.title}
              </button>
            ))}
          </div>
          {/* CTA right, stack on mobile */}
          {/* <div className="flex items-center gap-1.5 sm:gap-2 ml-0 sm:ml-2 md:ml-3 lg:ml-4 mt-1 sm:mt-0 w-full sm:w-auto justify-center">
            <a href="#contact" onClick={() => navigateToSection(sections.length-1)}
              className="bg-gradient-to-r from-hulyBlue to-hulyPurple text-black px-3.5 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 rounded-xl sm:rounded-full font-bold shadow-md hover:shadow-lg hover:from-hulyPurple hover:to-hulyBlue transition-all duration-200 border border-black/10 text-xs sm:text-sm md:text-base">
              Get Started
            </a>
          </div> */}
        </div>
      </motion.nav>

      {/* Main Content with top padding for header */}
      <div className="pt-[80px] sm:pt-[100px]">
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
              className={`w-full min-h-screen flex justify-center items-center px-4 md:px-6 py-20 sm:py-24 ${currentSection === index ? '' : 'pointer-events-none'}`}
            >
              <motion.div 
                className="max-w-7xl w-full mx-auto"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="glass p-4 sm:p-6 md:p-8 lg:p-10 md:mb-8 mb-4 rounded-2xl sm:rounded-3xl w-full max-w-full shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="section-title text-center text-3xl md:text-5xl mb-4 md:mb-8 font-bold"
                  >
                    {section.title}
                  </motion.h2>
                  {section.subtitle && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="section-subtitle text-center text-lg md:text-2xl mb-8 md:mb-12 text-secondary max-w-3xl mx-auto"
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
