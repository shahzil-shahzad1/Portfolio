'use client';

export default function ContactSection() {
    return (
        <section id="contact" className="bg-gradient-to-b from-[#02091d] via-[#02081a] to-[#020718] text-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Get In Touch</h2>
                    <div className="w-20 h-1 bg-[#00b0f9] mx-auto mt-2 rounded-full" />
                    <p className="text-gray-100 mt-4 text-base sm:text-lg">
                        Let&apos;s discuss how we can work together on your next project
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Left: Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                        <p className="text-gray-300 mb-6 text-sm">
                            I&apos;m always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-4 text-sm">
                            <div className="bg-[#0e111f] p-4 rounded-lg border border-[#2f3138] transition-all duration-200 hover:scale-[99%] hover:ml-2">
                                <strong className="block mb-1">📧 Email</strong>
                                <a href="mailto:shehzilshahzad51@gmail.com" className="ml-6 text-[#00BFFF] hover:text-[#00afe9]">shehzilshahzad51@gmail.com</a>
                            </div>
                            <div className="bg-[#0e111f] p-4 rounded-lg border border-[#2f3138] transition-all duration-200 hover:scale-[99%] hover:ml-2">
                                <strong className="block mb-1">🔗 LinkedIn</strong>
                                <a href="https://www.linkedin.com/in/shehzil-shahzad-563b8031a/" className="ml-6 text-[#00BFFF] hover:text-[#00afe9]">Muhammad Shahzil Shahzad</a>
                            </div>
                            <div className="bg-[#0e111f] p-4 rounded-lg border border-[#2f3138] transition-all duration-200 hover:scale-[99%] hover:ml-2">
                                <strong className="block mb-1">🐙 GitHub</strong>
                                <a href="https://github.com/shahzil-shahzad1" className="ml-6 text-[#00BFFF] hover:text-[#00afe9]">shahzil-shahzad</a>
                            </div>
                            <div className="bg-[#0e111f] p-4 rounded-lg border border-[#2f3138] transition-all duration-200 hover:scale-[99%] hover:ml-2">
                                <strong className="block mb-1">📍 Location</strong>
                                <span className="ml-3 text-[#00BFFF]">Available for Remote Work</span>
                            </div>
                            <div className="bg-[#202020] p-4 rounded-lg border border-gray-700 text-green-400 font-medium">
                                ● Available for new opportunities
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="bg-[#0e111f] p-8 rounded-lg border border-[#2f3138]">
                        <form className="space-y-6 text-sm">
                            <div>
                                <label htmlFor="name" className="block mb-3 text-lg text-gray-300">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    className="w-full bg-gradient-to-b from-[#02091d] via-[#02081a] to-[#020718] text-white p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#00b0f9] focus:ring-offset-0 placeholder-gray-200"
                                    placeholder="Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-3 text-lg text-gray-100">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full bg-gradient-to-b from-[#02091d] via-[#02081a] to-[#020718] text-white p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#00b0f9] focus:ring-offset-0 placeholder-gray-200"
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-3 text-lg text-gray-100">Subject</label>
                                <input
                                    id="subject"
                                    type="text"
                                    className="w-full bg-gradient-to-b from-[#02091d] via-[#02081a] to-[#020718] text-white p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#00b0f9] focus:ring-offset-0 placeholder-gray-200"
                                    placeholder="Subject"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-3 text-lg text-gray-100">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full bg-gradient-to-b from-[#02091d] via-[#02081a] to-[#020718] text-white p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#00b0f9] focus:ring-offset-0 placeholder-gray-200"
                                    placeholder="Message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[#00BFFF] to-[#00b0f9] hover:from-[#01b5f1] hover:to-[#00a3e9] text-white font-medium px-6 py-2 rounded shadow-lg transition cursor-pointer"
                            >
                                ➤ SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
