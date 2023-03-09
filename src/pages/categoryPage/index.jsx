import React, { useEffect, useState } from "react";
import ProductCard from "../../components/productCard";
import { instance } from "../../libs/axiosInstance";

const CategoryPage = ({ cat }) => {
  const [products, setProducts] = useState([]);
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
      <div className="flex flex-col items-center md:flex-row md:justify-center flex-wrap">
        {selectedCategoryProducts.map((item) => {
          return (
            <div className="w-[200px] md:w-[19%]" key={item.id}>
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
