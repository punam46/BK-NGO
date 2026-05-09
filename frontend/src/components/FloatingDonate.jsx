import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FloatingDonate = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 100 }}
      animate={{
        opacity: 1, scale: 1, y: 0,
        rotate: [0, -5, 5, -5, 5, 0]
      }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        rotate: {
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut"
        }
      }}
      onClick={() => navigate('/donate')}
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        zIndex: 9999,
        width: '70px',
        height: '70px',
        background: 'linear-gradient(135deg, #ff5722 0%, #ff7043 100%)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 10px 30px rgba(255,87,34,0.4)',
        border: '4px solid #fff'
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Heart className="text-white" size={32} fill="white" />
      </motion.div>





    </motion.div >
  );
};

export default FloatingDonate;
