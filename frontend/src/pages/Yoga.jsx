import React, { useEffect, useState, useRef, Suspense } from 'react';
import { renderText } from './Education';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  Float, 
  MeshDistortMaterial, 
  MeshWobbleMaterial, 
  OrbitControls, 
  PerspectiveCamera, 
  Text,
  Sphere,
  ContactShadows,
  PresentationControls,
  Environment,
  Html
} from '@react-three/drei';
import * as THREE from 'three';
import { motion, useScroll, useTransform } from 'framer-motion';

import yogaHeroImg from '../assets/yoga_hero.png';
import yogaMeditationImg from '../assets/yoga_meditation.png';
import yogaCommunityImg from '../assets/yoga_community.png';
import yogaBannerImg from '../assets/yoga_banner.png';

// 3D Components - Refined for Light Theme
const EtherealAura = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 100]} scale={2.5}>
        <MeshDistortMaterial
          color="#ffcc00"
          attach="material"
          distort={0.4}
          speed={3}
          roughness={0}
          metalness={0.1}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </Float>
  );
};

const ZenStoneStack = () => {
  return (
    <group position={[0, -1, 0]}>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]} castShadow>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color="#d1d1d1" roughness={0.1} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.6}>
        <mesh position={[0, 1.2, 0]} castShadow>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color="#c2c2c2" roughness={0.1} />
        </mesh>
      </Float>
      <Float speed={1.4} rotationIntensity={0.7} floatIntensity={0.7}>
        <mesh position={[0, 2, 0]} castShadow>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#ffcc00" emissive="#ffcc00" emissiveIntensity={0.2} />
        </mesh>
      </Float>
    </group>
  );
};

