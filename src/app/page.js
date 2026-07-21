
import TechStack from "@/components/TechStack/TechStack";
import Portfolio from "@/components/Portfolio/Portfolio";
import Hero from "@/components/Hero/Hero";
import Contact from "@/components/Contact/Contact";
import Section from "@/components/common/Section/Section";
import About from "@/components/About/About";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";


function Home() {
  return (
    <>
    <Header/>
      <Hero />
      <Section>
        <TechStack/>
      </Section>
       <Section>
        <About/>
      </Section>
      <Section>
          <Portfolio/>
      </Section>
      <Footer/>
     
    </>
  );
}

export default Home;
