import React from "react";
import styled from "styled-components";
import ButtonImage from "./ButtonImage";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContainerReaction = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
`;

const Profile = styled.img`
  margin-right: 12px;
  width: 42px;
  height: 42px;
`;

const Header = styled.article`
  flex-grow: 1;
  h2 {
    margin-bottom: 2px;
    font-size: 14px;
    line-height: 17.5px;
  }
  p {
    margin-bottom: 16px;
    font-size: 12px;
    line-height: 14px;
    color: #767676;
  }
  button {
    float: right;
  }
`;

const Content = styled.article`
  p {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 17.5px;
  }
  img {
    margin-bottom: 12px;
    width: 100%;
    border-radius: 10px;
  }
`;

const TextReaction = styled.p`
  margin-left: 6px;
  color: #767676;
  font-size: 12px;
`;

function Reaction(props) {
  return (
    <ContainerReaction>
      <ButtonImage src="/images/icon/icon-heart.png" width="20px" height="20px" />
      <TextReaction>{props.numLike}</TextReaction>
      <ButtonImage
        src="/images/icon/icon-message-circle.png"
        width="20px"
        height="20px"
        style={{ "margin-left": "16px" }}
      />
      <TextReaction>{props.numComment}</TextReaction>
    </ContainerReaction>
  );
}

const PostDate = styled.p`
  color: #767676;
  font-size: 10px;
  line-height: 12px;
`;

function Post(props) {
  return (
    <Container>
      <Profile src={props.srcProfile}></Profile>
      <section>
        <Header>
          <ButtonImage src="/images/icon/icon-more-vertical.png" width="18px" height="18px"></ButtonImage>
          <h2>애월읍 위니브 감귤농장</h2>
          <p>@weniv_Mandarin</p>
        </Header>
        <Content>
          <p>
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와
            약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.
          </p>
          {props.withImg ? <img src={props.srcImg}></img> : null}
        </Content>
        <Reaction numLike="58" numComment="12"></Reaction>
        <PostDate>{props.postDate}</PostDate>
      </section>
    </Container>
  );
}

export default Post;
