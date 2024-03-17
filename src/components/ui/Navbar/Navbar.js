"use client";
import Image from "next/image";

import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
import SettingsBar from "../NavSettings/SettingsBar";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={`md:bg-white lg:bg-transparent md:py-5 lg:py-0 pl-4 pr-10 -mx-3`}
    >
      <div className="flex items-center justify-between ">
        <div className="w-3/5 lg:hidden md:flex items-center gap-3">
          <div>
            <Image
              src={`https://duaruqyah.com/assets/dua-logo.svg`}
              width={50}
              height={50}
              alt="dua"
            ></Image>
          </div>

          <h2 className="text-xl text-[#2B2C2D] ">Dua & Ruqyah</h2>
        </div>
        <div className="w-3/5 lg:block md:hidden">
          <h2 className="text-2xl text-[#2B2C2D] ">Duas Page</h2>
        </div>

        <div className="flex lg:gap-0 md:w-3/5 lg:w-2/5 justify-between items-center">
          <div>
            <div className=" relative w-[280px] lg:w-[350px]   bg-[#F3F4F6] flex rounded-lg ">
              <input
                name="category"
                id="field-id"
                className="pl-3 text-[#959595]  rounded-lg text-sm w-full py-3.5 outline-none lg:border border-[#EBEEF2] focus:border focus:border-[#1FA45B] bg-[#F3F4F6] lg:bg-[#ffffff]"
                type="text"
                placeholder="Search by Dua Name"
              />
              {/* bg-[#F3F4F6]  */}
              <button className="absolute right-0 lg:bg-[#F3F4F6] bg-[#ffffff] px-4 flex items-center justify-center m-1 h-[39px] rounded">
                {" "}
                <BsSearch className="text-[#444]   text-lg"></BsSearch>
              </button>
            </div>
          </div>

          <div className="lg:hidden cursor-pointer">
            <SettingsBar></SettingsBar>
          </div>

          <div
            onClick={() => setToggle(!toggle)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Image
              src={`https://duaruqyah.com/assets/settings/profile.svg`}
              width={45}
              height={45}
              alt="dua"
            ></Image>
            <TiArrowSortedDown className="text-[#868686]"></TiArrowSortedDown>
          </div>
        </div>
      </div>

      {toggle ? (
        <div className="relative">
          <div
            className="h-[55px] bg-white w-[30px]
       translate-x-[50px] rotate-[45deg] absolute right-[90px] top-1"
          ></div>
          <div className=" bg-[#FFFFFF] absolute top-4 right-0 p-4 rounded-lg font-normal text-sm  w-[290px] shadow-lg border">
            <div className="flex items-center gap-5  rounded-3xl py-2 pl-3 hover:bg-[#EBEEF2]">
              <Image
                src={`https://duaruqyah.com/assets/settings/support.svg`}
                width={20}
                height={20}
                alt="dua"
              ></Image>
              <h2>Supposrt Us</h2>
            </div>
            <div className="flex items-center gap-5 py-2 pl-3 hover:bg-[#EBEEF2] rounded-3xl">
              <Image
                src={`https://duaruqyah.com/assets/settings/download.svg`}
                width={20}
                height={20}
                alt="dua"
              ></Image>
              <h2>Download Dua App</h2>
            </div>
            <div className="flex items-center gap-5 py-2 pl-3 hover:bg-[#EBEEF2] rounded-3xl">
              <Image
                src={`https://duaruqyah.com/assets/settings/privacy.svg`}
                width={20}
                height={20}
                alt="dua"
              ></Image>
              <h2>Privacy Policy</h2>
            </div>
            <div className="flex items-center gap-5 py-2 pl-3 hover:bg-[#EBEEF2] rounded-3xl">
              <Image
                src={`https://duaruqyah.com/assets/settings/credit.svg`}
                width={20}
                height={20}
                alt="dua"
              ></Image>
              <h2>Thanks & Credits</h2>
            </div>
            <div className="flex items-center gap-5 py-2 pl-3 hover:bg-[#EBEEF2] rounded-3xl">
              <Image
                src={`https://duaruqyah.com/assets/settings/about.svg`}
                width={20}
                height={20}
                alt="dua"
              ></Image>
              <h2>About Us</h2>
            </div>

            <div className="flex items-center gap-5 py-2 pl-3 hover:bg-[#EBEEF2] rounded-3xl">
              <Image
                src={`https://duaruqyah.com/assets/settings/copyright.svg`}
                width={20}
                height={20}
                alt="dua"
              ></Image>
              <h2>Copyright Warning</h2>
            </div>
            <div className="flex items-center gap-5 py-2 pl-3 hover:bg-[#EBEEF2] rounded-3xl">
              <Image
                src={`https://duaruqyah.com/assets/settings/projects.svg`}
                width={20}
                height={20}
                alt="dua"
              ></Image>
              <h2>Our Other Projects</h2>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
