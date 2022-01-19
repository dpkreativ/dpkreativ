import InputBox from "../molecules/InputBox";

const ContactForm = () => {
  return (
    <form>
      <InputBox
        placeholder="First name"
        inputLabel="Hello Divine"
        labelFor="First name"
        type="text"
      />
    </form>
  );
};

export default ContactForm;
