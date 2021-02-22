import React, {useState} from "react";
import styled from "styled-components";
import NavList from "../Navigation/NavList/NavList";

const NavHeader = styled.header`

`;



const Header = () => {
    const [menuState, setMenuState] = useState({
        initial: false,
        clicked: null,
        text: 'menu'
    });

    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleMenu = () => {
        disableMenuButton();
        if (menuState.initial === false) {
            setMenuState({
                initial: null,
                clicked: true,
                menuText: 'close'
            })
        }
        else if (menuState.clicked === true) {
            setMenuState({
                clicked: !menuState.clicked,
                menuText: 'menu'
            });
        }
        else if (menuState.clicked === false) {
            setMenuState({
                clicked: !menuState.clicked,
                menuText: 'close'
            });
        }
    };

    // Should menu button be disabled

    const disableMenuButton = () => {
        setButtonDisabled(!buttonDisabled);
        setTimeout(() => {
            setButtonDisabled(false);
        }, 1200)
    }

    return (
    <NavHeader>
        <NavList handleMenu={handleMenu} menuIsOpen={menuState.clicked} menuText={menuState.menuText || 'menu'} buttonDisabled={buttonDisabled}/>
    </NavHeader>
    )
};

export default Header