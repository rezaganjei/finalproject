import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { instance } from "../../libs/axiosInstance";
import {
  minus,
  plus,
  remove,
} from "../../redux/reducers/checkoutCart/checkoutCart";
import { add } from "../../redux/reducers/ordersHandler/ordersHandler";

const Cart = () => {
  const dispatch = useDispatch();
  const checkoutCartData = useSelector((state) => state.checkoutCart.cart);
  const [productData, setProductData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const productDataGetter = () => {
    instance
      .get(`/products`)
      .then((res) => {
        const newProductList = checkoutCartData.map((item) => {
          const fetchedData = res.data.filter(
            (i) => i.id === item.productId
          )[0];

          return {
            ...fetchedData,
            count: item.count,
          };
        });

        setProductData(newProductList);
        setTotalPrice(
          productData
            .map((item) => +item.price * +item.count)
            .reduce((a, b) => a + b, 0)
        );
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    productDataGetter();
  }, [checkoutCartData]);

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
            {productData.map((item) => {
              return (
                <>
                  <tr
                    className="text-center border-b-2 border-backgrey"
                    key={item.id}
                  >
                    <td className="flex items-center justify-center">
                      <div className="w-[100px] ">
                        <img src={`http://localhost:3002${item.image}`} />
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>
                      <Button
                        className="bg-secondary text-white rounded px-1 mx-1 w-5"
                        onClick={() => {
                          dispatch(plus({ id: +item.id }));
                        }}
                      >
                        +
                      </Button>
                      {(+item.count).toLocaleString("fa-IR")}
                      <Button
                        className="bg-secondary text-white rounded px-1 mx-1 w-5"
                        onClick={() => {
                          dispatch(minus({ id: +item.id }));
                        }}
                      >
                        -
                      </Button>
                    </td>
                    <td>{(+item.price).toLocaleString("fa-IR")}</td>
                    <td>
                      {(+item.count * +item.price).toLocaleString("fa-IR")}
                    </td>
                    <td>
                      <button
                        className="text-center p-1"
                        onClick={() => {
                          dispatch(remove({ id: +item.id }));
                        }}
                      >
                        <RiDeleteBin6Line className="text-center mx-auto text-primary" />
                      </button>
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
                <span>
                  {productData
                    .map((item) => +item.price * +item.count)
                    .reduce((a, b) => a + b, 0)
                    .toLocaleString("fa-IR")}
                </span>
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
