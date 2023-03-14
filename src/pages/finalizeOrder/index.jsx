import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { instance } from "../../libs/axiosInstance";
import { clear } from "../../redux/reducers/checkoutCart/checkoutCart";

const FinalizeOrder = () => {
  const dispatch = useDispatch();
  const paymentUserInfoData = useSelector(
    (state) => state.ordersHandler.orders
  );
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const submitHandler = () => {
    instance
      .post("/orders", paymentUserInfoData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    dispatch(clear());
    navigate("/paymentsuccess");
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
          <div className="rounded-[50%]  w-[100px] border-2 border-backgrey h-[100px] justify-center flex items-center text-2xl">
            ۲
          </div>
          <p className="whitespace-nowrap  text-textgrey">مشخصات ارسال</p>
        </div>
        <div className="w-full h-[14px] bg-backgrey border-y-2 border-textgrey mb-5 mx-2"></div>
        <div>
          <div className="rounded-[50%]   bg-secondary text-white w-[100px] h-[100px] justify-center flex items-center text-2xl">
            ۳
          </div>
          <p className="whitespace-nowrap  text-primary">فاکتور نهایی</p>
        </div>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col w-4/5 sm:w-3/5 mx-auto md:w-1/2 lg:w-[460px] border-backgrey border-2 p-[31px] gap-[22px] mt-[110px] rounded-[10px] shadow-md"
        >
          <label htmlFor="cardnumber">شماره کارت خود را وارد کنید</label>
          <input
            className="h-[43px] w-4/5 lg:w-[396px] rounded-[10px] border-2 border-backgrey pr-4"
            {...register("cardnumber", {
              required: "این فیلد اجباری می باشد",
              minLength: {
                value: 16,
                message: "شماره کارت صحیح نمی باشد",
              },
              maxLength: {
                value: 16,
                message: "شماره کارت صحیح نمی باشد",
              },
              pattern: {
                value: /^[0-9]/,
                message: "فقط اعداد وارد کنید",
              },
            })}
            type="number"
            placeholder="شماره کارت خود را وارد کنید..."
          />
          {errors.cardnumber && (
            <p className="text-xs text-primary">{errors.cardnumber.message}</p>
          )}
          <label htmlFor="cvv2">CVV2 خود را وارد کنید</label>
          <input
            className="h-[43px] w-3/5 lg:w-[150px] rounded-[10px] border-2 border-backgrey pr-4"
            {...register("cvv2", {
              required: "این فیلد اجباری می باشد",
              minLength: {
                value: 3,
                message: "CVV2 صحیح نمی باشد",
              },
              maxLength: {
                value: 4,
                message: "CVV2 صحیح نمی باشد",
              },
            })}
            placeholder="CVV2 خود را وارد کنید..."
            type="number"
          />
          {errors.cvv2 && (
            <p className="text-xs text-primary">{errors.cvv2.message}</p>
          )}
          <label htmlFor="expdate">تاریخ انقضا</label>
          <div className="flex gap-8">
            <div className="flex flex-col">
              <input
                className="h-[43px] w-3/5 lg:w-[100px] rounded-[10px] border-2 border-backgrey pr-4"
                {...register("expdate", {
                  required: "این فیلد اجباری می باشد",
                  minLength: {
                    value: 2,
                    message: "تاریخ انقضا صحیح نمی باشد",
                  },
                  maxLength: {
                    value: 2,
                    message: "تاریخ انقضا صحیح نمی باشد",
                  },
                })}
                placeholder="روز..."
                type="number"
              />
              {errors.expmonth && (
                <p className="text-xs text-primary">
                  {errors.expmonth.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                className="h-[43px] w-3/5 lg:w-[100px] rounded-[10px] border-2 border-backgrey pr-4"
                {...register("expmonth", {
                  required: "این فیلد اجباری می باشد",
                  minLength: {
                    value: 2,
                    message: "تاریخ انقضا صحیح نمی باشد",
                  },
                  maxLength: {
                    value: 2,
                    message: "تاریخ انقضا صحیح نمی باشد",
                  },
                })}
                placeholder="ماه..."
                type="number"
              />
            </div>
          </div>

          {errors.expdate && (
            <p className="text-xs text-primary">{errors.expdate.message}</p>
          )}
          <label htmlFor="pass">رمز خود را وارد کنید</label>
          <input
            className="h-[43px] w-3/5 lg:w-[200px] rounded-[10px] border-2 border-backgrey pr-4"
            {...register("pass", {
              required: "این فیلد اجباری می باشد",
              minLength: {
                value: 5,
                message: "رمز صحیح نمی باشد",
              },
              maxLength: {
                value: 5,
                message: "رمز صحیح نمی باشد",
              },
            })}
            placeholder="رمز خود را وارد کنید..."
            type="password"
          />
          {errors.pass && (
            <p className="text-xs text-primary">{errors.pass.message}</p>
          )}
          <div className="flex w-full gap-2">
            <Button type="submit" className="w-3/4">
              پرداخت
            </Button>
            <Button
              className="w-1/4 bg-secondary"
              onClick={() => {
                navigate("/paymentunsuccess");
              }}
            >
              لغو
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FinalizeOrder;
