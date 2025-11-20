import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  return (
    <main className="app transition-all ease-in">
      <Header/>
      <About/>
      <Projects /> 
      <Testimonials/>
      <Contact/>
      <Footer/>

    </main>
    
  
  )
}

export default App
