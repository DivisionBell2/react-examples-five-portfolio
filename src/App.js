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

// function App() {

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
//   console.log(ratio);
//   useEffect(() => {
//     const resizeRatio = () => {
//       setRatio(window.innerWidth / window.innerHeight);
//     }
//     window.addEventListener("resize", resizeRatio);

//     return () => {
//       window.removeEventListener("resize", resizeRatio);
//     }
//   }, [ratio]);

//   return ratio <2 ? (
//     <div className="App">
//       <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
//       <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
//       <Home ratio={ ratio } />
//       <Work />
//       <Timeline />
//       <Services />
//       <Testimonial />
//       <Contact />
//       <Footer />
//       <Toaster />
//     </div>
//   ) : <em id="customMessage"> Please Change the ratio to View!</em>
// }

export default App;
