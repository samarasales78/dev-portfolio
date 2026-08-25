import { Header } from './components/Header'
import { About } from './pages/About'
import { Home } from './pages/Home'
import Tech from './pages/Tech'
import { Projects } from './pages/Projects' 
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Tech />
      <Projects /> 
      <Contact />
    </div>
  )
}

export default App