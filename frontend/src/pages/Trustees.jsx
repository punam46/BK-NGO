import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, GraduationCap, Dribbble, Newspaper, ExternalLink, BookOpen, Landmark } from 'lucide-react';

const trustees = [
  { name: 'Shri. Kishor Nivrutti Yelmame', position: 'PRESIDENT', color: '#ef4444' },
  { name: 'Shri. Nivrutti Maliba Yelmame', position: 'VICE PRESIDENT', color: '#3b82f6' },
  { name: 'Dr. Adv. Bhagwan Nivrutti Yelmame', position: 'SECRETARY', color: '#10b981' },
  { name: 'Smt. Nandabai Nivrutti Yelmame', position: 'JOINT SECRETARY', color: '#ef4444' },
  { name: 'Smt. Vaishali Bhagwan Yelmame', position: 'TREASURER', color: '#8b5cf6' },
  { name: 'Smt. Harshada Kishor Yelmame', position: 'MEMBER', color: '#ec4899' },
  { name: 'Shri. Bhausaheb Kondaji Bhadange', position: 'MEMBER', color: '#ef4444' },
  { name: 'Shri. Santosh Kondaji Bhadange', position: 'MEMBER', color: '#3b82f6' },
  { name: 'Smt. Sangeeta Anil Bhadange', position: 'MEMBER', color: '#10b981' },
  { name: 'Shri. Avadhoot Madhukar Gaikwad', position: 'MEMBER', color: '#ef4444' },
  { name: 'Mr. Khanderao Shivram Salve', position: 'MEMBER', color: '#3b82f6' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const Trustees = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto" style={{ minHeight: '80vh', backgroundColor: '#f8fafc' }}>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-main)' }}>
          Our <span style={{ color: '#e53935' }}>Journey & Leadership</span>
        </h1>
        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6"></div>
      </motion.div>


      {/* Trustees Section Header */}
      <div className="text-center mb-10 mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Our <span style={{ color: '#e53935' }}>Trustees</span></h2>
        <p className="text-gray-600">Meet the dedicated individuals who lead and guide us.</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {trustees.map((trustee, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.03, translateY: -5 }}
            className="bg-white rounded-2xl p-6 flex flex-col justify-center"
            style={{ 
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              borderLeft: `5px solid ${trustee.color}`,
              minHeight: '120px'
            }}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-2">{trustee.name}</h3>
            <p className="text-sm font-semibold tracking-wider" style={{ color: '#94a3b8' }}>
              {trustee.position}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* New Since 2009 & Institutions Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-24">
        {/* Left Side: Journey Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-sm relative"
          style={{ borderTopLeftRadius: '0', border: '1px solid #f1f5f9' }}
        >
          <div className="absolute -top-4 -left-2 text-yellow-400 text-6xl font-serif">"</div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Since 2009</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Our journey started with a simple dream: to give every child a chance to succeed. Since <strong>2009</strong>, the <strong>BK Education And Welfare Society</strong> has grown from a small idea into a large family of schools and academies.
            </p>
            <p>
              We believe that education is not just about passing exams, but about building character and confidence. For more than <strong className="text-yellow-600">15+ years</strong>, we have worked hard to help students learn and grow through our different schools.
            </p>
            <p>
              We look beyond just books. We want to create a place where students become smart, strong, and good human beings. Our goal is to provide a safe and happy environment where every student can explore their interests in science, sports, and culture.
            </p>
          </div>
          <div className="mt-8 border-l-4 border-yellow-400 pl-6 py-2">
            <p className="text-gray-500 italic font-medium">
              We are committed to teaching values that help our children become responsible and kind citizens of tomorrow.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Our Institutions */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-900">Our Institutions</h2>
          </div>

          <div className="space-y-4">
            {/* Institution 1 */}
            <motion.a 
              href="https://www.bksports.in" target="_blank" rel="noreferrer" 
              className="block bg-white p-5 rounded-2xl border border-gray-100 group"
              whileHover={{ scale: 1.02, translateY: -4, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-5">
                <div className="bg-red-50 p-3 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors flex-shrink-0">
                  <Dribbble size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-base">BK Sports Academy</h3>
                  <p className="text-blue-500 text-xs md:text-sm flex items-center gap-1 mt-0.5">www.bksports.in <ExternalLink size={12} /></p>
                </div>
              </div>
            </motion.a>

            {/* Institution 2 */}
            <motion.a 
              href="https://www.bktimes.co.in" target="_blank" rel="noreferrer" 
              className="block bg-white p-5 rounded-2xl border border-gray-100 group"
              whileHover={{ scale: 1.02, translateY: -4, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-5">
                <div className="bg-slate-50 p-3 rounded-xl text-slate-600 group-hover:bg-slate-600 group-hover:text-white transition-colors flex-shrink-0">
                  <Newspaper size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-base">BK Times</h3>
                  <p className="text-blue-500 text-xs md:text-sm flex items-center gap-1 mt-0.5">www.bktimes.co.in <ExternalLink size={12} /></p>
                </div>
              </div>
            </motion.a>

            {/* Institution 3 */}
            <motion.a 
              href="https://www.bkscience.in" target="_blank" rel="noreferrer" 
              className="block bg-white p-5 rounded-2xl border border-gray-100 group"
              whileHover={{ scale: 1.02, translateY: -4, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-5">
                <div className="bg-blue-50 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                  <Microscope size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-base">BK Science Academy</h3>
                  <p className="text-blue-500 text-xs md:text-sm flex items-center gap-1 mt-0.5">www.bkscience.in <ExternalLink size={12} /></p>
                </div>
              </div>
            </motion.a>

            {/* Institution 4 */}
            <motion.a 
              href="https://bkeducation.co.in" target="_blank" rel="noreferrer" 
              className="block bg-white p-5 rounded-2xl border border-gray-100 group"
              whileHover={{ scale: 1.02, translateY: -4, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-5">
                <div className="bg-purple-50 p-3 rounded-xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors flex-shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-base">BK Career Academy</h3>
                  <p className="text-blue-500 text-xs md:text-sm flex items-center gap-1 mt-0.5">bkeducation.co.in <ExternalLink size={12} /></p>
                </div>
              </div>
            </motion.a>

            {/* Institution 5 */}
            <motion.a 
              href="https://www.bksanskar.in" target="_blank" rel="noreferrer" 
              className="block bg-white p-5 rounded-2xl border border-gray-100 group"
              whileHover={{ scale: 1.02, translateY: -4, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-5">
                <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors flex-shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-base" title="SANSKAR ENGLISH MEDIUM SCHOOL">SANSKAR ENGLISH MEDIUM SCHOOL</h3>
                  <p className="text-blue-500 text-xs md:text-sm flex items-center gap-1 mt-0.5">www.bksanskar.in <ExternalLink size={12} /></p>
                </div>
              </div>
            </motion.a>

            {/* Institution 6 */}
            <motion.a 
              href="https://bkgurukul.in" target="_blank" rel="noreferrer" 
              className="block bg-white p-5 rounded-2xl border border-gray-100 group"
              whileHover={{ scale: 1.02, translateY: -4, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-5">
                <div className="bg-teal-50 p-3 rounded-xl text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors flex-shrink-0">
                  <Landmark size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-base" title="BK GURUKUL VIDYANIKETAN">BK GURUKUL VIDYANIKETAN</h3>
                  <p className="text-blue-500 text-xs md:text-sm flex items-center gap-1 mt-0.5">bkgurukul.in <ExternalLink size={12} /></p>
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Trustees;
