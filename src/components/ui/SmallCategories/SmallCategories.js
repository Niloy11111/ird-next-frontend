"use client";
import { UseAllCategories } from "@/utils/getAllCategories";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import CategoryList from "../CategoryList/CategoryList";

const SmallCategoriesSearch = () => {
  const [bars, setBars] = useState(true);
  const searchParams = useSearchParams();
  const cat = searchParams.get("cat");

  const showCategories = () => {
    const categories = UseAllCategories();

    const filteredCategories = categories.filter(
      (item) => item.cat_id === parseFloat(cat)
    );

    return (
      <div>
        {filteredCategories.map((category) => (
          <h2 key={category.cat_id}>{category.cat_name_en}</h2>
        ))}
      </div>
    );
  };

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

  console.log(cat);
  return (
    <div>
      <div className="mb-4 flex items-center gap-3 bg-white py-4 pl-4 rounded-lg md:mt-32 mt-5">
        <button onClick={() => setBars(false)}>
          <FaBars className="text-xl"></FaBars>
        </button>
        <h2>{showCategories()}</h2>
      </div>

      {/* Overlay for the rest of the page */}
      {!bars && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setBars(true)}
        />
      )}

      <div
        className={`smallCategoryScroll bg-[#ffffff] transition-all duration-700 lg:hidden block fixed top-0 md:top-[80px] z-20 w-full md:w-1/2 h-full overflow-y-scroll  ${
          bars ? "left-[-520px] md:left-[-1290px]" : "left-0"
        }`}
      >
        <div className="bg-[#1FA45B] flex md:hidden items-center justify-between py-4 px-5">
          <h2 className="text-white">Categories</h2>
          <button className="text-white" onClick={() => setBars(true)}>
            <AiOutlineClose className="text-xl"></AiOutlineClose>
          </button>
        </div>
        <div className="">
          <CategoryList bars={bars} setBars={setBars}></CategoryList>
        </div>
      </div>
    </div>
  );
};

export default function SmallCategories() {
  return (
    <Suspense>
      <SmallCategoriesSearch />
    </Suspense>
  );
}
