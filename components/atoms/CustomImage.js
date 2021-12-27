import Image from "next/image";

const CustomImage = ({ url, className }) => {
  return (
    <div className={`relative ${className}`}>
      <Image src={url} layout="fill" objectFit="cover" />
    </div>
  );
};

export default CustomImage;
