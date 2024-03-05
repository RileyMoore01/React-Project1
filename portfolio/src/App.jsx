import"./app.scss"
import Navbar from "./components/navbar/Navbar";
import Test from "./Test";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
    </section>
    <section id="Services">Parallax</section>
    <section>Services</section>
    <section id="Portfolio">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact Me"></section>
    {/* <Test/> */}
  </div>;
};

export default App;


// reference code:
// https://www.youtube.com/watch?v=CHGHuF24Cjw&list=LL&index=3&t=263s