import React from 'react';
import { motion } from 'framer-motion';
import styles from '../style';
import HeroImage from '../assets/robot.png';
import Fruits from '../assets/Fruits.png'
import ShopImage from '../assets/apple.svg';

const Hero = () => {
  return (
    <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
      {/* Left Section */}
      <motion.div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[48px] text-white leading-tight">
          Welcome to <br />
          <span className="text-gradient">Imperial Impex</span>
        </h1>
        <p className={`${styles.paragraph} max-w-[600px] mt-5 text-gray-300`}>
          We are a global import-export firm connecting businesses across the world with trust, transparency, and reliability. 
          From industrial goods to agricultural produce — we deliver quality with every shipment.
        </p>
       <a href="#product">
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="mt-6 px-6 py-3 bg-blue-gradient text-white font-semibold rounded-lg shadow-lg"
  >
    Explore Products
  </motion.button>
</a>
      </motion.div>

      {/* Right Section (Hero Image) */}
      <motion.div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={Fruits}
          alt="Imperial Impex"
          className="w-[100%] h-auto rounded-2xl shadow-lg"
        />
        {/* <motion.img
          src={ShopImage}
          alt="Shop"
          className="absolute w-[200px] bottom-[-30px] right-[-30px] rounded-xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        /> */}
      </motion.div>
    </section>
  );
};

export default Hero;
