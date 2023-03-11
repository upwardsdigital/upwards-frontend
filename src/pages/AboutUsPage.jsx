import React, { useEffect } from "react";
import { motion as m } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const AboutUsPage = () => {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   let sections = gsap.utils.toArray(".panel");

  //   gsap.to(sections, {
  //     xPercent: -100 * (sections.length - 1),
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".horizontal",
  //       pin: true,
  //       scrub: 1,
  //       // snap: 1 / (sections.length - 1),
  //       end: () => "+=" + document.querySelector(".horizontal").offsetWidth,
  //     },
  //   });

  //   gsap.to(".slider-circle", {
  //     x: 20,
  //     backgroundColor: "orange",
  //     borderColor: "#29292b",
  //     ease: "none",
  //     duration: 3,
  //     scale: 1.5,
  //     scrollTrigger: {
  //       trigger: ".slider-circle",
  //       start: "center 80%",
  //       end: "center 20%",
  //       scrub: true,
  //     },
  //   });
  
  // }, []);

  return (
    <m.div
      className="about-us-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="about-company container">
        <div className="title">
          <h1 className="text-center">О КОМПАНИИ</h1>
        </div>
        <p>
          Мы digital-продакшн полного цикла, с собственной продуктовой
          аналитикой, дизайном и веб разработкой. Мы создаем{" "}
          <span className="bg-text">удобные сервисы</span>, которые помогают
          развивать бизнес, не теряя{" "}
          <span className="bg-text">пользу для конечного пользователя</span>.
          Наш козырь — оперативная работа в сжатые сроки без потери качества.
        </p>

        <p className="m-tb-2">
          Мы уделяем большое внимание каждому проекту и стараемся найти наиболее
          эффективное решение для наших клиентов. Мы уверены, что наша компания
          является надежным партнером для всех, кто ищет качественные и
          современные IT-решения.
        </p>

        <p>
          Мы гордимся нашими успехами и готовы предоставить нашим клиентам
          только самые высококачественные и инновационные решения.
        </p>
        {/* <div
          className="about-company-imgs"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <img
            className="about-company-img"
            src="/images/aboutUsPage/img-1.png"
          />
          <img
            className="about-company-img"
            src="/images/aboutUsPage/img-1.png"
          />
          <img
            className="about-company-img"
            src="/images/aboutUsPage/img-1.png"
          />
          <div className="img-1"></div>
          <div className="img-2"></div>
          <div className="img-3"></div>
        </div> */}
      </div>

      {/* <div className="approach">
        <div className="container">
          <div className="title">
            <h1>НАШ ПОДХОД</h1>
          </div>
          <p>
            Выполняем самый полный перечень услуг для достижения{" "}
            <span className="bg-text">максимальной конверсии</span>
          </p>
        </div>

        <div className="horizontal-container">
          <div className="horizontal">
            <section className="panel flex">
              <img className="ux" src="/images/aboutUsPage/UX.png" alt="img" />
              <img
                className="panel-img"
                src="/images/aboutUs/img-1.jpg"
                alt="img"
              />
              <div className="right-side">
                <h1>
                  СБОР БИЗНЕС-ТРЕБОВАНИЙ, АНАЛИЗ, <br /> UX-ИССЛЕДОВАНИЕ
                </h1>
                <p>
                  Проводим предпроектное обследование и определяем цели <br /> и
                  задачи проекта, ограничения систем, производим конкурентный
                  <br />
                  анализ, выявляем гипотезы по оптимизации в ходе <br />
                  взаимодействия пользователя с продуктом.
                </p>
              </div>
              <div className="first-horizontal-line horizontal-line relative">
                <div className="slider-circle">01</div>
              </div>
            </section>
            <section className="panel flex">
              <img className="ux" src="/images/aboutUsPage/UX.png" alt="img" />
              <img
                className="panel-img"
                src="/images/aboutUs/img-1.jpg"
                alt="img"
              />
              <div className="right-side">
                <h1>
                  СБОР БИЗНЕС-ТРЕБОВАНИЙ, АНАЛИЗ, <br /> UX-ИССЛЕДОВАНИЕ
                </h1>
                <p>
                  Проводим предпроектное обследование и определяем цели <br /> и
                  задачи проекта, ограничения систем, производим конкурентный
                  <br />
                  анализ, выявляем гипотезы по оптимизации в ходе <br />
                  взаимодействия пользователя с продуктом.
                </p>
              </div>
              <div className="horizontal-line relative">
                <div className="slider-circle">02</div>
              </div>
            </section>
            <section className="panel flex">
              <img className="ux" src="/images/aboutUsPage/UX.png" alt="img" />
              <img
                className="panel-img"
                src="/images/aboutUs/img-1.jpg"
                alt="img"
              />
              <div className="right-side">
                <h1>
                  СБОР БИЗНЕС-ТРЕБОВАНИЙ, АНАЛИЗ, <br /> UX-ИССЛЕДОВАНИЕ
                </h1>
                <p>
                  Проводим предпроектное обследование и определяем цели и <br />
                  задачи проекта, ограничения систем, производим конкурентный{" "}
                  <br />
                  анализ, выявляем гипотезы по оптимизации в ходе <br />
                  взаимодействия пользователя с продуктом.
                </p>
              </div>
              <div className="last-horizontal-line relative">
                <div className="slider-circle">03</div>
              </div>
            </section>
          </div>
        </div>
      </div> */}

      {/* </div> */}
      {/* </div> */}

      <div className="site-cost-blog">
        <div className="site-cost container grid">
          <div>
            <h2>Хотите узнать стоимость вашего сайта?</h2>
            <p>
              Оставьте нам свой номер телефона и мы вам вышлем КП и свяжемся с
              вами в кратчайшее время, обсудим проекты и время и дату и это
              рыбный текст так что надо сюда придумать
            </p>
          </div>

          <div>
            <div className="input-content">
              <input type="text" placeholder="Укажите номер телефона" />
              <button className="btn">Отправить</button>
            </div>
            <div className="checkbox-content flex">
              {/* <input className="checkbox" type="checkbox" /> */}
              <div className="checkbox-wrapper-33">
                <label className="checkbox">
                  <input
                    className="checkbox__trigger visuallyhidden"
                    type="checkbox"
                  />
                  <span className="checkbox__symbol">
                    <svg
                      aria-hidden="true"
                      className="icon-checkbox"
                      width="28px"
                      height="28px"
                      viewBox="0 0 28 28"
                      version="1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 14l8 7L24 7"></path>
                    </svg>
                  </span>
                  <p>
                    Я согласен с условиями заказа медали, в том числе с
                    Соглашением об условиях заказа и с Политикой обработки
                    персональных данных
                  </p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-page-clients container">
        <div className="title">
          <h1>НАШИ КЛИЕНТЫ</h1>
        </div>
        <div className="clients" data-aos="fade-up" data-aos-once="true">
          <img className="client-img" src="/images/ourClients/img-4.svg" />
          <img className="client-img" src="/images/ourClients/img-2.svg" />
          <img className="client-img" src="/images/ourClients/img-3.svg" />
          <img className="client-img" src="/images/ourClients/img-4.svg" />
          {/* <img className="client-img" src="/images/ourClients/img-5.svg" /> */}
          <img className="client-img" src="/images/ourClients/img-1.svg" />
          <img className="client-img" src="/images/ourClients/img-4.svg" />
          <img className="client-img" src="/images/ourClients/img-2.svg" />
          <img className="client-img" src="/images/ourClients/img-3.svg" />
          <img className="client-img" src="/images/ourClients/img-4.svg" />
          {/* <img className="client-img" src="/images/ourClients/img-5.svg" /> */}
          <img className="client-img" src="/images/ourClients/img-1.svg" />
        </div>
      </div>
    </m.div>
  );
};

export default AboutUsPage;
