import React from "react";
import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import product3 from "../assets/product-3.webp";

const Products = () => {
    return (
        <section className="bg-gray-100 text-black px-6 md:px-16 py-20">
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <h2 className="text-2xl md:text-3xl font-semibold mb-14">
                    Redefining the <br /> Frontiers of Gaming
                </h2>

                {/* Products Grid */}
                <div className="grid md:grid-cols-3 gap-10">

                    {/* Card 1 */}
                    <div>
                        <img
                            src={product1}
                            alt="Instant Gameplay"
                            className="rounded-xl mb-6"
                        />
                        <p className="text-sm mb-4 max-w-xs">
                            In no time, get into action. <br />
                            Instant wireless gameplay
                        </p>
                        <button className="bg-yellow-400 px-6 py-2 rounded-full text-sm font-medium hover:bg-yellow-300 transition">
                            Get start
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div>
                        <img
                            src={product2}
                            alt="Serious Gamers"
                            className="rounded-xl mb-6"
                        />
                        <p className="text-sm mb-4 max-w-xs">
                            All the features gamers need <br />
                            Designed for serious gamers
                        </p>
                        <button className="bg-yellow-400 px-6 py-2 rounded-full text-sm font-medium hover:bg-yellow-300 transition">
                            pre-order
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div>
                        <img
                            src={product3}
                            alt="Captivating Realm"
                            className="rounded-xl mb-6"
                        />
                        <p className="text-sm mb-4 max-w-xs">
                            Unlocking the Doors <br />
                            to the Captivating Realm
                        </p>
                        <button className="bg-yellow-400 px-6 py-2 rounded-full text-sm font-medium hover:bg-yellow-300 transition">
                            join
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Products;
