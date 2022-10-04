import Navbar from "../components/Navbar";
import SectionBanner from "../components/SectionBanner";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Home" path="/" description="Homedescription">
        <Navbar />

        <SectionBanner />
      </Seo>
    </>
  );
}
