import React from 'react'
import styled from 'styled-components'
import Icon from './Icon';

const Svg = styled(Icon)` 

`;

const LinkedIn = ({ className, hovered, color }) => ( 
  <Svg  width="29.48" height="29.479" viewBox="0 0 29.48 29.479" className={className}  fill={color}>
    <path 
      id="Icon_awesome-linkedin-in" data-name="Icon awesome-linkedin-in" d="M6.6,29.48H.487V9.8H6.6ZM3.54,7.113A3.556,3.556,0,1,1,7.079,3.54,3.569,3.569,0,0,1,3.54,7.113ZM29.473,29.48h-6.1V19.9c0-2.283-.046-5.212-3.178-5.212-3.178,0-3.665,2.481-3.665,5.047V29.48H10.427V9.8h5.862v2.685h.086A6.422,6.422,0,0,1,22.157,9.3c6.185,0,7.323,4.073,7.323,9.364V29.48Z" transform="translate(0 -0.001)"
    />
  </Svg>
);

export default LinkedIn