import React, { useEffect } from "react";
import { motion as m } from "framer-motion";

const ConnectWith = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="connect-blog flex hidden"
    >
      {/* <img
        className="left-img"
        src="/images/connect.png"
        data-aos="fade-right"
        data-aos-once="true"
      /> */}
      <div className="connect-with-us">
        <div className="container">
          <div className="title">
            <h1>Связаться с нами</h1>
          </div>
          <div className="connects flex">
            <div className="connect">
              <img src="/images/yourName.png" alt="" />
              <input type="text" placeholder="Ваше имя" />
            </div>
            <div className="connect">
              <img src="/images/yourNum.png" alt="" />
              <input type="number" placeholder="Номер телефона" />
            </div>
            <div className="connect">
              <img src="/images/mail.png" alt="" />
              <input type="text" placeholder="Почта" />
            </div>
            <button className="btn">Отправить</button>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default ConnectWith;
