import React from "react";
import controller from "../assets/controller.webp"; // replace with your image

const ElevatingSection = () => {
    return (
        <section className="bg-[#2b2b2b] text-white px-6 md:px-16 py-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

                {/* Text Content */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                        Elevating the <br /> Gaming Experience
                    </h2>

                    <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-8">
                        GameWeb, the Next Generation of Interactive Entertainment,
                        Offers a Boundless Canvas for Your Imagination. Immerse
                        Yourself in Captivating Worlds, Engage in Thrilling Gameplay,
                        and Forge Unforgettable Connections in this Cutting-Edge
                        3D Metaverse.
                    </p>

                    <button className="bg-yellow-400 text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-yellow-300 transition">
                        Discover
                    </button>
                </div>

                {/* Image */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src={controller}
                        alt="Gaming Controller"
                        className="rounded-xl max-w-sm"
                    />
                </div>

            </div>
        </section>
    );
};

export default ElevatingSection;
