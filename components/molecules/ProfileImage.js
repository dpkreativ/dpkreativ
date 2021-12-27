import CustomImage from "../atoms/CustomImage";

const ProfileImage = () => {
  return (
    <div className="relative">
      <div className="w-60 h-72 border border-white absolute top-6 left-6"></div>
      <div className="w-60 h-72 bg-purple-300 absolute z-10 top-2 left-1 shadow-xl">
        <CustomImage url="/assets/divi.jpg" className="w-60 h-72" />
      </div>
    </div>
  );
};

export default ProfileImage;
