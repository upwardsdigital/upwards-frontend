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
            Корпоративый сайт для пятизвездочного отеля Jannat с интеграцией
            онлайн-бронирования.
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
            Корпоративый сайт для пятизвездочного отеля Jannat с интеграцией
            онлайн-бронирования.
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
            Корпоративый сайт для пятизвездочного отеля Jannat с интеграцией
            онлайн-бронирования.
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
            Корпоративый сайт для пятизвездочного отеля Jannat с интеграцией
            онлайн-бронирования.
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
            Корпоративый сайт для пятизвездочного отеля Jannat с интеграцией
            онлайн-бронирования.
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
            Корпоративый сайт для пятизвездочного отеля Jannat с интеграцией
            онлайн-бронирования.
          </p>
        </div>
      </div>
    </m.div>
  );
};

export default OurWorks;
