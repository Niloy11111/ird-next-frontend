import Settings from "@/components/ui/Settings";

const page = () => {
  return (
    <div className="mt-5 ">
      <h2 className="text-2xl hidden md:block"> Settings</h2>
      <div className="md:hidden block  bg-white h-[620px] pt-1 rounded-xl">
        <Settings></Settings>
      </div>
    </div>
  );
};

export default page;
