import React from 'react';
import styled from 'styled-components';

const ButtonImage = styled.button`
  cursor: pointer;
  box-sizing: border-box;
  border: none;

  /* src */
  background-image: url(${props => props.src});
  
  /* size */
  width: ${props => props.width};
  height: ${props => props.height};
  background-size: ${props => props.width} ${props => props.height};
  background-color: transparent;
  background-position: center;
  
`;

export default ButtonImage;
