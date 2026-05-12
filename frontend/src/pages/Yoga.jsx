import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Icosahedron, Octahedron, TorusKnot, PerspectiveCamera } from '@react-three/drei';
import { 
  Leaf, Heart, Sun, Clock, Users, Calendar, 
  ZoomIn, Instagram, Mail, Check, ChevronLeft, ChevronRight, X 
} from 'lucide-react';
import * as THREE from 'three';
import mandalaImg from '../assets/mandala.png';
import lotusImg from '../assets/lotus.png';

// --- THREE.JS COMPONENTS ---

const ParticleSystem = ({ count = 160 }) => {
  const mesh = useRef();
  const light = useRef();
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      particle.mx += (state.mouse.x * 1000 - particle.mx) * 0.01;
      particle.my += (state.mouse.y * 1000 - particle.my) * 0.01;
      
      const x = (xFactor + Math.cos(t / 10) * factor) + (state.mouse.x * 2);
      const y = (yFactor + Math.sin(t / 10) * factor) + (state.mouse.y * 2);
      const z = (zFactor + Math.cos(t / 10) * factor);
      
      const dummy = new THREE.Object3D();
      dummy.position.set(x / 5, y / 5, z / 5);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <sphereGeometry args={[0.05, 32, 32]} />
        <meshPhongMaterial color="#81b29a" />
      </instancedMesh>
    </>
  );
};

const RotatingShapes = () => {
  const group = useRef();
  useFrame((state) => {
    group.current.children.forEach((child, i) => {
      child.rotation.x += 0.005;
      child.rotation.y += 0.005;
      child.position.x += (state.mouse.x * 2 - child.position.x) * 0.02;
      child.position.y += (state.mouse.y * 2 - child.position.y) * 0.02;
    });
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <TorusKnot args={[1, 0.3, 128, 16]} position={[-3, 2, -5]}>
          <meshPhongMaterial color="#e07a5f" wireframe />
        </TorusKnot>
      </Float>
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <Icosahedron args={[1, 0]} position={[4, -2, -6]}>
          <meshPhongMaterial color="#f2cc8f" wireframe />
        </Icosahedron>
      </Float>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Octahedron args={[1, 0]} position={[-4, -3, -4]}>
          <meshPhongMaterial color="#81b29a" wireframe />
        </Octahedron>
      </Float>
    </group>
  );
};

// --- UI COMPONENTS ---

const Card3D = ({ children, className = "" }) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      style={{ transformStyle: 'preserve-3d' }}
      className={`relative group ${className}`}
    >
      {children}
    </motion.div>
  );
};

// --- MAIN PAGE COMPONENT ---

