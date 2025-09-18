import React from 'react';
import { Outlet } from 'react-router-dom';
import CookieConsent from './CookieConsent';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2 no-underline">
              <div className="size-8 rounded-md bg-[#22C55E]" />
              <span className="text-lg font-semibold tracking-wide text-gray-900 hover:text-gray-700">
                devcoursehub
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="/explore" className="px-3 py-1 rounded-lg transition-colors duration-150 hover:bg-gray-100 hover:text-black text-gray-700 no-underline">
              Curriculum
            </a>
            <a href="/community" className="px-3 py-1 rounded-lg transition-colors duration-150 hover:bg-gray-100 hover:text-black text-gray-700 no-underline">
              Community
            </a>
            <a href="/success-stories" className="px-3 py-1 rounded-lg transition-colors duration-150 hover:bg-gray-100 hover:text-black text-gray-700 no-underline">
              Success stories
            </a>
            <a href="/faq" className="px-3 py-1 rounded-lg transition-colors duration-150 hover:bg-gray-100 hover:text-black text-gray-700 no-underline">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="/explore" className="rounded-lg border border-gray-300 bg-gray-100 text-gray-800 px-4 py-2 text-sm hover:bg-gray-200 no-underline">
              Explore
            </a>
            <a href="/signup" className="rounded-lg bg-green-100 px-4 py-2 text-sm font-medium text-[#22C55E] hover:bg-green-200">
              Start free
            </a>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">devcoursehub</h3>
              <p className="text-sm text-gray-600">Helping developers level up their skills through curated courses and resources.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-sm text-gray-600 hover:text-gray-900">Home</a></li>
                <li><a href="/faq" className="text-sm text-gray-600 hover:text-gray-900">FAQ</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Documentation</a></li>
                <li><a href="/community" className="text-sm text-gray-600 hover:text-gray-900">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} devcoursehub. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Cookie Consent Popup */}
      <CookieConsent />
    </div>
  );
}
