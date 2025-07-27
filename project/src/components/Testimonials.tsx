import React from 'react';
import { Star, Quote, Users } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah',
      role: 'Online Shop Owner',
      content: 'They saved me hours every month and their pricing is fantastic! The team is professional and always available when I need them.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'James',
      role: 'Tech Entrepreneur',
      content: 'As a startup founder, I love that I can get HMRC compliance without big firm fees. StraightBooks has been a game-changer for my business.',
      rating: 5,
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'Emma',
      role: 'Freelance Consultant',
      content: 'The monthly reports are clear and detailed. I finally understand my business finances thanks to their excellent service.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-amber-500/30 mb-6">
            <Users className="h-4 w-4 text-amber-400" />
            <span className="text-sm text-slate-300">Client Reviews</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              What Our Clients
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Real feedback from UK business owners who trust us with their accounting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-amber-500/30"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="h-8 w-8 text-amber-400/30 absolute -top-2 -left-1" />
                <p className="text-slate-300 leading-relaxed pl-6">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Image */}
        <div className="text-center">
          <div className="relative">
            <img 
              src="https://mypulse.io/wp-content/uploads/2024/06/Mastering-Cash-Flow-Analysis-1024x528.png"
              alt="Happy UK business clients"
              className="w-full h-64 object-cover rounded-2xl shadow-lg border border-amber-500/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-2">Join Our Happy Clients</h4>
                <p className="text-slate-300">Experience professional accounting services today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;