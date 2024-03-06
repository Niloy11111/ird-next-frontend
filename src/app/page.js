"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Homepage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired URL when the component mounts
    router.push("/duas/dua's-importance?cat=1");
  }, [router]); // Empty dependency array ensures this effect runs only once on mount

  return <div></div>;
};

export default Homepage;
