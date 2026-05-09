import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Heart, 
  ShieldCheck, 
  Search, 
  Zap, 
  Activity, 
  BarChart3, 
  ArrowRight,
  MapPin,
  Droplets,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  HandHeart
} from 'lucide-react';

import socialWelfImg from '../assets/G42.jpeg';
import bloodCampImg from '../assets/g16.jpeg';

import g5 from '../assets/g5.jpg';
import g16 from '../assets/g16.jpeg';
import g18 from '../assets/g18.jpeg';
import g22 from '../assets/g22.jpeg';
import g24 from '../assets/g24.jpeg';
import g25 from '../assets/g25.jpeg';
import g28 from '../assets/g28.jpeg';
import g29 from '../assets/g29.jpeg';
import g30 from '../assets/g30.jpeg';
import g32 from '../assets/g32.jpeg';
import g55 from '../assets/G55.jpeg';
import g54 from '../assets/G54.jpeg';
import g52 from '../assets/G52.jpeg';
import g17 from '../assets/g17.jpeg';
import g19 from '../assets/g19.jpeg';
import g20 from '../assets/g20.jpeg';
import g21 from '../assets/g21.jpeg';
import G45 from '../assets/G45.jpeg';
import G50 from '../assets/G50.jpeg';
import G51 from '../assets/G51.jpeg';
import G53 from '../assets/G53.jpeg';
import dis2 from '../assets/dis2.jpg';

