import React from 'react'

const Features = () => {
    return (
        <section className="bg-yellow-400 text-black px-10 py-20">
            <h2 className="text-3xl font-bold mb-12">
                Unlocking the Doors to the Captivating Realm of
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
                {["Reimagine", "Innovate", "Explore"].map((item) => (
                    <div key={item}>
                        <h3 className="text-xl font-semibold mb-2">{item}</h3>
                        <p className="text-sm">
                            Experience the future of interactive entertainment
                            with GameWeb.
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Features
