import React from "react";
import styled from "styled-components";
import Button from "./Button";
import ButtonImage from "./ButtonImage";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 12px 16px;
  border-bottom: 1px solid #dbdbdb;
`;

const Input = styled.input.attrs((props) => ({
  placeholder: "계정 검색",
}))`
  margin-left: 20px;
  padding: 7px 16px;
  width: 100%;
  font-size: 14px;
  line-height: 17.5px;
  background-color: #F2F2F2;
  border: none;
  border-radius: 32px;
  
  ::placeholder {    
    color: #c4c4c4;
  }
`;

const TopbarTitle = styled.p`
  font-size: 18px;
  line-height: 22px;
  width: 100%;
  text-align: left;
`;

const ChatPartner = styled.p`
  margin-left: 10px;
  font-size: 14px;
  line-height: 17.5px;
  width: 100%;
  text-align: left;
`;

function Topbar(props) {
  if (props.basic) {
    return (
      <Container>
        <ButtonImage src="/images/icon/icon-arrow-left.png" width="22px" height="22px"/>
        <ButtonImage src="/images/icon/icon-more-vertical.png" width="24px" height="24px"/>
      </Container>
    );
  } else if (props.search) {
    return (
      <Container>
        <ButtonImage src="/images/icon/icon-arrow-left.png" width="22px" height="22px"/>
        <Input></Input>
      </Container>
    );
  } else if (props.main) {
    return (
      <Container>
        <TopbarTitle>감귤마켓 피드</TopbarTitle>
        <ButtonImage src="/images/icon/icon-search.png" width="24px" height="24px"/>
      </Container>
    );
  } else if (props.upload) {
    return (
      <Container>
        <ButtonImage src="/images/icon/icon-arrow-left.png" width="22px" height="22px"/>
        <Button size="MS" color="soft">저장</Button>
      </Container>
    );
  } else if (props.chat) {
    return (
      <Container>
          <ButtonImage src="/images/icon/icon-arrow-left.png" width="22px" height="22px"/>
          <ChatPartner>애월읍 위니브 감귤농장</ChatPartner>
          <ButtonImage src="/images/icon/icon-more-vertical.png" width="24px" height="24px"/>
      </Container>
    );
  }
}

export default Topbar;
