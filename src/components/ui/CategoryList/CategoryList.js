"use client";
import { UseAllCategories } from "@/utils/getAllCategories";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import "../../../app/globals.css";

const Search = ({ setBars, bars }) => {
  const categories = UseAllCategories();

  const searchParams = useSearchParams();

  const [duaTitles, setDuaTitles] = useState([]);
  const [subDuaNames, setSubDuaName] = useState([]);

  const cat = searchParams.get("cat");
  const subcat = searchParams.get("subcat");
  const dua = searchParams.get("dua");

  const duaUrl = "https://ird-backend.vercel.app/subcategories";
  useEffect(() => {
    axios.get(duaUrl).then((res) => setDuaTitles(res.data));
  }, []);

  const subUrl = "https://ird-backend.vercel.app/duas";
  useEffect(() => {
    axios.get(subUrl).then((res) => setSubDuaName(res.data));
  }, []);

  function handleSubCat(event, item, subcatId) {
    event.preventDefault();
    const element = document.getElementById(`subcat_${subcatId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      const { pathname } = window.location;
      const newUrl = `${pathname}?cat=${item.cat_id}&subcat=${subcatId}`;
      window.history.pushState({ path: newUrl }, "", newUrl);
    }
  }
  function handleSubDua(event, duaId) {
    event.preventDefault();
    const element = document.getElementById(`dua_${duaId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      const { pathname } = window.location;
      const cat = new URLSearchParams(window.location.search).get("cat");
      const subcat = new URLSearchParams(window.location.search).get("subcat");
      const newUrl = `${pathname}?cat=${cat}&subcat=${subcat}&dua=${duaId}`;
      window.history.pushState({ path: newUrl }, "", newUrl);
    }
  }

  const filteredTitles = duaTitles.filter(
    (item) => item.cat_id === parseFloat(cat)
  );
  const filteredSubDuaNames = subDuaNames.filter(
    (item) => item.subcat_id === parseFloat(subcat)
  );

  const url = [
    { img: "https://duaruqyah.com/assets/icon/duar_gurutto.svg", id: 1 },
    { img: "https://duaruqyah.com/assets/nav/alldua.svg", id: 2 },
    { img: "https://duaruqyah.com/assets/nav/memorize.svg", id: 3 },
    { img: "https://duaruqyah.com/assets/nav/bookmark.svg", id: 4 },
    { img: "https://duaruqyah.com/assets/nav/ruqyah.svg", id: 5 },
    { img: "https://duaruqyah.com/assets/nav/dua-info.svg", id: 6 },
    { img: "https://duaruqyah.com/assets/nav/books.svg", id: 7 },
  ];

  const pathname = usePathname();

  return (
    <div className="bg-[#FFFFFF] rounded-3xl scroll-smooth">
      <div className=" bg-[#1FA45B] py-4 rounded-t-xl lg:flex hidden justify-center ">
        <h2 className="text-[#FFFFFF]">Categories </h2>{" "}
      </div>

      <div className="lg:flex hidden items-center mt-4 lg:mt-8 relative">
        <BsSearch className="absolute text-lg left-5 text-[#444]"></BsSearch>
        <input
          name="category"
          id="field-id"
          className="pl-8  w-full mx-3 text-sm  rounded py-3 outline-none border border-[#EBEEF2] focus:border-2 focus:border-[#1FA45B] "
          type="text"
          placeholder="Search categories"
        />
      </div>
      <div className="largeCategory mt-3 pr-6  lg:h-[650px] overflow-x-hidden overflow-y-hidden lg:overflow-y-scroll">
        {categories?.map((item, index) => {
          return (
            <div
              onClick={() => setBars(!bars)}
              key={item.id}
              className="w-full"
            >
              <Link
                style={{ display: "block" }}
                href={{
                  path: `/duas/${item.cat_name_en
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`,
                  query: { cat: `${item.cat_id}` },
                }}
                className={`link ${
                  pathname ===
                  `${{
                    path: `/duas/${item.cat_name_en
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`,
                    query: { cat: `${item.cat_id}` },
                  }}`
                    ? "bg-red-400"
                    : ""
                }`}
              >
                <div className="cursor-pointer hover:bg-[#E8F0F5] mb-3 rounded-lg  p-3 categoryTitle  ml-3 w-full">
                  <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                      <div className=" bg-[#F7F8FA]  p-2 rounded-lg">
                        <Image
                          src={`https://duaruqyah.com/assets/icon/duar_gurutto.svg`}
                          width={40}
                          height={40}
                          alt="dua"
                        ></Image>
                      </div>

                      <div className="">
                        <p className=""> {item.cat_name_en}</p>
                        <p className="text-sm text-[#444]">
                          {" "}
                          Subcategory:{item.no_of_subcat}
                        </p>
                      </div>
                    </div>

                    <div className="categoryBorder border-l pl-4">
                      <p className=""> {item.no_of_dua}</p>
                      <p className="text-sm text-[#444]"> duas </p>
                    </div>
                  </div>
                </div>
              </Link>
              {parseFloat(cat) === item.cat_id ? (
                <div className="border-l-2 border-dotted border-[#1FA45B] pl-3 ml-12 pt-4 pb-2 space-y-5">
                  {filteredTitles.map((title) => {
                    return (
                      <div key={title.id} className="">
                        <Link
                          onClick={(e) =>
                            handleSubCat(e, item, title.subcat_id)
                          }
                          style={{ display: "block" }}
                          className={"text-sm font-semibold"}
                          href={`/duas/${item.cat_name_en
                            .replace(/\s+/g, "-")
                            .toLowerCase()}?cat=${item.cat_id}&subcat=${
                            title.subcat_id
                          }`}
                        >
                          {title.subcat_name_en}
                        </Link>
                        {parseFloat(subcat) === title.subcat_id ? (
                          <div>
                            {" "}
                            {filteredSubDuaNames.map((dua) => (
                              <div
                                className="flex gap-4 justify-start "
                                key={dua.id}
                              >
                                <div>
                                  <Image
                                    src={`https://duaruqyah.com/assets/duaarrow.svg`}
                                    width={15}
                                    height={15}
                                    alt="dua"
                                  ></Image>
                                </div>
                                <div>
                                  <Link
                                    onClick={(e) => handleSubDua(e, dua.dua_id)}
                                    style={{ display: "block" }}
                                    className="text-[13px] text-[#1FA45B] font-normal mb-3"
                                    href={`/duas/${item.cat_name_en
                                      .replace(/\s+/g, "-")
                                      .toLowerCase()}?cat=${
                                      item.cat_id
                                    }&subcat=${dua.subcat_id}&dua=${
                                      dua.dua_id
                                    }`}
                                  >
                                    {dua.dua_name_en}
                                  </Link>
                                </div>
                              </div>
                            ))}{" "}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function CategoryList({ setBars, bars }) {
  return (
    <Suspense>
      <Search bars={bars} setBars={setBars}></Search>
    </Suspense>
  );
}
