import Navbar from "./components/nav/navbar"
import Intro from "./components/intro/introd"
import Service from "./components/Services/Service"
import Experience from "./components/Experiences/Experience"
import Portfolio from "./components/Portfolios/Portfolio"
import Contact from "./components/Contacts/Contact"
import Footer from "./components/Footer/Footer"
import './App.css'

function App () {
  return (
    <div className="App">
       <Navbar/>
       <Intro/>
       <Service/>
       <Experience/>
       <Portfolio/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App
