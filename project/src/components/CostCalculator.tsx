import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, ArrowRight } from 'lucide-react';

const CostCalculator = () => {
  const [businessSize, setBusinessSize] = useState('small');
  const [monthlyTransactions, setMonthlyTransactions] = useState('50');
  const [services, setServices] = useState<string[]>(['bookkeeping']);
  const [employees, setEmployees] = useState('1');
  const [estimatedCost, setEstimatedCost] = useState(0);

  const businessSizes = [
    { value: 'micro', label: 'Micro (1-9 employees)', multiplier: 0.8 },
    { value: 'small', label: 'Small (10-49 employees)', multiplier: 1.0 },
    { value: 'medium', label: 'Medium (50-249 employees)', multiplier: 1.5 },
    { value: 'large', label: 'Large (250+ employees)', multiplier: 2.0 }
  ];

  const transactionRanges = [
    { value: '50', label: 'Up to 50 transactions', cost: 50 },
    { value: '100', label: '51-100 transactions', cost: 80 },
    { value: '200', label: '101-200 transactions', cost: 120 },
    { value: '500', label: '201-500 transactions', cost: 180 },
    { value: '1000', label: '500+ transactions', cost: 250 }
  ];

  const serviceOptions = [
    { value: 'bookkeeping', label: 'Basic Bookkeeping', cost: 50 },
    { value: 'tax', label: 'Tax Preparation', cost: 80 },
    { value: 'payroll', label: 'Payroll Services', cost: 60 },
    { value: 'reports', label: 'Financial Reports', cost: 40 },
    { value: 'advisory', label: 'Business Advisory', cost: 100 },
    { value: 'audit', label: 'Audit Support', cost: 120 }
  ];

  const employeeRanges = [
    { value: '1', label: '1-5 employees', multiplier: 1.0 },
    { value: '10', label: '6-15 employees', multiplier: 1.2 },
    { value: '25', label: '16-30 employees', multiplier: 1.5 },
    { value: '50', label: '31-50 employees', multiplier: 1.8 },
    { value: '100', label: '50+ employees', multiplier: 2.2 }
  ];

  useEffect(() => {
    calculateCost();
  }, [businessSize, monthlyTransactions, services, employees]);

  const calculateCost = () => {
    let baseCost = 0;

    // Base cost from transactions
    const transactionCost = transactionRanges.find(t => t.value === monthlyTransactions)?.cost || 50;
    baseCost += transactionCost;

    // Add service costs
    services.forEach(service => {
      const serviceCost = serviceOptions.find(s => s.value === service)?.cost || 0;
      baseCost += serviceCost;
    });

    // Apply business size multiplier
    const sizeMultiplier = businessSizes.find(bs => bs.value === businessSize)?.multiplier || 1.0;
    baseCost *= sizeMultiplier;

    // Apply employee multiplier if payroll is selected
    if (services.includes('payroll')) {
      const employeeMultiplier = employeeRanges.find(er => er.value === employees)?.multiplier || 1.0;
      baseCost *= employeeMultiplier;
    }

    setEstimatedCost(Math.round(baseCost));
  };

  const handleServiceChange = (serviceValue: string) => {
    if (services.includes(serviceValue)) {
      setServices(services.filter(s => s !== serviceValue));
    } else {
      setServices([...services, serviceValue]);
    }
  };

  return (
    <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/30">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-400 rounded-xl mb-4">
          <Calculator className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Cost Calculator</h3>
        <p className="text-slate-400">Get an estimated quote for your accounting needs</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {/* Business Size */}
          <div>
            <label className="block text-sm font-semibold text-white mb-3">Business Size</label>
            <div className="space-y-2">
              {businessSizes.map((size) => (
                <label key={size.value} className="flex items-center p-3 bg-slate-800/50 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-colors cursor-pointer">
                  <input
                    type="radio"
                    name="businessSize"
                    value={size.value}
                    checked={businessSize === size.value}
                    onChange={(e) => setBusinessSize(e.target.value)}
                    className="mr-3 text-amber-500 bg-slate-700 border-slate-600 focus:ring-amber-500"
                  />
                  <span className="text-slate-300">{size.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Monthly Transactions */}
          <div>
            <label className="block text-sm font-semibold text-white mb-3">Monthly Transactions</label>
            <select
              value={monthlyTransactions}
              onChange={(e) => setMonthlyTransactions(e.target.value)}
              className="w-full p-3 bg-slate-800/50 border border-amber-500/20 rounded-lg text-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              {transactionRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          {/* Employees (if payroll selected) */}
          {services.includes('payroll') && (
            <div>
              <label className="block text-sm font-semibold text-white mb-3">Number of Employees</label>
              <select
                value={employees}
                onChange={(e) => setEmployees(e.target.value)}
                className="w-full p-3 bg-slate-800/50 border border-amber-500/20 rounded-lg text-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                {employeeRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {/* Services */}
          <div>
            <label className="block text-sm font-semibold text-white mb-3">Required Services</label>
            <div className="space-y-3">
              {serviceOptions.map((service) => (
                <label key={service.value} className="flex items-center p-3 bg-slate-800/50 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    value={service.value}
                    checked={services.includes(service.value)}
                    onChange={() => handleServiceChange(service.value)}
                    className="mr-3 text-amber-500 bg-slate-700 border-slate-600 focus:ring-amber-500"
                  />
                  <span className="text-slate-300 flex-1">{service.label}</span>
                  <span className="text-sm text-slate-400">+£{service.cost}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Estimated Cost */}
          <div className="rounded-xl p-6 border border-amber-500/30" style={{ backgroundColor: '#0C203B' }}>
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="h-8 w-8 text-amber-400" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                £{estimatedCost}
              </div>
              <div className="text-sm text-slate-400 mb-4">Estimated monthly cost</div>
              <p className="text-xs text-slate-500">
                This is an estimate. Final pricing may vary based on specific requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href="mailto:Contact@straightbooks.co.uk?subject=Custom Quote Request"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-xl font-semibold hover:from-amber-700 hover:to-orange-600 transition-all duration-300 group"
        >
          Request Detailed Quote
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default CostCalculator;