import Hero from "@/sections/Hero";
import Footer from "@/sections/Footer"
import Button from "@/components/Button";

export default function Home() {
    return (
        <>
            <header>
                <Hero />
            </header>
            <main>
                <Button />
                <Button />
                {/* Sections adn Components as Abou - Works- Projects and More */}
                {/* NavBar and redirect to other pages */}
                <Footer />
            </main>
        </>
    );
}
