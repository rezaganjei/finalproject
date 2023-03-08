import React from "react";
import CategoryCard from "../../components/categoryCard";
import InfoCardHolder from "../../components/infoCardHolder";
import Slider from "../../components/slider";

const HomePage = () => {
  return (
    <>
      <Slider />
      <InfoCardHolder />
      <CategoryCard category={"دستبند"} path={"/bracelet"} />
      <CategoryCard category={"گردنبند"} path={"/necklace"} />
    </>
  );
};

export default HomePage;
