import React from 'react'
import { Smartphone, BarChart, Globe } from 'lucide-react';


const HowItWorksSection = () => {
    const steps = [
      {
        icon: <BarChart className="h-10 w-10 text-white" />,
        title: "Choose your vibe",
        description: "Pick topics you care about — climate, sports, global news, tech, or politics.",
      },
      {
        icon: <Smartphone className="h-10 w-10 text-white" />,
        title: "Watch and swipe",
        description: "30–90 second vertical news clips from real journalists and trusted creators. Swipe right for a deeper dive whenever you want.",
      },
      {
        icon: <Globe className="h-10 w-10 text-white" />,
        title: "Stay in the loop",
        description: "Get push alerts for breaking stories. Stay ahead of the headlines without leaving your feed.",
      },
    ];

    return (
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center p-6 bg-gray-800 rounded-xl">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-700 mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default HowItWorksSection