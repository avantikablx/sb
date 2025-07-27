import React from 'react';
import { Globe, Shield, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-slate-700/50 backdrop-blur-sm rounded-full px-4 py-2 border border-amber-500/30 mb-6">
              <Award className="h-4 w-4 text-amber-400" />
              <span className="text-sm text-slate-300">About StraightBooks</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                About Us
              </span>
            </h2>
            
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p className="text-lg">
                We're a UK-registered accountancy firm powered by a global team. Our mission is simple: 
                provide expert, affordable, and scalable accounting services to small and growing UK businesses.
              </p>
              <p className="text-lg">
                Our founders include professionals from the UK, India, and Ireland, combining international 
                efficiency with local compliance and knowledge.
              </p>
              
              <div className="flex items-center space-x-3 bg-slate-700/30 rounded-lg p-4 border border-amber-500/20">
                <CheckCircle className="h-6 w-6 text-amber-400 flex-shrink-0" />
                <span className="font-semibold">Registered with Companies House and supervised for AML compliance in the UK.</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="group text-center p-6 bg-slate-700/30 backdrop-blur-sm rounded-xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Global Team</h3>
                <p className="text-sm text-slate-400">UK, India & Ireland professionals</p>
              </div>
              
              <div className="group text-center p-6 bg-slate-700/30 backdrop-blur-sm rounded-xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">UK Compliant</h3>
                <p className="text-sm text-slate-400">Companies House registered</p>
              </div>
              
              <div className="group text-center p-6 bg-slate-700/30 backdrop-blur-sm rounded-xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">SME Focused</h3>
                <p className="text-sm text-slate-400">Built for startups & SMEs</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative">
              <img 
                src="https://danptaxsolution.com/wp-content/uploads/2022/10/man-analysis-business-accounting-laptop-45719380.jpg"
                alt="International accounting team"
                className="rounded-2xl shadow-2xl border border-amber-500/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl border border-amber-500/30 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">98% Success Rate</div>
                  <div className="text-sm text-slate-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;