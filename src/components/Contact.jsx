import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "../style"; // adjust path as needed

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(false);

  return (
    <section id="contact" className={`${styles.paddingY} ${styles.boxWidth} mx-auto relative`}>
      {/* Background gradient blur */}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] bottom-40 rounded-full blue__gradient" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full flex flex-col items-center relative z-[1]"
      >
        <h2 className="text-white text-4xl font-bold mb-8 text-center">
           <span className="text-gradient">Contact</span> Us
        </h2>

        <form
          ref={form}
          // onSubmit={sendEmail}
          className="w-full max-w-4xl bg-[#1f2937] p-8 rounded-xl shadow-lg space-y-6"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="flex-1 px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:text-gradient"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="flex-1 px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:text-gradient"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:text-gradient"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full h-40 px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:text-gradient resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
          >
            Send Message
          </motion.button>

          {/* Success / Error messages */}
          {messageSent && (
            <p className="text-green-400 text-sm mt-2">✅ Message sent successfully!</p>
          )}
          {error && (
            <p className="text-red-500 text-sm mt-2">❌ Failed to send message. Please try again.</p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
