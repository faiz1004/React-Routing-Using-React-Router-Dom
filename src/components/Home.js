import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Welcome to Our App</h1>
      <p>Explore dynamic routing and animations in this enhanced React app.</p>
    </motion.div>
  );
}

export default Home;
