import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/pages/home/Home"
import Header from "./components/ui/header/Header"
import Footer from "./components/ui/footer/Footer"
import About from "./components/pages/about/About"
import Cabinet from "./components/pages/cabinet/Cabinet"
import Contacts from "./components/pages/contacts/Contacts"


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cabinet" element={<Cabinet/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App