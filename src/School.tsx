import React from "react";
import { Link } from "react-router-dom";

export default function School() {
  return (
    <>
      {/* Hero Section */}

      {/* Page wrapper */}
      <main className="bg-[#F9FAFB] text-[#111827]">
        {/* Hero */}
        <section className="relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-[#F9FAFB]" />
          <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 md:pt-24 md:pb-20 grid items-center gap-10 md:grid-cols-2">
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-[#22C55E] ring-1 ring-green-100">
                Project-first learning
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                Level up your web dev skills with a clear,{" "}
                <span className="text-[#22C55E]">guided path</span>.
              </h1>
              <p className="mt-4 text-gray-600 md:text-lg">
                Learn by building. Practice with real projects. Join a supportive
                community—all in one place.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/signup" className="rounded-lg bg-[#22C55E] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#16A34A] hover:no-underline">
                  Get started
                </Link>
                <Link to="/explore" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-gray-100 text-gray-800 px-5 py-2.5 text-sm hover:bg-gray-200 hover:no-underline">
                  Explore curriculum
                </Link>
              </div>
            </div>

            {/* Right: Hero card */}
            <div className="relative">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,.06),0_1px_3px_rgba(16,24,40,.10)]">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Your next milestone
                  </h3>
                  <span className="rounded-md bg-green-50 px-2 py-1 text-[10px] font-medium text-[#22C55E] ring-1 ring-green-100">
                    NEW
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Build a responsive landing page and deploy it—learn layouts,
                  components, and accessibility.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  {[
                    { k: "Lessons", v: "42" },
                    { k: "Projects", v: "7" },
                    { k: "Hours", v: "~18" },
                  ].map(({ k, v }) => (
                    <div
                      key={k}
                      className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-4"
                    >
                      <div className="text-xl font-bold text-gray-900">{v}</div>
                      <div className="mt-1 text-[11px] tracking-wide text-gray-500">
                        {k}
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full rounded-xl bg-[#22C55E] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#16A34A]">
                  Continue learning
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join thousands of developers leveling up
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our community-driven platform has helped developers land their dream jobs and build amazing projects.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15,000+", label: "Active Students" },
              { number: "2,500+", label: "Projects Built" },
              { number: "94%", label: "Job Placement Rate" },
              { number: "$85k", label: "Average Salary" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#22C55E] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Three pillars */}
        <section className="mx-auto max-w-7xl px-4 pb-16 md:pb-24">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Learn */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow">
              <div className="w-12 h-12 bg-[#22C55E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Learn</h3>
              <p className="text-gray-600">
                Follow a curated path that builds from fundamentals to advanced topics with industry-relevant curriculum.
              </p>
            </div>

            {/* Build */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow">
              <div className="w-12 h-12 bg-[#22C55E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Build</h3>
              <p className="text-gray-600">
                Create portfolio-ready projects and ship them with guidance from experienced developers.
              </p>
            </div>

            {/* Community */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow">
              <div className="w-12 h-12 bg-[#22C55E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Community</h3>
              <p className="text-gray-600">
                Join a supportive community of developers, get mentorship, and accelerate your learning journey.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mx-auto max-w-7xl px-4 pb-16 md:pb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why choose DevCourseHub?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've designed everything to help you succeed in your development career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Industry-Recognized Certificates",
                description: "Earn certificates that employers trust and recognize in the tech industry."
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Self-Paced Learning",
                description: "Learn at your own speed with 24/7 access to all course materials and resources."
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
                title: "Portfolio Projects",
                description: "Build real-world projects that showcase your skills to potential employers."
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: "1-on-1 Mentorship",
                description: "Get personalized guidance from industry professionals and experienced developers."
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8" />
                  </svg>
                ),
                title: "Job Placement Support",
                description: "Access to our job board, resume reviews, and interview preparation resources."
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Lifetime Access",
                description: "Keep access to all course materials, updates, and community for life."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 text-[#22C55E]">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-7xl px-4 pb-16 md:pb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What our students say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from developers who transformed their careers with DevCourseHub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Frontend Developer at Google",
                avatar: "SC",
                quote: "DevCourseHub's project-based approach helped me land my dream job at Google. The real-world projects were exactly what I needed to build confidence."
              },
              {
                name: "Marcus Johnson",
                role: "Full Stack Developer at Stripe",
                avatar: "MJ",
                quote: "The mentorship program was game-changing. Having an experienced developer guide me through complex concepts accelerated my learning significantly."
              },
              {
                name: "Elena Rodriguez",
                role: "React Developer at Airbnb",
                avatar: "ER",
                quote: "I went from zero coding experience to landing a developer role in 8 months. The structured curriculum made all the difference."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#22C55E] rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Upsell CTA Section */}
        <section className="mx-auto max-w-7xl px-4 pb-16 md:pb-24">
          <div className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-2xl p-8 md:p-12 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to start your developer journey?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of developers who are already building their dream careers. 
                Start with our free curriculum and upgrade when you're ready for mentorship and job placement support.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">Free</div>
                  <div className="text-sm opacity-90">Core Curriculum</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 border-2 border-white/30">
                  <div className="text-2xl font-bold mb-1">$49/mo</div>
                  <div className="text-sm opacity-90">Premium Features</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">$99/mo</div>
                  <div className="text-sm opacity-90">Mentorship Plan</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup" className="bg-white text-[#22C55E] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors hover:no-underline">
                  Start Free Today
                </Link>
                <Link to="/explore" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors hover:no-underline">
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="mx-auto max-w-7xl px-4 pb-16 md:pb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to the most common questions about our platform and learning approach.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How long does it take to complete the curriculum?",
                answer: "Most students complete our core curriculum in 6-12 months, depending on your pace and prior experience. The self-paced format allows you to learn at your own speed."
              },
              {
                question: "Do I need prior coding experience?",
                answer: "No prior experience required! Our curriculum starts from the absolute basics and gradually builds up to advanced topics. We provide comprehensive support for complete beginners."
              },
              {
                question: "What's included in the mentorship plan?",
                answer: "The mentorship plan includes 1-on-1 sessions with experienced developers, code reviews, career guidance, and personalized learning path adjustments."
              },
              {
                question: "Can I get a job after completing the program?",
                answer: "Yes! Our graduates have a 94% job placement rate. We provide job placement support, resume reviews, interview prep, and access to our exclusive job board."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/faq" className="text-[#22C55E] font-semibold hover:text-[#16A34A] hover:no-underline">
              View all FAQs →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
