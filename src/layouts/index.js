import React from "react";
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import '../assets/styles/fonts/Index.css';
import GlobalStyles from '../assets/styles/GlobalStyles';


const MainLayout = ({children}) => {
    return (    
    <>
        <GlobalStyles/>
        <Header/>
        <SideBar/>
        {children}
    </>
)
}

export default MainLayout