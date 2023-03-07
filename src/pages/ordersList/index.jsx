import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import { instance } from "../../libs/axiosInstance";

import { FaEdit } from "react-icons/fa";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const orderGetter = () => {
    instance
      .get("/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(orderGetter, []);
  const productEditClickHandler = () => {
    instance.put();
  };
  return (
    <div className="flex flex-col items-center my-16 gap-8">
      <p>مدیریت سفارش ها:</p>
      <table className=" w-4/5 mx-auto  border border-secondary rounded-lg text-center ">
        <thead className="w-full">
          <tr className="w-full bg-tertiary text-white h-12">
            <td className="w-1/6">نام کاربر</td>
            <td className="w-1/6">مجموع مبلغ</td>
            <td className="w-2/6">زمان ثبت سفارش</td>
            <td className="w-1/6"></td>
            <td className="w-1/6"> تغییر وضعیت تحویل</td>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, index) => {
            return (
              <tr
                className={index % 2 === 0 ? "bg-backgrey h-9" : "h-9"}
                key={item.id}
              >
                <td className="border-l border-tertiary">{item.lastname}</td>
                <td className="border-l border-tertiary">{item.prices}</td>
                <td className="border-l border-tertiary">{item.createdAt}</td>
                <td className="border-l border-tertiary">
                  {!item.delivered ? "بررسی" : "تحویل شده"}
                </td>
                <td className="flex text-center justify-center items-center ">
                  <button onClick={productEditClickHandler}>
                    <FaEdit />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
