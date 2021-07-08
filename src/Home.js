import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1222"
          title="Essentials for your safety"
          price={1200}
          rating={5}
          image="https://m.media-amazon.com/images/I/41BzNL2R+KL._AC_SY200_.jpg"
        />
        <Product
          id="1222"
          title="For your computer"
          price={3994}
          rating={4}
          image="https://m.media-amazon.com/images/I/31RM9gXuDSL._AC_SY200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1222"
          title="For your computer setup"
          price={599}
          rating={5}
          image="https://m.media-amazon.com/images/I/41JUbD67xQS._AC_SY200_.jpg"
        />
        <Product
          id="1222"
          title="Let's start video game "
          price={1299}
          rating={3}
          image="https://m.media-amazon.com/images/I/41WuEc7I4PL.__AC_SY200_.jpg"
        />
        <Product
          id="1222"
          title="Clothing for your party"
          price={5599}
          rating={5}
          image="https://m.media-amazon.com/images/I/41Agxz68MaL.__AC_SY200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1222"
          title="Fire Desktop Stick Lite"
          price={120000}
          rating={4}
          image="https://m.media-amazon.com/images/I/41P2V+ItRWS.__AC_SY200_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
