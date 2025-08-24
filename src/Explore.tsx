import React, { useState } from 'react';

interface Course {
  id: number;
  title: string;
  description: string;
  category: 'Programming' | 'AI';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  students: number;
  rating: number;
  image: string;
}

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const courses: Course[] = [
    {
      id: 1,
      title: 'Modern JavaScript Fundamentals',
      description: 'Master the core concepts of modern JavaScript including ES6+ features, async/await, and functional programming.',
      category: 'Programming',
      level: 'Beginner',
      duration: '6 weeks',
      students: 1245,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60',
    },
    {
      id: 2,
      title: 'React Native Masterclass',
      description: 'Build cross-platform mobile applications using React Native and Expo with best practices.',
      category: 'Programming',
      level: 'Intermediate',
      duration: '8 weeks',
      students: 986,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60',
    },
    {
      id: 3,
      title: 'Introduction to Machine Learning',
      description: 'Learn the fundamentals of machine learning with Python and scikit-learn.',
      category: 'AI',
      level: 'Beginner',
      duration: '10 weeks',
      students: 2156,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60',
    },
    {
      id: 4,
      title: 'Deep Learning with PyTorch',
      description: 'Advanced deep learning techniques using PyTorch for computer vision and NLP.',
      category: 'AI',
      level: 'Advanced',
      duration: '12 weeks',
      students: 875,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60',
    },
    {
      id: 5,
      title: 'Full Stack Web Development',
      description: 'Build complete web applications with React, Node.js, and MongoDB.',
      category: 'Programming',
      level: 'Intermediate',
      duration: '14 weeks',
      students: 1542,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60',
    },
    {
      id: 6,
      title: 'Natural Language Processing',
      description: 'Learn how to process and analyze text data with modern NLP techniques.',
      category: 'AI',
      level: 'Intermediate',
      duration: '10 weeks',
      students: 932,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60',
    },
  ];

  const filteredCourses = courses.filter(
    (course) =>
      (selectedCategory === 'all' || course.category === selectedCategory) &&
      (course.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1 ||
        course.description.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Explore Courses</h1>
      
      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            className="absolute right-3 top-3.5 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-sm rounded-full ${
              selectedCategory === 'all'
                ? 'bg-[#22C55E] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Courses
          </button>
          <button
            onClick={() => setSelectedCategory('Programming')}
            className={`px-4 py-2 text-sm rounded-full ${
              selectedCategory === 'Programming'
                ? 'bg-[#22C55E] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Programming
          </button>
          <button
            onClick={() => setSelectedCategory('AI')}
            className={`px-4 py-2 text-sm rounded-full ${
              selectedCategory === 'AI'
                ? 'bg-[#22C55E] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            AI & Machine Learning
          </button>
        </div>
      </div>

      {/* Course Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="h-40 bg-gray-200 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-[#22C55E]">
                    {course.category}
                  </span>
                  <span className="text-xs text-gray-500">{course.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-yellow-400 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{course.rating}</span>
                  </div>
                  <span>{course.students.toLocaleString()} students</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No courses found matching your search.</p>
        </div>
      )}
    </div>
  );
}
