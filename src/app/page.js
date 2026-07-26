
import TechStack from "@/components/Home/TechStack/TechStack";
import Portfolio from "@/components/Home/Portfolio/Portfolio";
import Hero from "@/components/Home/Hero/Hero";
import Contact from "@/components/Home/Contact/Contact";
import Section from "@/components/common/Section/Section";
import About from "@/components/Home/About/About";
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
