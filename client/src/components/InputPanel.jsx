import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader2, Bot } from "lucide-react";


const InputPanel = ({ onResult }) => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  // Debounce input to prevent frequent API calls
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (description.trim().length > 10) {
        analyzeDescription(description);
      }
    }, 800); // debounce for 800ms

    return () => clearTimeout(delayDebounce); // Cleanup the timeout on re-render
  }, [description]);

  const analyzeDescription = async (text) => {
    try {
      setLoading(true);
      const res = await axios.post('http://localhost:5000/api/analyze', { description: text });
      onResult(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 space-y-4 transition-all duration-300">
      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
        <Bot className="w-5 h-5" />
        <h2 className="text-xl sm:text-2xl font-semibold">Describe Your Project</h2>
      </div>

      <textarea
        className="w-full h-40 p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white resize-none transition-all duration-300"
        placeholder="For example: Build a food delivery app with real-time tracking, admin dashboard, payment integration, and chat feature..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Show loading or validation message */}
      {loading ? (
        <div className="flex items-center gap-2 text-blue-500 animate-pulse">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Analyzing with AI...</span>
        </div>
      ) : (
        description.length > 0 && description.length < 10 && (
          <p className="text-sm text-red-500">Please provide a more detailed description.</p>
        )
      )}

      <div className="text-sm text-gray-500 dark:text-gray-400 italic pt-2">
        Tip: The more details you add, the more accurate the pricing!
      </div>
    </div>
  );
};

export default InputPanel;
