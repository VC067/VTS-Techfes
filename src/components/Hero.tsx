import React from 'react';
import { ChevronRight, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              VTS Tech Fest 2024
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Experience the Future of Technology
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('/tickets')}
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 flex items-center justify-center"
            >
              Get Your Tickets
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/schedule')}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-3 rounded-full text-white font-semibold hover:bg-white/20 flex items-center justify-center"
            >
              View Schedule
              <Zap className="ml-2 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};