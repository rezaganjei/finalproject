import React from "react";
import InfoCard from "../infoCards";
import { TbTruckDelivery } from "react-icons/tb";
import { SlWallet } from "react-icons/sl";
import { BiSupport } from "react-icons/bi";
import { MdUpdate } from "react-icons/md";

const InfoCardHolder = ({ className }) => {
  return (
    <>
      <div
        className={`flex flex-col md:flex-row justify-center items-center  p-3 gap-1 mt-[50px] mb-[100px] ${className}`}
      >
        <InfoCard>
          <TbTruckDelivery className="text-primary" />
          <p>تحویل سریع و ارزان</p>
        </InfoCard>
        <InfoCard>
          <SlWallet className="text-primary" />
          <p>پرداخت درب منزل</p>
        </InfoCard>
        <InfoCard>
          <BiSupport className="text-primary" />
          <p>پشتیبانی</p>
        </InfoCard>
        <InfoCard>
          <MdUpdate className="text-primary" />
          <p>ضمانت بازگشت کالا</p>
        </InfoCard>
      </div>
    </>
  );
};

export default InfoCardHolder;
