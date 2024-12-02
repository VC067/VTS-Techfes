import React from 'react';
import { EventCard } from './EventCard';

const events = [
  {
    title: "AI & Machine Learning Workshop",
    description: "Deep dive into the world of artificial intelligence and machine learning with hands-on exercises.",
    date: "March 15, 2024",
    time: "10:00 AM - 4:00 PM",
    venue: "Main Auditorium",
    price: 1499,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Robotics Competition",
    description: "Showcase your robotics skills and compete with the best teams from across the country.",
    date: "March 16, 2024",
    time: "9:00 AM - 6:00 PM",
    venue: "Tech Arena",
    price: 999,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Hackathon 2024",
    description: "24-hour coding challenge to solve real-world problems with innovative solutions.",
    date: "March 17, 2024",
    time: "8:00 AM onwards",
    venue: "Innovation Hub",
    price: 799,
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export const Events = () => {
  return (
    <section id="events" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Events
          </h2>
          <p className="text-gray-400">
            Discover exciting tech events and workshops
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};