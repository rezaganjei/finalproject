import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import { instance } from "../../libs/axiosInstance";
import { BiChevronLeft } from "react-icons/bi";
import InfoCardHolder from "../../components/infoCardHolder";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { minus, plus } from "../../redux/reducers/checkoutCart/checkoutCart";

const SingleProduct = ({}) => {
  const dispatch = useDispatch();
  const selectedProductData = useSelector((state) => state.checkoutCart);
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const [quantity, setQuantity] = useState();
  const productDataGetter = (id) => {
    instance
      .get(`/products/${id}`)
      .then((res) => {
        setProductData(res.data);
        setQuantity(res.data.quantity);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => productDataGetter(id), [id]);

  return (
    <>
      <div className="border-2 border-backgrey rounded-[10px] p-4 m-4">
        <div className="flex gap-8 pb-4 border-b-2 border-backgrey">
          <p className="flex items-center">
            فروشگاه اینترنتی فرجان گالری
            <BiChevronLeft />
          </p>
          <p className="flex items-center">
            {productData.brand}
            <BiChevronLeft />
          </p>
          <p>{productData.name}</p>
        </div>
        <div className="flex flex-col items-center md:flex-row justify-between py-4">
          <div className="w-full md:w-1/2 p-4">
            <img src={`http://localhost:3002${productData.image}`} />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <div className="flex justify-between border-b-2 border-backgrey">
              <div>
                <h3 className="text-[18px] font-bold">{productData.name}</h3>
                <p className="text-[14px]">دسته بندی:{productData.brand}</p>
              </div>
              <div>
                <Button>درخواست مشاوره تلفنی</Button>
              </div>
            </div>
            <div className="flex justify-between p-[16px] border-b-2 border-backgrey">
              <div>
                <p>رنگ:</p>
                <p>جنس:</p>

                <p>وزن:</p>
                <p>جنس بند:</p>
              </div>
              <div className="bg-textgrey p-[16px] rounded-[10px] flex flex-col gap-2">
                <p className="bg-backgrey p-[12px] rounded-[10px]">
                  تحویل سریع و ارزان
                </p>
                <p className="bg-backgrey p-[12px] rounded-[10px]">
                  پرداخت درب منزل
                </p>
                <p className="bg-backgrey p-[12px] rounded-[10px]">پشتیبانی</p>
                <p className="bg-backgrey p-[12px] rounded-[10px]">
                  ضمانت بازگشت کالا
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-primary p-8">
                <p className="text-[20px] font-bold">
                  {(+productData.price).toLocaleString("fa-IR")}
                  <span className="px-3 text-[14px] font-normal">
                    تومان
                  </span>{" "}
                </p>
              </div>
              <div>
                {selectedProductData.cart.find((item) => item.productId === +id)
                  ?.count ? (
                  <div className="flex items-center gap-8">
                    <Button
                      onClick={() => {
                        if (
                          quantity >
                          selectedProductData.cart.find(
                            (item) => item.productId === +id
                          ).count
                        ) {
                          dispatch(plus({ id: +id }));
                        }
                      }}
                    >
                      +
                    </Button>
                    <p>
                      {selectedProductData.cart
                        .find((item) => item.productId === +id)
                        .count.toLocaleString("fa-IR")}
                    </p>
                    <Button
                      onClick={() => {
                        dispatch(minus({ id: +id }));
                      }}
                    >
                      -
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => {
                      dispatch(plus({ id: +id }));
                    }}
                  >
                    اضافه به سبد خرید
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
