import React from "react";
import styled from "styled-components";

const Container = styled.article`
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-right: 18px;
    width: 36px;
    height: 36px;
    flex-shrink: 0;
  }
  input {
    margin-right: 18px;
    flex-grow: 1;
    border: none;
    outline: none;
    ::placeholder {
      color: #C4C4C4;
      font-size: 14px;
      line-height: 17.5px;
    }
  }
  button {
    color: #C4C4C4;
    font-size: 14px;
    line-height: 17.5px;
    flex-shrink: 0;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

function Comment(props) {
  return (
    <Container>
      <img src="/images/basic-profile-img.png" alt="프로필 이미지" />
      <input placeholder="댓글 입력하기..."/>
      <button>게시</button>
    </Container>
  );
}

export default Comment;
