import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TabElement = styled.article`
  padding: 12px 0 6px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  img {
    margin-bottom: 4px;
    width: 24px;
    height: 24px;
    background-image: url(${props => props.src});
    background-size: 24px 24px;
    border: none;
  }

  p {
    color: #767676;
    font-size: 10px;
    line-height: 14px;
    text-align: center;
  }
`;


function TabMenu(props) {
  return (
    <Container>
      <TabElement>
        <img src="/images/icon/icon-home.png"></img>
        <p>홈</p>
      </TabElement>
      <TabElement>
        <img src="/images/icon/icon-message-circle.png"></img>
        <p>채팅</p>
      </TabElement>
      <TabElement>
        <img src="/images/icon/icon-edit.png"></img>
        <p>게시물 작성</p>
      </TabElement>
      <TabElement>
        <img src="/images/icon/icon-user.png"></img>
        <p>프로필</p>
      </TabElement>
    </Container>
  );
}

export default TabMenu;