import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  price: number;
  image: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  date,
  time,
  venue,
  price,
  image,
}) => {
  const navigate = useNavigate();

  const handleBuyTicket = () => {
    navigate('/billing', { 
      state: { 
        ticketType: title,
        price: price
      }
    });
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-300">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm">{time}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{venue}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-cyan-400 font-semibold">₹{price}</span>
          <button 
            onClick={handleBuyTicket}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-md text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
};