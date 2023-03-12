import React from "react";
import Button from "../../components/button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const dummyData = [
  {
    name: "reza",
    image: "./images/products/1.jpg",
    price: 150000,
    count: 5,
  },
  {
    name: "reza2",
    image: "./images/products/2.jpg",
    price: 150000,
    count: 5,
  },
  {
    name: "reza3",
    image: "./images/products/3.jpg",
    price: 150000,
    count: 3,
  },
];
const Cart = () => {
  return (
    <div className="px-[20px] sm:px-[100px] md:px-[150px] mx-auto my-[60px] min-w-min flex flex-col">
      <div className="flex items-center  flex-col md:flex-row ">
        <div>
          <div className="rounded-[50%] bg-secondary w-[100px] h-[100px] text-white text-2xl justify-center flex items-center">
            ۱
          </div>
          <p className="text-primary whitespace-nowrap">سبد خرید شما</p>
        </div>
        <div className="w-full h-[14px] bg-backgrey border-y-2 border-textgrey mb-5 mx-2"></div>
        <div>
          <div className="rounded-[50%] border-2 border-backgrey w-[100px] h-[100px] justify-center flex items-center text-2xl">
            ۲
          </div>
          <p className="whitespace-nowrap text-textgrey">مشخصات ارسال</p>
        </div>
        <div className="w-full h-[14px] bg-backgrey border-y-2 border-textgrey mb-5 mx-2"></div>
        <div>
          <div className="rounded-[50%] border-2 border-backgrey w-[100px] h-[100px] justify-center flex items-center text-2xl">
            ۳
          </div>
          <p className="whitespace-nowrap text-textgrey">فاکتور نهایی</p>
        </div>
      </div>
      <div className="  border-2 border-textgrey rounded-[10px]  mt-[40px]">
        <table className="w-full">
          <thead className="h-[45px]">
            <tr className="bg-backgrey text-primary  text-center border-b-2 border-textgrey">
              <td>عکس محصول</td>
              <td>عنوان و ویژگی انتخاب شده</td>
              <td>انتخاب تعداد</td>
              <td>قیمت واحد</td>
              <td>قیمت نهایی</td>
              <td>حذف</td>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((item) => {
              return (
                <>
                  <tr className="text-center border-b-2 border-backgrey">
                    <td className="flex items-center justify-center">
                      <div className="w-[100px] ">
                        <img src={item.image} />
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.count}</td>
                    <td>{item.price}</td>
                    <td>{item.count * item.price}</td>
                    <td>
                      <RiDeleteBin6Line className="text-center mx-auto text-primary" />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>

              <td className="md:p-[15px]">
                <p>قیمت کل محصولات :</p>
              </td>
              <td>
                <span>450000</span>
                <span> </span>تومان
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <Link to="/userinfo" className="self-end">
        <Button className="mt-[15px] mb-[100px]">ورود و ثبت سفارش</Button>
      </Link>
    </div>
  );
};

export default Cart;
