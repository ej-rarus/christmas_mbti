import React from "react";
import Button from "../common/Button";
import mainImg from "../img/app_title.png";
import Image from "../common/Image";


const Home = () => {

  return (
    <div className="Home-wrapper">
      <div className="Home-content-container">
        <Image src={mainImg} alt="home_img"></Image>
        <Button to="/name">μμνκΈ°</Button>

      </div>
    </div>
  );
};

export default Home;
