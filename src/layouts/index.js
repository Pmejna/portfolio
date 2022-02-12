import React from "react";
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import Contact from '../components/Contact/Contact';
import '../assets/styles/fonts/Index.css';
import GlobalStyles from '../assets/styles/GlobalStyles';
import Footer from "../components/Footer/Footer";
import SEO from "../components/Seo";


const MainLayout = ({children}) => {
    return (    
    <>
        <GlobalStyles />
        <Header/>
        <SideBar/>
        {children}
        <Contact/>
        <Footer/>
    </>
)
}

export default MainLayout