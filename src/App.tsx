
import './App.css'
import Contact from "./components/contact/Contact.tsx";
import Navbar from "./components/navigationbar/Navbar.tsx";
import ThemeContextProvider from "./context/theme-context.tsx";
import {Toaster} from "react-hot-toast";
import Hero from "./components/hero/Hero.tsx";
import About from "./components/about/About.tsx";
import Footer from "./components/footer/Footer.tsx";
import Experience from "./components/experience/Experience.tsx";
import Skills from "./components/skills/Skills.tsx";
function App() {

  return (
      <div>
      <ThemeContextProvider>
          <Navbar/>
          <Hero />
          <About />
          <Skills/>
          <Experience/>
          <Contact />
          <Footer/>
          <Toaster position="top-right" />
</ThemeContextProvider>
      </div>
  )
}

export default App
