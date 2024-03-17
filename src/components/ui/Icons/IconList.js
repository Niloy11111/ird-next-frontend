"use client";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { Bounce, toast } from "react-toastify";
const IconList = ({
  title,
  topEn,
  refference,
  dua_arabic,
  transliteration_en,
  translation_en,
  audio,
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

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [activeCircle, setActiveCircle] = useState(null);
  const audioRef = useRef(new Audio(audio));
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const toggleAudio = () => {
    const audioElement = audioRef.current;
    if (audioPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
      audioElement.addEventListener("timeupdate", () => {
        const currentTime = audioElement.currentTime;
        const duration = audioElement.duration;
        const progressPercent = (currentTime / duration) * 100;
        setProgress(progressPercent);
        setCurrentTime(currentTime);
        setDuration(duration);
      });
    }
    setAudioPlaying(!audioPlaying);
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    const handleAudioEnd = () => {
      setAudioPlaying(false);
      setProgress(0);
      setCurrentTime(0);
      setDuration(0);
    };
    audioElement.addEventListener("ended", handleAudioEnd);
    return () => {
      audioElement.removeEventListener("ended", handleAudioEnd);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
    return formattedTime;
  };

  return (
    <div className="flex items-center justify-between mt-10">
      {audio === "null" ? (
        <div></div>
      ) : (
        <div onClick={toggleAudio} className="">
          {audioPlaying ? (
            <div className="flex gap-5 items-center">
              <Image
                src={`https://duaruqyah.com/assets/others/pause.svg`}
                width={40}
                height={40}
                alt="dua"
              />

              <div className="bg-[#1FA45B] h-[6px] rounded-lg w-[100px] flex items-center relative">
                <div
                  className="bg-[#1FA45B] h-full rounded-full absolute"
                  style={{ width: `${progress}%` }}
                ></div>
                <button
                  className="bg-[#1FA45B] h-[13px] w-[13px] rounded-full absolute"
                  style={{ left: `${progress}%` }}
                ></button>
              </div>

              <div className="time-display">
                {formatTime(duration - currentTime)}
              </div>
            </div>
          ) : (
            <div>
              <Image
                src={`https://duaruqyah.com/assets/others/audiobtn.svg`}
                width={40}
                height={40}
                alt="dua"
              />
            </div>
          )}
        </div>
      )}

      <div className="relative  flex  items-center gap-10 iconDiv ">
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
        {/* onClick={openModal} */}
        <div onClick={openModal} className="bookmarkContainer cursor-pointer">
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
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-7 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-bold leading-6 text-gray-900"
                    >
                      Favorite
                    </Dialog.Title>
                    <div className="mt-2">
                      <h2 className="mb-3">Folder Name</h2>

                      <div
                        tabindex="0"
                        class="border w-full py-3 rounded-lg flex items-center justify-between px-5 focus:border-[#1FA45B] focus:outline-none"
                      >
                        <h2>Favorite</h2>
                        <IoIosArrowDown />
                      </div>

                      <div className="mt-4">
                        <span className="">Or</span>
                        <input
                          name="category"
                          id="field-id"
                          className="mt-2 w-full pl-4 text-sm  rounded-lg py-3.5 outline-none border border-[#EBEEF2] focus:border focus:border-[#1FA45B] "
                          type="text"
                          placeholder="Create New Bookmark Folder"
                        />
                      </div>
                    </div>

                    <div className="mt-5">
                      <h2>Change Folder Color</h2>

                      <div className="flex gap-3 justify-between mt-2">
                        <div
                          onClick={() => setActiveCircle("firstShow")}
                          className={`bg-[#1FA45B] w-[35px] h-[35px] rounded flex items-center justify-center cursor-pointer ${
                            activeCircle === "firstShow" ? "text-white" : ""
                          }`}
                        >
                          {activeCircle === "firstShow" && <FaCheckCircle />}
                        </div>
                        <div
                          onClick={() => setActiveCircle("secondShow")}
                          className={`bg-[#FFC107] w-[35px] h-[35px] rounded flex items-center justify-center cursor-pointer ${
                            activeCircle === "secondShow" ? "text-white" : ""
                          }`}
                        >
                          {activeCircle === "secondShow" && <FaCheckCircle />}
                        </div>
                        <div
                          onClick={() => setActiveCircle("thirdShow")}
                          className={`bg-[#9C27B0] w-[35px] h-[35px] rounded flex items-center justify-center cursor-pointer ${
                            activeCircle === "thirdShow" ? "text-white" : ""
                          }`}
                        >
                          {activeCircle === "thirdShow" && <FaCheckCircle />}
                        </div>
                        <div
                          onClick={() => setActiveCircle("fourthShow")}
                          className={`bg-[#2196F3] w-[35px] h-[35px] rounded flex items-center justify-center cursor-pointer ${
                            activeCircle === "fourthShow" ? "text-white" : ""
                          }`}
                        >
                          {activeCircle === "fourthShow" && <FaCheckCircle />}
                        </div>
                        <div
                          onClick={() => setActiveCircle("fifthShow")}
                          className={`bg-[#E91E63] w-[35px] h-[35px] rounded flex items-center justify-center cursor-pointer ${
                            activeCircle === "fifthShow" ? "text-white" : ""
                          }`}
                        >
                          {activeCircle === "fifthShow" && <FaCheckCircle />}
                        </div>
                        <div
                          onClick={() => setActiveCircle("sixthShow")}
                          className={`bg-[#3F51B5] w-[35px] h-[35px] rounded flex items-center justify-center cursor-pointer ${
                            activeCircle === "sixthShow" ? "text-white" : ""
                          }`}
                        >
                          {activeCircle === "sixthShow" && <FaCheckCircle />}
                        </div>
                        <div
                          onClick={() => setActiveCircle("seventhShow")}
                          className={`bg-[#00BCD4] w-[35px] h-[35px] rounded flex items-center justify-center cursor-pointer ${
                            activeCircle === "seventhShow" ? "text-white" : ""
                          }`}
                        >
                          {activeCircle === "seventhShow" && <FaCheckCircle />}
                        </div>
                        <div
                          onClick={() => setActiveCircle("eighthShow")}
                          className={`bg-[#8BC34A] w-[35px] h-[35px] rounded flex items-center justify-center cursor-pointer ${
                            activeCircle === "eighthShow" ? "text-white" : ""
                          }`}
                        >
                          {activeCircle === "eighthShow" && <FaCheckCircle />}
                        </div>
                      </div>
                    </div>

                    <div className="flex mt-5 justify-center gap-5">
                      <button
                        onClick={closeModal}
                        className="bg-[#EDEDED] px-12 py-2 rounded"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={closeModal}
                        className="bg-[#1FA45B] px-14 py-2 rounded text-white"
                      >
                        Save
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
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
