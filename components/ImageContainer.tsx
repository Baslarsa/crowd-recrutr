import Image from "next/image";

const ImageContainer = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) => {
  return (
    <>
      <div className=" h-56 w-full relative mx-auto">
        <Image
          className={`object-cover ${className}`}
          src={src}
          fill={true}
          alt={alt}
        />
      </div>
    </>
  );
};

export default ImageContainer;
