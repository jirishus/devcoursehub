import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    functional: false
  });
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    localStorage.setItem('cookieConsent', JSON.stringify({
      timestamp: Date.now(),
      preferences: allPreferences
    }));
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      timestamp: Date.now(),
      preferences: preferences
    }));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    localStorage.setItem('cookieConsent', JSON.stringify({
      timestamp: Date.now(),
      preferences: necessaryOnly
    }));
    setIsVisible(false);
  };

  const togglePreference = (type: keyof typeof preferences) => {
    if (type === 'necessary') return; // Can't disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#22C55E] rounded-md flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Cookie Preferences</h2>
            </div>
          </div>

          {/* Main Content */}
          <div className="mb-6">
            <p className="text-gray-700 mb-4">
              We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies.
            </p>
            
            {showDetails && (
              <div className="space-y-4 mb-4">
                {/* Necessary Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Necessary Cookies</h3>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={preferences.necessary}
                        disabled
                        className="h-4 w-4 text-[#22C55E] bg-gray-100 border-gray-300 rounded focus:ring-[#22C55E] opacity-50 cursor-not-allowed"
                      />
                      <span className="ml-2 text-sm text-gray-500">Always Active</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies are essential for the website to function properly. They enable basic features like page navigation and access to secure areas.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => togglePreference('analytics')}
                        className="h-4 w-4 text-[#22C55E] bg-white border-gray-300 rounded focus:ring-[#22C55E]"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {preferences.analytics ? 'Enabled' : 'Disabled'}
                      </span>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Marketing Cookies</h3>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={() => togglePreference('marketing')}
                        className="h-4 w-4 text-[#22C55E] bg-white border-gray-300 rounded focus:ring-[#22C55E]"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {preferences.marketing ? 'Enabled' : 'Disabled'}
                      </span>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    Used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Functional Cookies</h3>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={() => togglePreference('functional')}
                        className="h-4 w-4 text-[#22C55E] bg-white border-gray-300 rounded focus:ring-[#22C55E]"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {preferences.functional ? 'Enabled' : 'Disabled'}
                      </span>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    Enable enhanced functionality and personalization, such as videos and live chats.
                  </p>
                </div>
              </div>
            )}

            <p className="text-sm text-gray-600">
              For more information, please read our{' '}
              <Link to="/privacy-policy" className="text-[#22C55E] hover:underline">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link to="/cookie-policy" className="text-[#22C55E] hover:underline">
                Cookie Policy
              </Link>.
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            {/* Toggle Details */}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="w-full text-left text-[#22C55E] hover:text-[#16A34A] font-medium text-sm flex items-center justify-between"
            >
              {showDetails ? 'Hide Details' : 'Customize Settings'}
              <svg 
                className={`w-4 h-4 transform transition-transform ${showDetails ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleRejectAll}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Reject All
              </button>
              {showDetails && (
                <button
                  onClick={handleAcceptSelected}
                  className="flex-1 px-4 py-2 bg-green-100 text-[#22C55E] rounded-lg hover:bg-green-200 transition-colors font-medium"
                >
                  Save Preferences
                </button>
              )}
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-4 py-2 bg-[#22C55E] text-white rounded-lg hover:bg-[#16A34A] transition-colors font-medium"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
