import { Header } from './components/Header'
import { About } from './pages/About'
import { Home } from './pages/Home'
import Tech from './pages/Tech'
import { Projects } from './pages/Projects' 

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Tech />
      <Projects /> 
    </div>
  )
}

export default App