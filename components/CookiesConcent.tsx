import React, { useState, useEffect } from 'react';
import { X, Zap } from 'lucide-react';

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  });

  // Check if user has already made a choice
  useEffect(() => {
    const saved = localStorage.getItem('cookiePreferences');
    if (!saved) {
      setIsOpen(true);
    } else {
      setPreferences(JSON.parse(saved));
    }
  }, []);

  // Save preferences when they change
  useEffect(() => {
    if (preferences.analytics || preferences.marketing) {
      localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    }
  }, [preferences]);

  if (!isOpen) return null;

  const handleAcceptAll = () => {
    const newPrefs = { analytics: true, marketing: true };
    setPreferences(newPrefs);
    localStorage.setItem('cookiePreferences', JSON.stringify(newPrefs));
    setIsOpen(false);
  };

  const handleRejectAll = () => {
    const newPrefs = { analytics: false, marketing: false };
    setPreferences(newPrefs);
    localStorage.setItem('cookiePreferences', JSON.stringify(newPrefs));
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
            </div>
          </div>

          {/* Right: Controls */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleRejectAll}
              className="px-4 py-2 text-xs font-semibold rounded-lg transition-all"
              style={{ 
                backgroundColor: 'transparent',
                color: '#FFA500',
                border: '2px solid #FFA500'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#FFA500';
                (e.target as HTMLButtonElement).style.color = '#004bab';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
                (e.target as HTMLButtonElement).style.color = '#FFA500';
              }}
            >
              Decline
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-xs font-semibold text-blue-600 rounded-lg hover:opacity-90 transition-all"
              style={{ backgroundColor: '#FFA500' }}
            >
              Accept
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 transition-colors"
              style={{ color: '#FFA500' }}
              onMouseEnter={(e) => (e.target as HTMLButtonElement).style.color = '#FFB84D'}
              onMouseLeave={(e) => (e.target as HTMLButtonElement).style.color = '#FFA500'}
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}