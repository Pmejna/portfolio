import React from "react";
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import '../assets/styles/fonts/Index.css';
import GlobalStyles from '../assets/styles/GlobalStyles';
import Footer from "../components/Footer/Footer";


const MainLayout = ({children}) => {
    return (    
    <>
        <GlobalStyles/>
        <Header/>
        <SideBar/>
        {children}
        <Footer/>
    </>
)
}

export default MainLayout