import React from 'react';
import { DollarSign, Clock, Zap, Cpu } from 'lucide-react';

const Stat = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 shadow-sm">
    <Icon className="w-5 h-5 text-blue-500" />
    <div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
      <div className="text-lg font-semibold text-gray-900 dark:text-white">{value}</div>
    </div>
  </div>
);

const PricingPanel = ({ result }) => {
  // Return null if there's no result to display
  if (!result || Object.keys(result).length === 0) return null;

  const { humanHours, humanCost, aiCost, surcharge, totalCost } = result;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 mt-6 space-y-6 transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
        💰 Estimated Cost Breakdown
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Display stats dynamically */}
        <Stat icon={Clock} label="Estimated Human Hours" value={`${humanHours} hrs`} />
        <Stat icon={DollarSign} label="Human Developer Cost" value={`$${humanCost}`} />
        <Stat icon={Cpu} label="AI Processing Cost" value={`$${aiCost}`} />
        <Stat icon={Zap} label="Total Surcharge" value={surcharge} />
      </div>

      <div className="border-t pt-4 flex justify-between items-center">
        <span className="text-lg font-medium text-gray-600 dark:text-gray-300">Total Estimated Cost</span>
        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{totalCost}</span>
      </div>
    </div>
  );
};

export default PricingPanel;
