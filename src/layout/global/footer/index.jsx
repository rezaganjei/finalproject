import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import Button from "../../../components/button";
import FooterButton from "../../../components/FooterButton";
import Input from "../../../components/input";

const Footer = () => {
  return (
    <>
      <div className="absolute bottom-0 w-full">
        <div className="flex justify-between bg-tertiary h-[60px] items-center text-[#FFFFFF] text-base p-2">
          <div>ساعت پاسخگویی پشتیبانی شنبه تا پنج‌شنبه 9 تا 17</div>
          <div
            className="flex items-center
    "
          >
            <AiFillPhone />
            شماره تماس: 09122633318
          </div>
        </div>
        <div className="flex items-start justify-between h-[248px] pt-12 px-2">
          <div className="flex  text-textgrey gap-16">
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

          <div className="flex flex-col w-[420px] justify-center items-center gap-3">
            <div>از جدیدترین محصولات و تخفیف ها مطلع شوید</div>
            <Input
              placeholder="برای عضویت در خبرنامه ایمیل خود را بنویسید . . ."
              className="text-textgrey bg-backgrey outline-0 h-[50px] w-full rounded-[5px]"
            />
            <div className="flex items-center w-full justify-between">
              <div>
                اپلیکیشن <div className="text-[13px]">(به زودی)</div>
              </div>
              <Button className="flex items-center bg-tertiary rounded-[5px] p-2 hover:bg-primary ">
                <AiFillApple />
                <div>دریافت از اپ استور</div>
              </Button>
              <Button className="flex items-center bg-tertiary rounded-[5px] p-2 hover:bg-primary">
                <AiFillApple />
                <div>دریافت از اپ استور</div>
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
