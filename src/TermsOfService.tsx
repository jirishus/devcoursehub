import React from 'react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  const lastUpdated = "December 15, 2024";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Please read these terms and conditions carefully before using DevCourseHub.
            </p>
            <p className="text-sm text-gray-500">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 space-y-8">
            
            {/* 1. Acceptance of Terms */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing and using DevCourseHub ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Service ("Terms") govern your use of our website located at devcoursehub.com (the "Service") operated by DevCourseHub.
                </p>
              </div>
            </div>

            {/* 2. Description of Service */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  DevCourseHub is an online learning platform that provides access to programming courses, tutorials, and educational resources. 
                  Our services include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Access to course materials and video content</li>
                  <li>Community forums and discussion boards</li>
                  <li>Progress tracking and certificates of completion</li>
                  <li>Mentorship programs (premium plans)</li>
                  <li>Job placement assistance (premium plans)</li>
                </ul>
              </div>
            </div>

            {/* 3. User Accounts */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  To access certain features of the Service, you must register for an account. When you create an account, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your information to keep it accurate</li>
                  <li>Keep your password secure and confidential</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  You are responsible for safeguarding the password and for all activities that happen under your account.
                </p>
              </div>
            </div>

            {/* 4. Subscription Plans and Billing */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Subscription Plans and Billing</h2>
              <div className="prose prose-gray max-w-none">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">4.1 Plan Types</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li><strong>Free Plan:</strong> Access to basic course materials and community features</li>
                  <li><strong>Premium Plan ($49/month):</strong> Advanced projects, priority support, career resources</li>
                  <li><strong>Mentorship Plan ($99/month):</strong> 1-on-1 sessions, job placement support, code reviews</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">4.2 Billing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Subscription fees are billed monthly in advance. By subscribing to a paid plan, you authorize us to charge your payment method 
                  for the applicable fees. All fees are non-refundable except as required by law.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">4.3 Cancellation</h3>
                <p className="text-gray-700 leading-relaxed">
                  You may cancel your subscription at any time. Cancellation will be effective at the end of your current billing period. 
                  You will continue to have access to paid features until the end of your billing period.
                </p>
              </div>
            </div>

            {/* 5. User Conduct */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Conduct</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree not to use the Service to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Violate any laws, regulations, or third-party rights</li>
                  <li>Share your account credentials with others</li>
                  <li>Upload malicious code or attempt to hack the platform</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Distribute spam or unsolicited communications</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Use automated tools to access the Service without permission</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to suspend or terminate accounts that violate these terms.
                </p>
              </div>
            </div>

            {/* 6. Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Service and its original content, features, and functionality are owned by DevCourseHub and are protected by 
                  international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, 
                  republish, download, store, or transmit any of the material on our Service without prior written consent.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Course materials are licensed for personal, non-commercial use only. Commercial use requires separate licensing agreements.
                </p>
              </div>
            </div>

            {/* 7. Privacy Policy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy Policy</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Your privacy is important to us. Please review our{' '}
                  <Link to="/privacy-policy" className="text-[#22C55E] hover:underline">
                    Privacy Policy
                  </Link>, which also governs your use of the Service, to understand our practices.
                </p>
              </div>
            </div>

            {/* 8. Disclaimers */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimers</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The information on this Service is provided on an "as is" basis. To the fullest extent permitted by law, 
                  DevCourseHub excludes all representations, warranties, conditions, and terms.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not guarantee that:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>The Service will be available at all times</li>
                  <li>Course completion will guarantee employment</li>
                  <li>All information is completely accurate or up-to-date</li>
                  <li>The Service will be free from errors or interruptions</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Your use of the Service is at your own risk.
                </p>
              </div>
            </div>

            {/* 9. Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  In no event shall DevCourseHub, its directors, employees, partners, agents, suppliers, or affiliates be liable for any 
                  indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, goodwill, 
                  or other intangible losses.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our total liability to you for all claims arising out of or relating to the use of the Service shall not exceed 
                  the amount you paid us in the twelve (12) months preceding the claim.
                </p>
              </div>
            </div>

            {/* 10. Termination */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, 
                  under our sole discretion, for any reason whatsoever, including breach of the Terms.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Upon termination, your right to use the Service will cease immediately, but these Terms will remain in effect.
                </p>
              </div>
            </div>

            {/* 11. Changes to Terms */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 
                  30 days notice prior to any new terms taking effect.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>
            </div>

            {/* 12. Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <ul className="list-none text-gray-700 space-y-2">
                  <li><strong>Email:</strong> legal@devcoursehub.com</li>
                  <li><strong>Address:</strong> DevCourseHub, 123 Learning Street, Tech City, TC 12345</li>
                  <li><strong>Website:</strong> <Link to="/" className="text-[#22C55E] hover:underline">devcoursehub.com</Link></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of developers who are building their careers with DevCourseHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="bg-green-100 text-[#22C55E] px-8 py-3 rounded-lg font-semibold hover:bg-green-200 transition-colors hover:no-underline">
              Get Started Free
            </Link>
            <Link to="/explore" className="border-2 border-[#22C55E] text-[#22C55E] px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors hover:no-underline">
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
