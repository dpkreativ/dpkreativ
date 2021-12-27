import CustomImage from "../atoms/CustomImage";

const ProfileImage = () => {
  return (
    <div className="relative">
      <div className="w-48 h-56 md:w-60 md:h-72 border border-white absolute top-4 left-4"></div>
      <div className="w-48 h-56 md:w-60 md:h-72 bg-purple-300 absolute z-10 top-0 shadow-xl">
        <CustomImage
          url="/assets/divi.jpg"
          className="w-48 h-56 md:w-60 md:h-72"
        />
      </div>
    </div>
  );
};

export default ProfileImage;

//  left-1/3 -translate-x-4/4 top-9 md:left-auto md:top-auto -translate-x-auto
