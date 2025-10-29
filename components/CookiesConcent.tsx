import React, { useState } from 'react';
import { X, Zap } from 'lucide-react';

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(true);
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  });

  if (!isOpen) return null;

  const handleAcceptAll = () => {
    setPreferences({ analytics: true, marketing: true });
    setIsOpen(false);
  };

  const handleRejectAll = () => {
    setPreferences({ analytics: false, marketing: false });
    setIsOpen(false);
  };

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 shadow-2xl"
      style={{ backgroundColor: '#004bab' }}
    >
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left: Message */}
          <div className="flex items-center gap-3 flex-1">
            <Zap size={22} style={{ color: '#FFA500' }} className="flex-shrink-0" />
            <div className="flex-1">
              <p className="text-white text-sm font-semibold">We use cookies to personalize your engagement experience.</p>
              {/* <p className="text-blue-100 text-xs">
                <a href="#" className="underline hover:text-white">Privacy Policy</a>
                {' • '}
                <a href="#" className="underline hover:text-white">Cookie Policy</a>
              </p> */}
            </div>
          </div>

          {/* Right: Controls */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleRejectAll}
              className="px-4 py-2 text-xs font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-all"
              style={{ borderColor: '#FFA500' }}
            >
              Decline
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-xs font-semibold text-white rounded-lg hover:opacity-90 transition-all"
              style={{ backgroundColor: '#FFA500' }}
            >
              Accept
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-white hover:text-orange-300 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}