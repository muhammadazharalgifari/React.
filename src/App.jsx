import Navbar from "./components/navbar"
import AboutSection from "./section/AboutSection";
import HomeSection from "./section/HomeSection";

export default function App() {
  // logic area

  return (
    // view area
    <section className="w-screen min-h-screen bg-slate-200 font-sans">
      <Navbar/>
      <HomeSection/>
      <AboutSection/>
    </section>
  );
}
