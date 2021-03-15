import React from 'react'
import styled from 'styled-components'
import Icon from './Icon';

const Svg = styled(Icon)` 

`;

const Rectangle = ({ className, color }, ref) => {

  return ( 
  <Svg  width="35.085" height="35.077" viewBox="0 0 35.085 35.077" className={className} fill={color} ref={ref}>   
    <rect 
        data-name="Rectangle" 
        width="39" 
        height="38" 
        fill={color}/>
  </Svg>
  )}
;


export default React.forwardRef(Rectangle)