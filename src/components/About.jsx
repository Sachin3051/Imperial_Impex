// ./components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../style';


const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
  id="about"
  className={`flex flex-col items-center justify-center text-center ${styles.paddingY}`}
>
  <motion.h1
    className="text-5xl font-bold mb-4 text-gradient"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    About Us
  </motion.h1>
  <motion.p
    className="text-lg max-w-3xl text-white"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 1 }}
  >
    Bridging global markets with premium quality produce and general goods.
  </motion.p>
</section>


      {/* Company Description */}
      <section className="py-16 px-8 max-w-6xl mx-auto space-y-6">
        <motion.h2
          className="text-3xl font-semibold text-gradient text-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Who We Are
        </motion.h2>
        <motion.p
          className="leading-relaxed text-white text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          IMPERIAL IMPEX is a dynamic and fast-growing import-export company, proudly serving as
          a global bridge between the finest producers and quality-conscious consumers around the world.
          Specializing in the trade of fresh fruits, vegetables, and a wide array of general goods,
          we are committed to delivering excellence, reliability, and sustainability in every shipment.
        </motion.p>

        <motion.p
          className="leading-relaxed text-white text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Established with a vision to create seamless international trade connections,
          IMPERIAL IMPEX has built a solid reputation for quality products, customer-centric service,
          and ethical business practices. We understand the pulse of global markets and bring a
          fresh, responsive approach to international commerce.
        </motion.p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-8">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-gradient mb-4">Our Mission</h2>
          <p className="text-lg text-white leading-relaxed">
            Our mission is to empower global trade by providing premium quality agricultural produce
            and general goods through transparent, efficient, and customer-focused operations.
            We aim to foster long-term partnerships and contribute to the growth of local producers
            and global supply chains alike.
          </p>
        </motion.div>
      </section>

      {/* Offerings Section */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gradient mb-8 text-center">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "🥭 Fresh Fruits",
              desc: "From luscious mangoes and bananas to apples, grapes, and citrus fruits, we export only hand-picked, quality-checked produce that meets international standards.",
            },
            {
              title: "🥬 Fresh Vegetables",
              desc: "We provide a wide range of farm-fresh vegetables like onions, tomatoes, potatoes, leafy greens, and exotic varieties, ensuring freshness and nutritional value.",
            },
            {
              title: "📦 General Goods",
              desc: "In addition to agricultural produce, we also specialize in exporting and importing a variety of general merchandise such as dry foods, FMCG products, and more.",
            },
          ].map((item, i) => (
            <motion.div
  key={i}
  className="bg-slate-800 shadow-lg rounded-2xl p-6 border border-gray-700 hover:shadow-2xl transition-all"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: i * 0.2, duration: 0.8 }}
  viewport={{ once: true }}
>

              <h3 className="text-xl font-bold text-gradient mb-3">{item.title}</h3>
              <p className="text-white leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-800 py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-semibold text-gradient mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why Choose IMPERIAL IMPEX?
          </motion.h2>
          <ul className="text-left grid md:grid-cols-2 gap-6 text-lg text-white">
            {[
              "✅ Quality Assurance: Every product undergoes stringent quality checks to preserve freshness and integrity.",
              "🌍 Global Network: Strong connections with suppliers and buyers across continents.",
              "⚙️ Customized Solutions: Flexible packaging, shipping, and documentation to suit your business model.",
              "⏱️ Timely Delivery: Prompt, safe, and hassle-free delivery, worldwide.",
              "🌱 Sustainability: Committed to eco-friendly practices, ethical sourcing, and reducing food waste.",
            ].map((point, i) => (
              <motion.li
                key={i}
                className="p-4 bg-slate-800 shadow-md rounded-xl hover:shadow-xl transition"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                {point}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-8 max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-semibold text-gradient mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Vision
        </motion.h2>
        <motion.p
          className="text-lg text-white leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          To become a globally recognized leader in the export and import of high-quality agricultural
          and general goods—respected for our values, trusted for our service, and preferred for our products.
        </motion.p>
      </section>

      {/* Contact CTA */}
      <section className="bg-slate-800 text-white py-16 text-center ">
        <motion.h2
          className="text-3xl font-semibold mb-4 text-gradient"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Connect With Us
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-lg mb-8 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Whether you are looking to source premium fruits and vegetables or explore reliable partners
          for general goods, IMPERIAL IMPEX is your trusted gateway to global trade. Let’s grow together,
          sustainably and successfully.
        </motion.p>
        <a
          href="/contact"
          className="bg-slate-800 text-gradient font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default About;
