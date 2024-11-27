import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Preloader from "./components/preloader/Preloader";
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
        </article>
      </main>
    </>
  )
}

export default App
