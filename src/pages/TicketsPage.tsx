import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Check, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const tickets = [
  {
    name: "Basic Pass",
    price: 999,
    features: [
      "Access to Tech Talks",
      "Workshop Participation",
      "Networking Sessions",
      "Certificate of Participation"
    ]
  },
  {
    name: "Pro Pass",
    price: 1999,
    features: [
      "All Basic Pass Features",
      "Hackathon Entry",
      "Exclusive Swag Kit",
      "Priority Seating",
      "Lunch Included"
    ],
    popular: true
  },
  {
    name: "VIP Pass",
    price: 4999,
    features: [
      "All Pro Pass Features",
      "1-on-1 Mentoring Session",
      "VIP Lounge Access",
      "Accommodation Included",
      "Special Dinner Event"
    ]
  }
];

export const TicketsPage = () => {
  const navigate = useNavigate();

  const handleBuyTicket = (ticketType: string, price: number) => {
    navigate('/billing', { state: { ticketType, price } });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-black pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Choose Your Pass</h1>
            <p className="text-xl text-gray-400">
              Select the perfect ticket for your tech journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tickets.map((ticket) => (
              <div
                key={ticket.name}
                className={`relative bg-white/5 backdrop-blur-lg rounded-xl p-8 border ${
                  ticket.popular
                    ? 'border-cyan-500'
                    : 'border-white/10'
                } hover:border-cyan-500/50 transition-all duration-300`}
              >
                {ticket.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{ticket.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">₹{ticket.price}</span>
                    <span className="ml-2 text-gray-400">/person</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {ticket.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleBuyTicket(ticket.name, ticket.price)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-opacity ${
                    ticket.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Get {ticket.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};