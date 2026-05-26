import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Leaf, Users, Sprout, Sun, Droplets, MapPin, ChevronRight, ShieldCheck, Globe } from "lucide-react";
import { renderText } from "./Education";

// Assets
import ruralHeroImg from "../assets/rural1.jpg";
import impactImg from "../assets/social1.png";
import agTechImg from "../assets/ai_agriculture.png";
import r1Img from "../assets/r1.jpeg";
import r2Img from "../assets/rural2.jpg";
import r3Img from "../assets/rural3.jpg";
import r4Img from "../assets/rural4.jpg";
import sustainableAgImg from "../assets/rural_dev_hero_organic_1778653281151.png";
import cleanWaterImg from "../assets/clean water.jpg";
import ruralEducationImg from "../assets/rural education.jpg";
import ruralHeroFallback from "../assets/ai_rural_hero.png";
import ruralProcessImg from "../assets/rural5.png";

// Simple Local Button Component to replace missing shadcn/ui
const Button = ({ children, className = "", size = "md", variant = "primary", ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  const variants = {
    primary: "bg-[#fbbf24] text-black hover:bg-[#fbbf24]/90",
    outline: "border-2 border-white/20 hover:bg-white/10 text-white",
    secondary: "bg-[#064e3b] text-white hover:bg-[#064e3b]/90"
  };
  
  return (
    <button className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// ─── Parallax Hero ────────────────────────────────────────────────────────────
const ParallaxHero = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src={ruralHeroImg}
          alt="Vast green rural field"
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white flex flex-col items-center" style={{ paddingTop: '18vh' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium tracking-wider uppercase mb-6">
            Rural Renewal Initiative
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-sans font-medium leading-tight mb-6 max-w-5xl text-white"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 15}deg) rotateX(${-y * 15}deg) scale(1.02)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)`;
          }}
          style={{
            transition: 'transform 0.1s ease-out',
            cursor: 'default',
            transformOrigin: 'center',
            textShadow: `
              1px 1px 0px #e5e7eb,
              2px 2px 0px #9ca3af,
              3px 3px 0px rgba(0, 0, 0, 0.25),
              4px 4px 0px rgba(0, 0, 0, 0.2),
              5px 5px 15px rgba(0, 0, 0, 0.4)
            `
          }}
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
        >
          Rooted in the Land. <br />Rising Together.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 font-light"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}
        >
          {renderText("Transforming villages and countryside regions through sustainable infrastructure, education, agriculture, and technology.")}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }}>
          <Button size="lg" className="rounded-full" onClick={() => navigate('/involved')}>
            Join to our mission <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

