import React, { useState } from 'react';
import InputPanel from './components/InputPanel';
import PricingPanel from './components/PricingPanel';

const App = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          💼 AI-Powered Project Pricing Estimator
        </h1>

        <InputPanel onResult={setResult} />
        <PricingPanel result={result} />
      </div>
    </div>
  );
};

export default App;
