import React from 'react'
import styled from 'styled-components'
import Icon from './Icon';

const Svg = styled(Icon)` 

`;

const Arrow = ({ className, hovered, color }) => ( 
  <Svg   width="18.182" height="32.121" viewBox="0 0 18.182 32.121" className={className} stroke={color}>
    <path
     id="Path_24" 
     data-name="Path 24" 
     d="M4980,667l15-15,15,15" 
     transform="translate(668.061 -4978.939) rotate(90)" 
     fill="none" 
     
     strokeWidth="3"
     />
  </Svg>
);

export default Arrow

