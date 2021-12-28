import { GitHub, LinkedIn, Twitter } from "../atoms/Icons";

const Social = () => {
  return (
    <div className="flex space-x-3">
      <a href="https://github.com/dpkreativ" target="_blank" rel="noreferrer">
        <GitHub />
      </a>
      <a
        href="https://www.linkedin.com/in/dpkreativ"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedIn />
      </a>
      <a href="https://twitter.com/dpkreativ" target="_blank" rel="noreferrer">
        <Twitter />
      </a>
    </div>
  );
};

export default Social;