const Yoga = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  // Smooth cursor follow (lerp)
  useEffect(() => {
    const handleMouseMove = (e) => setTargetPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    
    let raf;
    const update = () => {
      setCursorPos(prev => ({
        x: prev.x + (targetPos.x - prev.x) * 0.12,
        y: prev.y + (targetPos.y - prev.y) * 0.12
      }));
      raf = requestAnimationFrame(update);
    };
    update();
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, [targetPos]);

  // Section visibility (IntersectionObserver)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Parallax values
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 200]);
  const aboutImgY = useTransform(scrollYProgress, [0.1, 0.4], [0, -100]);

  const testimonials = [
    { name: "Sarah J.", role: "Advanced Practitioner", text: "Finding this studio was a turning point in my life. The teachers are incredibly knowledgeable and the atmosphere is pure peace.", avatar: "https://i.pravatar.cc/150?u=sarah" },
    { name: "Michael R.", role: "Beginner", text: "I was nervous to start, but the inclusive environment made me feel right at home. My flexibility and stress levels have improved drastically.", avatar: "https://i.pravatar.cc/150?u=michael" },
    { name: "Elena K.", role: "Yoga Teacher", text: "Even as an instructor, I find deep value in their classes. The focus on tradition mixed with modern wellness is perfectly balanced.", avatar: "https://i.pravatar.cc/150?u=elena" }
  ];

  // Testimonials Auto-rotate (6s)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const headlineItems = ["BREATHE.", "MOVE.", "TRANSFORM."];
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlineItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-ivory font-body text-forest overflow-x-hidden selection:bg-sage/30">
      {/* Cursor Glow */}
      <div 
        className="cursor-glow hidden lg:block"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      {/* 2. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Parallax Video/Background */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <video 
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover scale-110"
            src="https://assets.mixkit.co/videos/preview/mixkit-woman-practicing-yoga-outdoors-4444-large.mp4"
          />
          <div className="absolute inset-0 bg-forest/40 backdrop-blur-[2px]" />
        </motion.div>

        {/* Three.js Layer */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <ParticleSystem />
            <RotatingShapes />
          </Canvas>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl">
          <div className="overflow-hidden h-24 md:h-32 mb-6">
            <AnimatePresence mode="wait">
              <motion.h1
                key={headlineIndex}
                initial={{ rotateX: -90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                exit={{ rotateX: 90, opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-6xl md:text-9xl font-bold text-ivory tracking-tighter"
              >
                {headlineItems[headlineIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-2xl text-amber-gold font-light mb-12 tracking-wide uppercase"
          >
            Reconnect with your inner self through mindful movement.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col md:row gap-6 justify-center items-center"
          >
            <button className="bg-terracotta hover:bg-terracotta/90 text-ivory px-10 py-4 rounded-full font-bold transition-all hover:-translate-y-1 shadow-lg hover:shadow-terracotta/40 active:scale-95 uppercase tracking-widest text-sm">
              Start Your Journey
            </button>
            <button className="border border-ivory/30 hover:bg-ivory/10 text-ivory px-10 py-4 rounded-full font-bold transition-all hover:-translate-y-1 backdrop-blur-sm active:scale-95 uppercase tracking-widest text-sm">
              Explore Classes
            </button>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-forest/80 backdrop-blur-md border-t border-ivory/10 py-8 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-around items-center gap-8">
            {[
              { label: "12+ Years", sub: "Teaching Experience" },
              { label: "2400+", sub: "Successful Students" },
              { label: "38", sub: "Weekly Classes" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-3xl md:text-4xl font-display font-bold text-ivory group-hover:text-amber-gold transition-colors">{stat.label}</div>
                <div className="text-xs md:text-sm text-sage uppercase tracking-widest font-bold mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Icons */}
        <motion.div animate={{ y: [0, -30, 0], rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-1/4 left-10 opacity-30 hidden lg:block">
          <img src={mandalaImg} alt="Mandala" className="w-40 h-40 object-contain" />
        </motion.div>
        <motion.div animate={{ y: [0, 30, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-1/3 right-10 opacity-30 hidden lg:block">
          <img src={lotusImg} alt="Lotus" className="w-32 h-32 object-contain" />
        </motion.div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div style={{ y: aboutImgY }} className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" alt="Yoga" className="w-full h-[600px] object-cover" />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-gold rounded-2xl -z-0 opacity-20 rotate-12" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -left-10 w-40 h-40 border border-sage/30 rounded-full flex items-center justify-center -z-10"
            >
              <div className="w-4/5 h-4/5 border border-terracotta/20 rounded-full" />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ivory p-6 rounded-2xl shadow-xl z-20 text-center border border-forest/5">
               <span className="block text-4xl font-display font-bold text-forest">12+</span>
               <span className="text-[10px] uppercase font-bold tracking-widest text-terracotta">Years of Wisdom</span>
            </div>
          </div>

          <div className="reveal-on-scroll">
            <h4 className="text-sage font-bold uppercase tracking-[0.3em] text-sm mb-6">About Our Sanctuary</h4>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-8">Yoga as a way of living.</h2>
            <p className="text-lg text-forest/70 leading-relaxed mb-8">
              At BK Yoga Sanctuary, we believe that yoga is far more than physical exercise. It is a profound journey of self-discovery, a discipline that unifies the mind, body, and spirit.
            </p>
            <p className="text-lg text-forest/70 leading-relaxed mb-12">
              Our mission is to provide a sacred space where individuals from all walks of life can find their path to health, happiness, and inner harmony through traditional practices adapted for the modern world.
            </p>

            <div className="space-y-8 mb-12">
              {[
                { icon: <Leaf className="text-sage" />, title: "Rooted in Tradition", desc: "Authentic teachings passed down through lineages of master yogis." },
                { icon: <Heart className="text-terracotta" />, title: "Radically Inclusive", desc: "A welcoming space for every body, every age, and every background." },
                { icon: <Sun className="text-amber-gold" />, title: "Modern Wellness", desc: "Science-backed approaches to mental health and physical vitality." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-ivory border border-forest/10 rounded-2xl flex items-center justify-center shadow-md group-hover:bg-forest group-hover:text-ivory transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-xl font-display font-bold mb-1">{item.title}</h5>
                    <p className="text-sm text-forest/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="border-b-2 border-terracotta text-terracotta font-bold text-lg pb-1 hover:text-forest hover:border-forest transition-all">
              Discover Our Story
            </button>
          </div>
        </div>
      </section>

      {/* 4. CLASSES SECTION */}
      <section className="py-24 bg-forest text-ivory relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 border border-ivory/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] border border-ivory/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 reveal-on-scroll">
            <h4 className="text-amber-gold font-bold uppercase tracking-[0.3em] text-sm mb-4">Practice with Us</h4>
            <h2 className="font-display text-6xl md:text-7xl font-bold mb-6">Our Mindful Offerings</h2>
            <p className="max-w-2xl mx-auto text-ivory/60 text-lg">
              Choose from a variety of disciplines designed to meet you exactly where you are on your path today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Vinyasa Flow", icon: "✨", color: "bg-sage", desc: "Dynamic movement synchronized with breath to create heat and flow.", time: "60m", cap: "20" },
              { title: "Yin & Restore", icon: "🌙", color: "bg-terracotta", desc: "Slow-paced poses held for longer to target deep connective tissues.", time: "75m", cap: "15" },
              { title: "Ashtanga Primary", icon: "🔥", color: "bg-amber-gold", desc: "A disciplined, structured series of poses for strength and focus.", time: "90m", cap: "12" },
              { title: "Prenatal Yoga", icon: "🤱", color: "bg-sage", desc: "Supporting mothers-to-be with gentle movement and breathwork.", time: "60m", cap: "10" },
              { title: "Breathwork & Meditation", icon: "💨", color: "bg-terracotta", desc: "Mastering the life force to calm the mind and energize the soul.", time: "45m", cap: "25" },
              { title: "Power Yoga", icon: "⚡", color: "bg-amber-gold", desc: "A fitness-based approach to vinyasa that builds serious strength.", time: "60m", cap: "18" }
            ].map((cls, i) => (
              <Card3D key={i} className="h-full">
                <div className="bg-ivory/5 backdrop-blur-lg border border-ivory/10 p-10 rounded-[40px] h-full flex flex-direction-column transition-all hover:border-amber-gold/30">
                  <div className="flex justify-between items-start mb-10">
                    <div className={`${cls.color} text-ivory p-4 rounded-2xl text-3xl shadow-xl transform group-hover:scale-110 transition-transform duration-500`}>
                      {cls.icon}
                    </div>
                    <div className="bg-ivory/10 px-4 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest text-amber-gold border border-amber-gold/20">
                      Yoga
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-display font-bold mb-4 transform group-hover:translate-z-20 group-hover:translate-x-2 transition-all duration-500">{cls.title}</h3>
                  <p className="text-ivory/60 mb-8 line-clamp-3 flex-grow group-hover:translate-z-10 transition-all duration-500">{cls.desc}</p>
                  
                  <div className="flex items-center gap-6 mb-8 text-sm text-ivory/80 font-bold uppercase tracking-wider group-hover:translate-z-10 transition-all duration-500">
                    <span className="flex items-center gap-2"><Clock size={16} className="text-sage" /> {cls.time}</span>
                    <span className="flex items-center gap-2"><Users size={16} className="text-terracotta" /> {cls.cap} Max</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {["Mon", "Wed", "Fri"].map(d => (
                      <span key={d} className="bg-forest border border-ivory/10 px-3 py-1 rounded-md text-[10px] text-ivory/50">{d} @ 08:00</span>
                    ))}
                  </div>

                  <button className="w-full py-4 bg-ivory text-forest font-bold rounded-2xl hover:bg-amber-gold transition-colors active:scale-95">
                    Book This Class
                  </button>
                </div>
                {/* Decorative wireframe on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none">
                  <svg width="60" height="60" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="animate-spin-slow" />
                  </svg>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GALLERY SECTION */}
      <section className="py-24 bg-forest relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16 reveal-on-scroll">
            <div>
              <h4 className="text-sage font-bold uppercase tracking-[0.3em] text-sm mb-4">Visual Journey</h4>
              <h2 className="font-display text-6xl font-bold text-ivory">Inside Our Sanctuary</h2>
            </div>
            <button className="text-amber-gold font-bold hover:text-ivory transition-colors">View All Gallery</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
            {[
              { src: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80", col: "md:col-span-2", row: "row-span-2" },
              { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80", col: "", row: "" },
              { src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80", col: "", row: "row-span-2" },
              { src: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&q=80", col: "", row: "" },
              { src: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?auto=format&fit=crop&q=80", col: "md:col-span-2", row: "" },
              { src: "https://images.unsplash.com/photo-1593164842264-854604db2260?auto=format&fit=crop&q=80", col: "", row: "" },
              { src: "https://images.unsplash.com/photo-1518611012118-29600155e85f?auto=format&fit=crop&q=80", col: "md:col-span-2", row: "" }
            ].map((img, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 0.98 }}
                onClick={() => setSelectedImg(img.src)}
                className={`relative overflow-hidden rounded-3xl cursor-zoom-in group ${img.col} ${img.row}`}
              >
                <img src={img.src} alt="Gallery" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-forest/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-ivory/20 backdrop-blur-md p-4 rounded-full text-ivory">
                    <ZoomIn size={32} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-forest/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
              onClick={() => setSelectedImg(null)}
            >
              <button className="absolute top-10 right-10 text-ivory bg-ivory/10 p-4 rounded-full hover:bg-ivory/20 transition-all">
                <X size={32} />
              </button>
              <motion.img 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                src={selectedImg} 
                className="max-w-full max-h-full rounded-3xl shadow-2xl" 
                onClick={e => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 6. INSTRUCTORS SECTION */}
      <section className="py-24 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 reveal-on-scroll">
            <h4 className="text-terracotta font-bold uppercase tracking-[0.3em] text-sm mb-4">Master Guides</h4>
            <h2 className="font-display text-6xl md:text-7xl font-bold text-forest mb-6">Embodying the Practice</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Arjun Sharma", role: "Vinyasa Lead", bio: "With 15 years in Mysore and Rishikesh, Arjun blends rigorous physical discipline with deep spiritual philosophy.", tags: ["Hatha", "Vinyasa"], img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=600" },
              { name: "Priya Das", role: "Holistic Wellness", bio: "Priya focuses on the healing aspects of yoga, specializing in pranayama and restorative practices for modern life.", tags: ["Yin", "Meditation"], img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600" },
              { name: "Marcus Thorne", role: "Power Specialist", bio: "Marcus brings an athletic background to the mat, challenging students to find strength they never knew they had.", tags: ["Power", "Strength"], img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" }
            ].map((ins, i) => (
              <div key={i} className="perspective-1000 h-[500px] group cursor-pointer">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden bg-white rounded-[40px] shadow-xl overflow-hidden flex flex-col border border-forest/5">
                    <img src={ins.img} alt={ins.name} className="w-full h-3/4 object-cover" />
                    <div className="p-8">
                       <div className="flex gap-2 mb-3">
                         {ins.tags.map(t => <span key={t} className="text-[10px] uppercase tracking-widest font-bold text-sage">{t}</span>)}
                       </div>
                       <h3 className="text-3xl font-display font-bold text-forest">{ins.name}</h3>
                       <p className="text-sm text-forest/50 font-bold uppercase tracking-widest">{ins.role}</p>
                    </div>
                    {/* Decorative shape */}
                    <div className="absolute top-4 right-4 opacity-10">
                       <Sun size={40} className="animate-spin-slow" />
                    </div>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-forest text-ivory rounded-[40px] shadow-2xl p-12 flex flex-col justify-center items-center text-center overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                       <svg width="100%" height="100%" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="animate-spin-slow" />
                       </svg>
                    </div>
                    <h3 className="text-3xl font-display font-bold mb-6 text-amber-gold">{ins.name}</h3>
                    <p className="text-lg leading-relaxed mb-8 font-light italic">"{ins.bio}"</p>
                    <div className="flex flex-wrap gap-2 justify-center mb-10">
                       {ins.tags.map(t => <span key={t} className="bg-ivory/10 px-4 py-1 rounded-full text-xs font-bold">{t}</span>)}
                    </div>
                    <div className="flex gap-6">
                       <button className="p-3 bg-ivory/10 rounded-full hover:bg-terracotta transition-all"><Instagram size={20} /></button>
                       <button className="p-3 bg-ivory/10 rounded-full hover:bg-terracotta transition-all"><Mail size={20} /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section className="py-24 bg-sage/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative flex justify-center lg:justify-start">
            <div className="grid grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div 
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-20 h-20 md:w-28 md:h-28 rounded-full border-4 cursor-pointer transition-all duration-500 overflow-hidden ${activeTestimonial === i ? 'border-terracotta scale-110 shadow-xl' : 'border-transparent opacity-40 hover:opacity-100 scale-90'}`}
                >
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            {/* Animated Ring */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-10">
               <div className="w-[400px] h-[400px] border-4 border-dashed border-forest rounded-full animate-spin-slow" />
            </div>
          </div>

          <div className="relative reveal-on-scroll">
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => <Sun key={i} size={18} fill="#e07a5f" className="text-terracotta" />)}
            </div>

            <div className="min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8 italic text-forest">
                    "{testimonials[activeTestimonial].text}"
                  </h3>
                  <div>
                    <h5 className="text-2xl font-display font-bold text-forest">{testimonials[activeTestimonial].name}</h5>
                    <p className="text-sage font-bold uppercase tracking-widest text-sm">{testimonials[activeTestimonial].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex gap-4 mt-12">
              <button 
                onClick={() => setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-4 bg-white rounded-full text-forest shadow-md hover:bg-forest hover:text-white transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => setActiveTestimonial(prev => (prev + 1) % testimonials.length)}
                className="p-4 bg-white rounded-full text-forest shadow-md hover:bg-forest hover:text-white transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING SECTION */}
      <section className="py-24 px-6 md:px-12 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <h4 className="text-sage font-bold uppercase tracking-[0.3em] text-sm mb-4">Invest in Yourself</h4>
            <h2 className="font-display text-6xl md:text-7xl font-bold text-forest mb-12">Studio Memberships</h2>
            
            {/* Monthly/Annual Toggle */}
            <div className="flex items-center justify-center gap-6 mb-12">
              <span className={`text-sm font-bold tracking-widest uppercase transition-colors ${!isAnnual ? 'text-forest' : 'text-forest/30'}`}>Monthly</span>
              <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className="w-16 h-8 bg-forest rounded-full p-1 relative flex items-center"
              >
                <motion.div 
                  animate={{ x: isAnnual ? 32 : 0 }}
                  className="w-6 h-6 bg-amber-gold rounded-full"
                />
              </button>
              <span className={`text-sm font-bold tracking-widest uppercase transition-colors ${isAnnual ? 'text-forest' : 'text-forest/30'}`}>Annual <span className="text-[10px] bg-terracotta text-ivory px-2 py-0.5 rounded-full ml-1">Save 20%</span></span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {[
              { name: "Drop-In", price: 28, sub: "per session", features: ["Valid for 30 days", "All regular classes", "Mat rental included", "Sanctuary access"], color: "bg-sage" },
              { name: "Unlimited", price: 119, sub: "per month", featured: true, features: ["Unlimited classes", "2 guest passes/mo", "Workshop discounts", "Locker access", "Free mat rental"], color: "bg-forest" },
              { name: "Studio Pass", price: 59, sub: "per month", features: ["5 classes per month", "Standard mat rental", "Access to community events", "Tea lounge access"], color: "bg-terracotta" }
            ].map((plan, i) => (
              <Card3D key={i} className={plan.featured ? "z-10 scale-105" : ""}>
                <div className={`${plan.featured ? 'bg-forest text-ivory' : 'bg-white text-forest'} p-12 rounded-[50px] shadow-2xl border border-forest/5 flex flex-col h-full relative overflow-hidden group`}>
                  {plan.featured && <div className="absolute top-0 right-0 bg-terracotta text-ivory px-6 py-2 rounded-bl-3xl font-bold uppercase text-[10px] tracking-widest shadow-xl">Most Popular</div>}
                  
                  <h3 className="text-3xl font-display font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-5xl font-display font-bold text-amber-gold">${isAnnual ? Math.floor(plan.price * 0.8) : plan.price}</span>
                    <span className={`${plan.featured ? 'text-ivory/60' : 'text-forest/50'} font-bold uppercase text-xs tracking-widest`}>{plan.sub}</span>
                  </div>

                  <div className="space-y-6 mb-12 flex-grow">
                    {plan.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full ${plan.featured ? 'bg-amber-gold/20' : 'bg-forest/5'} flex items-center justify-center`}>
                          <Check size={14} className={plan.featured ? 'text-amber-gold' : 'text-forest'} />
                        </div>
                        <span className="text-sm font-medium opacity-80">{f}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all active:scale-95 ${plan.featured ? 'bg-amber-gold text-forest hover:bg-ivory' : 'bg-forest text-ivory hover:bg-sage'}`}>
                    Choose Plan
                  </button>

                  <div className="absolute bottom-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Sun size={60} />
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 bg-forest text-ivory text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
           {[...Array(6)].map((_, i) => (
             <motion.div 
              key={i}
              animate={{ 
                x: [0, Math.random() * 200 - 100], 
                y: [0, Math.random() * 200 - 100],
                rotate: [0, 360] 
              }}
              transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              className="absolute"
             >
                <Leaf size={100} />
             </motion.div>
           ))}
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-display text-6xl md:text-8xl font-bold mb-12 leading-tight">Start breathing better today.</h2>
          <p className="text-xl text-ivory/60 mb-12 font-light">Join our community and discover the transformative power of yoga. Your mat is waiting.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="px-12 py-5 bg-amber-gold text-forest rounded-full font-bold uppercase tracking-widest text-sm hover:bg-ivory transition-all shadow-xl shadow-amber-gold/20">
              Get Started Now
            </button>
            <button className="px-12 py-5 border border-ivory/20 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-ivory/10 transition-all">
              Contact Studio
            </button>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .reveal-on-scroll { opacity: 0; transform: translateY(40px); transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal-on-scroll.active { opacity: 1; transform: translateY(0); }
        .translate-z-10 { transform: translateZ(30px); }
      `}</style>
    </div>
  );
};

export default Yoga;
