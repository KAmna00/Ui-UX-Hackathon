"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const route = useRouter();
  return (
    <div>
      <div className="w-full bg-[#F6F7F9]">
        <div className="max-w-[1440px] mx-auto pt-8 ">
          <div className="flex justify-between items-center gap-2 m-0  lg:flex-row flex-col ">
            <div className="relative lg:w-[680px] md:w-[475px] max-h-[380px] bg-[#54a6ff] p-4 rounded ">
              <div className=" flex flex-col max-w-[284px] gap-4">
                <h1 className="text-white text-[32px] font-semibold">
                  The Best Platform
                  <br /> for Car Rental
                </h1>
                <p className="text-white text-[16px] font-medium">
                  Ease of doing a car rental safely and <br />
                  reliably. Of course at a low price.
                </p>
                <Button
                  onClick={() => route.push("/Category")}
                  className="bg-blue-700 w-[120px] h-[44px] text-white px-5 py-2 rounded"
                >
                  Rental Car
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/image/hero-car-1.png"
                  alt="car"
                  width={426}
                  height={116}
                />
              </div>
            </div>
            <div className="relative lg:w-[680px] md:w-[475px] max-h-[380px] bg-blue-700 p-4 rounded md:block hidden ">
              <div className=" flex flex-col max-w-[284px] gap-4">
                <h1 className="text-white text-[32px] font-semibold">
                  Easy way to rent a <br /> car at a low price
                </h1>
                <p className="text-white text-[16px] font-medium">
                  Providing cheap car rental services <br />
                  and safe and comfortable facilities.
                </p>
                <Button
                  onClick={() => route.push("/Details")}
                  className="bg-[#54a6ff] w-[120px] h-[44px] text-white px-5 py-2 rounded"
                >
                  Rental Car
                </Button>
              </div>
              <div className="flex items-center justify-center ">
                <Image
                  src="/image/hero-car-2.png"
                  alt="car"
                  width={365}
                  height={116}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
