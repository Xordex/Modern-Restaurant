import About from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Preloader from "./components/preloader/Preloader";
import Service from "./components/Service/Service";
import SpecialDish from "./components/SpecialDish/SpecialDish";
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
        </article>
      </main>
    </>
  )
}

export default App
