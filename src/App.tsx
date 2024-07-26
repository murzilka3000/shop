import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/pages/home/Home"
import Header from "./components/ui/header/Header"
import Footer from "./components/ui/footer/Footer"


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App