'use client';

export default function AboutSection() {
  const specialties = [
    {
      title: 'Video Editing',
      description: 'Skilled in cinematic editing, motion graphics, and post-production workflows.',
      image: '/editing.png',
    },
    {
      title: 'Full-Stack Development',
      description: 'Proficient in React, Next.js, Node.js, and MongoDB.',
      image: '/fullstack.png',
    },
    {
      title: 'Graphic Designing',
      description: 'Proficient in visual storytelling, designing, and digital illustration.',
      image: '/designing.png',
    },
  ];

  return (
    <section
      className="bg-gradient-to-b from-[#02091d] via-[#02081a] to-[#020718] text-white py-20 px-4 sm:px-6 text-center"
      id="about"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          About <span className="">Me</span>
        </h2>
        <div className="w-20 sm:w-28 h-[3px] bg-[#00BFFF] mx-auto mb-6 rounded-full"></div>

        {/* Description */}
        <p className="text-gray-100 mb-4 w-full sm:w-[90%] md:w-[75%] text-base sm:text-lg">
          <strong>Full Stack Web Developer</strong> with 2+ years of experience building scalable web applications from front to back using modern JavaScript frameworks and cloud-native technologies.
        </p>
        <p className="text-gray-100 mb-10 w-full sm:w-[90%] md:w-[75%] text-base sm:text-lg">
          My expertise lies in transforming business requirements into efficient, production-ready web applications using React and Next.js for front-end experiences, and MongoDB, Express, and Node.js for scalable back-end solutions.
        </p>

        {/* Specialties Grid */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
            {specialties.map((item, index) => (
              <div
                key={index}
                className="bg-[#0e111f] border border-[#2f3138] rounded-xl py-8 px-6 sm:px-10 flex flex-col items-center text-center hover:-translate-y-2 shadow-[0_4px_20px_#1a1a1ac4] hover:shadow-[0_10px_20px_#0e111f] hover:border-[#003844] transition-all duration-200"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-4 h-10 w-10 object-contain filter-aqua"
                />
                <h3 className="text-lg sm:text-xl font-bold text-gray-50 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-[1rem] sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
