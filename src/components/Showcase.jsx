import React from 'react'

const Showcase = () => {
    return (
        <section className="grid md:grid-cols-2 gap-10 px-10 py-20 items-center">
            <div>
                <h2 className="text-4xl font-bold mb-6">
                    Elevating the Gaming Experience
                </h2>
                <p className="text-gray-400 mb-6">
                    GameWeb, the Next Evolution in Interactive Entertainment, Offers a Boundless Canvas for Your Imagination. Explore Uncharted Worlds, Engage in Thrilling Gameplay, and Forge Unforgettable Connections in this Cutting-Edge 3D Metaverse
                </p>
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-full">
                    Discover
                </button>
            </div>

            <img src="/laptop3.webp" alt="laptop3" className="rounded-xl" />
        </section>
    );
}
export default Showcase
