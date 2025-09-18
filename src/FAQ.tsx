import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqItems: FAQItem[] = [
    // Getting Started
    {
      id: 1,
      question: "What is DevCourseHub?",
      answer: "DevCourseHub is a comprehensive learning platform that helps developers level up their skills through curated courses, hands-on projects, mentorship, and community support. We focus on practical, project-based learning that gets you job-ready.",
      category: "Getting Started"
    },
    {
      id: 2,
      question: "How do I get started?",
      answer: "Simply click 'Start Free' to create an account. You'll get immediate access to our core curriculum, community forums, and basic features. You can upgrade to premium plans anytime for additional features like mentorship and job placement support.",
      category: "Getting Started"
    },
    {
      id: 3,
      question: "Do I need prior coding experience?",
      answer: "No! Our curriculum is designed for complete beginners. We start with the fundamentals and gradually build up to advanced topics. Many of our most successful students started with zero programming experience.",
      category: "Getting Started"
    },
    {
      id: 4,
      question: "What makes DevCourseHub different from other platforms?",
      answer: "We focus on project-based learning with real-world applications, provide 1-on-1 mentorship, offer job placement support, and have an active community. Our curriculum is constantly updated based on industry demands and student feedback.",
      category: "Getting Started"
    },

    // Courses & Learning
    {
      id: 5,
      question: "What courses do you offer?",
      answer: "We offer comprehensive tracks in Web Development (HTML, CSS, JavaScript, React), Backend Development (Node.js, Python, databases), Mobile Development (React Native), DevOps (Docker, AWS), and AI/Machine Learning. All courses include hands-on projects.",
      category: "Courses & Learning"
    },
    {
      id: 6,
      question: "How long does it take to complete a course?",
      answer: "It varies by course and your pace. Most students complete our core Web Development track in 6-12 months studying 10-15 hours per week. Our self-paced format allows you to learn faster or slower based on your schedule.",
      category: "Courses & Learning"
    },
    {
      id: 7,
      question: "Are the courses self-paced?",
      answer: "Yes! All courses are completely self-paced with 24/7 access. You can start anytime, pause when needed, and learn at your own speed. Premium students also get access to live workshops and study groups.",
      category: "Courses & Learning"
    },
    {
      id: 8,
      question: "Do I get certificates upon completion?",
      answer: "Yes, you receive industry-recognized certificates for each completed course. These certificates are valued by employers and can be added to your LinkedIn profile and resume.",
      category: "Courses & Learning"
    },

    // Pricing & Plans
    {
      id: 9,
      question: "Is there a free plan?",
      answer: "Yes! Our free plan includes access to core curriculum, community forums, and basic project templates. You can upgrade anytime to access mentorship, job placement support, and premium features.",
      category: "Pricing & Plans"
    },
    {
      id: 10,
      question: "What's included in the premium plans?",
      answer: "Premium ($49/mo) includes advanced projects, priority community support, and career resources. Mentorship ($99/mo) adds 1-on-1 sessions, code reviews, interview prep, and job placement assistance.",
      category: "Pricing & Plans"
    },
    {
      id: 11,
      question: "Can I cancel anytime?",
      answer: "Absolutely! You can cancel your subscription anytime with no cancellation fees. You'll retain access to completed courses and certificates even after canceling.",
      category: "Pricing & Plans"
    },
    {
      id: 12,
      question: "Do you offer student discounts?",
      answer: "Yes! We offer 50% discounts for students with valid .edu email addresses. We also have income-based assistance programs for those who qualify.",
      category: "Pricing & Plans"
    },

    // Career Support
    {
      id: 13,
      question: "Do you help with job placement?",
      answer: "Yes! Our Mentorship plan includes job placement support: resume reviews, interview preparation, salary negotiation guidance, and access to our exclusive job board with partner companies.",
      category: "Career Support"
    },
    {
      id: 14,
      question: "What's your job placement success rate?",
      answer: "94% of our Mentorship plan graduates find employment within 6 months of completion. The average starting salary is $85k, with many seeing 100%+ salary increases from their previous roles.",
      category: "Career Support"
    },
    {
      id: 15,
      question: "Can you help me transition careers?",
      answer: "Absolutely! Many of our students successfully transition from non-tech careers. We provide specialized guidance for career changers, including portfolio development and networking strategies.",
      category: "Career Support"
    },
    {
      id: 16,
      question: "Do you have partnerships with companies?",
      answer: "Yes, we partner with 200+ companies including startups and Fortune 500 companies. Our job board features exclusive opportunities from these partners, and some offer direct hiring pipelines for our graduates.",
      category: "Career Support"
    },

    // Technical Support
    {
      id: 17,
      question: "What if I get stuck on a project?",
      answer: "You have multiple support options: community forums with peer help, office hours with instructors, and for premium users, 1-on-1 mentorship sessions. We're committed to ensuring no one gets left behind.",
      category: "Technical Support"
    },
    {
      id: 18,
      question: "What technical requirements do I need?",
      answer: "Just a computer with internet access! We provide cloud-based development environments for most courses, so you don't need to install complex software. Detailed setup guides are provided when needed.",
      category: "Technical Support"
    },
    {
      id: 19,
      question: "How often is the curriculum updated?",
      answer: "We update our curriculum quarterly to reflect the latest industry trends and technologies. All students get free access to updates, ensuring you're always learning the most current skills.",
      category: "Technical Support"
    }
  ];

  const categories = ['all', ...Array.from(new Set(faqItems.map(item => item.category)))];

  const filteredItems = faqItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get answers to common questions about our courses, pricing, and career support.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22C55E] focus:border-transparent text-gray-900 placeholder-gray-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg
                  className="absolute right-4 top-3.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-green-100 text-[#22C55E]'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {category === 'all' ? 'All Questions' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          {filteredItems.length > 0 ? (
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.question}</h3>
                      <span className="text-sm text-[#22C55E] font-medium">{item.category}</span>
                    </div>
                    <div className="ml-4">
                      <svg
                        className={`w-5 h-5 text-gray-500 transform transition-transform ${
                          openItems.has(item.id) ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openItems.has(item.id) && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.239 0-4.291-.497-6-1.291M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-500">Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-[#22C55E] mb-2">24/7</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Support Available</div>
              <div className="text-sm text-gray-600">Community forums and help resources</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-[#22C55E] mb-2">&lt;2hrs</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Average Response Time</div>
              <div className="text-sm text-gray-600">For premium support inquiries</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-[#22C55E] mb-2">98%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Student Satisfaction</div>
              <div className="text-sm text-gray-600">Based on course completion surveys</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#22C55E] to-[#16A34A]">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Our community and support team are here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/community" className="bg-white text-[#22C55E] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors hover:no-underline">
              Join Community
            </Link>
            <Link to="/signup" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors hover:no-underline">
              Start Learning
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
