import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 270px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  background-color: #ffffff;
`;

const ModalQuestion = styled.div`
  display: inline-block;
  width: 100%;
  padding: 22px 61px;
  color: #000000;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  border-bottom: 1px solid #dbdbdb;
`;

const Button = styled.button`
  padding: 14px;
  width: 50%;
  color: #000000;
  font-size: 14px;
  line-height: 17.5px;
  background-color: #ffffff;
  border: none;

  ${props => props.left && `
  border-bottom-left-radius: 10px;
  `}
  ${props => props.right && `
  color: #f26e22;
  border-left: 1px solid #dbdbdb;
  border-bottom-right-radius: 10px;
  `}
`;


function Modal(props) {
  return (
    <Container>
      <ModalQuestion>{props.children}</ModalQuestion>
      <Button left>{props.left}</Button>
      <Button right>{props.right}</Button>
    </Container>
  );
}

export default Modal;
