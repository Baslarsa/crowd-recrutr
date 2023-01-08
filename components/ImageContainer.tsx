import Image from "next/image";

const ImageContainer = ({
  alt,
  className,
  src,
}: {
  alt: string;
  className: string;
  src: string;
}) => {
  return (
    <>
      <div className="h-56 w-full relative mx-auto">
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
