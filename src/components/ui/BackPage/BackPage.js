"use client";
import { useRouter } from "next/navigation";
import { SlArrowLeft } from "react-icons/sl";
const BackPage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className="cursor-pointer" onClick={handleGoBack}>
      <SlArrowLeft></SlArrowLeft>
    </div>
  );
};

export default BackPage;
