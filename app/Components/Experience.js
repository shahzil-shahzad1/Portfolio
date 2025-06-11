'use client';
import { useState } from 'react';

const qualifications = {
  experience: [
    {
      title: 'Full Stack Web Developer',
      date: '2023 – Present',
      points: [
        'Developed and maintained dynamic web applications using React.js, Next.js, and Node.js.',
        'Architected RESTful APIs integrated with MongoDB.',
        'Deployed scalable applications on Vercel and Netlify.',
      ],
    },
    {
      title: 'Graphic Designer',
      date: '2021 – 2023',
      points: [
        'Created branding materials, social media assets, and promotional designs',
        'Expertise in Adobe Photoshop, Canva, and Figma for designing.',
        "Able to create Logo's for brands and companies "
      ],
    }
  ],
  education: [
    {
      title: 'Matriculation',
      company: 'City Cadet School',
      date: '2021 - 2023',
      location: 'Lahore, Pakistan',
      points: [
        'Pass out with Honors',
        'Focused on Graphic Designing and Video Editing',
      ],
    },
    {
      title: 'Intermediate in Computer Science',
      company: 'Kips College',
      date: '2023 - 2025',
      location: 'Lahore, Pakistan',
      points: [
        'Pass out with Honors',
        'Focused on Full Stack Web Development',
      ],
    },
  ],
};

export default function QualificationSection() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="qualification" className="py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-[#02091d] via-[#02081a] to-[#020718] text-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          Qualification
        </h2>
        <div className="w-24 sm:w-32 h-[3px] bg-[#00BFFF] mx-auto mb-6 rounded-full"></div>
        <p className="text-center text-gray-100 mb-10 text-base sm:text-lg">
          My personal journey through education and professional experience
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-6 py-2 text-sm font-semibold rounded-full transition cursor-pointer 
              ${activeTab === 'experience'
                ? 'bg-[#00BFFF] text-white shadow-md'
                : 'bg-[#1a1a1a] text-gray-300 hover:bg-[#2a2a2a]'
              }`}
          >
            EXPERIENCE
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-6 py-2 text-sm font-semibold rounded-full transition cursor-pointer 
              ${activeTab === 'education'
                ? 'bg-[#00BFFF] text-white shadow-md'
                : 'bg-[#1a1a1a] text-gray-300 hover:bg-[#2a2a2a]'
              }`}
          >
            EDUCATION
          </button>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-gray-700 pl-4 sm:pl-6 space-y-10">
          {qualifications[activeTab].map((item, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-4 sm:-left-3 top-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#00BFFF] flex items-center justify-center text-sm">
                {activeTab === 'experience' ? '✨' : '🎓'}
              </span>

              <div className="bg-[#0e111f] border-[1px] border-[#2f3138] rounded-xl p-4 sm:p-6 shadow-lg">
                <h3 className="text-base sm:text-lg font-bold text-white break-words">{item.title}</h3>
                {item.company && (
                  <p className="text-[#00c3ff] font-semibold mb-2 break-words">
                    {item.company}
                  </p>
                )}
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-gray-400 mb-4">
                  <div>{item.date}</div>
                  {item.location && <div>{item.location}</div>}
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm sm:text-[0.95rem] leading-relaxed">
                  {item.points.map((point, i) => (
                    <li key={i} className="break-words">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
