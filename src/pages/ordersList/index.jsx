import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import { instance } from "../../libs/axiosInstance";

import { FaEdit } from "react-icons/fa";
import { useSelector } from "react-redux";

const EditMenu = ({
  isOpen,
  setIsOpen,
  id,
  productData,
  setOrders,
  orders,
}) => {
  const accessToken = useSelector(
    (state) => state.adminAuth.adminAuth.accessToken
  );
  const productEditClickHandler = () => {
    instance
      .put(
        `/orders/${id}`,
        {
          ...productData,

          delivered: productData.delivered === "false" ? "true" : "false",
        },
        {
          headers: {
            token: accessToken,
          },
        }
      )
      .then((res) => {
        let temp = orders;

        let finder = temp.findIndex((i) => i.id === id);
        temp[finder] = res.data;
        setOrders(temp);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {isOpen && (
        <div
          onClick={(e) => {
            setIsOpen(false);
          }}
          className="min-h-[100vh] bg-black bg-opacity-60 w-full fixed top-0 right-0 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[60%] h-[50vh] sm:h-[40vh] md:h-[30vh] md:w-[45%]  mt-36 m-auto rounded-xl bg-backgrey flex flex-col py-8 justify-center md:gap-4"
          >
            <p className="text-center  text-[32px] font-extrabold">
              تغییر وضعیت تحویل
            </p>
            <p className="text-center">ID:{id}</p>
            <Button
              className="mx-2 md:mx-20"
              onClick={function () {
                setIsOpen(false);
                productEditClickHandler();
              }}
            >
              تایید
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [isEditMenuOpen, setIsEditMenuOpen] = useState(false);
  const [productsData, setProductsData] = useState({});
  const [modalID, setModalId] = useState(null);
  const orderGetter = () => {
    instance
      .get("/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(orderGetter, []);

  const editClickHandler = () => {
    setIsEditMenuOpen(!isEditMenuOpen);
  };
  return (
    <div className="flex flex-col items-center my-16 gap-8">
      <EditMenu
        isOpen={isEditMenuOpen}
        setIsOpen={setIsEditMenuOpen}
        id={modalID}
        productData={productsData}
        setOrders={setOrders}
        orders={orders}
      />
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
                <td className="border-l border-tertiary">
                  {item.prices?.toLocaleString("fa-IR")}
                </td>

                <td className="border-l border-tertiary">
                  {new Intl.DateTimeFormat("fa-IR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  }).format(item.createdAt)}
                </td>
                <td className="border-l border-tertiary">
                  {item.delivered === "false" ? "بررسی" : "تحویل شده"}
                </td>
                <td className="flex text-center justify-center items-center ">
                  <button
                    className="p-2 text-primary"
                    onClick={function (event) {
                      editClickHandler();
                      setModalId(item.id);
                      setProductsData(item);
                    }}
                  >
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