const SocialWelfare = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const journeyRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const featuredEvents = [
    {
      tag: "BLOOD DONATION",
      title: <>Life-Saving <br /> <span style={{ color: '#f97316' }}>Blood Camps</span></>,
      desc: <><span style={{ color: 'red', fontWeight: 800 }}>BK</span> Education & Welfare Society organizes critical blood donation drives across rural Maharashtra, bridging the gap between donors and emergency medical needs. By partnering with local government hospitals and private clinics, we ensure that life-saving blood units are available during critical shortages, accidents, and surgeries. Our specialized volunteer teams coordinate these camps with professional medical staff to maintain the highest safety standards while encouraging first-time donors through awareness seminars.</>,
      img: g16,
      icon: <Heart size={40} fill="#f97316" fillOpacity={0.1} />,
      objectPosition: 'top'
    },
    {
      tag: "EDUCATION DRIVE",
      title: <>Ashram School <br /> <span style={{ color: '#f97316' }}>Donations</span></>,
      desc: <><span style={{ color: 'red', fontWeight: 800 }}>BK</span> Education & Welfare Society supports tribal Ashram schools by providing high-quality educational kits, uniforms, and digital learning tools. We believe that distance and economic status should never be a barrier to quality education. Our donation drives specifically target remote tribal regions where students lack basic infrastructure. Beyond supplies, we provide mentorship and career guidance to ensure these students can compete in modern professional landscapes and secure their futures.</>,
      img: g5,
      icon: <Zap size={40} fill="#f97316" fillOpacity={0.1} />,
      objectPosition: 'top'
    },
    {
      tag: "ENVIRONMENTAL DRIVE",
      title: <>Ramshej Fort <br /> <span style={{ color: '#f97316' }}>Cleaning Event</span></>,
      desc: <>Led by <span style={{ color: 'red', fontWeight: 800 }}>BK</span> Education & Welfare Society, this heritage preservation drive focuses on restoring the ecological balance and historical integrity of the Ramshej Fort. We mobilize hundreds of young volunteers for deep-cleaning activities, waste management workshops, and historical preservation seminars. By removing plastic waste and non-biodegradable materials from these sacred sites, we not only protect our history but also ensure a cleaner environment for future generations of trekkers and history enthusiasts.</>,
      img: g22,
      icon: <Activity size={40} fill="#f97316" fillOpacity={0.1} />,
      objectPosition: 'center'
    },
    {
      tag: "CULTURAL EVENT",
      title: <>Dr. Ambedkar <br /> <span style={{ color: '#f97316' }}>Jayanti Celebration</span></>,
      desc: <><span style={{ color: 'red', fontWeight: 800 }}>BK</span> Education & Welfare Society honors the legacy of Dr. B.R. Ambedkar by organizing large-scale community events that promote constitutional values. These celebrations serve as a platform for social equality discourses, highlighting the Importance of education and fundamental rights in building a modern India. Through cultural performances, book distributions, and community feasts, we bring together people from all walks of life to celebrate the principles of justice, liberty, and fraternity.</>,
      img: g24,
      icon: <Heart size={40} fill="#f97316" fillOpacity={0.1} />,
      objectPosition: 'center'
    },
    {
      tag: "COMMUNITY RELIEF",
      title: <>Clean Water <br /> <span style={{ color: '#f97316' }}>Distribution Drive</span></>,
      desc: <>During peak summer months, <span style={{ color: 'red', fontWeight: 800 }}>BK</span> Education & Welfare Society deploys mobile water tankers to provide safe, chilled drinking water to hundreds of families. Our mission is to alleviate the severe water distress in drought-prone regions by setting up distribution points at major public junctions and residential areas. Each tanker is maintained under strict hygiene protocols, ensuring that the most marginalized sections of society have access to clean hydration as a basic human right.</>,
      img: g25,
      icon: <Droplets size={40} fill="#f97316" fillOpacity={0.1} />,
      objectPosition: 'top'
    },
    {
      tag: "SOCIAL REFORM",
      title: <>Stop Child <span style={{ color: '#f97316' }}>Marriage Campaign</span></>,
      desc: <>The <span style={{ color: 'red', fontWeight: 800 }}>BK</span> Education & Welfare Society works tirelessly on the ground to stop child marriages through legal intervention and counseling. We operate a dedicated surveillance network in rural areas to identify at-risk girls and provide immediate protection. Our holistic approach includes rehabilitating these girls through vocational training and long-term education, while simultaneously educating parents and community leaders about the severe health and social consequences of child marriage.</>,
      img: g29,
      icon: <ShieldCheck size={40} fill="#f97316" fillOpacity={0.1} />,
      objectPosition: 'center'
    },
    {
      tag: "WOMEN EMPOWERMENT",
      title: <>Safety & Awareness <br /> <span style={{ color: '#f97316' }}>Training Drive</span></>,
      desc: <><span style={{ color: 'red', fontWeight: 800 }}>BK</span> Education & Welfare Society empowers women and children with self-defense skills and awareness workshops on "Good Touch & Bad Touch." These training drives are designed to build confidence and provide practical tools for personal safety in public and private spaces. By collaborating with safety experts and child psychologists, we create a supportive environment where women and children can share their experiences and learn to protect their rights and dignity.</>,
      img: g30,
      icon: <ShieldCheck size={40} fill="#f97316" fillOpacity={0.1} />,
      objectPosition: 'top'
    },
    {
      tag: "ELDERLY CARE",
      title: <>Senior Citizen <br /> <span style={{ color: '#f97316' }}>Support Drive</span></>,
      desc: <><span style={{ color: 'red', fontWeight: 800 }}>BK</span> Education & Welfare Society provides monthly rations, medical checkups, and emotional support to neglected senior citizens. We believe that our elders deserve to live their golden years with peace and respect. Our "Dignity Care" program includes door-to-door medical assistance, regular social gatherings to combat loneliness, and the provision of essential medicines and nutrition to those without family support systems, ensuring they feel valued by society.</>,
      img: socialWelfImg,
      icon: <Heart size={40} fill="#f97316" fillOpacity={0.1} />,
      objectPosition: '50% 10%'
    },
    {
      tag: "ELDERLY CARE",
      title: <>Vrudha Ashram <br /> <span style={{ color: '#f97316' }}>Support Drive</span></>,
      desc: <><span style={{ color: 'red', fontWeight: 800 }}>BK</span> Education & Welfare Society supports local Vrudha Ashrams (old age homes) with infrastructure upgrades, nutritious meals, and social interaction programs. We don't just donate; we spend time with the residents to provide the emotional companionship they often lack. From arranging birthday celebrations to ensuring consistent healthcare access, we work to make these ashrams a vibrant, loving home for every resident who has been displaced or neglected by their own families.</>,
      img: g52,
      icon: <Zap size={40} fill="#f97316" fillOpacity={0.1} />,
      objectPosition: '50% 10%'
    }
  ];

  const [activeEvent, setActiveEvent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveEvent(prev => (prev === featuredEvents.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredEvents.length]);

  const sliderImages = [
    g5, g16, g18, g22, g25, g55, g54, g52, socialWelfImg,
    g5, g16, g18, g22, g25, g55, g54, g52, socialWelfImg // Duplicate for seamless loop
  ];

  const volunteerImages = [
    g18, g32, socialWelfImg, g54, g55, g16, g5, 
    g17, g19, g20, g21, g25, g29, g30, G45, G50, G51, g52
  ];

  const stats = [
    { label: "Lives Impacted", value: "50k+", icon: <Heart className="w-6 h-6" /> },
    { label: "Active Volunteers", value: "1200+", icon: <Users className="w-6 h-6" /> },
    { label: "Districts Covered", value: "25+", icon: <MapPin className="w-6 h-6" /> },
    { label: "Projects Completed", value: "500+", icon: <Zap className="w-6 h-6" /> }
  ];

  const pillars = [
    {
      title: "Social Awareness",
      desc: "Educating communities about their constitutional rights and fundamental duties to build a responsible society.",
      icon: <Users className="w-6 h-6" />,
      color: "#f97316"
    },
    {
      title: "Community Welfare",
      desc: "Direct intervention through medical camps, disaster relief, and infrastructure support for marginalized regions.",
      icon: <Users className="w-6 h-6" />,
      color: "#f97316"
    },
    {
      title: "Social Security",
      desc: "Ensuring every citizen has access to government schemes, pensions, and professional legal frameworks.",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "#f97316"
    }
  ];

  const operationalSteps = [
    { num: "01", title: "Needs Assessment", text: "Identifying vulnerable communities through ground-level surveys and socio-economic data analysis." },
    { num: "02", title: "Resource Alignment", text: "Mobilizing funds, volunteers, and legal expertise tailored to specific regional welfare requirements." },
    { num: "03", title: "Direct Intervention", text: "Implementing medical camps, legal aid clinics, and community infrastructure projects with full transparency." },
    { num: "04", title: "Impact Sustenance", text: "Continuous monitoring and long-term support to ensure communities transition to self-sufficiency." }
  ];

  const journeyMilestones = [
    { year: '2026', text: 'BK Innovations spread to more than 25 districts across the state, reaching remote communities.', pos: 'above', color: '#ffc107', img: G53 },
    { year: '2022', text: 'BK International established to help with the senior citizens to donate food to them.', pos: 'below', color: '#f97316' },
    { year: '2022', text: 'First major Innovation & Skills Training Center established in rural Maharashtra.', pos: 'above', color: '#ffc107' },
    { year: '2021', text: 'NGO recognized for exceptional contribution to Rural Education Development.', pos: 'below', color: '#f97316', img: g25 },
    { year: '2020', text: 'TaRL programs in regional districts grow to reach 10,000+ students.', pos: 'above', color: '#ffc107', img: g24 },
    { year: '2019', text: 'Launched the first Bilingual News Paper to promote positive news in rural areas.', pos: 'below', color: '#f97316', img: g5 },
    { year: '2018', text: 'Expanded educational interventions to 10 new districts in Western Maharashtra.', pos: 'above', color: '#ffc107' },
    { year: '2017', text: 'Established 50+ digital learning centers to bridge the urban-rural divide.', pos: 'below', color: '#f97316' },
    { year: '2016', text: 'Won state-level award for community empowerment through vocational training.', pos: 'above', color: '#ffc107' },
    { year: '2015', text: 'Successfully reached a milestone of supporting 5,000+ students annually.', pos: 'below', color: '#f97316' },
    { year: '2014', text: 'Introduced the "One Village One Reporter" system for rural employment.', pos: 'above', color: '#ffc107' },
  ];

  const verticalImages1 = [g5, g16, g18, g19, g22];
  const verticalImages2 = [g24, g25, g29, g30, g17];

  const journeyMilestonesCont = [
    { year: '2013', text: 'Official registration as BK Educational and Welfare Society under Reg No. F-12121.', pos: 'below', color: '#f97316' },
    { year: '2012', text: 'Initiated the first free guidance center for competitive exams for physically challenged students.', pos: 'above', color: '#ffc107' },
    { year: '2011', text: 'Founded with the core vision of "Education for All" and community welfare.', pos: 'below', color: '#f97316' },
    { year: '2010', text: 'Initial group of volunteers started ground-level community surveys and pilot teaching programs.', pos: 'above', color: '#ffc107' }
  ];

  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (journeyRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = journeyRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          journeyRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          journeyRef.current.scrollBy({ left: 250, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className="sw-page" style={{ background: '#fff9f2', minHeight: '100vh', overflowX: 'hidden' }} ref={containerRef}>
      
      {/* ===== Hero Section ===== */}
      {/* ===== Hero Section ===== */}
      <section style={{ 
        padding: '1rem 5% 4rem', 
        background: '#fff',
        position: 'relative',
        overflow: 'visible'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
          <div style={{ flex: '0.8', minWidth: '320px' }}>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ color: '#666', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '1.5rem' }}
            >
              • SOCIAL IMPACT DIRECT
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 900, color: '#1a1a1a', lineHeight: 1, marginBottom: '2.5rem', letterSpacing: '-2px' }}
            >
              Upholding <br />
              <span style={{ 
                color: '#f97316',
                textShadow: '0 1px 0 #c2410c, 0 2px 0 #c2410c, 0 3px 0 #c2410c, 0 4px 0 #c2410c, 0 10px 20px rgba(0,0,0,0.1)'
              }}>Dignity</span>, <br />
              Empowering <br /> Lives.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '500px' }}
            >
              Dedicated to human rights, legal aid, and social welfare across India. We believe every citizen deserves a life of respect and security.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
            >
              <motion.button 
                whileHover={{ y: -4, boxShadow: '0 12px 0 #c2410c, 0 20px 40px rgba(249,115,22,0.4)' }}
                whileTap={{ y: 8, boxShadow: '0 0px 0 #c2410c, 0 5px 10px rgba(249,115,22,0.2)' }}
                onClick={() => navigate('/involved')}
                style={{ 
                  background: 'linear-gradient(to bottom, #fb923c, #f97316)', 
                  color: '#fff', 
                  padding: '1.2rem 2.8rem', 
                  borderRadius: '20px', 
                  border: 'none', 
                  fontWeight: 900, 
                  cursor: 'pointer',
                  boxShadow: '0 8px 0 #c2410c, 0 15px 30px rgba(249,115,22,0.3)',
                  transition: 'all 0.15s cubic-bezier(0.17, 0.67, 0.83, 0.67)',
                  fontSize: '1.1rem',
                  letterSpacing: '0.5px',
                  position: 'relative'
                }}
              >
                Join Our Mission
              </motion.button>
              
              <motion.button 
                whileHover={{ y: -4, boxShadow: '0 10px 0 #e5e5e5, 0 15px 30px rgba(0,0,0,0.05)' }}
                whileTap={{ y: 6, boxShadow: '0 0px 0 #e5e5e5' }}
                style={{ 
                  background: '#fff', 
                  border: '2px solid #f0f0f0', 
                  color: '#1a1a1a', 
                  padding: '1.1rem 2.2rem',
                  borderRadius: '20px',
                  fontWeight: 900, 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  boxShadow: '0 6px 0 #e5e5e5, 0 10px 20px rgba(0,0,0,0.03)',
                  transition: 'all 0.15s cubic-bezier(0.17, 0.67, 0.83, 0.67)',
                  fontSize: '1rem'
                }}
              >
                Learn More <ArrowRight size={20} color="#f97316" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content: Vertical 'Single Window' Slider - 3D Effect Fixed */}
          <div style={{ 
            flex: '0.75', 
            position: 'relative', 
            height: '450px', 
            display: windowWidth < 1024 ? 'none' : 'flex',
            justifyContent: 'center',
            marginRight: '3rem',
            perspective: '2000px',
            zIndex: 1
          }}>
            {/* 3D Wrapper */}
            <motion.div 
              animate={{ 
                rotateY: [3, -3, 3],
                rotateX: [1, -1, 1]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{ 
                width: '100%', 
                height: '100%', 
                position: 'relative',
                background: '#fff',
                borderRadius: '32px',
                boxShadow: '30px 40px 80px rgba(0,0,0,0.15)',
                border: '1px solid #f0f0f0',
                padding: '1rem',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Inner Marquee Container */}
              <div style={{ 
                width: '100%', 
                height: '100%', 
                position: 'relative', 
                borderRadius: '20px', 
                overflow: 'hidden',
                background: '#fcfcfc',
                transform: 'translateZ(10px)',
                zIndex: 1
              }}>
                <motion.div 
                  animate={{ y: [0, -4000] }}
                  transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                  {[...verticalImages1, ...verticalImages2, ...verticalImages1, ...verticalImages2, ...verticalImages1, ...verticalImages2].map((img, i) => (
                    <div key={i} style={{ 
                      width: '100%', 
                      height: '380px', 
                      flexShrink: 0,
                      borderRadius: '16px', 
                      overflow: 'hidden',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.04)'
                    }}>
                      <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Impact" />
                    </div>
                  ))}
                </motion.div>

                {/* Glassmorphism Overlays */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '80px',
                  background: 'linear-gradient(to bottom, #fff 15%, transparent 100%)',
                  zIndex: 5
                }}></div>
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, width: '100%', height: '80px',
                  background: 'linear-gradient(to top, #fff 15%, transparent 100%)',
                  zIndex: 5
                }}></div>
              </div>
            </motion.div>

            {/* Floating Badges - Moved OUTSIDE the 3D wrapper to prevent clipping */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ 
                position: 'absolute', top: '10%', right: '-25%', background: '#fff', 
                padding: '1rem 2rem', borderRadius: '24px', boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
                display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 1000,
                border: '1px solid #f0f0f0',
                whiteSpace: 'nowrap'
              }}
            >
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 12px #10b981' }}></div>
              <span style={{ fontWeight: 900, fontSize: '0.85rem', color: '#1a1a1a', letterSpacing: '0.5px' }}>Active Impact</span>
            </motion.div>

            <motion.div 
              animate={{ 
                y: [0, 15, 0],
                scale: [1, 1.05, 1],
                boxShadow: [
                  '0 25px 50px rgba(249,115,22,0.5)',
                  '0 35px 70px rgba(249,115,22,0.7)',
                  '0 25px 50px rgba(249,115,22,0.5)'
                ]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{ 
                position: 'absolute', top: '80%', left: '-25%', background: '#f97316', 
                padding: '2.6rem 2.5rem', borderRadius: '24px', boxShadow: '0 25px 50px rgba(249,115,22,0.5)',
                display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 1000, color: '#fff',
                whiteSpace: 'nowrap'
              }}
            >
              <ShieldCheck size={26} />
              <span style={{ 
                fontWeight: 900, 
                fontSize: '1rem', 
                letterSpacing: '1px', 
                lineHeight: '1.1',
                textAlign: 'left'
              }}>
                CERTIFIED <br /> NGO
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== IMPACT STATS ===== */}
      <section style={{ padding: '4rem 5%', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -15, boxShadow: '0 20px 40px rgba(249,115,22,0.12)' }}
              style={{ 
                background: '#fff', 
                padding: '3rem 2rem', 
                borderRadius: '32px', 
                textAlign: 'center', 
                boxShadow: '0 12px 0 #fff7ed, 0 20px 40px rgba(0,0,0,0.03)',
                border: '1px solid #ffedd5',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative'
              }}
            >
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: '#fff7ed', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: '#f97316', 
                margin: '0 auto 1.5rem',
                boxShadow: '0 10px 20px rgba(249,115,22,0.1)'
              }}>
                {stat.icon}
              </div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#1a1a1a', margin: '0 0 0.5rem 0' }}>{stat.value}</h3>
              <p style={{ margin: 0, color: '#f97316', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== OUR JOURNEY TIMELINE ===== */}
      <section className="journey-section" style={{ padding: '0.5rem 0', background: '#fff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
          
          <motion.div 
            animate={{ 
              y: [0, -8, 0],
              rotateX: [0, 5, 0],
              rotateY: [0, 5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            style={{ 
              display: 'inline-block', 
              padding: '12px 32px', 
              background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)', 
              color: '#fff', 
              borderRadius: '16px', 
              fontSize: '1rem', 
              fontWeight: 900, 
              letterSpacing: '3px', 
              marginBottom: '2rem',
              position: 'relative',
              left: '50%',
              marginLeft: '-100px', // Half of approx width to center since we use position absolute-ish logic or just flex
              boxShadow: '0 15px 35px rgba(249,115,22,0.4), inset 0 -4px 0 rgba(0,0,0,0.2)',
              border: '1px solid rgba(255,255,255,0.1)',
              perspective: '1000px',
              transformStyle: 'preserve-3d',
              cursor: 'default'
            }}
          >
            OUR JOURNEY
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative' }}
          >
            <h2 style={{ 
              fontSize: '3.5rem', 
              fontWeight: 900, 
              marginBottom: '1.5rem',
              color: '#1a1a1a',
              textShadow: '1px 1px 0px #ccc, 2px 2px 0px #bbb, 3px 3px 0px #aaa, 4px 4px 0px #999, 5px 5px 10px rgba(0,0,0,0.2)'
            }}>
              Social Welfare Milestones
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
              From initial community surveys to becoming a leading force in regional social security, track our evolution through the years.
            </p>
          </motion.div>

          {/* Visual Timeline */}
          <div 
            ref={journeyRef}
            className="hide-scrollbar" 
            style={{ 
              position: 'relative', 
              padding: '12rem 0', 
              overflowX: 'auto', 
              msOverflowStyle: 'none', 
              scrollbarWidth: 'none',
              scrollBehavior: 'smooth'
            }}
          >
            <style>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {/* Horizontal Main Line */}
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: 0, 
              width: journeyMilestones.length * 250 + 'px', 
              height: '4px', 
              background: 'linear-gradient(90deg, #ffedd5 0%, #f97316 50%, #ffedd5 100%)',
              zIndex: 1
            }} />

            <div style={{ 
              display: 'flex', 
              gap: '0',
              position: 'relative', 
              zIndex: 2,
              width: 'max-content'
            }}>
              {journeyMilestones.map((milestone, i) => (
                <div key={i} style={{ width: '250px', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  
                  {/* Text Section (Above or Below) */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    style={{ 
                      position: 'absolute', 
                      [milestone.pos === 'above' ? 'bottom' : 'top']: 'calc(50% + 40px)', 
                      left: 'calc(50% + 10px)', 
                      width: '220px',
                      textAlign: 'left'
                    }}
                  >
                    <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: '1.5', fontWeight: '600' }}>
                      {milestone.text}
                    </p>
                  </motion.div>

                  {/* Vertical Connector Line (Animated) */}
                  <motion.div 
                    initial={{ scaleY: 0, originY: milestone.pos === 'above' ? 1 : 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    style={{ 
                      position: 'absolute', 
                      [milestone.pos === 'above' ? 'bottom' : 'top']: '50%', 
                      left: '50%', 
                      width: '3px', 
                      height: '60px', 
                      background: 'linear-gradient(to ' + (milestone.pos === 'above' ? 'bottom' : 'top') + ', #f97316, transparent)', 
                      transform: 'translateX(-50%)' 
                    }} />

                  {/* Milestone Node (Circle) */}
                  <motion.div 
                    whileHover={{ scale: 1.3 }}
                    style={{ 
                      width: '45px', 
                      height: '45px', 
                      background: milestone.color, 
                      borderRadius: '50%', 
                      border: '6px solid #fff', 
                      boxShadow: `0 0 20px ${milestone.color}66`, 
                      zIndex: 5,
                      cursor: 'pointer'
                    }} 
                  />

                  {/* Optional Image */}
                  {milestone.img && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9, y: milestone.pos === 'above' ? -10 : 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      style={{ 
                        position: 'absolute', 
                        [milestone.pos === 'above' ? 'bottom' : 'top']: 'calc(50% + 40px)', 
                        left: 'calc(50% + 10px)', 
                        width: '200px', 
                        height: '150px', 
                        borderRadius: '24px', 
                        overflow: 'hidden', 
                        boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                        border: '1px solid #ffedd5'
                      }}>
                      <img src={milestone.img} alt={milestone.year} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                    </motion.div>
                  )}
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* ===== PILLARS SECTION ===== */}
      <section style={{ padding: '10rem 5% 6rem', background: '#fffcf8' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <span style={{ color: '#f97316', fontWeight: 800, letterSpacing: '2px', fontSize: '0.9rem' }}>STRATEGIC FRAMEWORK</span>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginTop: '1rem' }}>Pillars of Transformation</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {pillars.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -15 }}
                transition={{ delay: i * 0.1 }}
                style={{ 
                  background: 'radial-gradient(circle at 10% 10%, rgba(16, 185, 129, 0.03) 0%, transparent 50%), radial-gradient(circle at 90% 90%, rgba(16, 185, 129, 0.03) 0%, transparent 50%), #fff', 
                  padding: '4rem 3rem', 
                  borderRadius: '40px', 
                  boxShadow: '0 15px 0 #fff7ed, 0 30px 60px rgba(249,115,22,0.12)', 
                  textAlign: 'center',
                  border: '1px solid #ffedd5',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                {/* Watercolor effect blobs */}
                <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '150px', height: '150px', background: 'rgba(16, 185, 129, 0.04)', filter: 'blur(40px)', borderRadius: '50%', pointerEvents: 'none' }}></div>
                <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '150px', height: '150px', background: 'rgba(16, 185, 129, 0.04)', filter: 'blur(40px)', borderRadius: '50%', pointerEvents: 'none' }}></div>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: '#fff7ed', 
                  borderRadius: '20px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: '#f97316', 
                  margin: '0 auto 2.5rem',
                  boxShadow: '0 15px 30px rgba(249,115,22,0.12)'
                }}>
                  {React.cloneElement(item.icon, { size: 32 })}
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.5rem' }}>{item.title}</h3>
                <p style={{ color: '#666', lineHeight: 1.7, margin: '0 auto', fontSize: '1.1rem' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OPERATIONAL RIGOR ===== */}
      <section style={{ 
        padding: '8rem 5%', 
        background: '#0a0a0b', 
        color: '#fff',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 0)',
        backgroundSize: '40px 40px',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1.5rem' }}>Operational Rigor</h2>
            <p style={{ color: '#666', fontSize: '1.2rem' }}>Our systematic approach to sustainable social impact</p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
            gap: '4rem',
            position: 'relative'
          }}>
            {/* Connection Line */}
            <div style={{ 
              position: 'absolute', 
              top: '40px', 
              left: '10%', 
              right: '10%', 
              height: '2px', 
              background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent)', 
              zIndex: 0,
              display: 'none', // Shown on desktop
              '@media (min-width: 1024px)': { display: 'block' }
            }}></div>

            {operationalSteps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
              >
                <div style={{ 
                  width: '80px', height: '80px', 
                  background: 'radial-gradient(circle at center, #fff 0%, #f97316 40%, #ea580c 100%)', 
                  borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.8rem', fontWeight: 900, margin: '0 auto 2.5rem',
                  boxShadow: '0 0 40px rgba(249,115,22,0.6), inset 0 0 15px rgba(255,255,255,0.8)',
                  color: '#fff',
                  transform: 'rotate(0deg)',
                  border: '2px solid rgba(255,255,255,0.2)'
                }}>
                  {step.num}
                </div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', color: '#fff' }}>{step.title}</h4>
                <p style={{ color: '#aaa', lineHeight: 1.6 }}>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED INITIATIVES SLIDER ===== */}
      <section style={{ padding: '8rem 5% 2rem', background: '#fff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>


          <div style={{ position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeEvent}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                style={{ 
                  background: '#fff', borderRadius: '48px', padding: '5rem',
                  display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '5rem',
                  boxShadow: '0 20px 0 #fff7ed, 0 40px 80px rgba(0,0,0,0.05)',
                  border: '1px solid #ffedd5',
                  position: 'relative'
                }}
              >
                <div style={{ flex: '1', minWidth: '320px' }}>
                  <span style={{ background: '#f97316', color: '#fff', padding: '8px 20px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 900, letterSpacing: '1px' }}>{featuredEvents[activeEvent].tag}</span>
                  <h2 style={{ 
                    fontSize: '3.5rem', 
                    fontWeight: 900, 
                    margin: '2rem 0 1.5rem', 
                    color: '#1a1a1a', 
                    letterSpacing: '-1.5px',
                    textShadow: '0.5px 0.5px 0 #fff, 1px 1px 0 #ffedd5, 2px 2px 0 #ffedd5, 3px 3px 0 #ffedd5'
                  }}>{featuredEvents[activeEvent].title}</h2>
                  <p style={{ color: '#666', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '3rem' }}>
                    {featuredEvents[activeEvent].desc}
                  </p>
                  
                  <motion.button 
                    whileHover={{ y: -4, boxShadow: '0 12px 0 #c2410c, 0 20px 40px rgba(249,115,22,0.4)' }}
                    whileTap={{ y: 8, boxShadow: '0 0px 0 #c2410c, 0 5px 10px rgba(249,115,22,0.2)' }}
                    onClick={() => navigate('/involved')}
                    style={{ 
                      background: 'linear-gradient(to bottom, #fb923c, #f97316)', 
                      color: '#fff', padding: '1.2rem 3rem', 
                      borderRadius: '20px', border: 'none', fontWeight: 900, cursor: 'pointer',
                      boxShadow: '0 8px 0 #c2410c, 0 15px 30px rgba(249,115,22,0.3)',
                      transition: 'all 0.15s cubic-bezier(0.17, 0.67, 0.83, 0.67)',
                      fontSize: '1.1rem'
                    }}
                  >
                    Support this Initiative
                  </motion.button>
                </div>
                <div style={{ flex: '1.4', minWidth: '320px' }}>
                  <div style={{ 
                    background: '#fff', borderRadius: '40px', padding: '0.5rem', 
                    boxShadow: '0 30px 60px rgba(0,0,0,0.08)', position: 'relative',
                    border: '1px solid #f0f0f0'
                  }}>
                    <img 
                      src={featuredEvents[activeEvent].img} 
                      style={{ 
                        width: '100%', 
                        height: '500px', 
                        borderRadius: '35px', 
                        objectFit: 'cover', 
                        objectPosition: featuredEvents[activeEvent].objectPosition || 'center',
                        display: 'block' 
                      }} 
                      alt="Featured Event" 
                    />
                    <motion.div 
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      style={{ 
                        position: 'absolute', top: '-30px', right: '-30px', width: '90px', height: '90px',
                        background: '#fff', borderRadius: '28px', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', color: '#f97316', boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                        border: '1px solid #f0f0f0'
                      }}>
                      {featuredEvents[activeEvent].icon}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '4rem' }}>
              <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: '#f97316', color: '#fff' }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveEvent(prev => (prev === 0 ? featuredEvents.length - 1 : prev - 1))}
                style={{ 
                  width: '60px', height: '60px', borderRadius: '20px', background: '#fff', border: '1px solid #eee',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.05)', transition: 'all 0.3s ease'
                }}
              >
                <ArrowRight size={24} style={{ transform: 'rotate(180deg)' }} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: '#f97316', color: '#fff' }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveEvent(prev => (prev === featuredEvents.length - 1 ? 0 : prev + 1))}
                style={{ 
                  width: '60px', height: '60px', borderRadius: '20px', background: '#fff', border: '1px solid #eee',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.05)', transition: 'all 0.3s ease'
                }}
              >
                <ArrowRight size={24} />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VOLUNTEER WORK GALLERY ===== */}
      <section style={{ padding: '6rem 0 2rem', background: '#fff', overflow: 'hidden' }}>
        <div style={{ padding: '0 5%', marginBottom: '4rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              fontSize: '4.5rem', 
              fontWeight: 900, 
              textAlign: 'center', 
              marginBottom: '1.5rem', 
              letterSpacing: '-2px',
              textShadow: '0.5px 0.5px 0 #fff, 1px 1px 0 #ffedd5, 2px 2px 0 #ffedd5, 3px 3px 0 #ffedd5, 0 10px 20px rgba(0,0,0,0.05)'
            }}
          >
            Our <span style={{ color: '#f97316' }}>Volunteers</span> in Action
          </motion.h2>
          <p style={{ textAlign: 'center', color: '#666', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
            A glimpse into the dedicated efforts of our ground teams across various social welfare initiatives. Every moment captured represents a life touched and a community strengthened.
          </p>
        </div>

        <div style={{ position: 'relative', display: 'flex', gap: '2rem' }}>
          <motion.div 
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ display: 'flex', gap: '2rem', paddingLeft: '2rem' }}
          >
            {[...volunteerImages, ...volunteerImages].map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -15, scale: 1.02 }}
                style={{ 
                  flexShrink: 0, width: '450px', height: '320px', 
                  borderRadius: '32px', overflow: 'hidden', 
                  boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                  border: '1px solid #f0f0f0',
                  background: '#fff'
                }}
              >
                <img 
                  src={img} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }} 
                  alt="Volunteer Work" 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section style={{ padding: '0rem 5% 8rem', background: '#fff' }}>
        <div style={{ 
          maxWidth: '1200px', margin: '0 auto', background: '#fff', 
          borderRadius: '48px', padding: '6rem 2rem', textAlign: 'center',
          boxShadow: '0 40px 100px rgba(0,0,0,0.03)', border: '1px solid #f5f5f5'
        }}>
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: 900, 
            marginBottom: '1.5rem',
            textShadow: '0.5px 0.5px 0 #fff, 1px 1px 0 #ffedd5, 2px 2px 0 #ffedd5, 3px 3px 0 #ffedd5, 0 10px 20px rgba(0,0,0,0.05)'
          }}>Stay Updated with Our Work</h2>
          <p style={{ color: '#888', fontSize: '1.2rem', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
            Subscribe to our monthly newsletter to receive updates on our programs and opportunities to volunteer.
          </p>
          <div style={{ 
            maxWidth: '600px', margin: '0 auto', display: 'flex', gap: '1rem', 
            background: '#f8f9fa', padding: '8px', borderRadius: '20px',
            border: '1px solid #eee'
          }}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              style={{ flex: 1, background: 'none', border: 'none', padding: '0 1.5rem', outline: 'none', fontSize: '1rem' }}
            />
            <motion.button 
              whileHover={{ y: -2 }}
              whileTap={{ y: 4 }}
              onClick={() => navigate('/involved')}
              style={{ 
                background: '#f97316', color: '#fff', padding: '1.2rem 2.5rem', 
                borderRadius: '16px', border: 'none', fontWeight: 800, cursor: 'pointer',
                boxShadow: '0 8px 0 #c2410c',
                transition: 'all 0.1s ease'
              }}
              onMouseDown={(e) => e.currentTarget.style.boxShadow = '0 2px 0 #c2410c'}
              onMouseUp={(e) => e.currentTarget.style.boxShadow = '0 8px 0 #c2410c'}
            >
              Volunteer Now
            </motion.button>
          </div>
        </div>
      </section>



    </div>
  );
};

export default SocialWelfare;
