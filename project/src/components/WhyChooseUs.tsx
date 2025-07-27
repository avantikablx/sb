import React from 'react';
import { Shield, Clock, Users, Award, HeartHandshake, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Trusted & Secure',
      description: 'Bank-level security and confidentiality. Your financial data is protected with the highest standards of cybersecurity.'
    },
    {
      icon: Clock,
      title: 'Always On Time',
      description: 'Never miss a deadline again. We ensure all filings, reports, and submissions are completed accurately and on time.'
    },
    {
      icon: Users,
      title: 'Personal Service',
      description: 'You get a dedicated account manager who understands your business and provides personalized attention.'
    },
    {
      icon: Award,
      title: 'Qualified Experts',
      description: 'Our team consists of ACCA and CIMA qualified accountants with extensive industry experience.'
    },
    {
      icon: HeartHandshake,
      title: 'Client-Focused',
      description: 'We build long-term relationships by putting your success at the center of everything we do.'
    },
    {
      icon: Zap,
      title: 'Technology-Driven',
      description: 'We use cutting-edge accounting software to provide real-time insights and streamlined processes.'
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-amber-500/30 mb-6">
            <Award className="h-4 w-4 text-amber-400" />
            <span className="text-sm text-slate-300">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Why Choose
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
              StraightBooks?
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We're not just another accounting firm. We're your strategic financial partner, 
            committed to your success with proven expertise and unwavering dedication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
              <p className="text-slate-400 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <img 
                src="https://academyflex.com/wp-content/uploads/2024/05/Top-Chartered-Institute-of-Management-Accountants-CIMA-Certifications-768x439.jpg"
                alt="Professional certification"
                className="w-full h-48 object-cover rounded-xl mb-4 border border-amber-500/20"
              />
              <h4 className="text-lg font-semibold text-white mb-2">Professional Certifications</h4>
              <p className="text-slate-400">ACCA, CIMA, and other professional qualifications</p>
            </div>
            <div>
              <img 
                src="https://cloudcfo.ph/wp-content/uploads/2022/10/shutterstock_2443676383-1024x683.jpg"
                alt="Secure technology"
                className="w-full h-48 object-cover rounded-xl mb-4 border border-amber-500/20"
              />
              <h4 className="text-lg font-semibold text-white mb-2">Secure Technology</h4>
              <p className="text-slate-400">Cloud-based solutions with enterprise-grade security</p>
            </div>
            <div>
              <img 
                src="https://finsmartaccounting.com/usa/wp-content/uploads/sites/13/2023/06/Untitled-design.jpg"
                alt="Client satisfaction"
                className="w-full h-48 object-cover rounded-xl mb-4 border border-amber-500/20"
              />
              <h4 className="text-lg font-semibold text-white mb-2">Client Satisfaction</h4>
              <p className="text-slate-400">98% client retention rate and 5-star reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;