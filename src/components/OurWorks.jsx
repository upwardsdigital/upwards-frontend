import React from "react";
import { motion as m } from "framer-motion";

const OurWorks = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="works container hidden"
    >
      <div className="title">
        <h1>НАШИ РАБОТЫ </h1>
        <img src="/images/titles/ourWorks.png" />
      </div>

      <div className="all-works">
        <div className="work" data-aos="fade-right" data-aos-once="true">
          <div className="desktop">
            <img src="/images/ourWorks/hotel.png" />
            <div className="scroll">
              <div className="box box1"></div>
            </div>
          </div>
          <h2>Hata.kg</h2>
          <p>
            Маркетплейс c большим функционалом, для куплю-продажи недвижимости
            без посредников.
          </p>
        </div>

        <div className="work" data-aos="fade-left" data-aos-once="true">
          <div className="desktop">
            <img src="/images/ourWorks/metaltorg.png" />
            <div className="scroll">
              <div className="box box2"></div>
            </div>
          </div>
          <h2>Metaltorg</h2>
          <p>
            Сайт для компании - которая входит в четверку крупнейших поставщиков
            широчайшего ассортимента металлопроката во всех регионах
            Кыргызстана.
          </p>
        </div>

        <div className="work" data-aos="fade-right" data-aos-once="true">
          <div className="desktop">
            <img src="/images/ourWorks/hata.kg.png" />
            <div className="scroll">
              <div className="box box3"></div>
            </div>
          </div>
          <h2>Global</h2>
          <p>
            Система учета и отслеживания посылок для компании - осуществляющей
            доставку любого товара с Турции, Китая, Америки, Дубая и Кореи в
            страны СНГ.
          </p>
        </div>
        <div className="work" data-aos="fade-left" data-aos-once="true">
          <div className="desktop">
            <img src="/images/ourWorks/jhotel.png" />
            <div className="scroll">
              <div className="box box4"></div>
            </div>
          </div>
          <h2>Jannat</h2>
          <p>
            Корпоративный сайт для самой первой крупнейшей сети пятизвездочных
            отелей в Кыргызстане — JANNAT HOTELS AND RESORTS. Первый
            национальный бренд, который продвигает идеи истинного кыргызского
            гостеприимства на профессиональном уровне.
          </p>
        </div>
        <div className="work" data-aos="fade-right" data-aos-once="true">
          <div className="desktop">
            <img src="/images/ourWorks/mbe.png" />
            <div className="scroll">
              <div className="box box5"></div>
            </div>
          </div>
          <h2>MBE</h2>
          <p>
            Информационный портал для ведущей компании по управлению отелями и
            объектами недвижимости в Центральной Азии.
          </p>
        </div>
        <div className="work" data-aos="fade-left" data-aos-once="true">
          <div className="desktop">
            <img src="/images/ourWorks/jhotel.png" />
            <div className="scroll">
              <div className="box box6"></div>
            </div>
          </div>
          <h2>Inhouse</h2>
          <p>
            Мультибрендовый магазин с большим ассортиментом мебели и ковров.
          </p>
        </div>
      </div>
    </m.div>
  );
};

export default OurWorks;
