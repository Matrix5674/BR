'use client'

import { useState } from "react";
import Nav from "./Nav/Nav";
import Hero from "./Hero/Hero";
import WhyBriefreelSection from "./WhyBriefreel";
import HowItWorksSection from "./HowItWorks/HowItWorks";
import DifferentiatorsSection from "./Differentiators/Differentiators";
import CTASection from "./CTA/CTA"
import Footer from "./Footer/Footer";
import EarlyAccessModal from "./EarlyAccessModal/EarlyAccessModal";

export default function Home() {

  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEarlyAccessClick = () => {
    setIsModalOpen(true);
    setIsSubmitted(false);
    setEmail('');
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Basic email validation
    if (email && /\S+@\S+\.\S+/.test(email)) {
      console.log('Submitted email:', email);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-black">
      <Nav handleEarlyAccessClick={ handleEarlyAccessClick }/>
      <main>
        <Hero handleEarlyAccessClick= { handleEarlyAccessClick }/>
        <WhyBriefreelSection/>
        <HowItWorksSection/>
        <DifferentiatorsSection/>
        <CTASection handleEarlyAccessClick={handleEarlyAccessClick}/>
      </main>

      <Footer/>
      <EarlyAccessModal isModalOpen={isModalOpen} handleModalClose={handleModalClose} isSubmitted={isSubmitted} handleFormSubmit={handleFormSubmit} email={email} setEmail={setEmail}/>

    </div>
  );
}
