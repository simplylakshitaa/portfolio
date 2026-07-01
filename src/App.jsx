import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Achievements from './components/Achievements/Achievements';
import Hackathons from './components/Hackathons/Hackathons';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ParticleBackground from './components/Background/ParticleBackground';
import KonamiCode from './components/EasterEggs/KonamiCode';
import WakaWaka from './components/EasterEggs/WakaWaka';
import ScrollPacman from './components/EasterEggs/ScrollPacman';

export default function App() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Hackathons />
        <Contact />
      </main>
      <Footer />
      <KonamiCode />
      <WakaWaka />
      <ScrollPacman />
    </>
  );
}
