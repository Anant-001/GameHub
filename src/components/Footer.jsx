import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-[#2b2b2b] px-10 py-16 text-gray-400">
            <div className="grid md:grid-cols-3 gap-10">
                <div>
                    <h3 className="text-white mb-4">Navigate</h3>
                    <p>Home</p>
                    <p>About</p>
                    <p>Products</p>
                </div>

                <div>
                    <h3 className="text-white mb-4">Explore</h3>
                    <p>GameWeb</p>
                    <p>Features</p>
                    <p>Support</p>
                </div>

                <div>
                    <h3 className="text-white mb-4">Connect</h3>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>YouTube</p>
                </div>
            </div>

            <p className="mt-10 text-sm">
                © 2026 GameHub Inc. All rights reserved
            </p>
        </footer>
    );
}
export default Footer
