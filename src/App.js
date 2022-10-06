import Navbar from "./components/nav/navbar"
import Intro from "./components/intro/introd"
import Service from "./components/Services/Service"
import Experience from "./components/Experiences/Experience"
import Portfolio from "./components/Portfolios/Portfolio"
import './App.css'
function App () {
  return (
    <div className="App">
       <Navbar/>
       <Intro/>
       <Service/>
       <Experience/>
       <Portfolio/>
    </div>
  )
}

export default App