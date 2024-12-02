import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Users, Rocket, Trophy } from 'lucide-react';

export const AboutPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">
              About VTS Tech Fest
            </h1>
            <p className="text-xl text-gray-400">
              Pushing the boundaries of technology and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 p-8 rounded-xl backdrop-blur-lg">
              <Users className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Community</h3>
              <p className="text-gray-400">
                Join a vibrant community of tech enthusiasts, developers, and innovators.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl backdrop-blur-lg">
              <Rocket className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-400">
                Experience cutting-edge technology and groundbreaking ideas.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl backdrop-blur-lg">
              <Trophy className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
              <p className="text-gray-400">
                Showcase your skills and compete with the best in the field.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 p-8 rounded-xl backdrop-blur-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              VTS Tech Fest aims to create a platform where technology meets creativity, 
              fostering innovation and collaboration among students, professionals, and 
              tech enthusiasts. Our goal is to inspire the next generation of tech leaders 
              and innovators.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Vision</h3>
                <p className="text-gray-400">
                  To become the premier technology festival in India, recognized for 
                  fostering innovation and technological advancement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Values</h3>
                <p className="text-gray-400">
                  Innovation, Excellence, Collaboration, and Continuous Learning are 
                  the core values that drive everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};