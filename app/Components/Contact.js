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
                            {/* ... */}
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="bg-[#0e111f] p-8 rounded-lg border border-[#2f3138]">
                        <form className="space-y-6 text-sm">
                            {/* labels unchanged */}
                            <div>
                                <label htmlFor="name" className="block mb-3 text-lg text-gray-300">Name</label>
                                <input id="name" type="text" /* ... */ />
                            </div>
                            {/* rest of form */}
                            <button type="submit">➤ SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
