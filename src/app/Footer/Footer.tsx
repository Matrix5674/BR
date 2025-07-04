  import React from 'react'
  import {Twitter, Instagram, Youtube} from 'lucide-react'
  
  // Footer Component
  const Footer = () => (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg font-semibold mb-6">Briefreel — Keeping it reel.</p>
        <div className="flex justify-center items-center space-x-6">
          <p className="text-gray-400">Follow us on</p>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Twitter size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Instagram size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Youtube size={24} /></a>
        </div>
      </div>
    </footer>
  );

  export default Footer