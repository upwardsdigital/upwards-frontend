import React from "react";
import { motion as m } from "framer-motion";

import LazyImg from "../lazy-img/LazyImg";

const Services = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="services container hidden"
    >
      <LazyImg />
      <div className="title">
        <h1>УСЛУГИ</h1>
        <img src="/images/titles/services.png" />
      </div>

      <div className="serv">
        <div className="left-text">
          <img
            className="circling-text lazy-img"
            data-src="/images/circleText.png"
            alt=""
          />
          <h2 data-aos="fade-right" data-aos-once="true">
            РАЗРАБОТКА
          </h2>
        </div>
        <div data-aos="fade-left" data-aos-once="true">
          <ul className="texts">
            <li>Аутстаф</li>
            <li>Сайты любой сложности</li>
            <li>Веб-сервисы</li>
            <li>Мобильные приложения</li>
            <li>Разработка личного кабинета</li>
            <li>Техническое задание и прототипы</li>
            <li>Техническая поддержка</li>
          </ul>
        </div>
      </div>

      <div className="serv">
        <div className="left-text">
          <img
            className="circling-text lazy-img"
            data-src="/images/circleText.png"
            alt=""
          />
          <h2 data-aos="fade-right" data-aos-once="true">
            ДИЗАЙН
          </h2>
        </div>
        <div data-aos="fade-left" data-aos-once="true">
          <ul className="texts">
            <li>UI/UX-дизайн</li>
            <li>Дизайн мобильных приложений</li>
            <li>Редизайн сайта и модернизация</li>
          </ul>
        </div>
      </div>
{/* 
      <div className="serv">
        <div className="left-text">
          <img
            className="circling-text lazy-img"
            data-src="/images/circleText.png"
            alt=""
          />
          <h2 data-aos="fade-right" data-aos-once="true">
            ПРОДВИЖЕНИЕ
          </h2>
        </div>
        <div data-aos="fade-left" data-aos-once="true">
          <ul className="texts">
            <li>Комплексное продвижение</li>
            <li>SEO-продвижение</li>
            <li>SEO-продвижение блога</li>
            <li>SEO-продвижение интернет-магазина</li>
            <li>Контекстная реклама</li>
            <li>Контекстная реклама в Google Ads</li>
            <li>Комплексное продвижение в социальных сетях</li>
            <li>Таргетированная реклама</li>
            <li>Продвижение бизнеса в Instagram</li>
          </ul>
        </div>
      </div> */}

      <div className="serv">
        <div className="left-text">
          <img
            className="circling-text lazy-img"
            data-src="/images/circleText.png"
            alt=""
          />
          <h2 data-aos="fade-right" data-aos-once="true">
            ДЛЯ ОТРАСЛЕЙ
          </h2>
        </div>
        <div data-aos="fade-left" data-aos-once="true">
          <ul className="texts last-child">
            <li>Сайты для медучреждений</li>
            <li>Для IT-компаний</li>
            <li>Для интернет-магазинов</li>
            <li>Для стартапов</li>
            <li>Для телеком-провайдеров</li>
            <li>Для строительных компаний</li>
            <li>Для отелей</li>
          </ul>
        </div>
      </div>
    </m.div>
  );
};

export default Services;
