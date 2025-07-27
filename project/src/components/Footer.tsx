import React from 'react';
import { Calculator, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/Logo.jpg" 
                alt="StraightBooks Logo" 
                className="h-10 w-auto rounded-lg"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
                StraightBooks
              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              UK-registered accountancy firm providing affordable, compliant accounting 
              services for small businesses and SMEs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors group border border-amber-500/20">
                <Facebook className="h-5 w-5 text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors group border border-amber-500/20">
                <Twitter className="h-5 w-5 text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors group border border-amber-500/20">
                <Linkedin className="h-5 w-5 text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors group border border-amber-500/20">
                <Instagram className="h-5 w-5 text-slate-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-amber-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-amber-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="text-slate-400 hover:text-amber-400 transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-amber-400 transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => window.location.href = '/privacy-policy'} className="text-slate-400 hover:text-amber-400 transition-colors">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li><span className="text-slate-400">Bookkeeping</span></li>
              <li><span className="text-slate-400">VAT Registration & Filing</span></li>
              <li><span className="text-slate-400">Corporation Tax Returns</span></li>
              <li><span className="text-slate-400">Payroll (PAYE) Management</span></li>
              <li><span className="text-slate-400">Self-Assessment Filing</span></li>
              <li><span className="text-slate-400">Company Formation</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-amber-400 mr-3 flex-shrink-0" />
                <a href="tel:+447398147870" className="text-slate-400 hover:text-amber-400 transition-colors">
                  +44 7398 147870
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-amber-400 mr-3 flex-shrink-0" />
                <a href="mailto:Contact@straightbooks.co.uk" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Contact@straightbooks.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-500 text-sm mb-4 md:mb-0">
              © 2025 StraightBooks. All rights reserved. Registered in the UK.
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-6 text-sm">
                <button onClick={() => window.location.href = '/privacy-policy'} className="text-slate-500 hover:text-amber-400 transition-colors">Privacy Policy</button>
                <button onClick={() => window.location.href = '/privacy-policy'} className="text-slate-500 hover:text-amber-400 transition-colors">Terms of Service</button>
              </div>
              <button 
                onClick={scrollToTop}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors group border border-amber-500/20"
              >
                <ArrowUp className="h-5 w-5 text-slate-400 group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;