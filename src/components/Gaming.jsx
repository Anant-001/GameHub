import React from 'react'

const Gaming = () => {
    return (
        <section className="bg-black px-6 md:px-16 py-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Image */}
                <div className="flex justify-center">
                    <img
                        src="/laptop2.webp"
                        alt="Gaming Laptop"
                        className="rounded-2xl shadow-lg max-w-full"
                    />
                </div>

                {/* Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6">
                        Unveiling the <br /> Cutting-Edge 3D
                    </h2>

                    <p className="text-gray-400 text-sm leading-relaxed max-w-xl mb-8">
                        Immerse Yourself in the Boundless Possibilities of GameWeb,
                        Where the Future of Gaming Converges. Experience the Pinnacle
                        of Interactive Entertainment, Revolutionizing the Way You
                        Engage With Your Favorite Games.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <button className="bg-yellow-400 text-black px-6 py-2.5 rounded-full font-medium hover:bg-yellow-300 transition">
                            Embark
                        </button>

                        <button className="bg-gray-300 text-black px-6 py-2.5 rounded-full font-medium hover:bg-gray-200 transition">
                            More
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
export default Gaming
