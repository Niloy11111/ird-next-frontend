const getSubCategories = async () => {
  const res = await fetch("https://ird-backend.vercel.app/subcategories");

  return res.json();
};

export default getSubCategories;
