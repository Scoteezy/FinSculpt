import Image from "next/image";
type GeometrySpacingProps = {
  type: string;
  marginTop: string;
  marginBottom: string;
};
const geometry1 = [
  "/assets/images/geometry-1/Geometry-1.png",
  "/assets/images/geometry-1/Geometry-2.png",
  "/assets/images/geometry-1/Geometry-3.png",
  "/assets/images/geometry-1/Geometry-4.png",
  "/assets/images/geometry-1/Geometry-5.png",
  "/assets/images/geometry-1/Geometry-6.png",
];
const geometry2 = [
  "/assets/images/geometry-2/Geometry-1.png",
  "/assets/images/geometry-2/Geometry-2.png",
  "/assets/images/geometry-2/Geometry-3.png",
  "/assets/images/geometry-2/Geometry-4.png",
  "/assets/images/geometry-2/Geometry-5.png",
  "/assets/images/geometry-2/Geometry-6.png",
];

export const GeometrySpacing = ({
  type,
  marginTop,
  marginBottom,
}: GeometrySpacingProps) => {
  console.log();
  return (
    <div className="wrapper">
      {type == "type-light" ? (
        <div
          className={`${marginTop} ${marginBottom} flex flex-between w-full flex-wrap md:flex-nowrap`}
        >
          {geometry1.map((img) => (
            <Image
              alt="geometry"
              className="w-[120px] h-[120px]"
              height={120}
              key={img}
              src={img}
              width={120}
            />
          ))}
        </div>
      ) : (
        <div
          className={`${marginTop} ${marginBottom} flex flex-between w-full flex-wrap md:flex-nowrap`}
        >
          {geometry2.map((img) => (
            <Image
              alt="geometry"
              className="w-[120px] h-[120px] "
              height={120}
              key={img}
              src={img}
              width={120}
            />
          ))}
        </div>
      )}
    </div>
  );
};
