import React, {useState} from "react";
import styled from "styled-components";
import NavList from "../Navigation/NavList/NavList";

const NavHeader = styled.header`

`;



const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [menuText, setMenuText] = useState('menu');

    const handleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
        if (menuIsOpen) {
            setMenuText('menu');
        }
        else if (!menuIsOpen) {
            setMenuText('close');
        }
    };

    return (
    <NavHeader>
        <NavList handleMenu={handleMenu} menuIsOpen={menuIsOpen} menuText={menuText}/>
    </NavHeader>
    )
};

export default Header