import { Header } from './components/Header';
import { About } from './pages/About';
import { Home } from './pages/Home';
import Tech from './pages/Tech';

function App() {
  return (
    <div>
      <Header /> 
      <Home />
      <About />
      <Tech />
    </div>
  );
}

export default App;