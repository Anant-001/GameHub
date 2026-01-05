import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Gaming from "./components/Gaming.jsx";

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Gaming />
            <Features />
            <Showcase />
            <Products />
            <Footer />
        </>
    );
}
