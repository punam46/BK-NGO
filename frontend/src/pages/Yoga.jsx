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
  PresentationControls
} from '@react-three/drei';
import * as THREE from 'three';
import { motion, useScroll, useTransform } from 'framer-motion';

import yogaHeroImg from '../assets/yoga_hero.png';
import yogaMeditationImg from '../assets/yoga_meditation.png';
import yogaCommunityImg from '../assets/yoga_community.png';
import yogaBannerImg from '../assets/yoga_banner.png';

// 3D Components
const AnimatedSphere = () => {
  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
      <Sphere args={[1, 100, 100]} scale={2.4}>
        <MeshDistortMaterial
          color="#ffcc00"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const ZenStones = () => {
  return (
    <group position={[0, -1, 0]}>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]} castShadow>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color="#333" roughness={0.1} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.6}>
        <mesh position={[0, 1.2, 0]} castShadow>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color="#444" roughness={0.1} />
        </mesh>
      </Float>
      <Float speed={1.4} rotationIntensity={0.7} floatIntensity={0.7}>
        <mesh position={[0, 2, 0]} castShadow>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#ffcc00" emissive="#ffcc00" emissiveIntensity={0.5} />
        </mesh>
      </Float>
    </group>
  );
};

const Particles = ({ count = 100 }) => {
  const mesh = useRef();
  const light = useRef();
  
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
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      particle.mx += (state.mouse.x * 1000 - particle.mx) * 0.01;
      particle.my += (state.mouse.y * 1000 - particle.my) * 0.01;
      const dummy = new THREE.Object3D();
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <dodecahedronGeometry args={[0.1, 0]} />
      <meshStandardMaterial color="#ffcc00" roughness={0.1} />
    </instancedMesh>
  );
};

