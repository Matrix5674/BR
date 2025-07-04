import React, { MouseEventHandler } from 'react'

interface NavProps {
  handleEarlyAccessClick: MouseEventHandler<HTMLButtonElement>;
}

const Nav: React.FC<NavProps> = ({ handleEarlyAccessClick }) => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-30 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-2xl text-white">Briefreel</span>
          </div>
          <div className="hidden md:block">
            <button
              onClick={handleEarlyAccessClick}
              className="bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300"
            >
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </nav>
  );


export default Nav
