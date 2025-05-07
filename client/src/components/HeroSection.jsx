// src/components/HeroSection.jsx
import React from 'react';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="text-center my-10 px-4">
      <div className="flex justify-center items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
        <Sparkles className="w-6 h-6 animate-pulse" />
        <h1 className="text-3xl sm:text-4xl font-bold">
          AI-Powered Pricing Estimator
        </h1>
      </div>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Describe your software project and get instant effort + pricing analysis
        with the help of AI. Ideal for freelancers, startups, and agencies.
      </p>
    </div>
  );
};

export default HeroSection;
