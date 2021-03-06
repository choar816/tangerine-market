import Button from '../components/Button';
import ButtonImage from '../components/ButtonImage';
import LabeledInput from '../components/LabeledInput';
import UserSearch from '../components/UserSearch';
import UserFollow from '../components/UserFollow'
import Modal from '../components/Modal';
import Topbar from '../components/Topbar';
import Product from '../components/Product';
import Post from '../components/Post';
import TabMenu from '../components/TabMenu';
import Comment from '../components/Comment';

function Test() {
  return (
    <div>
      <Comment></Comment>
      <TabMenu></TabMenu>

      <Button size="L" color="strong">다음</Button>
      <Button size="L" color="soft">다음</Button>
      <Button size="L" color="white">다음</Button>
      <Button size="M" color="strong">팔로우</Button>
      <Button size="M" color="soft">팔로우</Button>
      <Button size="M" color="white">언팔로우</Button>
      <Button size="MS" color="strong">저장</Button>
      <Button size="MS" color="soft">저장</Button>
      <Button size="MS" color="white">저장</Button>
      <Button size="S" color="strong">취소</Button>
      <Button size="S" color="soft">취소</Button>
      <Button size="S" color="white">취소</Button>

      <ButtonImage src="/images/icon/icon-arrow-left.png" width="22px" height="22px"/>
      <ButtonImage src="/images/icon/icon-more-vertical.png" width="24px" height="24px"/>
      
      <LabeledInput label="아이디" type="text"></LabeledInput>
      <LabeledInput label="비밀번호" type="password"></LabeledInput>

      <UserSearch userName="애월읍 위니브 감귤농장" userId="@weniv_Mandarin"></UserSearch>
      <UserFollow userName="애월읍 위니브 감귤농장" userId="@weniv_Mandarin"></UserFollow>

      <Modal left="취소" right="삭제">상품을 삭제할까요?</Modal>

      <Topbar basic></Topbar>
      <Topbar search></Topbar>
      <Topbar main></Topbar>
      <Topbar upload></Topbar>
      <Topbar chat></Topbar>

      <Product src="/images/product-img-example.png" name="애월읍 노지 감귤" price="35000"></Product>
      
      <Post srcProfile="/images/basic-profile-img.png" withImg srcImg="/images/post-img-example.png" postDate="asdf"></Post>
      <Post srcProfile="/images/basic-profile-img.png" withImg srcImg="/images/post-img-example.png" postDate="2020년 10월 20일"></Post>
      <Post srcProfile="/images/basic-profile-img.png" postDate="asdf"></Post>
    </div>
  );
}

export default Test;
