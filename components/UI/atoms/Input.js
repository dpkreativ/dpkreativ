const Input = ({
  inputType,
  inputId,
  inputName,
  inputValue,
  inputPlaceholder,
}) => {
  return (
    <input
      type={inputType}
      id={inputId}
      name={inputName}
      value={inputValue}
      placeholder={inputPlaceholder}
      className="outline-none text-xl"
    />
  );
};

export default Input;