const Yoga = () => {
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathingStep, setBreathingStep] = useState('Inhale');
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const opacityRange = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

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
      description: "We bring the ancient wisdom of meditation to rural communities, helping individuals manage stress and find inner peace.",
      icon: "🧘",
      image: yogaMeditationImg,
      color: "#4db6ac"
    },
    {
      title: "Community Yoga",
      description: "Our weekly yoga classes in villages promote physical health, flexibility, and a sense of togetherness.",
      icon: "🤝",
      image: yogaCommunityImg,
      color: "#ffd54f"
    },
    {
      title: "Health Education",
      description: "Educating rural families about the importance of breathing techniques and natural lifestyle choices.",
      icon: "🌿",
      image: yogaHeroImg,
      color: "#81c784"
    }
  ];

  return (
    <div className="yoga-page" style={{ background: '#03070b', color: '#fff', minHeight: '300vh' }}>
      
      {/* Three.js Background Hero */}
      <section style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#ffcc00" />
            
            <Suspense fallback={null}>
              <PresentationControls global rotation={[0, 0.3, 0]} polar={[-0.4, 0.2]} azimuth={[-0.4, 0.4]} config={{ mass: 2, tension: 500 }}>
                <group position={[0, 0, 0]}>
                  <AnimatedSphere />
                </group>
              </PresentationControls>
              <Particles count={150} />
              <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={20} blur={2.4} far={4.5} />
            </Suspense>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>

        {/* Hero Content Overlay */}
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
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span style={{ 
              color: '#ffcc00', 
              fontWeight: '900', 
              letterSpacing: '8px', 
              textTransform: 'uppercase', 
              fontSize: '0.9rem',
              display: 'block',
              marginBottom: '2rem'
            }}>
              {renderText("BK Education and Welfare Society")}
            </span>
            <h1 style={{ 
              fontSize: 'clamp(3rem, 12vw, 9rem)', 
              fontWeight: '900', 
              lineHeight: '0.8', 
              margin: '0 0 3rem',
              letterSpacing: '-5px'
            }}>
              YOGA <br /> <span style={{ color: '#ffcc00' }}>SPIRIT</span>.
            </h1>
            <p style={{ 
              fontSize: '1.4rem', 
              maxWidth: '600px', 
              margin: '0 auto', 
              color: 'rgba(255,255,255,0.7)',
              fontWeight: '300'
            }}>
              A multi-dimensional journey into the heart of wellness, blending advanced 3D technology with ancient rural traditions.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 3D Interaction Section */}
      <section style={{ padding: '10rem 5%', position: 'relative', zIndex: 3 }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          
          <div style={{ height: '600px', background: 'rgba(255,255,255,0.02)', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
            <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[5, 5, 5]} intensity={1} color="#ffcc00" />
              <PresentationControls global rotation={[0.1, 0, 0]} polar={[-0.4, 0.2]} azimuth={[-0.4, 0.4]}>
                <ZenStones />
              </PresentationControls>
              <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2} />
            </Canvas>
          </div>

          <div>
            <h2 style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '2rem', lineHeight: '1' }}>The Geometry <br /> of <span style={{ color: '#ffcc00' }}>Balance</span>.</h2>
            <p style={{ fontSize: '1.2rem', color: '#aaa', lineHeight: '1.8', marginBottom: '3rem' }}>
              Just as these stones find stability through alignment, our programs help rural communities find balance between tradition and progress. 
              Drag the stones to explore the center of gravity.
            </p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: '#ffcc00', marginBottom: '1rem' }}>Mental Health</h4>
                <div style={{ height: '2px', background: 'rgba(255,204,0,0.2)', position: 'relative' }}>
                  <div style={{ width: '85%', height: '100%', background: '#ffcc00' }} />
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: '#ffcc00', marginBottom: '1rem' }}>Physical Vigor</h4>
                <div style={{ height: '2px', background: 'rgba(255,204,0,0.2)', position: 'relative' }}>
                  <div style={{ width: '92%', height: '100%', background: '#ffcc00' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Breathing Experience */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050a10', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.3 }}>
          <Canvas>
             <Sphere args={[3, 64, 64]}>
               <MeshWobbleMaterial color="#ffcc00" factor={0.6} speed={1} transparent opacity={0.1} />
             </Sphere>
          </Canvas>
        </div>
        
        <div style={{ zIndex: 2, textAlign: 'center' }}>
          <motion.div 
            animate={{ scale: isBreathing ? (breathingStep === 'Inhale' ? 1.5 : 0.8) : 1 }}
            transition={{ duration: 4, ease: "easeInOut" }}
            style={{ 
              width: '400px', 
              height: '400px', 
              background: 'radial-gradient(circle, #ffcc00 0%, transparent 70%)', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 0 100px rgba(255, 204, 0, 0.2)'
            }}
            onClick={() => setIsBreathing(!isBreathing)}
          >
            <div style={{ 
              width: '200px', 
              height: '200px', 
              background: '#fff', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000',
              fontWeight: '900',
              fontSize: '1.5rem',
              textTransform: 'uppercase'
            }}>
              {isBreathing ? breathingStep : 'Start Zen'}
            </div>
          </motion.div>
          <h3 style={{ marginTop: '4rem', fontSize: '2rem', fontWeight: '300', letterSpacing: '10px' }}>BREATH IS TECHNOLOGY.</h3>
        </div>
      </section>

      {/* Horizontal Scroll Initiatives (3D Cards) */}
      <section style={{ padding: '10rem 5%', background: '#03070b' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: '900', textAlign: 'center', marginBottom: '8rem' }}>Interactive Initiatives</h2>
        <div style={{ display: 'flex', gap: '4rem', overflowX: 'auto', paddingBottom: '4rem', scrollbarWidth: 'none' }}>
          {initiatives.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ rotateY: 15, rotateX: 5, scale: 1.05 }}
              style={{
                minWidth: '450px',
                height: '600px',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '50px',
                padding: '4rem',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'relative',
                overflow: 'hidden',
                perspective: '1000px'
              }}
            >
              <img src={item.image} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2, zIndex: 0 }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '4rem', marginBottom: '2rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '1.2rem', color: '#888', lineHeight: '1.6' }}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final 3D CTA */}
      <section style={{ height: '60vh', background: 'linear-gradient(to top, #ffcc00, #03070b)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '5rem', color: '#000', fontWeight: '900', letterSpacing: '-3px' }}>JOIN THE FLOW.</h2>
          <button style={{
            marginTop: '3rem',
            background: '#000',
            color: '#fff',
            padding: '1.5rem 5rem',
            borderRadius: '100px',
            fontSize: '1.2rem',
            fontWeight: '900',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          }}>
            BECOME A VOLUNTEER
          </button>
        </motion.div>
      </section>

    </div>
  );
};

export default Yoga;
