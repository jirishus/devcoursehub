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
  url: string;
}

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const courses: Course[] = [
    {
      id: 1,
      title: 'MLOps Fundamentals',
      description: 'Learn to deploy, monitor, and maintain machine learning models in production with MLOps best practices.',
      category: 'AI',
      level: 'Intermediate',
      duration: '8 weeks',
      students: 1876,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60',
      url: 'https://www.coursera.org/learn/mlops-machine-learning-duke',
    },
    {
      id: 2,
      title: 'DevOps for Machine Learning',
      description: 'Implement CI/CD pipelines for ML models, containerization, and Kubernetes deployment for AI applications.',
      category: 'AI',
      level: 'Advanced',
      duration: '10 weeks',
      students: 1250,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop&q=60',
      url: 'https://www.coursera.org/learn/devops-machine-learning-duke',
    },
    {
      id: 3,
      title: 'MLOps with Azure Machine Learning',
      description: 'Master MLOps using Azure Machine Learning service for model deployment and monitoring.',
      category: 'AI',
      level: 'Intermediate',
      duration: '6 weeks',
      students: 980,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&auto=format&fit=crop&q=60',
      url: 'https://learn.microsoft.com/en-us/training/paths/machine-learning-ops/',
    },
    {
      id: 4,
      title: 'Kubeflow for Machine Learning',
      description: 'Build and deploy scalable ML workflows with Kubeflow on Kubernetes.',
      category: 'AI',
      level: 'Advanced',
      duration: '7 weeks',
      students: 845,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60',
      url: 'https://www.coursera.org/learn/machine-learning-in-production',
    },
    {
      id: 5,
      title: 'Modern JavaScript Fundamentals',
      description: 'Master the core concepts of modern JavaScript including ES6+ features, async/await, and functional programming.',
      category: 'Programming',
      level: 'Beginner',
      duration: '6 weeks',
      students: 1245,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60',
      url: 'https://www.udemy.com/course/modern-javascript-from-the-beginning/',
    },
    {
      id: 6,
      title: 'React Native Masterclass',
      description: 'Build cross-platform mobile applications using React Native and Expo with best practices.',
      category: 'Programming',
      level: 'Intermediate',
      duration: '8 weeks',
      students: 986,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60',
      url: 'https://www.udemy.com/course/react-native-the-practical-guide/',
    },
    {
      id: 7,
      title: 'Introduction to Machine Learning',
      description: 'Learn the fundamentals of machine learning with Python and scikit-learn.',
      category: 'AI',
      level: 'Beginner',
      duration: '10 weeks',
      students: 2156,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60',
      url: 'https://www.coursera.org/learn/machine-learning',
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
      url: 'https://www.udacity.com/course/deep-learning-pytorch-free-course',
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
      url: 'https://www.theodinproject.com/paths/full-stack-javascript',
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
      url: 'https://www.coursera.org/specializations/natural-language-processing',
    },
    {
      id: 7,
      title: 'React - The Complete Guide',
      description: 'Master React from the ground up with hooks, context, routing, and modern development patterns.',
      category: 'Programming',
      level: 'Beginner',
      duration: '12 weeks',
      students: 2847,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60',
      url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
    },
    {
      id: 8,
      title: 'Advanced React Patterns',
      description: 'Learn advanced React patterns including compound components, render props, and custom hooks.',
      category: 'Programming',
      level: 'Advanced',
      duration: '8 weeks',
      students: 1432,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60',
      url: 'https://www.udemy.com/course/advanced-react/',
    },
    {
      id: 9,
      title: 'React Testing Library & Jest',
      description: 'Master testing React applications with Jest and React Testing Library for robust, maintainable code.',
      category: 'Programming',
      level: 'Intermediate',
      duration: '6 weeks',
      students: 1156,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60',
      url: 'https://www.udemy.com/course/react-testing-library/',
    },
    {
      id: 10,
      title: 'GraphQL with React and Apollo',
      description: 'Build modern applications using GraphQL, Apollo Client, and React for efficient data fetching.',
      category: 'Programming',
      level: 'Intermediate',
      duration: '10 weeks',
      students: 1689,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60',
      url: 'https://www.udemy.com/course/graphql-with-react-course/',
    },
    {
      id: 11,
      title: 'GraphQL API Development',
      description: 'Learn to build powerful GraphQL APIs with Node.js, Apollo Server, and database integration.',
      category: 'Programming',
      level: 'Intermediate',
      duration: '8 weeks',
      students: 1234,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60',
      url: 'https://www.udemy.com/course/graphql-bootcamp/',
    },
    {
      id: 12,
      title: 'Full Stack GraphQL',
      description: 'Build complete applications with GraphQL, React, Node.js, and PostgreSQL from scratch.',
      category: 'Programming',
      level: 'Advanced',
      duration: '14 weeks',
      students: 967,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60',
      url: 'https://www.howtographql.com/',
    },
    {
      id: 13,
      title: 'React Performance Optimization',
      description: 'Optimize React applications for maximum performance with memoization, lazy loading, and profiling.',
      category: 'Programming',
      level: 'Advanced',
      duration: '5 weeks',
      students: 823,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&auto=format&fit=crop&q=60',
      url: 'https://www.udemy.com/course/react-performance/',
    },
    {
      id: 14,
      title: 'GraphQL Schema Design',
      description: 'Master GraphQL schema design patterns, federation, and best practices for scalable APIs.',
      category: 'Programming',
      level: 'Advanced',
      duration: '6 weeks',
      students: 654,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop&q=60',
      url: 'https://www.apollographql.com/tutorials/',
    },
    {
      id: 15,
      title: 'React with TypeScript',
      description: 'Build type-safe React applications with TypeScript, covering hooks, components, and best practices.',
      category: 'Programming',
      level: 'Intermediate',
      duration: '7 weeks',
      students: 1567,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60',
      url: 'https://www.udemy.com/course/react-and-typescript/',
    },
  ];

  const filteredCourses = courses.filter(
    (course) =>
      (selectedCategory === 'all' || course.category === selectedCategory) &&
      (course.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1 ||
        course.description.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1)
  );

  // Get unique course titles for autocomplete
  const courseTitles = Array.from(new Set(courses.map(course => course.title)));
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    if (value.length > 1) {
      const filtered = courseTitles.filter(title =>
        title.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const selectSuggestion = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pt-4 pb-12">
      {/* <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Explore Courses</h1>
        <p className="text-gray-600">Find the perfect course to advance your skills</p>
      </div> */}
      
      {/* Search and Filter */}
      <div className="mb-16">
        <div className="relative max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full px-5 py-[0.7em] border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-[#22C55E] focus:border-transparent text-gray-900 placeholder-gray-500 transition-colors mb-4"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => searchQuery.length > 1 && setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              autoComplete="off"
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
          
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer text-gray-800"
                  onMouseDown={() => selectSuggestion(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-sm rounded-full ${
              selectedCategory === 'all'
                ? 'bg-green-100 text-[#22C55E]'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Courses
          </button>
          <button
            onClick={() => setSelectedCategory('Programming')}
            className={`px-4 py-2 text-sm rounded-full ${
              selectedCategory === 'Programming'
                ? 'bg-green-100 text-[#22C55E]'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Programming
          </button>
          <button
            onClick={() => setSelectedCategory('AI')}
            className={`px-4 py-2 text-sm rounded-full ${
              selectedCategory === 'AI'
                ? 'bg-green-100 text-[#22C55E]'
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
            <a 
              key={course.id}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 hover:ring-2 hover:ring-[#22C55E]"
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
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{course.description}</p>
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
              <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 text-center">
                <span className="text-sm font-medium text-[#22C55E]">View Course →</span>
              </div>
            </a>
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
