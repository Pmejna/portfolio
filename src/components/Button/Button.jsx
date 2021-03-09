import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import Arrow from '../../assets/images/Arrow.svg';

const ButtonWrapper = styled.button`

`;

const LinkStyled = styled(Link)`

`;

const Button = ({children, to }) => {
    return (
        <ButtonWrapper>
            <LinkStyled to={to}>
            {children}
            </LinkStyled>
        </ButtonWrapper>
    )
};

export default Button