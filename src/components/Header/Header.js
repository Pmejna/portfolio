import React, {useState} from "react";
import styled from "styled-components";
import NavList from "../Navigation/NavList/NavList";

const NavHeader = styled.header`

`;



const Header = () => {
    return (
    <NavHeader>
        <NavList />
    </NavHeader>
    )
};

export default Header