import React from 'react';
import { BookOpen, FileText, Calculator, Users, Building, CreditCard, Zap } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: BookOpen,
      title: 'Bookkeeping',
      description: 'Complete bookkeeping services to keep your financial records accurate and up-to-date.',
      gradient: 'from-amber-500 to-orange-400'
    },
    {
      icon: FileText,
      title: 'VAT Registration & Filing',
      description: 'VAT registration assistance and regular filing to keep you compliant with HMRC.',
      gradient: 'from-amber-600 to-orange-500'
    },
    {
      icon: Calculator,
      title: 'Corporation Tax Returns',
      description: 'Professional preparation and filing of your corporation tax returns.',
      gradient: 'from-orange-500 to-red-400'
    },
    {
      icon: Users,
      title: 'Payroll (PAYE) Management',
      description: 'Complete payroll management including PAYE, National Insurance, and RTI submissions.',
      gradient: 'from-amber-500 to-yellow-400'
    },
    {
      icon: FileText,
      title: 'Self-Assessment Filing',
      description: 'Self-assessment filing for directors and freelancers to meet HMRC deadlines.',
      gradient: 'from-orange-600 to-amber-500'
    },
    {
      icon: Building,
      title: 'Limited Company Formation & Compliance',
      description: 'Company formation services and ongoing compliance management.',
      gradient: 'from-amber-600 to-orange-600'
    }
  ];

  const addOnServices = [
    {
      icon: Building,
      title: 'Registered UK Address',
      description: 'Professional UK address for your business registration.',
      gradient: 'from-amber-500 to-orange-400'
    },
    {
      icon: Users,
      title: 'Virtual CFO Services',
      description: 'Strategic financial guidance and CFO-level support.',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      icon: CreditCard,
      title: 'Business Bank Account Setup',
      description: 'Assistance with setting up business banking relationships.',
      gradient: 'from-amber-600 to-orange-500'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-amber-500/30 mb-6">
            <Zap className="h-4 w-4 text-amber-400" />
            <span className="text-sm text-slate-300">Our Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Comprehensive Accounting
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Professional accounting services designed specifically for UK small businesses and SMEs.
          </p>
        </div>

        {/* Main Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Optional Add-Ons */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Optional Add-Ons</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {addOnServices.map((service, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-slate-700/30 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Image */}
        <div className="text-center">
          <div className="relative">
            <img 
              src="https://www.capterra.com/assets-bx-capterra/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fpx6a31ta05xu%2F1Y4wPDBBfZNVQTLmLUILQ5%2F170ebcb2cc9149090dcd8dabdccb5f70%2FCAP-US-Header-05-1-Finance_and_Accounting-Accounting_Basics_US_1200x400_Carrot_DLVR.png&w=3840&q=75"
              alt="Professional accounting services"
              className="w-full h-64 object-cover rounded-2xl shadow-lg border border-amber-500/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-2">Professional Excellence</h4>
                <p className="text-slate-300">Delivering quality accounting services you can trust</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;