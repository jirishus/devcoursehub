import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Story {
  id: number;
  name: string;
  role: string;
  company: string;
  story: string;
  longStory: string;
  image: string;
  avatar: string;
  beforeRole: string;
  salaryIncrease: string;
  timeToJob: string;
  coursesCompleted: number;
  skills: string[];
  linkedIn?: string;
  github?: string;
  portfolio?: string;
}

interface CareerPath {
  role: string;
  company: string;
  salary: string;
  date: string;
}

export default function SuccessStories() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const stories: Story[] = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Frontend Developer',
      company: 'Google',
      beforeRole: 'Marketing Coordinator',
      story: 'Went from marketing to Google in 8 months. The project-based learning was key to landing interviews.',
      longStory: 'Started as a marketing coordinator with zero programming experience. DevCourseHub\'s structured curriculum made the transition achievable. Spent 8 months learning 2-3 hours daily. The React projects and mentorship program were game-changers. Now leading a team at Google.',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      avatar: 'SC',
      salaryIncrease: '180%',
      timeToJob: '8 months',
      coursesCompleted: 12,
      skills: ['React', 'TypeScript', 'Node.js'],
      linkedIn: 'https://linkedin.com/in/sarah-chen-dev',
      github: 'https://github.com/sarahchen',
      portfolio: 'https://sarahchen.dev'
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      role: 'Full Stack Developer',
      company: 'Stripe',
      beforeRole: 'Restaurant Manager',
      story: 'Career changed from restaurant management to tech at 35. Built a full-stack e-commerce app that got me hired.',
      longStory: 'After 10 years managing restaurants, needed a career change. DevCourseHub\'s flexible scheduling worked perfectly. The portfolio projects were game-changers. Job placement support helped with resume and interviews. Went from $45k to $95k in less than a year.',
      image: 'https://randomuser.me/api/portraits/men/44.jpg',
      avatar: 'MJ',
      salaryIncrease: '110%',
      timeToJob: '10 months',
      coursesCompleted: 15,
      skills: ['Python', 'Django', 'React'],
      linkedIn: 'https://linkedin.com/in/marcus-johnson-dev',
      github: 'https://github.com/marcusj',
      portfolio: 'https://marcusjohnson.dev'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      role: 'React Developer',
      company: 'Airbnb',
      beforeRole: 'Graphic Designer',
      story: 'Leveraged design background to transition to React development. Built 5 portfolio projects including a featured app.',
      longStory: 'As a graphic designer, visual concepts were familiar but coding wasn\'t. DevCourseHub\'s project-first approach was perfect. Built 5 portfolio projects including a React Native app featured on Product Hunt. Tripled my income in 6 months.',
      image: 'https://randomuser.me/api/portraits/women/28.jpg',
      avatar: 'ER',
      salaryIncrease: '200%',
      timeToJob: '6 months',
      coursesCompleted: 8,
      skills: ['React', 'JavaScript', 'CSS'],
      linkedIn: 'https://linkedin.com/in/elena-rodriguez-dev',
      github: 'https://github.com/elenarodriguez',
      portfolio: 'https://elenarod.dev'
    }
  ];

  const careerPaths = [
    {
      name: 'Sarah Chen',
      path: [
        { role: 'Marketing Coordinator', company: 'Local Agency', salary: '$35k', date: '2021' },
        { role: 'Frontend Developer', company: 'Google', salary: '$140k', date: '2024' }
      ]
    }
  ];

  const stats = [
    { number: '94%', label: 'Job Placement Rate', description: 'Of graduates find employment within 6 months' },
    { number: '$85k', label: 'Average Starting Salary', description: 'Median first job salary for our graduates' },
    { number: '156%', label: 'Average Salary Increase', description: 'Career changers see significant income growth' },
    { number: '4.2x', label: 'Faster Learning', description: 'Compared to traditional computer science programs' }
  ];

  const companies = [
    'Google', 'Microsoft', 'Apple', 'Amazon', 'Meta', 'Netflix', 'Stripe', 'Airbnb'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Real career transformations from our community members.
            </p>
            <Link to="/signup" className="bg-green-100 text-[#22C55E] px-8 py-3 rounded-lg font-semibold hover:bg-green-200 transition-colors hover:no-underline">
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Impact in Numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-[#22C55E] mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Stories
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {stories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center text-white font-semibold text-lg">
                      {story.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{story.name}</h3>
                      <p className="text-[#22C55E] font-medium">{story.role}</p>
                      <p className="text-sm text-gray-600">{story.company}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#22C55E]">{story.salaryIncrease}</div>
                      <div className="text-xs text-gray-500">Salary Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#22C55E]">{story.timeToJob}</div>
                      <div className="text-xs text-gray-500">Time to Job</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#22C55E]">{story.coursesCompleted}</div>
                      <div className="text-xs text-gray-500">Courses</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 italic">"{story.story}"</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-green-100 text-[#22C55E] rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                    {story.skills.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        +{story.skills.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      {story.linkedIn && (
                        <a href={story.linkedIn} className="text-gray-400 hover:text-[#22C55E]">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                          </svg>
                        </a>
                      )}
                      {story.github && (
                        <a href={story.github} className="text-gray-400 hover:text-[#22C55E]">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                          </svg>
                        </a>
                      )}
                      {story.portfolio && (
                        <a href={story.portfolio} className="text-gray-400 hover:text-[#22C55E]">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                    <button 
                      onClick={() => setSelectedStory(story)}
                      className="text-[#22C55E] font-medium hover:text-[#16A34A] transition-colors"
                    >
                      Read Full Story →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Progression */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Career Progression
            </h2>
          </div>
          
          <div className="space-y-12">
            {careerPaths.map((person, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{person.name}'s Journey</h3>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  {person.path.map((step, stepIndex) => (
                    <React.Fragment key={stepIndex}>
                      <div className="bg-white rounded-lg p-4 shadow-sm text-center min-w-[200px]">
                        <div className="text-sm text-gray-500 mb-1">{step.date}</div>
                        <div className="font-semibold text-gray-900">{step.role}</div>
                        <div className="text-sm text-gray-600">{step.company}</div>
                        <div className="text-lg font-bold text-[#22C55E] mt-2">{step.salary}</div>
                      </div>
                      {stepIndex < person.path.length - 1 && (
                        <div className="hidden md:block">
                          <svg className="w-8 h-8 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where Graduates Work
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {companies.map((company, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="font-semibold text-gray-700">{company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#22C55E] to-[#16A34A]">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your Success Story
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands who transformed their careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="bg-white text-[#22C55E] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors hover:no-underline">
              Start Free Today
            </Link>
            <Link to="/explore" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors hover:no-underline">
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Modal for Full Story */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {selectedStory.avatar}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedStory.name}</h2>
                    <p className="text-[#22C55E] font-medium">{selectedStory.role} at {selectedStory.company}</p>
                    <p className="text-gray-600">Previously: {selectedStory.beforeRole}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedStory(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#22C55E]">{selectedStory.salaryIncrease}</div>
                  <div className="text-sm text-gray-600">Salary Increase</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#22C55E]">{selectedStory.timeToJob}</div>
                  <div className="text-sm text-gray-600">Time to Job</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#22C55E]">{selectedStory.coursesCompleted}</div>
                  <div className="text-sm text-gray-600">Courses Completed</div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Skills Mastered</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedStory.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-green-100 text-[#22C55E] rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Full Story</h3>
                <p className="text-gray-700 leading-relaxed">{selectedStory.longStory}</p>
              </div>
              
              <div className="flex gap-4">
                {selectedStory.linkedIn && (
                  <a href={selectedStory.linkedIn} className="flex items-center gap-2 text-[#22C55E] hover:text-[#16A34A]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                    LinkedIn Profile
                  </a>
                )}
                {selectedStory.github && (
                  <a href={selectedStory.github} className="flex items-center gap-2 text-[#22C55E] hover:text-[#16A34A]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    GitHub Profile
                  </a>
                )}
                {selectedStory.portfolio && (
                  <a href={selectedStory.portfolio} className="flex items-center gap-2 text-[#22C55E] hover:text-[#16A34A]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Portfolio
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
