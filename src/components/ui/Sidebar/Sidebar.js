import Image from "next/image";

const Sidebar = () => {
  const url = [
    { img: "https://duaruqyah.com/assets/nav/home.svg", id: 1 },
    { img: "https://duaruqyah.com/assets/nav/alldua.svg", id: 2 },
    { img: "https://duaruqyah.com/assets/nav/memorize.svg", id: 3 },
    { img: "https://duaruqyah.com/assets/nav/bookmark.svg", id: 4 },
    { img: "https://duaruqyah.com/assets/nav/ruqyah.svg", id: 5 },
    { img: "https://duaruqyah.com/assets/nav/dua-info.svg", id: 6 },
    { img: "https://duaruqyah.com/assets/nav/books.svg", id: 7 },
  ];

  return (
    <div className="bg-[#ffffff] px-6 pt-8 pb-36 max-w-max rounded-3xl">
      <div>
        <Image
          src={`https://duaruqyah.com/assets/dua-logo.svg`}
          width={51.5}
          height={51.5}
          alt="dua"
        ></Image>
      </div>

      <div className="my-24">
        {url.map((item) => (
          <div
            key={item.id}
            className="my-6 bg-[#E8F0F5] flex justify-center items-center max-w-max mx-auto p-2 rounded-full cursor-pointer hover:scale-105"
          >
            {" "}
            <Image src={item.img} width={20} height={20} alt="dua"></Image>{" "}
          </div>
        ))}
      </div>

      <div className="">
        <Image
          src={`https://duaruqyah.com/assets/dua-logo.svg`}
          width={50}
          height={50}
          alt="dua"
        ></Image>
      </div>
    </div>
  );
};

export default Sidebar;
