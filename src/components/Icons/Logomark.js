import React from 'react'
import styled from 'styled-components'
import Icon from './Icon';

const Svg = styled(Icon)` 

`;

const Logomark = ({ className, hovered, color }) => ( 
  <Svg id="mejna_logomark" width="29.618" height="29.705" viewBox="0 0 29.618 29.705" className={className}  fill={color}>
  <g data-name="Group 21" transform="translate(0 0)">
    <g id="Group_20" data-name="Group 20">
      <path id="Path_15" data-name="Path 15" d="M688.377,607.206l.03-15.523h4.863l.015,20.23-19.072.015v-4.735ZM668.4,587.023l0,17.488-4.675,0-.067-15.844.067-6.449,21.1.007,0,4.787Zm8.071,6.906.006,5.453,5.453-.007-.006-5.453Z" transform="translate(-663.667 -582.223)" fillRule="evenodd"/>
    </g>
  </g>
  </Svg>
);

export default Logomark