import React from 'react';

export default function SuccessStories() {
  const stories = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Frontend Developer at TechCorp',
      story: 'After completing several courses on devcoursehub, I was able to land my dream job as a Frontend Developer. The hands-on projects were invaluable!',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      role: 'Full Stack Developer at WebSolutions',
      story: 'The comprehensive curriculum helped me transition from a junior to a senior developer role within a year. The real-world projects gave me the confidence I needed.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'James Wilson',
      role: 'Mobile App Developer at AppWorks',
      story: 'Thanks to the mobile development courses, I was able to launch my first app on the App Store. The community support was amazing throughout my learning journey.',
      image: 'https://randomuser.me/api/portraits/men/75.jpg'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Success Stories</h1>
      <p className="text-lg text-gray-700 mb-12">Hear from our community members who have transformed their careers through our courses.</p>
      
      <div className="space-y-12">
        {stories.map((story) => (
          <div key={story.id} className="bg-white rounded-xl shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col md:flex-row gap-6">
              <img 
                src={story.image} 
                alt={story.name}
                className="w-20 h-20 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{story.name}</h2>
                <p className="text-[#22C55E] font-medium mb-3">{story.role}</p>
                <p className="text-gray-700">"{story.story}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
