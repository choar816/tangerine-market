import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  type: props.type,
}))`
  width: 100%;
  padding: 8px 0;
  font-size: 14px;
  color: #000000;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  outline: none;

  :focus {
    border-bottom: 1px solid #f26e22;
  }
`;

export default Input;
