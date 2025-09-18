import React, { useState } from 'react';

interface Course {
  id: number;
  name: string;
  description: string;
  url: string;
  platform?: string;
  type?: string;
  thumbnail?: string;
}

const placeholder = 'https://placehold.co/80x80/232946/fff?text=Course';
const courses: Course[] = [
  // Web Development
  {
    id: 1,
    name: 'The Complete Web Developer in 2024: Zero to Mastery',
    description: 'Learn to code and become a Web Developer in 2024 with HTML, CSS, Javascript, React, Node.js, Machine Learning & more!',
    url: 'https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/',
    platform: 'Udemy',
    type: 'Web Development',
    thumbnail: placeholder,
  },
  {
    id: 2,
    name: 'The Web Developer Bootcamp 2024',
    description: 'COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!',
    url: 'https://www.udemy.com/course/the-web-developer-bootcamp/',
    platform: 'Udemy',
    type: 'Web Development',
    thumbnail: placeholder,
  },
  
  // Data Science
  {
    id: 3,
    name: 'Data Science Specialization',
    description: 'Launch your career in Data Science. Master data analysis, visualization, and machine learning techniques.',
    url: 'https://www.coursera.org/specializations/jhu-data-science',
    platform: 'Coursera',
    type: 'Data Science',
    thumbnail: placeholder,
  },
  {
    id: 4,
    name: 'Python for Data Science and Machine Learning Bootcamp',
    description: 'Learn how to use NumPy, Pandas, Seaborn, Matplotlib, Plotly, Scikit-Learn, Machine Learning, and more!',
    url: 'https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/',
    platform: 'Udemy',
    type: 'Data Science',
    thumbnail: placeholder,
  },
  
  // AI & Machine Learning
  {
    id: 5,
    name: 'Deep Learning Specialization',
    description: 'Become an expert in neural networks, and learn to implement them using deep learning frameworks like TensorFlow and PyTorch.',
    url: 'https://www.coursera.org/specializations/deep-learning',
    platform: 'Coursera',
    type: 'AI & ML',
    thumbnail: placeholder,
  },
  // AI & Machine Learning (continued)
  {
    id: 6,
    name: 'Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2024]',
    description: 'Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.',
    url: 'https://www.udemy.com/course/machinelearning/',
    platform: 'Udemy',
    type: 'AI & ML',
    thumbnail: placeholder,
  },
  {
    id: 7,
    name: 'Deep Learning A-Z: Hands-On Artificial Neural Networks',
    description: 'Learn to create Deep Learning Algorithms in Python from two Machine Learning & Data Science experts.',
    url: 'https://www.udemy.com/course/deeplearning/',
    platform: 'Udemy',
    type: 'AI & ML',
    thumbnail: placeholder,
  },

  // Cloud & DevOps
  {
    id: 8,
    name: 'AWS Certified Cloud Practitioner',
    description: 'Learn AWS Cloud Computing and become an AWS Certified Cloud Practitioner with this complete training course.',
    url: 'https://www.udemy.com/course/aws-certified-cloud-practitioner-new/',
    platform: 'Udemy',
    type: 'Cloud',
    thumbnail: placeholder,
  },
  {
    id: 9,
    name: 'Docker and Kubernetes: The Complete Guide',
    description: 'Build, test, and deploy Docker applications with Kubernetes while learning production-style development workflows.',
    url: 'https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/',
    platform: 'Udemy',
    type: 'DevOps',
    thumbnail: placeholder,
  },

  // Mobile Development
  {
    id: 10,
    name: 'iOS & Swift - The Complete iOS App Development Bootcamp',
    description: 'From Beginner to iOS App Developer with Just One Course! Fully Updated with a Comprehensive Module Dedicated to SwiftUI!',
    url: 'https://www.udemy.com/course/ios-13-app-development-bootcamp/',
    platform: 'Udemy',
    type: 'Mobile',
    thumbnail: placeholder,
  },
  {
    id: 11,
    name: 'The Complete Android 14 & Kotlin Development Masterclass',
    description: 'Learn Android 14 App Development From Beginner to Advanced Developer. Build Apps like Trello, 7Min Workout, and more.',
    url: 'https://www.udemy.com/course/android-oreo-kotlin-app-masterclass/',
    platform: 'Udemy',
    type: 'Mobile',
    thumbnail: placeholder,
  },

  // Business & Productivity
  {
    id: 12,
    name: 'The Complete Digital Marketing Course - 12 Courses in 1',
    description: 'Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!',
    url: 'https://www.udemy.com/course/learn-digital-marketing-course/',
    platform: 'Udemy',
    type: 'Marketing',
    thumbnail: placeholder,
  },
  {
    id: 13,
    name: 'Business Analytics Specialization',
    description: 'Make Data-Driven Business Decisions. Achieve fluency in business data strategies in four discipline-specific courses.',
    url: 'https://www.coursera.org/specializations/business-analytics',
    platform: 'Coursera',
    type: 'Business',
    thumbnail: placeholder,
  },

  // LinkedIn Learning Courses
  {
    id: 14,
    name: 'Learning Python',
    description: 'Get started with Python, the popular and highly readable object-oriented language.',
    url: 'https://www.linkedin.com/learning/learning-python-14393370',
    platform: 'LinkedIn Learning',
    type: 'Programming',
    thumbnail: placeholder,
  },
  {
    id: 15,
    name: 'JavaScript Essential Training',
    description: 'Get hands-on experience scripting with JavaScript. Learn how to work with objects, variables, data types, conditionals, functions, loops, and the DOM.',
    url: 'https://www.linkedin.com/learning/javascript-essential-training-3',
    platform: 'LinkedIn Learning',
    type: 'Web Development',
    thumbnail: placeholder,
  },
  {
    id: 16,
    name: 'freeCodeCamp',
    description: 'Completely free coding bootcamp with thousands of hours of interactive lessons and projects.',
    url: 'https://www.freecodecamp.org/',
    platform: 'freeCodeCamp',
    type: 'Bootcamp',
    thumbnail: placeholder,
  },
  {
    id: 17,
    name: 'Python for Everybody',
    description: 'Dr. Charles Severance’s Coursera specialization introducing Python programming for beginners.',
    url: 'https://www.coursera.org/specializations/python',
    platform: 'Coursera',
    type: 'Specialization',
    thumbnail: placeholder,
  },
  {
    id: 18,
    name: 'Full Stack Open',
    description: 'University of Helsinki’s open course on modern web development with JavaScript, React, Node.js, GraphQL, and TypeScript.',
    url: 'https://fullstackopen.com/en/',
    platform: 'University of Helsinki',
    type: 'University',
    thumbnail: placeholder,
  },
  {
    id: 19,
    name: 'MIT OpenCourseWare: Introduction to Computer Science and Programming in Python',
    description: 'MIT’s classic introductory programming course using Python.',
    url: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/',
    platform: 'MIT OCW',
    type: 'University',
    thumbnail: placeholder,
  },
  {
    id: 20,
    name: 'Codecademy: Learn JavaScript',
    description: 'Interactive beginner-friendly JavaScript course with hands-on exercises.',
    url: 'https://www.codecademy.com/learn/introduction-to-javascript',
    platform: 'Codecademy',
    type: 'Interactive',
    thumbnail: placeholder,
  },
];

