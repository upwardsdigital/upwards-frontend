import React from "react";

const HeaderBanner = () => {
  return (
    <div>
      <img className="main-bg-img" src="/images/main-bg-img.png" />
      <div className="header-banner flex container hidden">
        <div className="header-banner-text flex">
          <h1 className="text">
            Мы разрабатываем
            <div className="scroller">
              <p>
                уникальные
                <br />
                современные
                <br />
                сложные
                <br />
                лучшие
              </p>
            </div>
            веб-сайты и мобильные приложения
          </h1>
          <img className="circling-text" src="/images/circleText.png" alt="" />
        </div>
      </div>
      <div className="ticker">
        <div className="scroll text1">
          <div>
            UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS
            UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS
            UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS
            UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS
          </div>
          <div>
            UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS
            UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS
            UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS
            UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS
          </div>
        </div>

        <div className="scroll text2">
          <div>
            UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS
            UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS
            UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS
            UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS
          </div>
          <div>
            UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS
            UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS
            UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS
            UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS UPWARDS
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
