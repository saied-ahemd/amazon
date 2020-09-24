import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/* the products */}
      <div className="home__row">
        <Product
          key={1}
          id="1"
          title="iphone x max pro"
          price={1000}
          rating={4}
          image="https://m.media-amazon.com/images/I/719knfTwPvL._AC_UY218_.jpg"
        />
        <Product
          key={2}
          id="2"
          title="Apple "
          price={1000}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          key={3}
          id="3"
          title="computer"
          price={1000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
        />
        <Product
          key={5}
          id="5"
          title="yoga course"
          price={1000}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
        />
        <Product
          key={5}
          id="5"
          title="tv"
          price={1000}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2309C091815868RD._V535730079_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          key={5}
          id="5"
          title="locker"
          price={1000}
          rating={5}
          image="https://m.media-amazon.com/images/I/71VlL2uonUL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
