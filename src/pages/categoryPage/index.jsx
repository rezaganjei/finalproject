import React, { useEffect, useState } from "react";
import ProductCard from "../../components/productCard";
import { instance } from "../../libs/axiosInstance";

const CategoryPage = ({ cat }) => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const productsGetter = () => {
    instance
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(productsGetter, []);

  const selectedCategoryProducts = products.filter(
    (item) => item.brand === cat
  );

  return (
    <>
      <h1 className="text-center p-16">{cat}</h1>
      <div className="flex gap-2 border-b-2 border-backgrey pb-[34px] mb-[20px] items-center">
        <p>مرتب سازی بر اساس:</p>
        <select className="border-2 border-backgrey rounded-[10px] p-[12px] pl-[28px] text-textgrey">
          <option>ارزانترین</option>
          <option>گرانترین</option>
          <option>جدیدترین</option>
        </select>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-center flex-wrap">
        {selectedCategoryProducts.map((item) => {
          return (
            <div className="w-[200px] lg:w-[19%]" key={item.id}>
              <ProductCard
                dataObject={item}
                className="border-2 border-backgrey m-2 rounded-[10px] p-2"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategoryPage;
