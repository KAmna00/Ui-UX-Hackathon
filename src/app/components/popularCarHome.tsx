import React from "react";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";

export default function PopularCarsHome() {
  return (
    <div className="w-full bg-[#F6F7F9]">
      <div className="max-w-[1440px] mx-auto pb-8 ">
        {/* Heading and Button */}
        <div className="flex justify-between items-center p-2">
          <h1 className="text-[#90A3BF] text-[16px] font-semibold">
            Popular Cars
          </h1>
          <Button className="text-[16px] font-semibold text-[#3563E9] ">
            View All
          </Button>
        </div>

        {/* Popular Cars */}
        <div className="flex justify-between items-center overflow-hidden gap-8">
          {/* 1st Car Card */}
          <div className="bg-white max-w-[304px] h-[388px] p-4 rounded-[10px] flex justify-center items-center relative">
            <div className="space-y-8">
              {/* Text and heart */}
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-[20px] font-bold">Koenigsegg</h1>
                  <p className="text-[14px] font-bold text-[#90A3BF]">Sport</p>
                </div>
                <div>
                  <Heart className="text-transparent" fill="red" />
                </div>
              </div>
              {/* Car */}
              <div className="flex justify-center items-center ">
                <div>
                  <Image
                    src="/image/hero-car-1.png"
                    width={304}
                    height={68}
                    alt="car"
                  />
                </div>
              </div>
              {/* Icons */}
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-1">
                  <Image
                    src="/image/gas-station.png"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] font-medium text-[#90A3BF]">90L</p>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <Image
                    src="/image/Car.png"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] font-medium text-[#90A3BF]">
                    Manual
                  </p>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <Image
                    src="/image/profile-2user.png"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] font-medium text-[#90A3BF]">
                    2 People
                  </p>
                </div>
              </div>
              {/* Price and Button */}
              <div className="flex justify-between items-center">
                <p className="text-[20px] font-bold">
                  $99.00/{" "}
                  <span className="text-[14px] text-[#90A3BF]">day</span>
                </p>
                <Button className="text-[16px] font-semibold text-white bg-[#3563E9] px-4 py-1 rounded h-[44px] hover:bg-[#54A6FF]">
                  Rent Now
                </Button>
              </div>
            </div>
            <span className="CarShadow"></span>
          </div>

          {/* 2nd Car Card */}
          <div className="bg-white max-w-[304px] h-[388px] p-4 rounded-[10px] flex justify-center items-center relative">
            <div className="space-y-8">
              {/* Text and heart */}
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-[20px] font-bold">Nissan GT - R</h1>
                  <p className="text-[14px] font-bold text-[#90A3BF]">Sport</p>
                </div>
                <div>
                  <Heart className="text-[#90A3BF]" />
                </div>
              </div>
              {/* Car */}
              <div className="flex justify-center items-center ">
                <div>
                  <Image
                    src="/image/Nissangtr.png"
                    width={304}
                    height={68}
                    alt="car"
                  />
                </div>
              </div>
              {/* Icons */}
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-1">
                  <Image
                    src="/image/gas-station.png"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] font-medium text-[#90A3BF]">80L</p>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <Image
                    src="/image/Car.png"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] font-medium text-[#90A3BF]">
                    Manual
                  </p>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <Image
                    src="/image/profile-2user.png"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] font-medium text-[#90A3BF]">
                    2 People
                  </p>
                </div>
              </div>
              {/* Price and Button */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[20px] font-bold">
                    $80.00/{" "}
                    <span className="text-[14px] text-[#90A3BF]">day</span>
                  </p>
                  <p className="text-[14px] text-[#90A3BF] font-bold line-through">
                    $100.00
                  </p>
                </div>
                <Button className="text-[16px] font-semibold text-white bg-[#3563E9] px-4 py-1 rounded h-[44px] hover:bg-[#54A6FF]">
                  Rent Now
                </Button>
              </div>
            </div>
            <span className="CarShadow"></span>
          </div>

          {/* 3rd Car Card */}
          <div className="bg-white max-w-[304px] h-[388px] p-4 rounded-[10px] flex justify-center items-center relative over">
            <div className="space-y-8">
              {/* Text and heart */}
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-[20px] font-bold">Rolls - Royce</h1>
                  <p className="text-[14px] font-bold text-[#90A3BF]">Sedan</p>
                </div>
                <div>
                  <Heart className="text-transparent" fill="red" />
                </div>
              </div>
              {/* Car Image*/}
              <div className="flex justify-center items-center ">
                <div>
                  <Image
                    src="/image/rolls-royce.png"
                    width={304}
                    height={68}
                    alt="car"
                  />
                </div>
              </div>
              {/* Icons */}
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-1">
                  <Image
                    src="/image/gas-station.png"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] font-medium text-[#90A3BF]">70L</p>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <Image
                    src="/image/Car.png"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] font-medium text-[#90A3BF]">
                    Manual
                  </p>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <Image
                    src="/image/profile-2user.png"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] font-medium text-[#90A3BF]">
                    4 People
                  </p>
                </div>
              </div>
              {/* Price and Button */}
              <div className="flex justify-between items-center">
                <p className="text-[20px] font-bold">
                  $96.00/{" "}
                  <span className="text-[14px] text-[#90A3BF]">day</span>
                </p>
                <Button className="text-[16px] font-semibold text-white bg-[#3563E9] px-4 py-1 rounded h-[44px] hover:bg-[#54A6FF]">
                  Rent Now
                </Button>
              </div>
            </div>
            <span className="CarShadow"></span>
          </div>

          {/* 4th Car Card */}
          <div className="bg-white max-w-[304px] h-[388px] p-4 rounded-[10px] flex justify-center items-center relative">
            <div className="space-y-8">
              {/* Text and heart */}
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-[20px] font-bold">Nissan GT - R</h1>
                  <p className="text-[14px] font-bold text-[#90A3BF]">Sport</p>
                </div>
                <div>
                  <Heart className="text-[#90A3BF]" />
                </div>
              </div>
              {/* Car */}
              <div className="flex justify-center items-center ">
                <div>
                  <Image
                    src="/image/Nissangtr.png"
                    width={304}
                    height={68}
                    alt="car"
                  />
                </div>
              </div>
              {/* Icons */}
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-1">
                  <Image
                    src="/image/gas-station.png"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] font-medium text-[#90A3BF]">80L</p>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <Image
                    src="/image/Car.png"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] font-medium text-[#90A3BF]">
                    Manual
                  </p>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <Image
                    src="/image/profile-2user.png"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] font-medium text-[#90A3BF]">
                    2 People
                  </p>
                </div>
              </div>
              {/* Price and Button */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[20px] font-bold">
                    $80.00/{" "}
                    <span className="text-[14px] text-[#90A3BF]">day</span>
                  </p>
                  <p className="text-[14px] text-[#90A3BF] font-bold line-through">
                    $100.00
                  </p>
                </div>
                <Button className="text-[16px] font-semibold text-white bg-[#3563E9] px-4 py-1 rounded h-[44px] hover:bg-[#54A6FF]">
                  Rent Now
                </Button>
              </div>
            </div>
            <span className="CarShadow"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
