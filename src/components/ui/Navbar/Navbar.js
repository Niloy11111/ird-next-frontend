import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between ">
      <div className="w-3/5">
        <h2 className="text-2xl text-[#2B2C2D] ">Duas Page</h2>
      </div>

      <div className="flex w-2/5 justify-between items-center">
        <div>
          <div className="relative w-[350px]   bg-[#F3F4F6] flex ">
            <input
              name="category"
              id="field-id"
              className="pl-3 text-[#959595] rounded-lg text-sm w-full py-3.5 outline-none "
              type="text"
              placeholder="Search by Dua Name"
            />
            {/* bg-[#F3F4F6]  */}
            <button className="absolute right-0 bg-[#F3F4F6] px-4 flex items-center justify-center m-1 h-[39px] rounded">
              {" "}
              <BsSearch className="text-[#444]   text-lg"></BsSearch>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Image
            src={`https://duaruqyah.com/assets/settings/profile.svg`}
            width={40}
            height={40}
            alt="dua"
          ></Image>
          <TiArrowSortedDown className="text-[#868686]"></TiArrowSortedDown>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
