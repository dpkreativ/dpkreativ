import Image from "next/image";

const CustomImage = ({ url, className }) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={url}
        layout="fill"
        objectFit="cover"
        alt="Divine's profile picture"
      />
    </div>
  );
};

export default CustomImage;
