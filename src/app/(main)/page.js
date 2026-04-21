
import TechStack from "../components/TechStack/TechStack";
import Portfolio from '../components/Portfolio/Portfolio'
import Hero from "../components/Hero/Hero";
import Contact from "../components/Contact/Contact";
import About from "../components/About/About";

function Home() {
  return (
    <>
      <Hero />
      <TechStack/>
      <Portfolio/>
      {/* <Contact/>
      <About/>
       */}
    </>
  );
}

export default Home;
