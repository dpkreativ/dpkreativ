import Image from 'next/image';

export default function ProjectCard({
  cardImg,
  cardImgAlt,
  height,
  title,
  topCategory,
  width,
}) {
  return (
    <div className={width ? width : 'max-w-md'}>
      <div
        className={`bg-gray-300 rounded-lg relative ${
          height ? height : 'h-[391px]'
        }`}
      >
        {cardImg && (
          <Image
            src={cardImg}
            alt={cardImgAlt}
            fill
            style={{ objectFit: 'cover' }}
          />
        )}
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="font-semibold text-2xl">{title}</div>
        <div className="flex items-center space-x-2">
          <div className="w-16 h-px bg-black"></div>
          <div>{topCategory}</div>
        </div>
      </div>
    </div>
  );
}
