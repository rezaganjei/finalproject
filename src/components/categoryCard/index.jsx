import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { instance } from "../../libs/axiosInstance";
import ProductCard from "../productCard";
const dummydata = [
  {
    name: "aja",
    brand: "test",
    price: 1500000,
    image: "./images/products/1.jpg",
    id: 1,
  },
  {
    name: "aja2",
    brand: "دستبند",
    price: 1500000,
    image: "./images/products/1.jpg",
    id: 2,
  },
  {
    name: "aja3",
    brand: "دستبند",
    price: 1500000,
    image: "./images/products/1.jpg",
    id: 3,
  },
  {
    name: "aja3",
    brand: "دستبند",
    price: 1500000,
    image: "./images/products/1.jpg",
    id: 4,
  },
  {
    name: "aja3",
    brand: "دستبند",
    price: 1500000,
    image: "./images/products/1.jpg",
    id: 5,
  },
  {
    name: "شسیشسیشسیشسیشیشی",
    brand: "گردنبند",
    price: 1500000,
    image: "./images/products/1.jpg",
    id: 6,
  },
];
const CategoryCard = ({ category, path }) => {
  const [productsData, setProductsData] = useState([]);
  const productsDataGetter = () => {
    instance
      .get("/products")
      .then((res) => setProductsData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(productsDataGetter, []);
  return (
    <div className="border border-backgrey mx-[15px] rounded-[10px] mb-[40px]">
      <h1 className="font-bold text-[16px] mt-[20px] border-b-2 mb-[20px] pr-4 pb-1">
        {category}
      </h1>
      <Link to={path}>
        <div className="flex flex-col items-center md:flex-row md:justify-center flex-wrap ">
          {productsData.map((item) => {
            if (item.brand === category) {
              return (
                <div className="w-[200px] md:w-[19%]" key={item.id}>
                  <ProductCard dataObject={item} />
                </div>
              );
            }
          })}
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
