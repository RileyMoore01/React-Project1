import"./app.scss"
import Contact from "./components/contact/Contact";
// import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
// import Portfolio from "./components/portfolio/Portfolio";
// import Services from "./components/services/Services";
// import Test from "./Test";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallax type="services"/></section>
    {/* <section><Services/></section> */}
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact"><Contact/></section>
    {/* <Test/> */}
  </div>;
};

export default App;

// reference code:
// https://www.youtube.com/watch?v=CHGHuF24Cjw&list=LL&index=3&t=263s