import React from "react";
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import GlobalStyles from '../assets/styles/GlobalStyles';
import '../assets/styles/fonts/Index.css';

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