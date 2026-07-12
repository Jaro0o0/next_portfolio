
import TechStack from "../components/TechStack/TechStack";
import Portfolio from '../components/Portfolio/Portfolio'
import Hero from "../components/Hero/Hero";
import Contact from "../components/Contact/Contact";
import Section from "../components/common/Section/Section";
import About from "../components/About/About";

function Home() {
  return (
    <>
      <Hero />
      <Section>
        <TechStack/>
      </Section>
      <Section>
          <Portfolio/>
      </Section>
      <Section>
        <About/>
      </Section>
    </>
  );
}

export default Home;
