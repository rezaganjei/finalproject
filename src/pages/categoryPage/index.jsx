import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/productCard";
import { instance } from "../../libs/axiosInstance";

const CategoryPage = ({ cat }) => {
  const [products, setProducts] = useState([]);

  const [sortingValue, setSortingValue] = useState("cheap");
  const productsGetter = () => {
    instance
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(productsGetter, []);
  const sortProducts = (productList) => {
    if (sortingValue === "cheap") {
      let temp = productList;
      return temp.sort((a, b) => a.price - b.price);
    }
    if (sortingValue === "expensive") {
      let temp = productList;
      return temp.sort((a, b) => b.price - a.price);
    }
    if (sortingValue === "new") {
      let temp = productList;
      return temp.sort((a, b) => b.createdAt - a.createdAt);
    }
    return productList;
  };

  const selectedCategoryProducts = products.filter(
    (item) => item.brand === cat
  );

  return (
    <>
      <h1 className="text-center p-16">{cat}</h1>
      <div className="flex gap-2 border-b-2 border-backgrey pb-[34px] mb-[20px] items-center">
        <p>مرتب سازی بر اساس:</p>
        <select
          onChange={(e) => {
            setSortingValue(e.target.value);
          }}
          className="border-2 border-backgrey rounded-[10px] p-[12px] pl-[28px] text-textgrey"
        >
          <option value="cheap">ارزانترین</option>
          <option value="expensive">گرانترین</option>
          <option value="new">جدیدترین</option>
        </select>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-center flex-wrap">
        {sortProducts(selectedCategoryProducts).map((item) => {
          return (
            <div className="w-[200px] lg:w-[19%]" key={item.id}>
              <Link to={`/products/${item.id}`}>
                <ProductCard
                  dataObject={item}
                  className="border-2 border-backgrey m-2 rounded-[10px] p-2"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategoryPage;
