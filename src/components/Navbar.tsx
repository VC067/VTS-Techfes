import React from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const scrollToEvents = (e: React.MouseEvent) => {
    e.preventDefault();
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on home page, navigate to home and then scroll
      window.location.href = '/#events';
    }
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/#events', onClick: scrollToEvents },
    { name: 'About', href: '/about' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Tickets', href: '/tickets' },
  ];

  return (
    <nav className="bg-black/95 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Cpu className="h-8 w-8 text-cyan-400" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              VTS Tech Fest
            </span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={item.onClick}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <Link
                to="/register"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-md text-sm font-medium hover:opacity-90"
              >
                Register Now
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  setIsOpen(false);
                  item.onClick?.(e);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.href
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {item.name}
              </a>
            ))}
            <Link
              to="/register"
              className="block w-full text-center bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-md text-sm font-medium hover:opacity-90"
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};