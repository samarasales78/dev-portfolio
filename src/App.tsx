import { Header } from './components/Header'
import { About } from './pages/About'
import { Home } from './pages/Home'
import Tech from './pages/Tech'
import { Projects } from './pages/Projects' 
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Tech />
      <Projects /> 
      <Contact />
      <Footer />
    </div>
  )
}

export default App