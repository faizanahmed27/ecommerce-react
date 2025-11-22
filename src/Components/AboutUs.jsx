import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Base from "./Base";
import pic from '../Components/Images/aboutUs.png'

const AboutUs = () => {
  return (
    <Base>
    <div className="font-sans">

      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1556742400-b5a7c0e3c7a0')] bg-cover bg-center h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div 
          className="relative text-center text-white px-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            About <span className="text-yellow-400">ShopEase</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto drop-shadow">
            We deliver premium products with style, quality, and trust. Explore our story and mission.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At ShopEase, our mission is simple: provide the best quality products curated for your lifestyle.
            We aim to make online shopping enjoyable, secure, and affordable.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From fashion to gadgets, we bring a handpicked selection of products that inspire trust, style, and convenience.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={pic}
            alt="Our Mission"
            className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </section>

      {/* Animated Stats */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            { num: 10000, label: "Products" },
            { num: 200000, label: "Happy Customers" },
            { num: 24, label: "Support Hours" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-10 hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-indigo-600">
                <CountUp end={item.num} duration={2} separator="," />
                {item.label === "Support Hours" ? "/7" : "+"}
              </h3>
              <p className="text-gray-600 mt-2 text-lg">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Quality",
              desc: "We handpick every product to ensure exceptional quality.",
            },
            {
              title: "Trust",
              desc: "Our customers are our top priority. Every order is handled with care.",
            },
            {
              title: "Innovation",
              desc: "We bring the latest trends and technology to your fingertips.",
            },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-indigo-600">{value.title}</h3>
              <p className="text-gray-700">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <motion.section
        className="bg-indigo-600 py-20 text-center text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
       <h2 className="text-4xl font-bold mb-4" style={{ color: '#cec4cfff' }}>Ready to Shop?</h2>
        <p className="mb-6 text-lg max-w-xl mx-auto">
          Discover thousands of products curated for you. Quality, style, and trust all in one place.
        </p>
        <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all">
          Explore Products
        </button>
      </motion.section>

    </div>
    </Base>
  );
};

export default AboutUs;
