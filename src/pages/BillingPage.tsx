import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { CreditCard, Lock, Calendar } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export const BillingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { ticketType, price } = location.state || { ticketType: 'Basic Pass', price: 999 };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing
    navigate('/confirmation');
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-black pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Complete Your Purchase</h1>
            <p className="text-xl text-gray-400">
              Secure payment for {ticketType}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8">
            <div className="mb-8 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-white">{ticketType}</h3>
                  <p className="text-gray-400">VTS Tech Fest 2024</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-white">₹{price}</p>
                  <p className="text-sm text-gray-400">Including GST</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Card Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <CreditCard className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Expiry Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    CVV
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="123"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Pay ₹{price}
              </button>

              <p className="text-center text-sm text-gray-400 mt-4 flex items-center justify-center">
                <Lock className="h-4 w-4 mr-2" />
                Secured by industry-standard encryption
              </p>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};