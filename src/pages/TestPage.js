import Button from '../components/Button';
import Input from '../components/Input';
import LabeledInput from '../components/LabeledInput';

function Test() {
  return (
    <div>
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
      
      <LabeledInput label="아이디" type="text"></LabeledInput>
      <LabeledInput label="비밀번호" type="password"></LabeledInput>
    </div>
  );
}

export default Test;
