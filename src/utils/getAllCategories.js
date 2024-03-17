"use client";
import { useEffect, useState } from "react";

export const UseAllCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://ird-backend.vercel.app/categories", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return categories;
};
