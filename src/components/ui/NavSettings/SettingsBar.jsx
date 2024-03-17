"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Settings from "../Settings";

const SettingBarSearch = () => {
  const [bars, setBars] = useState(true);
  const searchParams = useSearchParams();
  const cat = searchParams.get("cat");

  useEffect(() => {
    const closeSidebar = (event) => {
      if (!event.target.closest(".smallCategoryScroll") && bars === false) {
        setBars(true);
      }
    };

    document.addEventListener("click", closeSidebar);

    return () => {
      document.removeEventListener("click", closeSidebar);
    };
  }, [bars]);

  return (
    <div>
      <div onClick={() => setBars(!bars)}>
        <Image
          src={`https://duaruqyah.com/assets/tab/home/settings.svg`}
          width={25}
          height={25}
          alt="dva"
        />
      </div>

      <div
        className={`smallCategoryScroll bg-[#ffffff] lg:hidden block fixed top-0 z-20 w-full md:w-[330px] h-full md:overflow-y-scroll rounded-3xl transition-all duration-500 ${
          bars ? "right-[-520px] md:left-[-1290px]" : "right-0"
        }`}
      >
        <div className="bg-[#1FA45B] flex md:hidden items-center justify-between py-4 px-5">
          <h2 className="text-white">Categories</h2>
          <button className="text-white" onClick={() => setBars(true)}>
            <AiOutlineClose className="text-xl" />
          </button>
        </div>
        <div>
          <Settings />
        </div>
      </div>

      {!bars && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setBars(true)}
        />
      )}
    </div>
  );
};

export default function SettingsBar() {
  return;
  <Suspense>
    <SettingBarSearch />
  </Suspense>;
}
