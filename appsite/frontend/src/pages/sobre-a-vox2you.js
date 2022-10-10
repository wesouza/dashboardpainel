import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SectionBanner from "../components/SectionBanner";
import Seo from "../components/Seo";

export default function Sobre() {
  return (
    <>
      <Seo
        title="Sobre a Vox2you"
        path="/sobre-a-vox2you"
        description="Conheça a história da maior rede de cursos de oratória da América Latina."
      >
        <Navbar />
        <Hero
          color="#eda420"
          title="Sobre a Vox2you"
          subtitle="São mais de 12 cursos e 55 unidades pelo país. Aprenda a falar bem, com clareza e persuasão!"
        />
        <Footer />
      </Seo>
    </>
  );
}
