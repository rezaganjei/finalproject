import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";
import Button from "../../../components/button";
import FooterButton from "../../../components/FooterButton";
import Input from "../../../components/input";

const Footer = () => {
  return (
    <>
      <div className="absolutes bottom-0 w-full">
        <div className="flex flex-col items-start gap-1 md:flex-row md:gap-0 md:justify-between bg-tertiary md:h-[60px] md:items-center text-[#FFFFFF] text-base p-2">
          <p>ساعت پاسخگویی پشتیبانی شنبه تا پنج‌شنبه 9 تا 17</p>
          <div
            className="flex items-center
    "
          >
            <AiFillPhone />
            شماره تماس: 09122633318
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between md:h-[300px] md:h-auto lg:h-[248px] pt-12 px-[15px]">
          <div className="flex flex-wrap md:flex-nowrap text-textgrey gap-[30px]">
            <div>
              <p className="font-extrabold mb-8">خدمات مشتریان</p>

              <FooterButton>پشتیبانی مشتریان</FooterButton>
              <FooterButton>راهنمای خرید</FooterButton>
              <FooterButton>سوالات متداول</FooterButton>
            </div>
            <div>
              <div>
                <p className="font-extrabold mb-8">قوانین</p>
              </div>
              <FooterButton>حریم خصوصی</FooterButton>
              <FooterButton>قوانین بازگشت کالا</FooterButton>
              <FooterButton>شرایط استفاده</FooterButton>
            </div>

            <div>
              <div>
                <p className="font-extrabold mb-8">
                  فروشگاه اینترنتی فرجان گالری
                </p>
              </div>
              <FooterButton>درباره ما</FooterButton>
              <FooterButton>تماس با ما</FooterButton>
              <FooterButton>فرصت‌های شغلی</FooterButton>
            </div>
            <div>
              <div>
                <p className="font-extrabold mb-8">دسته بندی</p>
              </div>
              <FooterButton>دستبند</FooterButton>
              <FooterButton>گردنبند</FooterButton>
              <FooterButton>گوشواره</FooterButton>
              <FooterButton>انگشتر</FooterButton>
            </div>
          </div>

          <div className="flex flex-col m-auto w-2/3 md:w-[420px] justify-center items-center gap-3 lg:m-0 mb-2">
            <p>از جدیدترین محصولات و تخفیف ها مطلع شوید</p>
            <Input
              placeholder="برای عضویت در خبرنامه ایمیل خود را بنویسید . . ."
              className="text-textgrey bg-backgrey outline-0 h-[50px] w-full rounded-[5px] px-2"
            />
            <div className="flex  flex-col md:flex-row items-center w-full justify-between gap-[10px]">
              <div className="text-[13px]">
                اپلیکیشن <div className="text-[10px]">(به زودی)</div>
              </div>
              <Button className="flex items-center bg-tertiary rounded-[5px] p-2 hover:bg-primary h-[40px] ">
                <AiFillApple />
                <p className="text-[13px] whitespace-nowrap">
                  دریافت از اپ استور
                </p>
              </Button>
              <Button className="flex items-center bg-tertiary rounded-[5px] p-2 hover:bg-primary">
                <AiFillAndroid />
                <p className="text-[13px] whitespace-nowrap">
                  دریافت از پلی استور
                </p>
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-backgrey text-textgrey p-8">
          <p className="font-extrabold"> معرفی فروشگاه اینترنتی فرجان گالری </p>
          <p>
            {" "}
            از بهار ۹۹ شروع به فعالیت کرد و افتخار این را داشت که مجموعه‌ای از
            برترین طراحان ایرانی را دور هم جمع کنند. من فرناز‌ علیجانی مدیریت
            این مجموعه را بر عهده دارم، متولد دی ماه ۶۸ و لیسانس معماری هستم
            علاقه‌ام به هنر که هم شامل لباس و اکسسوری و هم شامل وسایل منزل بود
            باعث شد که این گالری رو تاسیس کنم. هدف فرجان آرت گالری حمایت از
            هنرمندان ایرانی‌ست، برای کسانی که می‌خواهند هنرشون رو به نمایش بذارن
            و به دست هنردوستان برسونن.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
