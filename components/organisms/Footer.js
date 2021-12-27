import Copyright from "../atoms/Copyright";
import Social from "../molecules/Social";

const Footer = () => {
  return (
    <footer
      className="bg-purple-600 text-white p-5 lg:p-10 flex-grow-0 flex-shrink"
      style={{ flexBasis: 40 }}
    >
      <section className="flex justify-between border-t border-white py-10">
        <Copyright />
        <Social />
      </section>
    </footer>
  );
};

export default Footer;
