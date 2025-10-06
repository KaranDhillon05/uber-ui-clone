import React from 'react';
import { Globe, MapPin, Linkedin, Youtube, Instagram, X } from 'lucide-react';

const GooglePlayBadge = () => (
  <a href="#" aria-label="Get it on Google Play">
    <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-10" />
  </a>
);

const AppStoreBadge = () => (
  <a href="#" aria-label="Download on the App Store">
    <img src="https://tools.applemediaservices.com/api/v1/s/US/app-store/black/en-us/l.svg" alt="Download on the App Store" className="h-10" />
  </a>
);

const FooterSection = () => {
  const footerLinks = {
    Company: [
      { name: 'About us', href: '#' },
      { name: 'Investors', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
    ],
    Products: [
      { name: 'Ride', href: '#' },
      { name: 'Uber for Business', href: '#' },
      { name: 'Uber Freight', href: '#' },
      { name: 'Gift cards', href: '#' },
      { name: 'Uber Eats', href: '#' },
      { name: 'Uber Health', href: '#' },
    ],
    'Global citizenship': [
      { name: 'Safety', href: '#' },
    ],
    Travel: [
      { name: 'Reserve', href: '#' },
      { name: 'Airports', href: '#' },
      { name: 'Cities', href: '#' },
    ],
  };

  return (
    <footer className="bg-black text-white font-body">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10 md:py-[60px] lg:py-20">
        <div className="mb-10">
          <a href="#" className="font-display text-4xl font-medium">Uber</a>
          <a href="#" className="block mt-6 text-base hover:underline">Visit Help Center</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8 mb-10">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-display font-medium text-lg mb-4">{title}</h3>
              <ul>
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm leading-8 hover:underline">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8 mt-10">
          <div className="flex flex-col-reverse lg:flex-row justify-between">
            <div className="mt-8 lg:mt-0">
              <div className="flex items-center space-x-6 mb-8">
                <a href="#" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity"><Linkedin size={24} /></a>
                <a href="#" aria-label="YouTube" className="hover:opacity-70 transition-opacity"><Youtube size={24} /></a>
                <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity"><Instagram size={24} /></a>
                <a href="#" aria-label="X (Twitter)" className="hover:opacity-70 transition-opacity"><X size={24} /></a>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <GooglePlayBadge />
                <AppStoreBadge />
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-sm">
                <Globe size={20} />
                <span>English</span>
              </button>
              <button className="flex items-center space-x-2 text-sm">
                <MapPin size={20} />
                <span>Boston</span>
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center text-[#b3b3b3]">
            <p className="text-xs mt-6 sm:mt-0">© 2025 Uber Technologies Inc.</p>
            <div className="flex flex-col sm:flex-row gap-y-2 sm:gap-x-6 text-xs">
              <a href="#" className="hover:text-white transition-colors">Do not sell or share my personal information</a>
              <a href="#" className="hover:text-white transition-colors">Google Data Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;