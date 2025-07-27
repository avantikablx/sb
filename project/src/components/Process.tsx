import React from 'react';
import { MessageCircle, FileCheck, Settings, TrendingUp } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Initial Consultation',
      description: 'We start with a comprehensive discussion about your business needs, goals, and current financial situation.',
      details: ['Free 30-minute consultation', 'Business needs assessment', 'Service recommendation', 'Custom proposal']
    },
    {
      icon: FileCheck,
      title: 'Setup & Onboarding',
      description: 'Our team handles all the setup requirements and ensures a smooth transition to our services.',
      details: ['Document collection', 'System integration', 'Process documentation', 'Team training']
    },
    {
      icon: Settings,
      title: 'Implementation',
      description: 'We implement our proven processes and begin managing your financial operations efficiently.',
      details: ['Process automation', 'Regular reporting', 'Ongoing monitoring', 'Quality assurance']
    },
    {
      icon: TrendingUp,
      title: 'Growth & Optimization',
      description: 'Continuous improvement and strategic guidance to help your business achieve its financial goals.',
      details: ['Performance reviews', 'Strategic planning', 'Process optimization', 'Growth support']
    }
  ];

  return (
    <section className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-700/50 backdrop-blur-sm rounded-full px-4 py-2 border border-amber-500/30 mb-6">
            <Settings className="h-4 w-4 text-amber-400" />
            <span className="text-sm text-slate-300">Our Process</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Our Simple
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Getting started with StraightBooks is easy. Our streamlined process ensures 
            you're up and running quickly with minimal disruption to your business.
          </p>
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="lg:absolute lg:-top-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full flex items-center justify-center mb-6 lg:mb-0 mx-auto lg:mx-0 shadow-lg">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg lg:mt-12 border border-amber-500/20">
                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                  <div className="text-center lg:text-left">
                    <div className="text-sm font-semibold text-amber-400 mb-2">
                      Step {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-slate-300">
                          <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-slate-400 mb-6">
              Take the first step towards better financial management. Schedule your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+447398147870"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-lg font-semibold hover:from-amber-700 hover:to-orange-600 transition-colors"
              >
                Call +44 7398 147870
              </a>
              <a 
                href="mailto:Contact@straightbooks.co.uk"
                className="inline-flex items-center px-8 py-4 border-2 border-amber-500 text-amber-400 rounded-lg font-semibold hover:bg-amber-500 hover:text-white transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;