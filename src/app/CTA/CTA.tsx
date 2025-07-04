import React, { MouseEventHandler } from 'react'

interface CTAProps {
    handleEarlyAccessClick: MouseEventHandler<HTMLButtonElement>
}

  // CTA Section
  const CTASection: React.FC<CTAProps> = ({ handleEarlyAccessClick }) => (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to keep it reel?</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Be the first to try Briefreel and help shape the future of news.
        </p>
        <button
          onClick={handleEarlyAccessClick}
          className="bg-white text-black text-lg font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          ✨ Get Early Access
        </button>
      </div>
    </section>
  );

  export default CTASection