// ─── Animated Counter ─────────────────────────────────────────────────────────
const AnimatedCounter = ({ value, label }) => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.15 } // Triggers when 15% of the counter card is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / 2000, 1);
      const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      setCount(Math.floor(ease * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [hasStarted, value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6">
      <div className="text-5xl md:text-6xl font-sans font-extrabold text-[#e53935] mb-2">{count.toLocaleString()}+</div>
      <div className="text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider">{label}</div>
    </div>
  );
};

const StatsSection = () => (
  <section className="py-24 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200">
        <AnimatedCounter value={450} label="Villages Reached" />
        <AnimatedCounter value={12500} label="Farmers Supported" />
        <AnimatedCounter value={85} label="Schools Built" />
        <AnimatedCounter value={320} label="Wells Dug" />
      </div>
    </div>
  </section>
);

// ─── 3D Tilt Card ─────────────────────────────────────────────────────────────
const TiltCard = ({ title, desc, icon: Icon, image }) => {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setRotateX(((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -10);
    setRotateY(((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 10);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setRotateX(0); setRotateY(0); }}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 30, mass: 40 }}
      className="relative h-[400px] w-full rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 z-0">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-10" style={{ transform: "translateZ(50px)" }}>
        <div className="w-12 h-12 rounded-full bg-[#fbbf24] flex items-center justify-center mb-4 text-black shadow-xl">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-sans text-white mb-2">{title}</h3>
        <p className="text-white/80 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
};

const InitiativesSection = () => (
  <section className="pt-12 pb-16 bg-white">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-5xl mb-20 mx-auto text-center">
        <Interactive3DHeading className="text-5xl md:text-7xl lg:text-8xl font-sans font-extrabold text-[#1a1a1a] mb-8">
          Seeds of <span style={{ color: '#e53935' }}>Change</span>
        </Interactive3DHeading>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Our programs are designed to address the interconnected challenges of rural life. We don't just build infrastructure; we cultivate resilience, empower local leaders, and foster sustainable growth from the ground up.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TiltCard title="Sustainable Agriculture" desc="Equipping farmers with modern, eco-friendly techniques to increase yield while preserving soil health." icon={Sprout} image={sustainableAgImg} />
        <TiltCard title="Clean Water Access" desc="Building solar-powered wells and purification systems to ensure every village has safe drinking water." icon={Droplets} image={cleanWaterImg} />
        <TiltCard title="Rural Education" desc="Constructing schools and providing digital learning tools to bridge the urban-rural education divide." icon={Users} image={ruralEducationImg} />
      </div>
    </div>
  </section>
);

// ─── Success Stories ──────────────────────────────────────────────────────────
const SuccessStories = () => (
  <section className="py-24 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Interactive3DHeading className="text-4xl md:text-5xl font-sans font-extrabold text-[#1a1a1a] mb-6">
          Stories from the <span style={{ color: '#e53935' }}>Field</span>
        </Interactive3DHeading>
        <p className="text-lg text-gray-600">Real impact measured not just in numbers, but in lives transformed.</p>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8 }} 
        className="relative h-[700px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl group"
      >
        <img src={impactImg} alt="Farmer in field" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }}
            className="max-w-4xl"
          >
            <div className="inline-block p-3 rounded-full bg-[#fbbf24] text-black mb-6">
              <Sprout className="w-6 h-6" />
            </div>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-sans text-white mb-6 leading-tight">
              "The yield has doubled, and our children are back in school."
            </h3>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              Before the solar irrigation project, the dry season meant profound hardship for the village of Kaman. Today, year-round farming is possible.
            </p>
            <div className="pt-6 border-t border-white/20 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#fbbf24]/20 border border-[#fbbf24]/30 flex items-center justify-center text-[#fbbf24] font-bold text-xl">
                E
              </div>
              <div>
                <p className="font-medium text-white text-lg">Elena M.</p>
                <p className="text-sm text-white/60 uppercase tracking-widest">Community Leader, Kaman Village</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

