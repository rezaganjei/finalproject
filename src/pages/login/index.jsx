import React, { useEffect, useState } from "react";
import { instance } from "../../libs/axiosInstance";
import Button from "../../components/button";
import Input from "../../components/input";
import { useForm } from "react-hook-form";
import { login, logout } from "../../redux/reducers/adminAuth/adminAuth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector(
    (state) => state.adminAuth.adminAuth.accessToken
  );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitHandler = (e) => {
    instance
      .post("/auth/login", e)
      .then((res) =>
        dispatch(
          login({
            accessToken: res.data.accessToken,
            refreshToke: res.data.refreshToken,
          })
        )
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (accessToken) {
      navigate("/admin");
      // window.open("/admin", "_self");
    }
  }, [accessToken]);
  return (
    <>
      {console.log(accessToken)}
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col w-4/5 sm:w-3/5 mx-auto md:w-1/2 lg:w-[460px] border-backgrey border-2 p-[31px] gap-[22px] mt-[110px] rounded-[10px] shadow-md"
      >
        <label htmlFor="username">نام کاربری خود را وارد کنید</label>
        <input
          {...register("username", {
            required: "این فیلد اجباری می باشد",
            minLength: {
              value: 3,
              message: "حد اقل ۳ کاراکتر وارد کنید",
            },
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "فقط حروف انگلیسی وارد کنید",
            },
          })}
          placeholder="نام کاربری خود را وارد کنید..."
          // onChange={(e)=>setUsername(e.target.value)}
        />
        {errors.username && (
          <p className="text-xs text-primary">{errors.username.message}</p>
        )}

        <label htmlFor="username">رمز عبور خود را وارد کنید</label>
        <input
          {...register("password", {
            required: "این فیلد اجباری می باشد",
            minLength: {
              value: 3,
              message: "حد اقل ۳ کاراکتر وارد کنید",
            },
          })}
          type="password"
          placeholder="رمز عبور خود را وارد کنید..."
        />
        {errors.password && (
          <p className="text-xs text-primary">{errors.password.message}</p>
        )}

        <Button type="submit">submit</Button>
      </form>
      <p className="p-4 w-4/5 sm:w-3/5 mx-auto md:w-1/2 lg:w-[460px]  text-blue-700 text-[15px] mb-[110px] mt-[64px]">
        با ورود به فرجان گالری، شرایط استفاده و قوانین و مقررات را می‌پذیرم.
      </p>
    </>
  );
};

export default LoginPage;
