import React from 'react';

export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold mb-2">What is devcoursehub?</h2>
          <p className="text-gray-700">
            DevCourseHub is a platform that helps you find and track the best development courses to enhance your skills and advance your career.
          </p>
        </div>
        
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold mb-2">How do I get started?</h2>
          <p className="text-gray-700">
            Simply click the "Start free" button in the top right corner to create an account and begin exploring our course catalog.
          </p>
        </div>
        
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold mb-2">Is there a free trial?</h2>
          <p className="text-gray-700">
            Yes! We offer a 14-day free trial with full access to all our courses and features.
          </p>
        </div>
      </div>
    </div>
  );
}
