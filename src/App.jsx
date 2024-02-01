import Navbar from "./elements/navbar/Navbar"
import Homepage from "./elements/homepage/Homepage"
import Skills from "./elements/skills/Skills"
import "./app.scss"
import Portfolio from "./elements/portfolio/Portfolio"
import Contact from "./elements/contact/Contact"
import Cursor from "./elements/cursor/Cursor"

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="homepage">
        <Navbar />
        <Homepage />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <Portfolio />
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default App
