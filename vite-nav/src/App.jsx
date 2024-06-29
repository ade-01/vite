import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <>
    <Navbar/>
   <Home/>
   <About/>
    </>
  )
}

export default App
