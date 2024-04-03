import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <p className="mock">This screen height is too small for me ;)</p>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Services />
      <Timeline />
      <Work />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  )
}

export default App;
