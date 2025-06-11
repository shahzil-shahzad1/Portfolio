'use client';

export default function SkillsSection() {
    const skills = [
        {
            title: 'Programming Languages',
            icon: '/programming.png',
            tags: [
                'Python (Beginning)',
                'JavaScript (ES6+)',
                'C++',
                "C",
                'HTML5 & CSS3',
            ],
        },
        {
            title: 'Frontend Development',
            icon: '/frontend.png',
            tags: [
                'React.js & Redux',
                'Modern JavaScript',
                'Responsive Web Design',
                'CSS3 & Sass',
                'HTML5 Semantic Markup',
                'UI/UX Design Principles',
                'Performance Optimization',
            ],
        },
        {
            title: 'Backend Development',
            icon: '/backend.png',
            tags: [
                'Node.js & Express.js',
                'RESTful APIs',
                'Authentication & Authorization',
                'MongoDB Database',
            ],
        },
        {
            title: 'Graphic Designing',
            icon: '/designing.png',
            tags: [
                'Adobe Photoshop & Canva',
                'Figma',
                'Logo & Brand Identity',
                'UI Mockups & Wireframes',
                'Creative Concept Development',
                'Social Media Graphics',
                'Print & Digital Design',
                'Visual Storytelling',
            ],
        },
    ];

    return (
        <section className="bg-gradient-to-b from-[#020718] via-[#02081a] to-[#02091d] text-white py-20 px-6 text-center" id="skills">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
                    Skills <span className="">& Expertise</span>
                </h2>
                <div className="w-32 h-[3px] bg-[#00BFFF] mx-auto mb-6 rounded-full"></div>
                <p className="text-gray-100 mb-8 text-base sm:text-lg">
                    A comprehensive overview of my technical skills and areas of expertise
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((category, index) => (
                        <div
                            key={index}
                            // 1a1a1ac4
                            className="bg-[#0e111f] border-[1px] border-[#2f3138] rounded-xl p-6 shadow-[0_4px_20px_#1a1a1ac4] hover:-translate-y-2 hover:shadow-[0_10px_20px_#0e111f] hover:border-[#003844] transition-all duration-200 text-left flex flex-col items-start"
                        >
                            <img
                                src={category.icon}
                                alt={category.title}
                                className="h-8 w-8 mb-4 filter-aqua"
                            />
                            <h3 className="text-lg sm:text-xl font-bold text-gray-50 mb-2">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="relative cursor-pointer inline-block overflow-hidden rounded-full bg-[#141725] px-4 py-2 text-sm text-gray-300 transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-sky-500 before:opacity-20 before:blur-md before:transition-all before:duration-500 hover:text-sky-300 hover:before:w-full"
                                    >
                                        <span className="relative z-10">{tag}</span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
