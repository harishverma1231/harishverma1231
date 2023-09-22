import {Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Shopify from "./pages/Shopify";
import Work from './pages/Work';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AOS from 'aos'
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css'
import PageLoader from "./components/PageLoader";
import Footer from "./components/Footer/Footer";

function App() {
  const [Loader,setLoader]=useState(true)
    useEffect(()=>{
        window.scrollTo(0,0)
        document.body.style.overflow = "hidden";
        setTimeout(()=>{
          setLoader(false)
          document.body.style.overflow = "visible";
        },3900)
    },[])
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      {
        Loader?<PageLoader/>:
        <>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shopify' element={<Shopify/>} />
            <Route path='/work' element={<Work />} />
          </Routes>
          <Footer/>
        </>
      }
    </>
  )
}

export default App
