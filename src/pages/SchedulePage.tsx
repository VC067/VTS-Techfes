import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Calendar, Clock, MapPin } from 'lucide-react';

const schedule = [
  {
    day: "Day 1 - March 15",
    events: [
      {
        time: "09:00 AM",
        title: "Opening Ceremony",
        location: "Main Auditorium",
        type: "ceremony"
      },
      {
        time: "10:00 AM",
        title: "AI Workshop",
        location: "Hall A",
        type: "workshop"
      },
      {
        time: "02:00 PM",
        title: "Tech Talks",
        location: "Conference Room",
        type: "talk"
      }
    ]
  },
  {
    day: "Day 2 - March 16",
    events: [
      {
        time: "09:00 AM",
        title: "Robotics Competition",
        location: "Tech Arena",
        type: "competition"
      },
      {
        time: "02:00 PM",
        title: "Startup Pitch",
        location: "Innovation Hub",
        type: "pitch"
      }
    ]
  },
  {
    day: "Day 3 - March 17",
    events: [
      {
        time: "08:00 AM",
        title: "Hackathon Begins",
        location: "Coding Zone",
        type: "hackathon"
      },
      {
        time: "06:00 PM",
        title: "Prize Distribution",
        location: "Main Auditorium",
        type: "ceremony"
      }
    ]
  }
];

export const SchedulePage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Event Schedule</h1>
            <p className="text-xl text-gray-400">
              Three days of innovation, learning, and excitement
            </p>
          </div>

          <div className="space-y-8">
            {schedule.map((day, index) => (
              <div key={index} className="bg-white/5 rounded-xl backdrop-blur-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-6">{day.day}</h2>
                <div className="space-y-6">
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <Clock className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white">
                          {event.title}
                        </h3>
                        <div className="mt-2 flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400">
                        {event.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};