// ─── Agricultural Innovation ──────────────────────────────────────────────────
const AgInnovation = () => {
  const pillars = [
    {
      title: "Transparency",
      desc: "Good accounting practices and transparent fund usage build trust.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <circle cx="12" cy="11" r="3" />
          <line x1="15" y1="14" x2="17" y2="16" />
        </svg>
      ),
      color: "#FFD700",
      textColor: "#B8860B",
      glow: "rgba(255, 215, 0, 0.4)"
    },
    {
      title: "Sustainable Change",
      desc: "Leading NGOs focus on long-term solutions like skill development.",
      icon: <Sprout className="w-10 h-10" />,
      color: "#FF9800",
      textColor: "#E65100",
      glow: "rgba(255, 152, 0, 0.4)"
    },
    {
      title: "Community Centric",
      desc: "Effective NGOs work with local communities to identify needs.",
      icon: <Users className="w-10 h-10" />,
      color: "#FF5252",
      textColor: "#D32F2F",
      glow: "rgba(255, 82, 82, 0.4)"
    },
    {
      title: "Measurable Impact",
      desc: "Data-driven outcomes and visible changes distinguish effective NGOs.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <path d="M18 10l-6-6-6 6" />
        </svg>
      ),
      color: "#F06292",
      textColor: "#C2185B",
      glow: "rgba(240, 98, 146, 0.4)"
    }
  ];

  return (
    <section className="pt-10 pb-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#064e3b]/5 rounded-l-full blur-3xl -z-10" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-8">
            <Interactive3DHeading className="text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-[#1a1a1a]">
              Smart Farming, <span style={{ color: '#e53935' }}>Deep Roots</span>
            </Interactive3DHeading>
            <p className="text-xl text-gray-600 leading-relaxed">
              We blend traditional agricultural wisdom with modern innovation — from drone-assisted crop monitoring to drought-resistant seed programs. Our mission is to empower farmers with the tools they need to flourish in a changing climate.
            </p>
            <ul className="space-y-4">
              {['Precision Irrigation Systems', 'Organic Pest Management', 'Soil Health Monitoring', 'Climate-Resilient Crops'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="w-8 h-8 rounded-full bg-[#fbbf24] flex items-center justify-center text-black shadow-md">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1 }}
            style={{
              position: 'relative',
              width: '100%',
              borderRadius: '2.5rem',
              background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
              padding: '3rem 2rem',
              boxShadow: '0 40px 80px rgba(0,0,0,0.08)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
          >
            {pillars.map((pillar, idx) => (
              <div key={idx} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* 1. Circle with Spring Bounce */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20, 
                    delay: idx * 0.7 
                  }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.05,
                    boxShadow: `0 20px 40px ${pillar.glow}`
                  }}
                  style={{
                    width: '85px',
                    height: '85px',
                    borderRadius: '50%',
                    background: pillar.color,
                    border: '1.5px solid #1a1a1a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.3s ease'
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    style={{ color: '#1a1a1a' }}
                  >
                    {pillar.icon}
                  </motion.div>
                </motion.div>

                {/* 2. Downward Arrow */}
                <motion.div
                  initial={{ y: -15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx * 0.7) + 0.3, duration: 0.5 }}
                  style={{ marginBottom: '1rem', color: '#888' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </motion.div>

                {/* 3. Title */}
                <motion.h3
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx * 0.7) + 0.5, duration: 0.5 }}
                  style={{
                    fontSize: '1rem',
                    fontWeight: '800',
                    color: pillar.textColor,
                    marginBottom: '0.8rem',
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: '1.2'
                  }}
                >
                  {pillar.title}
                </motion.h3>

                {/* 4. Description */}
                <motion.p
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx * 0.7) + 0.7, duration: 0.5 }}
                  style={{
                    fontSize: '0.75rem',
                    color: '#555',
                    lineHeight: '1.5',
                    fontFamily: "'Inter', sans-serif",
                    margin: 0,
                    maxWidth: '120px'
                  }}
                >
                  {pillar.desc}
                </motion.p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─── Photo Gallery ────────────────────────────────────────────────────────────
