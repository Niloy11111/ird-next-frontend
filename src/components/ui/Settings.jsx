import Image from "next/image";

const Settings = () => {
  return (
    <div className=" ">
      <h2 className="lg:block hidden text-center text-xl mt-10">Settings</h2>

      <div className="mt-10">
        <div className="flex bg-[#F7F8FA] p-2 items-center gap-3 rounded mx-4 border-l-4 border-[#1FA45B]">
          <div className="bg-[#E8F0F5] rounded-full p-2">
            <Image
              src={`https://duaruqyah.com/assets/sidebar/color/language.svg`}
              width={25}
              height={25}
              alt="dua"
            ></Image>
          </div>
          <div>
            <h2 className="text-[#1FA45B] font-semibold text-sm">
              Language Settings
            </h2>
          </div>
        </div>
        <div className="border h-[10vh] flex justify-center items-center mx-4 border-t-0 rounded-b-xl w-full">
          <div className="flex gap-5 w-full md:max-w-max ml-4 mr-8">
            <button className="px-6 py-2  bg-[#1FA45B] text-white rounded-lg text-sm w-full">
              English
            </button>
            <button className="w-full lg:px-7 py-2 border rounded-lg text-sm">
              বাংলা
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 flex bg-[#F7F8FA] p-2 items-center gap-3 rounded-lg mx-4 ">
        <div className="bg-[#E8F0F5] rounded-full p-2">
          <Image
            src={`https://duaruqyah.com/assets/sidebar/general.svg`}
            width={25}
            height={25}
            alt="dua"
          ></Image>
        </div>
        <div>
          <h2 className="text-[#979798] font-semibold text-sm">
            General Settings
          </h2>
        </div>
      </div>
      <div className="flex mt-4 bg-[#F7F8FA] p-2 items-center gap-3 rounded-lg mx-4 ">
        <div className="bg-[#E8F0F5] rounded-full p-2">
          <Image
            src={`https://duaruqyah.com/assets/sidebar/font.svg`}
            width={25}
            height={25}
            alt="dua"
          ></Image>
        </div>
        <div>
          <h2 className="text-[#979798] font-semibold text-sm">
            Font Settings
          </h2>
        </div>
      </div>
      <div className="flex mt-4 bg-[#F7F8FA] p-2 items-center gap-3 rounded-lg mx-4 ">
        <div className="bg-[#E8F0F5] rounded-full p-2">
          <Image
            src={`https://duaruqyah.com/assets/sidebar/font.svg`}
            width={25}
            height={25}
            alt="dua"
          ></Image>
        </div>
        <div>
          <h2 className="text-[#979798] font-semibold text-sm">
            Appearence Settings
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Settings;
