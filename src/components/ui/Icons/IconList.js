"use client";
import Image from "next/image";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { Bounce, toast } from "react-toastify";
const IconList = ({
  title,
  topEn,
  refference,
  dua_arabic,
  transliteration_en,
  translation_en,
}) => {
  const copyInfo = `
    <h2 style="display:none">${title}</h2>
    <p>${topEn}</p>
  `;
  const handleCopied = () => {
    toast(
      <div className="flex items-center gap-2">
        {" "}
        <RiVerifiedBadgeLine className="text-xl "></RiVerifiedBadgeLine> Copied
      </div>,
      {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,

        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      }
    );
  };
  const handleHotToast = () => {
    toast(
      <div className="flex items-center gap-2">
        {" "}
        <RiVerifiedBadgeLine className="text-xl "></RiVerifiedBadgeLine> Coming
        Soon In-Sha-Allah
      </div>,
      {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,

        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      }
    );
  };

  const [clipboard, setClipboard] = useState(false);

  return (
    <div className="flex items-center justify-between mt-10">
      <div className="">
        <Image
          src={`https://duaruqyah.com/assets/others/audiobtn.svg`}
          width={40}
          height={40}
          alt="dua"
        ></Image>
      </div>

      <div className="relative flex items-center gap-10 iconDiv ">
        <div onClick={handleCopied}>
          <CopyToClipboard
            text={`${title}\n\n${topEn}\n\n${dua_arabic}\n\n${transliteration_en}\n\n${translation_en}\n\n${refference}`}
            onCopy={() => setClipboard(true)}
          >
            <div className="copyContainer">
              <p className="copy bottom-9 -left-3 absolute hidden bg-[#3D454E] text-sm rounded-lg  text-white px-2 py-1 ">
                Copy
              </p>
              <Image
                className="cursor-pointer img-1"
                src={`https://duaruqyah.com/assets/others/copy.svg`}
                width={23}
                height={23}
                alt="dua"
              ></Image>
            </div>
          </CopyToClipboard>
        </div>

        <div className="bookmarkContainer">
          <p className="   Bookmark bottom-9 left-8 absolute hidden bg-[#3D454E] text-sm rounded-lg  text-white px-2 py-1 ">
            Bookmark
          </p>
          <Image
            src={`https://duaruqyah.com/assets/others/bookmark.svg`}
            width={23}
            height={23}
            alt="dua"
          ></Image>
        </div>
        <div
          onClick={handleHotToast}
          className="cursor-pointer memorizeContainer"
        >
          <p className="memorize bottom-9 left-[35%] absolute hidden bg-[#3D454E] text-sm rounded-lg  text-white px-2 py-1 ">
            Memorize
          </p>
          <Image
            src={`https://duaruqyah.com/assets/others/plan.svg`}
            width={23}
            height={23}
            alt="dua"
          ></Image>
        </div>

        <div onClick={handleHotToast} className="cursor-pointer shareContainer">
          <p className="share bottom-9 right-12 absolute hidden bg-[#3D454E] text-sm rounded-lg  text-white px-2 py-1 ">
            Share
          </p>
          <Image
            src={`https://duaruqyah.com/assets/others/share.svg`}
            width={23}
            height={23}
            alt="dua"
          ></Image>
        </div>
        <div
          onClick={handleHotToast}
          className="cursor-pointer reportContainer"
        >
          <p className="report bottom-9 -right-4 absolute hidden bg-[#3D454E] text-sm rounded-lg  text-white px-2 py-1">
            Report
          </p>
          <Image
            src={`https://duaruqyah.com/assets/others/report.svg`}
            width={23}
            height={23}
            alt="dua"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default IconList;