const PhotoGallery = () => {
  const images = [
    r2Img,
    r3Img,
    r4Img,
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
    "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80",
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
  ];
  return (
    <section className="py-24 bg-[#064e3b] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-16 text-center max-w-3xl">
        <Leaf className="w-10 h-10 mx-auto text-[#fbbf24] mb-6" />
        <Interactive3DHeading className="text-4xl md:text-5xl font-sans font-extrabold text-white mb-6">
          The Faces of the <span style={{ color: '#e53935' }}>Countryside</span>
        </Interactive3DHeading>
        <p className="text-white/80 text-lg">Every statistic represents a real human story.</p>
      </div>

      <div className="relative">
        {/* Soft Edge Fade */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#064e3b] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#064e3b] to-transparent z-10" />

        <motion.div
          className="flex gap-6 px-4"
          animate={{
            x: [0, -2500] // Adjust this value based on total width
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ width: 'max-content' }}
        >
          {[...images, ...images, ...images].map((img, i) => (
            <div key={i} className="relative flex-none w-[350px] md:w-[450px] h-[550px] rounded-[2rem] overflow-hidden group shadow-2xl">
              <img
                src={img}
                alt={`Gallery ${i}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ─── Partners Marquee ─────────────────────────────────────────────────────────
const Marquee = () => (
  <div className="py-12 bg-white border-y border-gray-100 overflow-hidden flex relative">
    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
    <motion.div className="flex whitespace-nowrap gap-16 items-center px-8" animate={{ x: [0, -1035] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }}>
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex gap-16 items-center">
          {['Global Agro Fund', 'EarthCare Foundation', 'SolarRural Solutions', 'Village Connect Hub', 'Water For All'].map((name, j) => (
            <React.Fragment key={`${i}-${j}`}>
              <span className="text-2xl font-sans text-gray-400">{name}</span>
              <span className="w-2 h-2 rounded-full bg-[#fbbf24]" />
            </React.Fragment>
          ))}
        </div>
      ))}
    </motion.div>
  </div>
);

// ─── CTA ──────────────────────────────────────────────────────────────────────
const CTASection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-32 relative overflow-hidden bg-gray-900 text-white flex items-center">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=2000&q=20" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
        <Interactive3DHeading className="text-5xl md:text-7xl font-sans font-extrabold text-white mb-8">
          Plant a Seed for <span style={{ color: '#e53935' }}>Tomorrow.</span>
        </Interactive3DHeading>
        <p className="text-xl md:text-2xl text-white/80 mb-12 font-light">Join us in empowering rural communities to build sustainable, prosperous futures.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="rounded-full" onClick={() => navigate('/donate')}>Make a Donation</Button>
        </div>
      </div>
    </section>
  );
};

// ─── Floating 3D Background Shapes ─────────────────────────────────────────────
const Floating3DShapes = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -120, 0],
            x: [0, Math.random() * 80 - 40, 0],
            rotate: [0, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15 + Math.random() * 15,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            width: `${Math.random() * 150 + 80}px`,
            height: `${Math.random() * 150 + 80}px`,
            background: i % 3 === 0 
              ? 'linear-gradient(135deg, rgba(6, 78, 59, 0.08) 0%, rgba(16, 185, 129, 0.04) 100%)' 
              : i % 3 === 1 
                ? 'linear-gradient(135deg, rgba(251, 191, 36, 0.06) 0%, rgba(245, 158, 11, 0.02) 100%)'
                : 'linear-gradient(135deg, rgba(229, 57, 53, 0.04) 0%, rgba(220, 38, 38, 0.01) 100%)',
            borderRadius: i % 2 === 0 ? '40% 60% 70% 30% / 40% 50% 60% 50%' : '50%',
            filter: 'blur(30px)',
            boxShadow: 'inset 0 0 20px rgba(255,255,255,0.2)',
            left: `${Math.random() * 90}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
        />
      ))}
    </div>
  );
};

// ─── Interactive 3D Heading ───────────────────────────────────────────────────
const Interactive3DHeading = ({ children, className = "", style = {} }) => {
  const isWhiteText = className.includes("text-white");
  return (
    <motion.h2
      className={className}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg) scale(1.03)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)`;
      }}
      style={{
        transition: 'transform 0.1s ease-out',
        cursor: 'default',
        transformOrigin: 'center',
        textShadow: isWhiteText
          ? `
            1px 1px 0px rgba(0, 0, 0, 0.25),
            2px 2px 0px rgba(0, 0, 0, 0.2),
            3px 3px 0px rgba(0, 0, 0, 0.15),
            4px 4px 12px rgba(0, 0, 0, 0.35)
          `
          : `
            1px 1px 0px #fff,
            2px 2px 0px rgba(0, 0, 0, 0.15),
            3px 3px 0px rgba(0, 0, 0, 0.12),
            4px 4px 0px rgba(0, 0, 0, 0.08),
            5px 5px 15px rgba(0, 0, 0, 0.15)
          `,
        ...style
      }}
    >
      {children}
    </motion.h2>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function RuralDevelopment() {
  return (
    <div className="min-h-[100dvh] w-full bg-white relative">
      <Floating3DShapes />
      <main className="relative z-10">
        <ParallaxHero />
        <StatsSection />
        <InitiativesSection />
        <AgInnovation />
        <SuccessStories />
        <PhotoGallery />
        <Marquee />
        <CTASection />
      </main>
    </div>
  );
}
