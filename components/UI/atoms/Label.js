const Label = ({ children, labelFor }) => {
  return <label htmlFor={labelFor}>{children}</label>;
};
export default Label;
