import React from 'react';
import { CheckCircle } from 'lucide-react';


  // "Why we're different" Section
  const DifferentiatorsSection = () => {
    const points = [
      { text: "Verified, not algorithm junk" },
      { text: "Short enough to watch on the subway" },
      { text: "Built for your generation, not your uncle's TV" },
    ];

    return (
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Why We&apos;re Different</h2>
          <div className="space-y-6">
            {points.map((point, index) => (
              <div key={index} className="flex items-center bg-gray-900 p-6 rounded-lg">
                <CheckCircle className="h-8 w-8 text-green-400 mr-4 flex-shrink-0" />
                <p className="text-xl font-medium">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default DifferentiatorsSection