
import React from 'react'
import {CheckCircle} from 'lucide-react'

interface EarlyAccessModalProps {
  isModalOpen: boolean;
  handleModalClose: () => void;
  isSubmitted: boolean;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

  // Early Access Modal
  const EarlyAccessModal: React.FC<EarlyAccessModalProps> = ({ isModalOpen, handleFormSubmit, handleModalClose, isSubmitted, email, setEmail}) => {
    if (!isModalOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-gray-900 text-white rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-in-out scale-95 animate-scale-in">
          <div className="p-8 text-center">
            <button onClick={handleModalClose} className="absolute top-4 right-4 text-gray-500 hover:text-white">&times;</button>
            
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold mb-2">Get Early Access</h3>
                <p className="text-gray-400 mb-6">Join the waitlist to be one of the first to try Briefreel.</p>
                <form onSubmit={handleFormSubmit}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-black font-bold py-3 px-4 rounded-lg hover:bg-gray-200 transition duration-300"
                  >
                    Join the Waitlist
                  </button>
                </form>
              </>
            ) : (
              <div>
                <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
                <p className="text-gray-400 mb-6">Thanks for signing up! We'll let you know as soon as Briefreel is ready for you.</p>
                <button
                  onClick={handleModalClose}
                  className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
        <style jsx>{`
          @keyframes scale-in {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-scale-in {
            animation: scale-in 0.3s ease-out forwards;
          }
        `}</style>
      </div>
    );
  };

export default EarlyAccessModal