import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Are you UK-compliant?',
      answer: 'Yes. We\'re registered in the UK and supervised for anti-money laundering by the appropriate authority.'
    },
    {
      question: 'Are your accountants qualified?',
      answer: 'Yes, UK-qualified accountants oversee all filings and sign-offs.'
    },
    {
      question: 'How secure is my data?',
      answer: 'All data is stored in GDPR-compliant cloud platforms with encrypted access.'
    },
    {
      question: 'Do I get a dedicated accountant?',
      answer: 'Yes. Each client is assigned a dedicated point of contact.'
    },
    {
      question: 'What happens if I miss a deadline?',
      answer: 'We monitor all deadlines and ensure timely submissions. If there are any issues, we notify you immediately and handle the situation professionally.'
    },
    {
      question: 'Can you help with business setup?',
      answer: 'Yes, we offer company formation services and can guide you through the entire business setup process, including bank account opening assistance.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-700/50 backdrop-blur-sm rounded-full px-4 py-2 border border-amber-500/30 mb-6">
            <HelpCircle className="h-4 w-4 text-amber-400" />
            <span className="text-sm text-slate-300">FAQ</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          
          <p className="text-xl text-slate-400">
            Common questions about our UK accounting services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-amber-500/20 overflow-hidden transition-all duration-300 hover:border-amber-500/40">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-amber-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-amber-400" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* FAQ Image */}
        <div className="mt-16 text-center">
          <div className="relative">
            <img 
              src="https://img.freepik.com/premium-photo/female-accountant-writing-question-mark-notepad-background-laptop-calculator_72482-4323.jpg"
              className="w-full h-64 object-cover rounded-2xl shadow-lg border border-amber-500/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-2">Still Have Questions?</h4>
                <p className="text-slate-300">Contact us for personalized assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;