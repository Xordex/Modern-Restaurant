import About from "./components/About/About";
import Event from "./components/Event/Event";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Preloader from "./components/preloader/Preloader";
import Reservation from "./components/Reservation/Reservation";
import Service from "./components/Service/Service";
import SpecialDish from "./components/SpecialDish/SpecialDish";
import Testimonials from "./components/Testimonials/Testimonials";
import Topbar from "./components/Topbar/Topbar";

function App() {

  return (
    <>
      <Preloader />
      <Topbar />
      <Header />
      <main>
        <article>
          <Hero />
          <Service />
          <About />
          <SpecialDish />
          <Menu />
          <Testimonials />
          <Reservation />
          <Features />
          <Event />
        </article>
      </main>
    </>
  )
}

export default App
