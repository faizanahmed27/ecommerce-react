import React from "react";
import pic from '../Components/Images/about.jpg'
import Base from './Base';

export default function AboutUs() {
  return (
    <Base>
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-gray-900">
      {/* Background Image */}
      <img
        src={pic} // Replace with your image
        alt="About Us"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Overlay Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl font-bold text-white mb-4">ABOUT US</h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold">[Your Store Name]</span>, 
          your one-stop destination for quality products at unbeatable prices. 
          We are committed to making online shopping simple, enjoyable, and reliable.
        </p>
      </div>
    </section>
    </Base>
  );
}
