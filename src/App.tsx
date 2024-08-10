import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowToUse from "./components/HowToUse";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="my-44">
        <HowToUse />
      </div>
      <Footer />
    </>
  );
}

export default App;
