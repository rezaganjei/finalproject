import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import { instance } from "../../libs/axiosInstance";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const productsGetter = () => {
    instance
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(productsGetter, []);
  return (
    <div className="flex flex-col items-center my-16 gap-8">
      <p>مدیریت محصولات:</p>

      <table className=" w-4/5 mx-auto  border border-secondary rounded-lg text-center ">
        <thead className="w-full">
          <tr className="w-full bg-tertiary text-white h-12">
            <td className="w-2/3">نام محصول</td>
            <td>قیمت</td>
            <td>موجودی</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <tr
                className={index % 2 === 0 ? "bg-backgrey h-9" : "h-9"}
                key={item.id}
              >
                <td className="border-l border-tertiary">{item.name}</td>
                <td className="border-l border-tertiary">
                  {item.price.toLocaleString()}
                </td>
                <td>{item.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button className=" w-[300px]">افزودن کالا</Button>
    </div>
  );
};

export default ProductsList;
