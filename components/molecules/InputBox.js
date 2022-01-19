import Input from "../atoms/Input";
import Label from "../atoms/Label";

const InputBox = ({ placeholder, labelFor, inputLabel, type }) => {
  return (
    <div className="border-b border-black">
      <Label labelFor={labelFor}>
        <div className="text-gray-300">{inputLabel}</div>
        <div className="my-2">
          <Input inputPlaceholder={placeholder} inputType={type} />
        </div>
      </Label>
    </div>
  );
};

export default InputBox;
