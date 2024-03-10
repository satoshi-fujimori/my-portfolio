import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import carousel1 from "../../public/carousel1.jpg";
import carousel2 from "../../public/carousel2.jpg";
import carousel3 from "../../public/carousel3.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode, Suspense } from "react";

const p1: ReactNode = (
  <>
    <p className="font-title">Thank you for visiting my Portfolio</p>
    <p className="text-lg font-bold">Satoshi.F</p>
  </>
);

const carouselImages: { image: StaticImport; name: string; p?: ReactNode }[] = [
  { image: carousel1, name: "carousel1", p: p1 },
  { image: carousel2, name: "carousel2" },
  { image: carousel3, name: "carousel3" },
];

export default function HeaderCarousel() {
  return (
    <div className="w-full h-1/2 relative">
      <Carousel className="w-10/12 mx-auto h-full">
        <CarouselContent className="h-full">
          {carouselImages.map((obj) => (
            <CarouselItem key={obj.name} className="h-full">
              <div className="w-fit h-full relative">
                <div className="h-full">
                  <div className="flex flex-row items-center justify-center relative h-full">
                    <Image
                      src={obj.image}
                      alt={obj.name}
                      className="opacity-60"
                    />
                    <div className="sticky top-1/4 right-1/2 animate-tracking-in-contract">
                      {obj.p}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
