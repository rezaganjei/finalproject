import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { instance } from "../../libs/axiosInstance";

const UserPanel = () => {
  const navigate = useNavigate();
  const paymentUserInfoData = useSelector(
    (state) => state.ordersHandler.orders
  );
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const userInfoSubmitHandler = () => {
    console.log("done");
    instance.post("/orders", paymentUserInfoData);
    navigate("/finalizeorder");
  };

  return (
    <div className="px-[20px] sm:px-[100px] md:px-[150px] mx-auto my-[60px] min-w-min">
      {console.log(paymentUserInfoData)}
      <div className="flex flex-col md:flex-row items-center">
        <div>
          <div className="rounded-[50%] w-[100px] h-[100px] border-2 border-backgrey text-2xl justify-center flex items-center">
            ۱
          </div>
          <p className=" whitespace-nowrap text-textgrey">سبد خرید شما</p>
        </div>
        <div className="w-full h-[14px] bg-backgrey border-y-2 border-textgrey mb-5 mx-2"></div>
        <div>
          <div className="rounded-[50%]  bg-secondary text-white w-[100px] h-[100px] justify-center flex items-center text-2xl">
            ۲
          </div>
          <p className="whitespace-nowrap text-primary">مشخصات ارسال</p>
        </div>
        <div className="w-full h-[14px] bg-backgrey border-y-2 border-textgrey mb-5 mx-2"></div>
        <div>
          <div className="rounded-[50%] border-2 border-backgrey w-[100px] h-[100px] justify-center flex items-center text-2xl">
            ۳
          </div>
          <p className="whitespace-nowrap text-textgrey">فاکتور نهایی</p>
        </div>
      </div>
      <div className="mt-[40px] flex flex-col">
        <p className="border-b-2 border-backgrey pb-[25px] ">
          <span className="border-b-2 border-black pb-[25px]">
            مشخصات ارسال
          </span>
        </p>
        <div className="flex items-center py-[40px] gap-[20px]">
          <input type="radio" name="address" className="bg-primary" checked />
          <div className="flex flex-col w-full bg-backgrey p-[11px] rounded-[10px]">
            <p>
              گیرنده:
              <span>
                {paymentUserInfoData.name},{paymentUserInfoData.lastname}
              </span>
            </p>
            <div className="flex flex-col md:flex-row gap-8 text-textgrey">
              <p>
                شماره تماس:
                <span>{paymentUserInfoData.phone}</span>
              </p>
              <p>
                کد پستی:<span>{paymentUserInfoData.zipcode}</span>
              </p>
            </div>
            <p className="text-textgrey">
              <span>{paymentUserInfoData.state},</span>
              <span>{paymentUserInfoData.city},</span>
              <span>{paymentUserInfoData.address}</span>
            </p>
          </div>
        </div>
        <p className="border-b-2 border-backgrey pb-[25px] ">
          <span className="border-b-2 border-black pb-[25px]">نوع ارسال</span>
        </p>
        <div className="flex items-center py-[40px] gap-[20px]">
          <input type="radio" name="post" className="bg-primary" checked />
          <p className="text-textgrey">ارسال با پست</p>
        </div>
        <p className="border-b-2 border-backgrey pb-[25px] ">
          <span className="border-b-2 border-black pb-[25px]">نوع پرداخت</span>
        </p>
        <div className="flex items-center py-[40px] gap-[20px]">
          <input type="radio" name="pay" className="bg-primary" checked />
          <p className="text-textgrey">آنلاین</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-[30px]">
          <div className="border-[1px] p-[30px] border-textgrey  w-full lg:w-1/2">
            <p>
              اگر مایل هستید از کد تخفیف خود استفاده کنید کافیست کد آن را وارد
              کرده و با انتخاب دکمه ثبت کد مبلغ آن از قیمت کل شما کسر میگردد.
            </p>
            <div className="relative border-[1px] border-textgrey  flex rounded-[30px] w-[270px] justify-between">
              <input
                type="text "
                className="active:border-none active:outline-none w-[140px] rounded-[30px] "
              />
              <Button size="small" className="w-[120px] text-[13px] px-0">
                ثبت کد تخفیف
              </Button>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-1/2  border-[1px]  border-textgrey ">
            <div className="flex justify-between h-full border-b-[1px] border-textgrey py-[11px]">
              <p>جمع کل سبد خرید</p>
              <p>
                250000 <span>تومان</span>
              </p>
            </div>
            <div className="flex justify-between h-full  border-b-[1px] border-textgrey py-[11px]">
              <p>هزینه ارسال (ارسال با پست)</p>
              <p>
                ۰<span>تومان</span>
              </p>
            </div>
            <div className="flex justify-between h-full  border-b-[1px] border-textgrey py-[11px]">
              <p>تخفیف</p>
              <p>
                ۰<span>تومان</span>
              </p>
            </div>
            <div className="bg-backgrey flex justify-between h-full py-[11px]">
              <p>جمع مبلغ قابل پرداخت</p>
              <p className="text-primary font-bold">
                {(+paymentUserInfoData.prices + 20000).toLocaleString("fa-IR")}
                <span>تومان</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-[32px] mb-[64px]">
        <Link to="/userinfo">
          <Button size="small">بازگشت</Button>
        </Link>

        <Button size="small" onClick={handleSubmit(userInfoSubmitHandler)}>
          ثبت سفارش
        </Button>
      </div>
    </div>
  );
};

export default UserPanel;
