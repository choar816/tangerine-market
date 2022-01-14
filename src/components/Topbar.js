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
  
      </Container>
    );
  } else if (props.main) {
    return (
      <Container>
  
      </Container>
    );
  } else if (props.upload) {
    return (
      <Container>
  
      </Container>
    );
  } else if (props.chat) {
    return (
      <Container>
  
      </Container>
    );
  }
}

export default Topbar;
