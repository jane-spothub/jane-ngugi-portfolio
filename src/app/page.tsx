import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Contact from "@/app/contact/page";
import Skills from "@/app/skills/page";
import Projects from "@/app/projects/page";

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-950 to-gray-900">
            <Navigation/>
            <Hero/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </main>
    )
}