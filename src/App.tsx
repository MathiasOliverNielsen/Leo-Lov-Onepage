import "./App.css";
import Navbar from "./components/Navbar/Navbar.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Services from "./components/Services/Services.tsx";
import About from "./components/About/About.tsx";
import Team from "./components/Team/Team.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
    </>
  );
}

export default App;