export const CourseList: React.FC = () => {
  const [search, setSearch] = useState('');
  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(120deg, #161a2a 0%, #232946 100%)', fontFamily: 'Inter, sans-serif', paddingBottom: 40 }}>
      <header style={{
  background: 'rgba(18, 22, 38, 0.97)',
  borderBottom: '1px solid #232946',
  padding: '0.5rem 0',
  marginBottom: '2rem',
  boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)',
  position: 'sticky',
  top: 0,
  zIndex: 10,
}}>
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 2vw',
    height: 64,
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{
        background: 'linear-gradient(135deg, #4fc3f7 40%, #0070f3 100%)',
        borderRadius: '50%',
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 8px 0 rgba(79,195,247,0.09)'
      }}>
        <span style={{ fontSize: 22, color: '#fff', fontWeight: 800, fontFamily: 'inherit', letterSpacing: '-1px' }}>D</span>
      </div>
      <span style={{ color: '#fff', fontWeight: 800, fontSize: '1.45rem', letterSpacing: '-1px' }}>DevCourseHub</span>
    </div>
    <nav style={{ display: 'flex', gap: 22, alignItems: 'center' }}>
  <a href="https://github.com/jirishus/devcoursehub" target="_blank" rel="noopener noreferrer" style={{ color: '#b8c1ec', textDecoration: 'none', fontWeight: 500, fontSize: '1.05rem', transition: 'color 0.18s' }} onMouseOver={e => e.currentTarget.style.color = '#4fc3f7'} onMouseOut={e => e.currentTarget.style.color = '#b8c1ec'}>GitHub</a>
</nav>
  </div>