const NatureParticles = ({ count = 120 }) => {
  const mesh = useRef();
  const particles = React.useMemo(() => {
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
      t = particle.t += speed / 3;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      particle.mx += (state.mouse.x * 500 - particle.mx) * 0.01;
      particle.my += (state.mouse.y * 500 - particle.my) * 0.01;
      const dummy = new THREE.Object3D();
      dummy.position.set(
        (particle.mx / 20) * a + xFactor + Math.cos((t / 10) * factor),
        (particle.my / 20) * b + yFactor + Math.sin((t / 10) * factor),
        (particle.my / 20) * b + zFactor + Math.cos((t / 10) * factor)
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <circleGeometry args={[0.2, 8]} />
      <meshStandardMaterial color="#ffcc00" transparent opacity={0.4} side={THREE.DoubleSide} />
    </instancedMesh>
  );
};

const Yoga = () => {
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathingStep, setBreathingStep] = useState('Inhale');
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const opacityRange = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  useEffect(() => {
    if (!isBreathing) return;
    const interval = setInterval(() => {
      setBreathingStep((prev) => (prev === 'Inhale' ? 'Exhale' : 'Inhale'));
    }, 4000);
    return () => clearInterval(interval);
  }, [isBreathing]);

  const initiatives = [
    {
      title: "Mindfulness & Meditation",
      description: "Cultivating mental resilience and emotional stability through guided contemplative practices for rural youth and elders.",
      icon: "🧘",
      image: yogaMeditationImg,
      color: "#ff8a65"
    },
    {
      title: "Village Yoga Drives",
      description: "Scaling physical wellness across remote districts with community-led yoga workshops and health awareness.",
      icon: "🌳",
      image: yogaCommunityImg,
      color: "#4db6ac"
    },
    {
      title: "Holistic Health",
      description: "Bridging the gap between traditional Ayurveda and modern lifestyle through conscious movement and nutrition.",
      icon: "🌿",
      image: yogaHeroImg,
      color: "#81c784"
    }
  ];

  const animations = `
    .light-gradient-bg {
      background: linear-gradient(135deg, #ffffff 0%, #f7f9fc 50%, #f0f4f8 100%);
    }
    .text-reveal {
      background: linear-gradient(to right, #1a1a1a, #444);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .glass-card-light {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.8);
      box-shadow: 0 20px 40px rgba(0,0,0,0.03);
    }
    .glow-yellow {
      box-shadow: 0 10px 30px rgba(255, 204, 0, 0.2);
    }
    ::-webkit-scrollbar {
      display: none;
    }
  `;

  return (
    <div className="yoga-page light-gradient-bg" style={{ color: '#1a1a1a', minHeight: '300vh', overflow: 'hidden' }}>
      <style>{animations}</style>
      
      {/* Three.js Ethereal Hero */}
      <section style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 45 }}>
            <color attach="background" args={['#ffffff']} />
            <ambientLight intensity={0.8} />
            <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={1.5} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffcc00" />
            
            <Suspense fallback={null}>
              <PresentationControls global rotation={[0, 0.2, 0]} polar={[-0.4, 0.2]} azimuth={[-0.4, 0.4]} config={{ mass: 2, tension: 400 }}>
                <EtherealAura />
              </PresentationControls>
              <NatureParticles count={100} />
              <ContactShadows position={[0, -4, 0]} opacity={0.15} scale={20} blur={2.5} far={4.5} />
              <Environment preset="city" />
            </Suspense>
          </Canvas>
        </div>

        {/* Hero Content - Clean & Serene */}
        <motion.div 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            zIndex: 2, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            textAlign: 'center',
            opacity: opacityRange,
            padding: '0 5%'
          }}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span style={{ 
              color: '#f57c00', 
              fontWeight: '900', 
              letterSpacing: '10px', 
              textTransform: 'uppercase', 
              fontSize: '0.8rem',
              display: 'block',
              marginBottom: '2rem'
            }}>
              Pure Consciousness
            </span>
            <h1 className="text-reveal" style={{ 
              fontSize: 'clamp(3.5rem, 11vw, 8.5rem)', 
              fontWeight: '900', 
              lineHeight: '0.9', 
              margin: '0 0 3rem',
              letterSpacing: '-4px'
            }}>
              THE ART <br /> OF <span style={{ color: '#ffcc00' }}>BEING</span>.
            </h1>
            <p style={{ 
              fontSize: '1.3rem', 
              maxWidth: '650px', 
              margin: '0 auto', 
              color: '#666',
              fontWeight: '400',
              lineHeight: '1.6'
            }}>
              Experience a serene digital landscape where traditional yoga meets cutting-edge interaction. Breathing life into rural development.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}
        >
          <div style={{ width: '2px', height: '60px', background: 'linear-gradient(to bottom, #ffcc00, transparent)' }}></div>
        </motion.div>
      </section>

      {/* 3D Interaction Section - Light Theme */}
      <section style={{ padding: '12rem 5%', position: 'relative', zIndex: 3 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '8rem', alignItems: 'center' }}>
          
          <motion.div 
            whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
            style={{ height: '650px', background: 'rgba(255,255,255,0.4)', borderRadius: '60px', border: '1px solid rgba(0,0,0,0.03)', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.05)' }}>
            <Canvas shadows camera={{ position: [0, 0, 5], fov: 40 }}>
              <ambientLight intensity={0.6} />
              <pointLight position={[5, 5, 5]} intensity={1} color="#ffcc00" />
              <PresentationControls global rotation={[0.1, 0, 0]} polar={[-0.4, 0.2]} azimuth={[-0.4, 0.4]}>
                <ZenStoneStack />
              </PresentationControls>
              <ContactShadows position={[0, -1.8, 0]} opacity={0.15} scale={10} blur={2.5} />
              <Environment preset="studio" />
            </Canvas>
          </motion.div>

          <div>
            <h2 style={{ fontSize: '4.5rem', fontWeight: '900', color: '#1a1a1a', marginBottom: '2.5rem', lineHeight: '0.9', letterSpacing: '-2px' }}>
              Balance <br /> in Every <br /> <span style={{ color: '#ffcc00' }}>Movement</span>.
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#555', lineHeight: '1.8', marginBottom: '4rem', maxWidth: '500px' }}>
              Yoga is the journey of the self, through the self, to the self. Our programs bring this harmony to every corner of society.
            </p>
            
            <div style={{ display: 'grid', gap: '3rem' }}>
              {[
                { label: 'Inner Clarity', value: '88%' },
                { label: 'Physical Vitality', value: '94%' },
                { label: 'Community Bond', value: '100%' }
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    <span>{stat.label}</span>
                    <span style={{ color: '#ffcc00' }}>{stat.value}</span>
                  </div>
                  <div style={{ height: '3px', background: '#eee', borderRadius: '10px', overflow: 'hidden' }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: stat.value }}
                      transition={{ duration: 1.5, delay: i * 0.2 }}
                      style={{ height: '100%', background: '#ffcc00' }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Breathing Experience - Clean & Modern */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.1 }}>
          <Canvas>
             <Sphere args={[4, 64, 64]}>
               <MeshWobbleMaterial color="#ffcc00" factor={0.4} speed={0.8} />
             </Sphere>
          </Canvas>
        </div>
        
        <div style={{ zIndex: 2, textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '300', marginBottom: '5rem', letterSpacing: '15px', color: '#888' }}>ALIGN WITH LIFE.</h2>
          <motion.div 
            animate={{ scale: isBreathing ? (breathingStep === 'Inhale' ? 1.4 : 0.9) : 1 }}
            transition={{ duration: 4, ease: "easeInOut" }}
            style={{ 
              width: '380px', 
              height: '380px', 
              background: 'radial-gradient(circle, rgba(255, 204, 0, 0.1) 0%, transparent 75%)', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              position: 'relative'
            }}
            onClick={() => setIsBreathing(!isBreathing)}
          >
            <div style={{
              position: 'absolute',
              inset: 0,
              border: '1px solid rgba(255, 204, 0, 0.3)',
              borderRadius: '50%',
              animation: isBreathing ? 'none' : 'pulse-ring 2s infinite'
            }}></div>
            <div className="glass-card-light glow-yellow" style={{ 
              width: '220px', 
              height: '220px', 
              borderRadius: '50%',
              display: 'flex',
              flexItems: 'center',
              justifyContent: 'center',
              color: '#1a1a1a',
              fontWeight: '900',
              fontSize: '1.4rem',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              border: '2px solid #ffcc00',
              flexDirection: 'column',
              gap: '5px'
            }}>
              <span>{isBreathing ? breathingStep : 'Start'}</span>
              <span style={{ fontSize: '0.6rem', fontWeight: '600', opacity: 0.5 }}>{isBreathing ? 'Flow' : 'The Flow'}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Horizontal Initiative Cards - Nature Focus */}
      <section style={{ padding: '12rem 5%', position: 'relative' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '900', textAlign: 'center', marginBottom: '8rem', letterSpacing: '-1px' }}>Initiatives for Life</h2>
          <div style={{ display: 'flex', gap: '3rem', overflowX: 'auto', paddingBottom: '6rem', paddingLeft: '2rem' }}>
            {initiatives.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -20 }}
                style={{
                  minWidth: '420px',
                  height: '580px',
                  background: '#fff',
                  borderRadius: '50px',
                  padding: '4rem',
                  boxShadow: '0 30px 70px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid #f0f0f0'
                }}
              >
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ fontSize: '3.5rem', marginBottom: '2.5rem', display: 'block' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '2.2rem', fontWeight: '900', marginBottom: '1.5rem', color: '#1a1a1a' }}>{item.title}</h3>
                  <p style={{ fontSize: '1.15rem', color: '#666', lineHeight: '1.7' }}>{item.description}</p>
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  style={{ width: '100%', height: '220px', borderRadius: '30px', overflow: 'hidden', position: 'relative' }}>
                  <img src={item.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.div>

                {/* Decorative Shape */}
                <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '250px', height: '250px', background: `${item.color}08`, borderRadius: '50%' }}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean CTA Section */}
      <section style={{ 
        padding: '10rem 5%', 
        background: '#ffcc00', 
        textAlign: 'center',
        borderTopLeftRadius: '100px',
        borderTopRightRadius: '100px',
        marginTop: '5rem'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', color: '#000', fontWeight: '900', letterSpacing: '-2px', lineHeight: '1', marginBottom: '4rem' }}>
            READY TO FIND <br /> YOUR ZEN?
          </h2>
          <button style={{
            background: '#000',
            color: '#fff',
            padding: '1.5rem 4.5rem',
            borderRadius: '100px',
            fontSize: '1.1rem',
            fontWeight: '900',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Become a Volunteer
          </button>
          <div style={{ marginTop: '5rem', fontSize: '0.9rem', fontWeight: '700', color: 'rgba(0,0,0,0.4)', textTransform: 'uppercase', letterSpacing: '3px' }}>
            BK EDUCATION AND WELFARE SOCIETY
          </div>
        </div>
      </section>

    </div>
  );
};

export default Yoga;
