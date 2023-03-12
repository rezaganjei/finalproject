import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";

const PhoneRegistration = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const phoneRegisterSubmitHandler = () => {
    navigate("/cart");
  };

  return (
    <div className="flex flex-col mx-auto w-4/5 md:w-[460px] my-[100px] ">
      <form
        onSubmit={handleSubmit(phoneRegisterSubmitHandler)}
        className="rounded-[10px] border-2 border-backgrey p-[31px] flex flex-col gap-[22px] mb-[64px]"
      >
        <label htmlFor="phonenumber" className="text-center py-[45px]">
          شماره همراه خود را وارد کنید
        </label>
        <input
          {...register("phone", {
            required: "این فیلد اجباری می باشد",
            minLength: {
              value: 10,
              message: "حد اقل ۱۰ کاراکتر وارد کنید",
            },
            pattern: {
              value:
                /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/,
              message: "فرمت صحیح وارد کنید",
            },
          })}
          id="phonenumber"
          type="text"
          step="0"
          placeholder="شماره همراه خود را وارد کنید ..."
          className="text-center rounded-[10px] border-2 border-backgrey h-[43px] "
        />
        {errors.phone && (
          <p className="text-xs text-primary">{errors.phone.message}</p>
        )}
        <Button>ادامه</Button>
      </form>
      <p className="text-[#007BFF] text-center">
        با ورود به فرجان گالری .
        <span className="hover:cursor-pointer font-bold">
          <a>شرایط استفاده </a>
        </span>
        و
        <span className="hover:cursor-pointer font-bold">
          <a>قوانین و مقررات را</a>
        </span>
        می‌پذیرم.
      </p>
    </div>
  );
};

export default PhoneRegistration;
