import Input from "./Input";
import Label from "./Label";

function LabeledInput(props) {
  return (
    <div>
      <Label>{props.label}</Label>
      <Input type={props.type}></Input>
    </div>
  );
}

export default LabeledInput;
