import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import styles from "../style";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);
    formData.append("access_key", "16e127aa-8323-43c2-8752-68aa3887ac8e"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    console.log(result);

    setLoading(false);

    if (result.success) {
      toast.success("✅ Message sent successfully!");
      form.current.reset();
    } else {
      toast.error("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className={`${styles.paddingY} ${styles.boxWidth} mx-auto relative`}
    >
      <Toaster position="top-center" />

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
          onSubmit={sendEmail}
          className="w-full max-w-4xl bg-[#1f2937] p-8 rounded-xl shadow-lg space-y-6"
        >
          <input type="hidden" name="from_name" value="Website Contact Form" />
          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          />
          <input type="hidden" name="replyto" value="email" />

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
            disabled={loading}
            className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary rounded-[10px]`}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
