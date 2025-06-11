import Image from "next/image";

export default function HeroSection() {
  const socials = [
    {
      name: "LinkedIn",
      img: "/linkedin.png",
      link: "https://www.linkedin.com/in/shehzil-shahzad-563b8031a/"
    },
    {
      name: "GitHub",
      img: "/github.png",
      link: "https://github.com/shahzil-shahzad1"
    },
    {
      name: "Mail",
      img: "/mail.png",
      link: "mailto:shehzilshahzad51@gmail.com"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#020718] via-[#02081a] to-[#02091d] text-white py-28 px-4 sm:px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Tagline Button */}
        <button className="mb-6 sm:mb-10 px-6 py-3 rounded-full border border-gray-500 text-sm sm:text-lg bg-gray-900">
          ✨ Available for new opportunities
        </button>

        {/* Headings */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-snug">
          Hi, I'm <span className="text-[#0ad8fc]">Muhammad Shahzil Shahzad</span>
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">
          Full-Stack Developer
        </h2>

        {/* Description */}
        <p className="text-gray-100 mb-8 text-base sm:text-lg md:text-xl px-4">
          Transforming complex data into intelligent solutions with 4+ years of expertise in NLP, LLM training, and scalable web applications.
        </p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-xl font-semibold mb-10">
          <div className="text-center">
            <span className="text-4xl sm:text-5xl">2+</span><br />
            Years Experience
          </div>
          <div className="text-center">
            <span className="text-4xl sm:text-5xl">10+</span><br />
            Projects Completed
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <a href="#contact" className="bg-[#1E90FF] hover:bg-[#00BFFF] text-white px-10 py-3 text-lg sm:text-xl rounded-full shadow-lg transition">
            Get in Touch
          </a>
          <a href="/cv.pdf" className="border border-gray-100 py-3 px-10 text-lg sm:text-xl rounded-full hover:bg-white hover:text-black transition">
            View Resume
          </a>
          <a href="/cv.pdf" download className="border border-gray-100 py-3 px-10 text-lg sm:text-xl rounded-full hover:bg-[#00BFFF] hover:text-white hover:border-[#00BFFF] transition">
            Download
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6">
          {socials.map((social, index) => (
            <a
              href={social.link}
              key={index}
              aria-label={social.name}
              className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition-transform"
            >
              <Image
                src={social.img}
                alt={social.name}
                width={40} // Adjust width and height as needed
                height={40}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
