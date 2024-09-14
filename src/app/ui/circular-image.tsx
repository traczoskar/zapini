import Image from "next/image";

const CircularImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="w-48 h-48 lg:w-64 lg:h-64 overflow-hidden drop-shadow-md rounded-full">
      <Image
        src={src}
        alt={alt}
        width={256}
        height={256}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default CircularImage;
