import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  authorRole: string;
  avatar: string;
  timestamp: string;
  likes: number;
  comments: number;
  category: string;
}

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  attendees: number;
  type: 'workshop' | 'study-group' | 'networking' | 'mentorship';
}

export default function Community() {
  const [activeTab, setActiveTab] = useState<'feed' | 'events' | 'mentors'>('feed');

  const posts: Post[] = [
    {
      id: 1,
      title: "Just landed my first developer job! 🎉",
      content: "After 8 months of learning with DevCourseHub, I finally got my dream job as a Frontend Developer at a startup. The project-based learning approach was exactly what I needed. Thanks to everyone who helped me along the way!",
      author: "Sarah Chen",
      authorRole: "Frontend Developer",
      avatar: "SC",
      timestamp: "2 hours ago",
      likes: 47,
      comments: 12,
      category: "Success Stories"
    },
    {
      id: 2,
      title: "React vs Vue - Which should I learn next?",
      content: "I've been working with React for about 6 months now and really enjoying it. I'm curious about Vue though. For those who've used both, what are the main differences and when would you choose one over the other?",
      author: "Marcus Johnson",
      authorRole: "Full Stack Developer",
      avatar: "MJ",
      timestamp: "4 hours ago",
      likes: 23,
      comments: 18,
      category: "Discussion"
    },
    {
      id: 3,
      title: "Free resources for learning TypeScript",
      content: "I've compiled a list of the best free resources for learning TypeScript. Including official docs, video tutorials, and practice projects. Check it out and let me know if you have any other recommendations!",
      author: "Elena Rodriguez",
      authorRole: "Senior Developer",
      avatar: "ER",
      timestamp: "6 hours ago",
      likes: 89,
      comments: 15,
      category: "Resources"
    },
    {
      id: 4,
      title: "Weekly coding challenge: Build a todo app",
      content: "This week's challenge is to build a todo application with the following features: add, edit, delete, mark complete, and filter by status. Bonus points for adding local storage! Post your solutions below.",
      author: "Alex Kim",
      authorRole: "Community Moderator",
      avatar: "AK",
      timestamp: "1 day ago",
      likes: 156,
      comments: 34,
      category: "Challenge"
    }
  ];

  const events: Event[] = [
    {
      id: 1,
      title: "React Workshop: Building Modern UIs",
      description: "Learn how to build beautiful, responsive user interfaces with React and modern CSS techniques.",
      date: "Dec 15, 2024",
      time: "2:00 PM PST",
      attendees: 45,
      type: "workshop"
    },
    {
      id: 2,
      title: "JavaScript Study Group",
      description: "Weekly study group covering advanced JavaScript concepts. This week: async/await and Promises.",
      date: "Dec 12, 2024",
      time: "7:00 PM PST",
      attendees: 23,
      type: "study-group"
    },
    {
      id: 3,
      title: "Developer Networking Mixer",
      description: "Connect with fellow developers, share experiences, and build your professional network.",
      date: "Dec 18, 2024",
      time: "6:00 PM PST",
      attendees: 67,
      type: "networking"
    },
    {
      id: 4,
      title: "Mentorship Office Hours",
      description: "Get 1-on-1 guidance from experienced developers. Bring your questions and projects for review.",
      date: "Dec 14, 2024",
      time: "3:00 PM PST",
      attendees: 12,
      type: "mentorship"
    }
  ];

  const mentors = [
    {
      name: "David Park",
      role: "Senior Software Engineer at Microsoft",
      expertise: ["React", "Node.js", "AWS"],
      avatar: "DP",
      availability: "Available",
      rating: 4.9,
      sessions: 156
    },
    {
      name: "Lisa Wang",
      role: "Frontend Lead at Netflix",
      expertise: ["JavaScript", "TypeScript", "CSS"],
      avatar: "LW",
      availability: "Available",
      rating: 4.8,
      sessions: 134
    },
    {
      name: "James Wilson",
      role: "Full Stack Developer at Shopify",
      expertise: ["Python", "Django", "PostgreSQL"],
      avatar: "JW",
      availability: "Busy",
      rating: 4.9,
      sessions: 89
    }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'workshop':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'study-group':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'networking':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8" />
          </svg>
        );
      case 'mentorship':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Success Stories':
        return 'bg-green-100 text-green-800';
      case 'Discussion':
        return 'bg-blue-100 text-blue-800';
      case 'Resources':
        return 'bg-purple-100 text-purple-800';
      case 'Challenge':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Join Our Developer Community
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with fellow developers, share knowledge, get mentorship, and accelerate your learning journey together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup" className="bg-green-100 text-[#22C55E] px-8 py-3 rounded-lg font-semibold hover:bg-green-200 transition-colors hover:no-underline">
                Join Community
              </Link>
              <Link to="/explore" className="border-2 border-[#22C55E] text-[#22C55E] px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors hover:no-underline">
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15,000+", label: "Active Members" },
              { number: "2,500+", label: "Discussions" },
              { number: "500+", label: "Study Groups" },
              { number: "200+", label: "Mentors Available" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-[#22C55E] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200">
            {[
              { id: 'feed', label: 'Community Feed', icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              )},
              { id: 'events', label: 'Events', icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              )},
              { id: 'mentors', label: 'Mentors', icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-2 border-[#22C55E] text-[#22C55E]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {activeTab === 'feed' && (
                <div className="space-y-6">
                  {posts.map((post) => (
                    <div key={post.id} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#22C55E] rounded-full flex items-center justify-center text-white font-semibold">
                          {post.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold text-gray-900">{post.author}</span>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-500">{post.authorRole}</span>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-500">{post.timestamp}</span>
                          </div>
                          <h3 className="font-semibold text-lg text-gray-900 mb-2">{post.title}</h3>
                          <p className="text-gray-700 mb-4">{post.content}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <button className="flex items-center gap-2 text-gray-500 hover:text-[#22C55E] transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                {post.likes}
                              </button>
                              <button className="flex items-center gap-2 text-gray-500 hover:text-[#22C55E] transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                {post.comments}
                              </button>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                              {post.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'events' && (
                <div className="space-y-6">
                  {events.map((event) => (
                    <div key={event.id} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#22C55E] rounded-lg flex items-center justify-center text-white">
                          {getEventIcon(event.type)}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-gray-900 mb-2">{event.title}</h3>
                          <p className="text-gray-700 mb-4">{event.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span>{event.date}</span>
                              <span>•</span>
                              <span>{event.time}</span>
                              <span>•</span>
                              <span>{event.attendees} attendees</span>
                            </div>
                            <button className="bg-green-100 text-[#22C55E] px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors">
                              Join Event
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'mentors' && (
                <div className="space-y-6">
                  {mentors.map((mentor, index) => (
                    <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center text-white font-semibold text-lg">
                          {mentor.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-lg text-gray-900">{mentor.name}</h3>
                              <p className="text-gray-600">{mentor.role}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              mentor.availability === 'Available' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {mentor.availability}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {mentor.expertise.map((skill) => (
                              <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                {skill}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                {mentor.rating}
                              </div>
                              <span>{mentor.sessions} sessions</span>
                            </div>
                            <button className="bg-green-100 text-[#22C55E] px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors">
                              Book Session
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900">Start a Discussion</div>
                    <div className="text-sm text-gray-500">Share your thoughts with the community</div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900">Find Study Partner</div>
                    <div className="text-sm text-gray-500">Connect with someone learning the same topics</div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900">Ask for Help</div>
                    <div className="text-sm text-gray-500">Get assistance with your coding challenges</div>
                  </button>
                </div>
              </div>

              {/* Top Contributors */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">Top Contributors</h3>
                <div className="space-y-3">
                  {[
                    { name: "Alex Kim", role: "Community Moderator", points: 1247 },
                    { name: "Sarah Chen", role: "Frontend Developer", points: 892 },
                    { name: "Marcus Johnson", role: "Full Stack Developer", points: 756 }
                  ].map((contributor, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#22C55E] rounded-full flex items-center justify-center text-white text-xs font-semibold">
                          {contributor.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 text-sm">{contributor.name}</div>
                          <div className="text-xs text-gray-500">{contributor.role}</div>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-[#22C55E]">{contributor.points}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community Guidelines */}
              <div className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-xl p-6 text-white">
                <h3 className="font-semibold text-lg mb-3">Community Guidelines</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Be respectful and supportive</li>
                  <li>• Share knowledge and help others</li>
                  <li>• Keep discussions on-topic</li>
                  <li>• Follow our code of conduct</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
