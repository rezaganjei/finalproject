import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";

const UserInfo = () => {
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const navigate = useNavigate();
  const userInfoSubmitHandler = () => {
    navigate("/userpanel");
  };

  return (
    <div className="px-[20px] sm:px-[100px] md:px-[150px] mx-auto my-[60px] min-w-min">
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
      <form
        className="mt-[40px] flex flex-col"
        onSubmit={handleSubmit(userInfoSubmitHandler)}
      >
        <p className="border-b-2 border-backgrey pb-[25px] ">
          <span className="border-b-2 border-black pb-[25px]">
            مشخصات ارسال
          </span>
        </p>
        <div className="mt-[56px] flex flex-col gap-[20px]">
          <div className="flex flex-col md:flex-row md:w-full  justify-between  gap-[30px]">
            <div className="flex flex-col w-full gap-[10px]">
              <label htmlFor="name">نام تحویل گیرنده</label>
              <input
                className="bg-backgrey h-[40px] rounded-[50px]"
                type="text"
                {...register("name", {
                  required: "این فیلد اجباری می باشد",
                  minLength: {
                    value: 3,
                    message: "حد اقل ۳ کاراکتر وارد کنید",
                  },
                })}
                id="name"
              />
              {errors.name && (
                <p className="text-xs text-primary">{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col w-full gap-[10px]">
              <label htmlFor="lastname">نام خانوادگی تحویل گیرنده</label>
              <input
                className="bg-backgrey h-[40px] rounded-[50px]"
                type="text"
                {...register("lastname", {
                  required: "این فیلد اجباری می باشد",
                  minLength: {
                    value: 3,
                    message: "حد اقل ۳ کاراکتر وارد کنید",
                  },
                })}
                id="lastname"
              />
              {errors.lastname && (
                <p className="text-xs text-primary">
                  {errors.lastname.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-full gap-[10px]">
              <label htmlFor="phone">شماره موبایل</label>
              <input
                className="bg-backgrey h-[40px] rounded-[50px]"
                type="text"
                {...register("phone", {
                  required: "این فیلد اجباری می باشد",
                  minLength: {
                    value: 3,
                    message: "حد اقل ۳ کاراکتر وارد کنید",
                  },
                  pattern: {
                    value:
                      /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/,
                    message: "فرمت صحیح وارد کنید",
                  },
                })}
                id="phone"
              />
              {errors.phone && (
                <p className="text-xs text-primary">{errors.phone.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:w-full  justify-between  gap-[30px]">
            <div className="flex flex-col w-full gap-[10px]">
              <label htmlFor="state">استان</label>
              <input
                className="bg-backgrey h-[40px] rounded-[50px]"
                type="text"
                {...register("state", {
                  required: "این فیلد اجباری می باشد",
                  minLength: {
                    value: 3,
                    message: "حد اقل ۳ کاراکتر وارد کنید",
                  },
                })}
                id="state"
              />
              {errors.state && (
                <p className="text-xs text-primary">{errors.state.message}</p>
              )}
            </div>
            <div className="flex flex-col w-full gap-[10px]">
              <label htmlFor="city">شهر</label>
              <input
                className="bg-backgrey h-[40px] rounded-[50px]"
                type="text"
                {...register("city", {
                  required: "این فیلد اجباری می باشد",
                  minLength: {
                    value: 2,
                    message: "حد اقل ۲ کاراکتر وارد کنید",
                  },
                })}
                id="city"
              />
              {errors.city && (
                <p className="text-xs text-primary">{errors.city.message}</p>
              )}
            </div>
            <div className="flex flex-col w-full gap-[10px]">
              <label htmlFor="zipcode">کد پستی</label>
              <input
                className="bg-backgrey h-[40px] rounded-[50px]"
                type="text"
                {...register("zipcode", {
                  required: "این فیلد اجباری می باشد",
                  minLength: {
                    value: 10,
                    message: "حد اقل ۱۰ کاراکتر وارد کنید",
                  },
                })}
                id="zipcode"
              />
              {errors.zipcode && (
                <p className="text-xs text-primary">{errors.zipcode.message}</p>
              )}
            </div>
          </div>
          <div>
            <div className="flex flex-col w-full md:w-2/3 gap-[10px]">
              <label htmlFor="address">نشانی گیرنده سفارش</label>
              <input
                className="bg-backgrey h-[40px] rounded-[50px]"
                type="text"
                {...register("address", {
                  required: "این فیلد اجباری می باشد",
                })}
                id="address"
              />
              {errors.address && (
                <p className="text-xs text-primary">{errors.address.message}</p>
              )}
            </div>
          </div>
          <div></div>
        </div>

        <Button type="submit" className="mt-[15px] mb-[100px] self-end">
          اضافه کردن آدرس
        </Button>
      </form>
      <Link to="/cart">
        <Button size="small">بازگشت</Button>
      </Link>
    </div>
  );
};

export default UserInfo;
