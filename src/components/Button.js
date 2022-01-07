import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 17.5px;
  
  ${props => props.size === "L" && `
    padding: 13px 148px;
    border-radius: 44px;
  `}
  ${props => props.size === "M" && `
    padding: 8px 40px;
    border-radius: 30px;
  `}
  ${props => props.size === "MS" && `
    padding: 7px 32px;
    border-radius: 32px;
  `}
  ${props => props.size === "S" && `
    padding: 7px 11px;
    border-radius: 26px;
    font-size: 12px;
    line-height: 15px;
  `}

  ${props => props.color === "strong" && `
    background-color: #F26E22;
    border: 1px solid #F26E22;
    color: #FFFFFF;
  `}
  ${props => props.color === "soft" && `
    background-color: #FFC7A7;
    border: 1px solid #FFC7A7;
    color: #FFFFFF;
  `}
  ${props => props.color === "white" && `
    background-color: #FFFFFF;
    border: 1px solid #DBDBDB;
    color: #767676;
  `}
`;

export default Button;
