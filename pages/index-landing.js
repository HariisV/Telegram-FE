import Hero from "../components/organism/Hero";
import Navbar from "../components/organism/Navbar";
import FooterHome from "../components/organism/FooterHome";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
      </div>
      <FooterHome />
    </>
  );
}
