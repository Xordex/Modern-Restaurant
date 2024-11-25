import Header from "./components/Header/Header";
import Preloader from "./components/preloader/Preloader";
import Topbar from "./components/Topbar/Topbar";

function App() {

  return (
    <>
      <Preloader />
      <Topbar />
      <Header />
      <div className="main-cont"></div>
    </>
  )
}

export default App
