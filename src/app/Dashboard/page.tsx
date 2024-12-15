"use client";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Header from "../components/header";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="container mx-auto bg-[#F6F7F9] max-w-[1440px]">
      {/* Toggle Button */}
      <div className="flex justify-center items-start ">
        <Button
          className="p-2 bg-PrimaryBlue text-white rounded lg:hidden text-center"
          onClick={toggleMenu}
        >
          {" "}
          {isOpen ? (
            <ImCross className="text-black" />
          ) : (
            <GiHamburgerMenu className="text-black" />
          )}
        </Button>
        <Header />
      </div>
      <div className="max-w-full w-screen h-auto mx-auto py-8 flex border-t border-r border-gray-300">
        {/* Left side of the section */}
        <div
          className={`bg-white px-5 w-[286px] max-h-full h-max-[900px] rounded-xl shadow-sm lg:flex flex-col ${
            isOpen ? "block" : "hidden"
          } ${isOpen ? "absolute" : "relative"}`}
        >
          <div>
            {/* Side menu */}
            <div className="mx-0 mt-8 space-y-5 flex justify-start flex-col items-start">
              <h1 className="text-[12px] text-black/50 font-semibold">
                MAIN MENU
              </h1>
              {/* dashboard */}
              <div className="flex justify-center items-center gap-3 bg-blue-600 rounded px-2 py-1">
                <Image
                  src="/image/home.png"
                  width={24}
                  height={24}
                  alt="icon"
                  color="black"
                />
                <Link href="/" className="text-white text-[16px] font-medium">
                  Dashboard
                </Link>
              </div>
              {/* car rent */}
              <div className="flex justify-center items-center gap-3 hover:bg-blue-600 group rounded px-2 py-1">
                <Image
                  src="/image/car1.png"
                  width={24}
                  height={24}
                  alt="icon"
                  color="white"
                  className="group-hover:text-white"
                />
                <Link
                  href="/"
                  className="text-[#90A3BF] group-hover:text-white text-[16px] font-medium"
                >
                  Car Rent
                </Link>
              </div>
              {/* insight */}
              <div className="flex justify-center items-center gap-3 hover:bg-blue-600 group   rounded px-2 py-1">
                <Image
                  src="/image/chart.png"
                  width={24}
                  height={24}
                  alt="icon"
                  color="white"
                  className="group-hover:text-white"
                />
                <Link
                  href="/"
                  className="text-[#90A3BF] group-hover:text-white text-[16px] font-medium"
                >
                  Insight
                </Link>
              </div>
              {/* Reimburse */}
              <div className="flex justify-center items-center gap-3 hover:bg-blue-600 group  rounded px-2 py-1">
                <Image
                  src="/image/empty-wallet-change.png"
                  width={24}
                  height={24}
                  alt="icon"
                  color="white"
                  className="group-hover:text-white"
                />
                <Link
                  href="/"
                  className="text-[#90A3BF] group-hover:text-white text-[16px] font-medium"
                >
                  Reimburse
                </Link>
              </div>
              {/* Inbox */}
              <div className="flex justify-center items-center gap-3 hover:bg-blue-600 group  rounded px-2 py-1">
                <Image
                  src="/image/message.png"
                  width={24}
                  height={24}
                  alt="icon"
                  color="white"
                  className="group-hover:text-white"
                />
                <Link
                  href="/"
                  className="text-[#90A3BF] group-hover:text-white text-[16px] font-medium"
                >
                  Inbox
                </Link>
              </div>
              {/* Calender */}
              <div className="flex justify-center items-center gap-3 hover:bg-blue-600 group  rounded px-2 py-1">
                <Image
                  src="/image/calendar.png"
                  width={24}
                  height={24}
                  alt="icon"
                  color="white"
                  className="group-hover:text-white"
                />
                <Link
                  href="/"
                  className="text-[#90A3BF] group-hover:text-white text-[16px] font-medium"
                >
                  Calender
                </Link>
              </div>
            </div>
            {/* Preferences */}
            <div className="mx-0 mt-8 space-y-5 flex justify-start flex-col items-start">
              <h1 className="text-[12px] text-black/50 font-semibold">
                PREFERENCES
              </h1>
              {/* setting */}
              <div className="flex justify-center items-center gap-3 hover:bg-blue-600 group  rounded px-2 py-1">
                <Image
                  src="/image/setting.png"
                  width={24}
                  height={24}
                  alt="icon"
                  color="white"
                  className="group-hover:text-white"
                />
                <Link
                  href="/"
                  className="text-[#90A3BF] group-hover:text-white text-[16px] font-medium"
                >
                  Settings
                </Link>
              </div>
              {/* help */}
              <div className="flex justify-center items-center gap-3 hover:bg-blue-600 group  rounded px-2 py-1">
                <Image
                  src="/image/info-circle.png"
                  width={24}
                  height={24}
                  alt="icon"
                  color="white"
                  className="group-hover:text-white"
                />
                <Link
                  href="/"
                  className="text-[#90A3BF] group-hover:text-white text-[16px] font-medium"
                >
                  Help & Center
                </Link>
              </div>

              {/* dark mode */}
              <div className="flex justify-center items-center gap-3">
                <div className="flex justify-center items-center gap-3 hover:bg-blue-600 group  rounded px-2 py-1">
                  <Image
                    src="/image/briefcase.png"
                    width={24}
                    height={24}
                    alt="icon"
                    color="white"
                    className="group-hover:text-white"
                  />
                  <Link
                    href="/"
                    className="text-[#90A3BF] group-hover:text-white text-[16px] font-medium"
                  >
                    Dark Mode
                  </Link>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <div className="flex w-[30px] h-[30pxpx] bg-blue-700 rounded-full justify-center items-center">
                    <Image
                      src="/image/sun.png"
                      width={24}
                      height={24}
                      alt="icon"
                      color="white"
                      className="group-hover:text-white"
                    />
                  </div>
                  <Image
                    src="/image/moon.png"
                    width={24}
                    height={24}
                    alt="icon"
                    color="white"
                    className="group-hover:text-white"
                  />
                </div>
              </div>
            </div>
            <div className="mx-0 mt-16 space-y-5 flex justify-start flex-col items-start">
              <div className="flex justify-center items-center gap-3 hover:bg-blue-600 group  rounded px-2 py-1">
                <Image
                  src="/image/logout.png"
                  width={24}
                  height={24}
                  alt="icon"
                  color="white"
                  className="group-hover:text-white"
                />
                <Link
                  href="/"
                  className="text-[#90A3BF] group-hover:text-white text-[16px] font-medium"
                >
                  Log Out
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div
          className={`w-[1440px] flex justify-center rounded-xl lg:items-start items-center top-[32px] gap-x-10 py-8  bg-[#F6F7F9] lg:flex-row flex-col    ${
            isOpen ? "hidden" : "block"
          }`}
        >
          {/* Right middle section */}
          <div className="w-[534px] max-h-full h-max-[836px] left-[318px]  bg-white p-4 space-y-6 rounded ">
            {/* heading and map */}
            <h1 className="text-left mb-2 text-[20px] font-bold">
              Details Rental
            </h1>
            <div className="gap-2 flex-col flex justify-center items-start">
              <Image
                src="/image/Maps.png"
                alt="map"
                width={486}
                height={272}
                className="relative"
              />
            </div>
            {/* Car picture and detail */}
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-4">
                <div className=" bg-PrimaryBlue rounded w-[150px] relative h-10 flex justify-center items-center">
                  <Image
                    src="/image/gtr-dashboard.png"
                    width={116}
                    height={36}
                    alt="car"
                  />
                </div>
                <div>
                  <h1 className="text-8 font-bold">Nissan GT-R </h1>
                  <p className="text-[14px] font-medium text-[#3D5278]">
                    Sport Car
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[14px] font-medium text-[#3D5278]">#9761</p>
              </div>
            </div>
            {/* pick up */}
            <div className="flex justify-start items-center gap-2">
              <Input
                type="checkbox"
                className=" h-3 w-3  focus:ring-2 focus:ring-PrimaryBlue  active:bg-gray-300 cursor-pointer"
              />
              <p className="text-[16px] font-semibold">Pick-Up</p>
            </div>
            {/* Bottom Section */}
            {/* 1st part Bottom section */}
            <div className="flex justify-evenly items-center gap-4">
              <div className=" border-r-2 ">
                <div className=" flex flex-col p-2 ">
                  <h1 className="text-[16px] font-bold">Location</h1>
                  <div className="flex flex-row justify-start items-center gap-2">
                    <p className="text-[12px] font-medium text-black/50">
                      Kota Semarang
                    </p>
                    <span>
                      {" "}
                      <ChevronDown width={12} height={12} />{" "}
                    </span>
                  </div>
                </div>
              </div>
              {/* 2nd part Bottom section */}
              <div className=" border-r-2">
                <div className=" flex flex-col p-2">
                  <h1 className="text-[16px] font-bold">Date</h1>
                  <div className="flex flex-row justify-start items-center gap-2">
                    <p className="text-[12px] font-medium text-black/50">
                      20 July 2022
                    </p>
                    <span>
                      {" "}
                      <ChevronDown width={12} height={12} />{" "}
                    </span>
                  </div>
                </div>
              </div>
              {/* 3rd part Bottom section */}
              <div className=" ">
                <div className=" flex flex-col p-2">
                  <h1 className="text-[16px] font-bold">Time</h1>
                  <div className="flex flex-row justify-start items-center gap-2">
                    <p className="text-[12px] font-medium text-black/50">
                      07.00
                    </p>
                    <span>
                      {" "}
                      <ChevronDown width={12} height={12} />{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Drop off */}
            <div className="flex justify-start items-center gap-2">
              <Input
                type="checkbox"
                className=" h-3 w-3  focus:ring-2 focus:ring-PrimaryBlue  active:bg-gray-300 cursor-pointer"
              />
              <p className="text-[16px] font-semibold">Drop-Off</p>
            </div>
            {/* Bottom Section */}
            {/* 1st part Bottom section */}
            <div className="flex justify-evenly items-center gap-4">
              <div className=" border-r-2 ">
                <div className=" flex flex-col p-2 ">
                  <h1 className="text-[16px] font-bold">Locations</h1>
                  <div className="flex flex-row justify-start items-center gap-2">
                    <p className="text-[12px] font-medium text-black/50">
                      Kota Semarang
                    </p>
                    <span>
                      {" "}
                      <ChevronDown width={12} height={12} />{" "}
                    </span>
                  </div>
                </div>
              </div>
              {/* 2nd part Bottom section */}
              <div className=" border-r-2">
                <div className=" flex flex-col p-2">
                  <h1 className="text-[16px] font-bold">Date</h1>
                  <div className="flex flex-row justify-start items-center gap-2">
                    <p className="text-[12px] font-medium text-black/50">
                      21 July 2022
                    </p>
                    <span>
                      {" "}
                      <ChevronDown width={12} height={12} />{" "}
                    </span>
                  </div>
                </div>
              </div>
              {/* 3rd part Bottom section */}
              <div className=" ">
                <div className=" flex flex-col p-2">
                  <h1 className="text-[16px] font-bold">Time</h1>
                  <div className="flex flex-row justify-start items-center gap-2">
                    <p className="text-[12px] font-medium text-black/50">
                      01.00
                    </p>
                    <span>
                      {" "}
                      <ChevronDown width={12} height={12} />{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="flex justify-between items-end border-t border-gray-300 border-solid">
              <div>
                <br />
                <h1 className="text-[20px] font-bold">Total Rental Price</h1>
                <p className="text-[14px] font-medium text-[#90A3BF]">
                  Overall price and includes rental discount
                </p>
              </div>
              <div className="text-[32px] font-bold">$80.00</div>
            </div>
          </div>
          {/* Right most Sections */}
          <div className="space-y-5">
            {/* Total 5 car rental */}
            <div className="max-w-[524px] max-h-[324px] bg-white p-4 rounded ">
              <div className="flex justify-between items-center mb-5">
                <h1 className="text-[20px] font-bold">Top 5 Car Rental</h1>
                <Image src="/image/more.png" alt="img" width={24} height={24} />
              </div>
              <div className="flex justify-between items-center gap-5">
                <div className="relative">
                  <Image
                    src="/image/Chart2.png"
                    alt="img"
                    width={220}
                    height={220}
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h1 className="text-[24px] font-bold">72,030</h1>
                    <span className="text-[14px] text-[#3D5278] font-medium">
                      Rental Car
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 justify-evenly items-start w-[232px]">
                  <div className="flex justify-between items-center gap-8 w-[200px]">
                    <div className="flex justify-center items-center gap-2">
                      <div className="h-[12px] w-[12px] rounded bg-[#0D3559]"></div>
                      <p className="text-[14px] font-semibold text-textGray">
                        Sport Car
                      </p>
                    </div>
                    <div className="text-[14px] font-semibold">17439</div>
                  </div>
                  <div className="flex justify-between items-center gap-8 w-[200px]">
                    <div className="flex justify-center items-center gap-2">
                      <div className="h-[12px] w-[12px] rounded bg-[#175D9C]"></div>
                      <p className="text-[14px] font-semibold text-textGray">
                        SUV
                      </p>
                    </div>
                    <div className="text-[14px] font-semibold">9478</div>
                  </div>
                  <div className="flex justify-between items-center gap-8 w-[200px]">
                    <div className="flex justify-center items-center gap-2">
                      <div className="h-[12px] w-[12px] rounded bg-[#2185DE]"></div>
                      <p className="text-[14px] font-semibold text-[ #3D5278]">
                        Coupe
                      </p>
                    </div>
                    <div className="text-[14px] font-semibold">18197</div>
                  </div>
                  <div className="flex justify-between items-center gap-8 w-[200px]">
                    <div className="flex justify-center items-center gap-2">
                      <div className="h-[12px] w-[12px] rounded bg-[#63A9E8]"></div>
                      <p className="text-[14px] font-semibold text-[ #3D5278]">
                        Hatchback
                      </p>
                    </div>
                    <div className="text-[14px] font-semibold">12510</div>
                  </div>
                  <div className="flex justify-between items-center gap-8 w-[200px]">
                    <div className="flex justify-center items-center gap-2">
                      <div className="h-[12px] w-[12px] rounded bg-[#63A9E8]"></div>
                      <p className="text-[14px] font-semibold text-[ #3D5278]">
                        MPV
                      </p>
                    </div>
                    <div className="text-[14px] font-semibold">14406</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Recent Transaction */}
            <div className="max-w-[524px] max-h-auto bg-white p-4 rounded">
              <div className="flex justify-between items-center mb-5">
                <h1 className="text-[20px] font-bold">Recent Transactions</h1>
                <Link
                  href="/"
                  className="text-[12px] font-medium text-blue-600"
                >
                  View All
                </Link>
              </div>
              <div className="flex justify-between items-center border-b-2 border-black/20 py-3">
                <div>
                  <Image
                    src="/image/hero-car-2.png"
                    alt="img"
                    width={132}
                    height={70}
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-[16px] font-bold">Nissan GT-R</h1>
                  <p className="text-[12px] font-medium text-[#90A3BF]">
                    Sport Car
                  </p>
                </div>
                <div className="flex flex-col items-end justify-center">
                  <p className="text-[12px] font-medium text-[#90A3BF]">
                    20 July
                  </p>
                  <p className="text-[16px] font-bold">$80.00</p>
                </div>
              </div>
              <div className="flex justify-between items-center border-b-2 border-black/20 py-6">
                <div>
                  <Image
                    src="/image/hero-car-1.png"
                    alt="img"
                    width={132}
                    height={70}
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-[16px] font-bold">Koegnigsegg</h1>
                  <p className="text-[12px] font-medium text-[#90A3BF]">
                    Sport Car
                  </p>
                </div>
                <div className="flex flex-col items-end justify-center">
                  <p className="text-[12px] font-medium text-[#90A3BF]">
                    19 July
                  </p>
                  <p className="text-[16px] font-bold">$99.00</p>
                </div>
              </div>
              <div className="flex justify-between items-center border-b-2 border-black/20 py-6">
                <div>
                  <Image
                    src="/image/rolls-royce.png"
                    alt="img"
                    width={132}
                    height={70}
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-[16px] font-bold">Rolls - Royce</h1>
                  <p className="text-[12px] font-medium text-[#90A3BF]">
                    Sport Car
                  </p>
                </div>
                <div className="flex flex-col items-end justify-center">
                  <p className="text-[12px] font-medium text-[#90A3BF]">
                    18 July
                  </p>
                  <p className="text-[16px] font-bold">$96.00</p>
                </div>
              </div>
              <div className="flex justify-between items-center border-b-2 border-black/20 py-6">
                <div>
                  <Image
                    src="/image/crv.png"
                    alt="img"
                    width={132}
                    height={70}
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-[16px] font-bold">CRV</h1>
                  <p className="text-[12px] font-medium text-[#90A3BF]">SUV</p>
                </div>
                <div className="flex flex-col items-end justify-center">
                  <p className="text-[12px] font-medium text-[#90A3BF]">
                    17 July
                  </p>
                  <p className="text-[16px] font-bold">$80.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
