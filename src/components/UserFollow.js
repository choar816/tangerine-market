import React from "react";
import styled from "styled-components";
import Button from "./Button";
import ImgProfile from "../assets/basic-profile-img.png";

const Container = styled.section`
  display: flex;
  align-items: center;
  img {
    margin-right: 12px;
    width: 50px;
    height: 50px;
  }
`;

const UserInfo = styled.section`
  flex-grow: 1;
  h2 {
    margin-bottom: 6px;
    font-size: 14px;
    line-height: 17.5px;
  }
  p {
    font-size: 12px;
    line-height: 15px;
    color: #767676;
  }
`;

const ButtonFollow = styled(Button)`
  margin-left: 12px;
  flex-shrink: 0;
`;

function UserFollow(props) {
  return (
    <Container>
      <img src={ImgProfile} alt="프로필 이미지" />
      <UserInfo>
        <h2>{props.userName}</h2>
        <p>{props.userId}</p>
      </UserInfo>
      <ButtonFollow size="S" color="strong">팔로우</ButtonFollow>
    </Container>
  );
}

export default UserFollow;