</header>
      <main style={{ width: '100%', margin: 0, padding: '0 2vw', boxSizing: 'border-box', maxWidth: '100vw' }}>
  <div style={{ margin: '1rem 0', textAlign: 'center' }}>
    <input
      type="text"
      placeholder="Search courses..."
      value={search}
      onChange={e => setSearch(e.target.value)}
      style={{
        width: '100%',
        maxWidth: '500px',
        padding: '0.75rem 1rem',
        borderRadius: '0.5rem',
        border: '1px solid #e2e8f0',
        background: '#ffffff',
        color: '#1e293b',
        fontSize: '1rem',
        outline: 'none',
        boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
        transition: 'all 0.2s',
        margin: '0 auto',
        boxSizing: 'border-box',
        display: 'block',
      }}
    />
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginTop: 18 }}>
      {['AI','Python','JavaScript','Web','University','Bootcamp','Specialization','Coursera','Harvard','MIT'].map(cat => (
        <button
          key={cat}
          type="button"
          onClick={() => setSearch(cat)}
          style={{
            background: '#232946',
            color: '#4fc3f7',
            border: '1px solid #232946',
            borderRadius: 7,
            padding: '0.4rem 1.1rem',
            fontSize: '1rem',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'background 0.18s, color 0.18s, border-color 0.18s',
            marginBottom: 2,
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = '#0070f3';
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.borderColor = '#0070f3';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = '#232946';
            e.currentTarget.style.color = '#4fc3f7';
            e.currentTarget.style.borderColor = '#232946';
          }}
        >{cat}</button>
      ))}
    </div>
  </div>
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '2rem',
      width: '100%',
      margin: 0,
      padding: 0,
      listStyle: 'none',
      boxSizing: 'border-box',
    }}
  >
    {filteredCourses.map(course => (
  <div
    key={course.id}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      borderRadius: 18,
      background: '#171b24',
      boxShadow: '0 2px 16px 0 rgba(20,20,40,0.16)',
      minHeight: 120,
      marginBottom: 0,
      position: 'relative',
      overflow: 'hidden',
      transition: 'box-shadow 0.18s, transform 0.18s',
      cursor: 'pointer',
      padding: '1.35rem 1.45rem 1.1rem 1.45rem',
      willChange: 'transform',
    }}
    onMouseOver={e => {
      e.currentTarget.style.boxShadow = '0 6px 32px 0 #0070f355, 0 2px 8px 0 rgba(20,20,40,0.18)';
      e.currentTarget.style.transform = 'translateY(-2px) scale(1.009)';
    }}
    onMouseOut={e => {
      e.currentTarget.style.boxShadow = '0 2px 16px 0 rgba(20,20,40,0.16)';
      e.currentTarget.style.transform = 'none';
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 13, flexWrap: 'wrap', marginBottom: 5, minWidth: 0 }}>
      <img
        src={course.thumbnail || placeholder}
        alt={course.name + ' thumbnail'}
        style={{ width: 38, height: 38, objectFit: 'cover', borderRadius: '50%', border: '2px solid #22263a', background: '#232946', boxShadow: '0 1px 4px 0 #181b2a', display: 'block' }}
      />
      <a
        href={course.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '1.18rem',
          fontWeight: 800,
          color: '#4fc3f7',
          textDecoration: 'none',
          letterSpacing: '-0.01em',
          transition: 'color 0.18s, text-decoration 0.18s, box-shadow 0.18s',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          cursor: 'pointer',
          outline: 'none',
          borderRadius: 6,
          boxShadow: 'none',
          padding: 0,
          background: 'none',
          lineHeight: 1.15,
          maxWidth: '100%',
          wordBreak: 'break-word',
        }}
        onMouseOver={e => {
          e.currentTarget.style.color = '#0070f3';
          e.currentTarget.style.textDecoration = 'underline';
          e.currentTarget.style.boxShadow = '0 2px 8px 0 #4fc3f7aa';
        }}
        onMouseOut={e => {
          e.currentTarget.style.color = '#4fc3f7';
          e.currentTarget.style.textDecoration = 'none';
          e.currentTarget.style.boxShadow = 'none';
        }}
        tabIndex={0}
        aria-label={`Open course: ${course.name}`}
      >
        {course.name}
        <svg style={{ marginLeft: 2 }} xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 20 20" fill="none"><path d="M7.5 12.5L17 3M17 3H10.5M17 3V9.5" stroke="#4fc3f7" strokeWidth="1.7" strokeLinecap="round"/></svg>
      </a>
      <span style={{ color: '#fff', background: '#0070f3', borderRadius: 7, padding: '2px 11px', fontWeight: 600, fontSize: '0.99rem', letterSpacing: '0.01em', marginTop: 2, boxShadow: '0 2px 8px 0 #4fc3f733' }}>{course.platform}</span>
    </div>
    <div style={{ margin: '0.25rem 0 0.1rem 0', color: '#e0e0e0', fontSize: '1.06rem', fontWeight: 500, lineHeight: 1.62, opacity: 0.97, maxHeight: 56, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'normal' }}>{course.description}</div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9, marginTop: 18, alignItems: 'center', fontSize: '0.97rem', opacity: 0.97 }}>
      <span style={{ color: '#0070f3', background: '#232946', borderRadius: 12, padding: '3px 13px', fontWeight: 700, fontSize: '0.99rem', border: '1px solid #232946', letterSpacing: '0.01em' }}>{course.type}</span>
      {['AI','Beginner','University','Bootcamp','Specialization'].filter(tag =>
        (course.name + ' ' + course.description).toLowerCase().includes(tag.toLowerCase())
      ).map(tag => (
        <span key={tag} style={{ color: '#b8c1ec', background: '#232946', borderRadius: 12, padding: '3px 13px', fontWeight: 600, fontSize: '0.99rem', border: '1px solid #232946' }}>{tag}</span>
      ))}
    </div>
  </div>
))}
    {filteredCourses.length === 0 && <div style={{ color: '#fff', opacity: 0.7, gridColumn: '1/-1' }}>No courses found.</div>}
  </div>
</main>
      <footer style={{ textAlign: 'center', color: '#b8c1ec', fontSize: '0.98rem', marginTop: 50, opacity: 0.8 }}>
        © {new Date().getFullYear()} DevCourseHub. All rights reserved.
      </footer>
    </div>
  );
};
