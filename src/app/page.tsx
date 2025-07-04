'use client'

import { useState } from "react";
import { appendToGoogleSheet } from "./google-sheet-append";
import Nav from "./Nav/Nav";
import Hero from "./Hero/Hero";
import WhyBriefreelSection from "./WhyBriefreel/WhyBriefreel";
import HowItWorksSection from "./HowItWorks/HowItWorks";
import DifferentiatorsSection from "./Differentiators/Differentiators";
import CTASection from "./CTA/CTA"
import Footer from "./Footer/Footer";
import EarlyAccessModal from "./EarlyAccessModal/EarlyAccessModal";

export default function Home() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEarlyAccessClick = () => {
    setIsModalOpen(true);
    setIsSubmitted(false);
    setEmail('');
    setName('')
  };

  const handleModalClose = async () => {
    const data = {
      name: name, 
      email: email
    }
    const result = await appendToGoogleSheet(data);
    setIsModalOpen(false);
    if (result) {
      console.log("Data successfully uploaded!")
    } else {
      console.log("Data failed to upload.")
    }
  };

  const handleFormSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    //Basic name validation
    if (name) {
      console.log('Submitted name', name);
    }
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
      <EarlyAccessModal isModalOpen={isModalOpen} handleModalClose={handleModalClose} isSubmitted={isSubmitted} handleFormSubmit={handleFormSubmit} name={name} setName={setName} email={email} setEmail={setEmail}/>

    </div>
  );
}
