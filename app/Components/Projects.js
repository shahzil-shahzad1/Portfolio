'use client';

const projects = [
  {
    title: 'Flappy Bird Game',
    domain: 'Web Development',
    link: "https://flappy-bird-game-pearl.vercel.app/",
    description: 'Built a browser-based Flappy Bird clone using vanilla HTML, CSS, and JavaScript, simulating gravity, obstacle collision, and responsive gameplay.',
    technologies: ['HTML', 'CSS', 'JavaScript','DOM Manipulation']
  },
  {
    title: 'Ranking App',
    domain: 'Web Development',
    description: 'Developed a responsive ranking app to dynamically list and sort items based on user-defined criteria, using pure HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation']
  },
  {
    title: 'Tic Tac Toe Game',
    domain: 'Web Development',
    link: "https://tic-tac-toe-game-tan-one.vercel.app/",
    description: 'Created an interactive two-player Tic Tac Toe game with real-time win condition checks and reset functionality using vanilla JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Game Logic']
  },
  {
    title: 'Spotify Clone',
    domain: 'Web Development',
    description: 'Designed a front-end clone of Spotify’s UI with music control features, playlists, and responsive styling using HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design']
  },
  {
    title: 'Waxwing',
    domain: 'Web Development',
    link: "https://waxwing0.vercel.app",
    description: 'Built a professional, responsive company website for practice using Next.js with optimized performance, SEO, and modular components.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'SEO Optimization', 'Web Performance']
  },
  {
    title: 'Friends Challenge Game',
    domain: 'Web Development',
    link: "https://friends-challenge-game.vercel.app/",
    description: 'Developed a React-based quiz game for friends to challenge each other with custom questions and score tracking.',
    technologies: ['React', 'JavaScript', 'Hooks', 'State Management']
  },
  {
    title: 'Developer Portfolio',
    domain: 'Web Development',
    description: 'Created a personal portfolio website to showcase projects, skills, and experience using HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design']
  },
  {
    title: 'Vite Clone',
    domain: 'Web Development',
    description: 'Built a lightweight front-end tool mimicking the structure and setup of Vite using vanilla web technologies.',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Netflix Clone',
    domain: 'Web Development',
    description: 'Designed a static front-end Netflix clone featuring dynamic movie thumbnails, responsive layout, and styled sections.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design']
  },
  {
    title: 'Quiz App',
    domain: 'Web Development',
    description: 'Developed a React-powered quiz application with multiple-choice questions, score tracking, and conditional rendering.',
    technologies: ['React', 'JavaScript', 'Hooks', 'State Management']
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-[#020718] via-[#02081a] to-[#02091d] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Side Projects</h2>
        <div className="w-20 h-1 bg-[#00b0f9] mx-auto mb-6 rounded-full" />
        <p className="text-gray-100 mb-8 text-base sm:text-lg">
          Key projects from my professional experience at leading tech companies
        </p>

        <div className="space-y-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#0e111f] border border-[#2f3138] rounded-xl p-6 text-left shadow-lg hover:-translate-y-2 hover:shadow-[0_10px_20px_#0e111f] hover:border-[#003844] transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="text-blue-400 text-xl">📘</div>
                <h3 className="text-lg md:text-xl text-gray-100 font-bold">{project.title}</h3>
              </div>
              <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full inline-block my-2">
                {project.domain}
              </span>
              <p className="text-gray-300 mb-4 text-sm md:text-base">{project.description}</p>
              <a href={project.link} className={`${project.link ? "text-sm text-[#00BFFF] border border-[#00BFFF] px-4 py-1 rounded hover:bg-[#00BFFF] hover:text-white transition" : "" }`}>
                {project.link ? "View" : ""}
              </a>
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-2">Technologies Used:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#00b0f9] text-white text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
