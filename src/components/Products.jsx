import React from 'react'

const Products = () => {
    return (
        <section className="bg-gray-100 text-black px-10 py-20">
            <h2 className="text-3xl font-bold mb-10">
                Redefining the Frontiers of Gaming
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {["Get start", "Pre-order", "Join"].map((btn) => (
                    <div key={btn} className="bg-white p-6 rounded-xl">
                        <p className="text-sm mb-4">
                            Designed for serious gamers.
                        </p>
                        <button className="bg-yellow-400 px-4 py-2 rounded-full">
                            {btn}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Products
