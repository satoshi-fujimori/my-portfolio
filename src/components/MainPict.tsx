import Image from "next/image";
import carousel1 from "../../public/carousel1.jpg";

export default function MainPict() {
  return (
    <>
      <div className="h-1/4 sm:h-1/2 flex justify-center items-start sm:items-center relative overflow-hidden">
        <Image src={carousel1} alt="main-picture" className="opacity-60" />
        <div className="absolute top-1/4 sm:top-1/2 sm:right-1/2 animate-tracking-in-contract">
          <p className="font-title text-xs">
            Thank you for visiting my Portfolio
          </p>
          <p className="text-sm sm:text-lg font-bold">Satoshi.F</p>
        </div>
      </div>
    </>
  );
}
