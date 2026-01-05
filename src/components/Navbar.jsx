export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-10 py-6 bg-[#2b2b2b]">
            <h1 className="text-xl font-semibold">GameHub</h1>
            <ul className="flex gap-8 text-sm text-gray-300">
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Contact</li>
                <li>FAQ</li>
            </ul>
        </nav>
    );
}
