import React from "react";
import { Lightbulb, Zap, Compass } from "lucide-react";

const Features = () => {
    return (
        <section className="bg-yellow-400 text-black px-6 md:px-16 py-20">
            <div className="max-w-7xl mx-auto">

                {/* Section Title */}
                <h2 className="text-2xl md:text-3xl font-semibold mb-14 max-w-xl">
                    Unlocking the Doors to the <br />
                    Captivating Realm of
                </h2>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-12">

                    {/* Reimagine */}
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                            <Lightbulb className="text-yellow-400 w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Reimagine</h3>
                            <p className="text-sm leading-relaxed max-w-xs">
                                GameWeb, the Next Evolution in Interactive Entertainment,
                                Offers a Boundless Canvas for Your Imagination.
                                Explore Uncharted Worlds
                            </p>
                        </div>
                    </div>

                    {/* Innovate */}
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                            <Zap className="text-yellow-400 w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Innovate</h3>
                            <p className="text-sm leading-relaxed max-w-xs">
                                Immerse Yourself in the Boundless Possibilities of GameWeb,
                                Where the Future of Gaming Converges.
                                Explore a Metaverse of Endless Excitement
                            </p>
                        </div>
                    </div>

                    {/* Explore */}
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                            <Compass className="text-yellow-400 w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Explore</h3>
                            <p className="text-sm leading-relaxed max-w-xs">
                                Unlock the Boundless Potential of GameWeb,
                                a Cutting-Edge 3D Metaverse that Redefines
                                the Future of Interactive Entertainment
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
