import React from 'react'

const Hero = () => {
    return (
        <section className="grid md:grid-cols-2 gap-10 px-10 py-20">
            <div>
                <h1 className="text-5xl font-bold leading-tight">
                    Exploring the <br /> Boundless Realms
                </h1>
                <p className="text-gray-400 mt-6 max-w-md">
                    Discover the immersive 3D experience of GameWeb where
                    the digital world comes to life.
                </p>
                <button className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded-full">
                    Embark
                </button>
            </div>

            <img src="/laptop1.webp" alt="laptop" className="rounded-xl" />
        </section>
    );
}
export default Hero
