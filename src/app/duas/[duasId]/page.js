import IconList from "@/components/ui/Icons/IconList";
import getDuasByCat from "@/utils/getDuasByCat";
import getSubCategories from "@/utils/getSubCategories";
import Image from "next/image";

const DynamicDua = async ({ params, searchParams }) => {
  const data = await getDuasByCat();

  console.log(params);

  // const knowParams = useSearchParams();
  // const subcat = knowParams.get("subcat");

  console.log(searchParams);
  const subData = await getSubCategories();

  const filteredData = data.filter(
    (item) => item.cat_id === parseFloat(searchParams.cat)
  );

  const makeData = () => {
    if (searchParams.cat && !searchParams.subcat) {
      return data.filter(
        (item) => item.cat_id === parseFloat(searchParams.cat)
      );
    } else if (searchParams.cat && searchParams.subcat) {
      return data.filter(
        (item) => item.subcat_id === parseFloat(searchParams.subcat)
      );
    }
  };

  const test = data.filter(
    (item) =>
      item.cat_id === parseFloat(searchParams.cat) &&
      item.subcat_id === parseFloat(searchParams.subcat)
  );

  console.log(makeData());

  const relevantSubData = subData.filter(
    (item) => item.cat_id === parseFloat(searchParams.cat)
  );
  console.log(`subcat=${searchParams.subcat}`);
  const organizedData = {};
  filteredData.forEach((item) => {
    if (!organizedData[item.subcat_id]) {
      organizedData[item.subcat_id] = [];
    }
    organizedData[item.subcat_id].push(item);
  });

  // console.log(relevantSubData);

  return (
    <div>
      <div>
        <div>
          {relevantSubData.map((subcategory) => {
            return (
              <div
                id={`subcat_${subcategory.subcat_id}`} // Changed from `subcat=` to `subcat_`
                key={subcategory.subcat_id}
              >
                <div className="bg-[#ffffff]  p-4 rounded-lg mb-5">
                  <h2 className="">
                    <span className="text-[#1FA45B]">Section: </span>
                    {subcategory.subcat_name_en}
                  </h2>
                </div>
                <div className=" mb-5 ">
                  {organizedData[subcategory.subcat_id] &&
                    organizedData[subcategory.subcat_id].map((item, index) => (
                      <div
                        id={`dua_${item.dua_id}`}
                        key={item.id}
                        className="mb-3 bg-[#ffffff] p-5 rounded-lg "
                      >
                        <div className="flex items-center gap-2">
                          <Image
                            src={`https://duaruqyah.com/assets/duacard.svg`}
                            width={34}
                            height={34}
                            alt="dua"
                          ></Image>
                          <p className="text-[#1FA45B]">
                            {index + 1}. {item.dua_name_en}
                          </p>
                        </div>
                        <p className="mt-8 pb-6 text-sm ">{item.top_en}</p>

                        {item.dua_arabic ? (
                          <h2 className="text-3xl text-right text-[#000000] mb-10">
                            {item.dua_arabic}
                          </h2>
                        ) : (
                          ""
                        )}

                        {item.transliteration_en ? (
                          <p className="mb-10">
                            {" "}
                            <span className="text-[#000000] ">
                              Transliteration:
                            </span>{" "}
                            <span className="text-sm italic">
                              {" "}
                              {item.transliteration_en}
                            </span>
                          </p>
                        ) : (
                          ""
                        )}

                        {item.translation_en ? (
                          <p className="mb-10">
                            {" "}
                            <span className="text-[#000000] ">
                              Translation:
                            </span>{" "}
                            <span className="text-sm ">
                              {" "}
                              {item.translation_en}
                            </span>
                          </p>
                        ) : (
                          ""
                        )}

                        <div className="text-sm ">
                          <p className="text-[#1FA45B]">Reference:</p>
                          <p>{item.refference_en}</p>
                        </div>

                        <IconList
                          title={`${index + 1}. ${item.dua_name_en}`}
                          topEn={`${item.top_en}`}
                          refference={item.refference_en}
                          dua_arabic={item.dua_arabic}
                          transliteration_en={item.transliteration_en}
                          translation_en={item.translation_en}
                        ></IconList>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DynamicDua;
