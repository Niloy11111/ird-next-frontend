const getDuasByCat = async () => {
  const res = await fetch("https://ird-backend.vercel.app/duas");
  return res.json();
};

export default getDuasByCat;
