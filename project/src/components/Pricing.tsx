import React from 'react';
import { Check, Star, ArrowRight, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '£49',
      period: '/month',
      description: 'Perfect for small businesses just getting started',
      features: [
        'Bookkeeping for up to 50 transactions/month',
        'Monthly reports',
        'Email support'
      ],
      gradient: 'from-slate-600 to-slate-700',
      borderColor: 'border-slate-600',
      buttonStyle: 'bg-slate-700 hover:bg-slate-600 text-white'
    },
    {
      name: 'Standard',
      price: '£99',
      period: '/month',
      description: 'Most popular choice for growing businesses',
      features: [
        'Bookkeeping + VAT + Payroll (up to 5 employees)',
        'Monthly consultation',
        'HMRC correspondence'
      ],
      gradient: 'from-amber-600 to-orange-500',
      borderColor: 'border-amber-500',
      buttonStyle: 'bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white',
      popular: true
    },
    {
      name: 'Premium',
      price: '£149',
      period: '/month',
      description: 'Comprehensive solution for established businesses',
      features: [
        'All of Standard',
        'Corporation Tax Return',
        'Self-assessments for 2 directors',
        'Priority support'
      ],
      gradient: 'from-orange-600 to-red-500',
      borderColor: 'border-orange-500',
      buttonStyle: 'bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-white'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-700/50 backdrop-blur-sm rounded-full px-4 py-2 border border-amber-500/30 mb-6">
            <Zap className="h-4 w-4 text-amber-400" />
            <span className="text-sm text-slate-300">Pricing Plans</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Clear Monthly
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
              Packages
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Choose the plan that fits your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border ${plan.borderColor} transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-amber-400 mr-3 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${plan.buttonStyle} group`}>
                Get Started
                <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-slate-400 mb-6">
              Custom quotes available for businesses with complex needs.
            </p>
            <a 
              href="mailto:Contact@straightbooks.co.uk"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-xl font-semibold hover:from-amber-700 hover:to-orange-600 transition-all duration-300 group"
            >
              Request Custom Quote
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Pricing Image */}
        <div className="mt-16">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&dpr=2"
              alt="Transparent pricing for accounting services"
              className="w-full h-64 object-cover rounded-2xl shadow-lg border border-amber-500/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;