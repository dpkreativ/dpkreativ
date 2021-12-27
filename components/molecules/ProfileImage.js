import CustomImage from "../atoms/CustomImage";

const ProfileImage = () => {
  return (
    <div className="relative">
      <div className="w-48 h-56 md:w-60 md:h-72 border border-white absolute top-8 left-8"></div>
      <div className="w-48 h-56 md:w-60 md:h-72 bg-purple-300 absolute z-10 top-4 left-4 shadow-xl">
        <CustomImage
          url="/assets/divi.jpg"
          className="w-48 h-56 md:w-60 md:h-72"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
