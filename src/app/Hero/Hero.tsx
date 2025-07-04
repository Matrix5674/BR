import React, { MouseEventHandler } from 'react'

interface HeroProps {
    handleEarlyAccessClick: MouseEventHandler<HTMLButtonElement>
}

const Hero: React.FC<HeroProps> = ( { handleEarlyAccessClick } ) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://placehold.co/1920x1080/000000/FFFFFF?text=Loading..."
        >
          {/* Using a generic stock video for background. Replace with your own. */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-a-girl-looking-at-the-sea-from-a-cliff-42213-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
          Keeping it reel.
          <br />
          <span className="text-gray-300">Stay informed in 60 seconds.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8">
          The verified vertical video news app for Gen Z.
        </p>
        <button
          onClick={handleEarlyAccessClick}
          className="bg-white text-black text-lg font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          ✨ Get Early Access
        </button>
      </div>
    </section>
  )
}

export default Hero
