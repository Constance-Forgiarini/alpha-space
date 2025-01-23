import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
  <> 
        <Header/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  );
}

export default HomeLayout