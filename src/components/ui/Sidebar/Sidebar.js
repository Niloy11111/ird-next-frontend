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
    <div className="bg-[#ffffff] px-6 pt-8 pb-24 max-w-max rounded-3xl">
      <div>
        <Image
          src={`https://duaruqyah.com/assets/dua-logo.svg`}
          width={50}
          height={50}
          alt="dua"
        ></Image>
      </div>

      <div>
        {url.map((item) => (
          <div
            key={item.id}
            className="my-9 bg-[#E8F0F5] flex justify-center items-center max-w-max mx-auto p-3 rounded-full cursor-pointer hover:scale-105"
          >
            {" "}
            <Image src={item.img} width={20} height={20} alt="dua"></Image>{" "}
          </div>
        ))}
      </div>

      <div className="mt-20">
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
