import React from "react";

const Stages = () => {
  return (
    <div className="stages hidden">
      <div className="title">
        <h1>ЭТАПЫ РАБОТЫ</h1>
        <img src="/images/titles/stages.png" />
      </div>

      <div className="line">
        <div className="line-img">
          <img src="/images/line.png" />
        </div>

        <div className="blog">
          <div className="blog-container">
            <div className="first-child relative">
              <h1 data-aos="fade-right" data-aos-once="true">
                <span>01</span> Согласование <br /> Технического задания
              </h1>
              <div className="dot"></div>
            </div>
          </div>
        </div>

        <div className="blog">
          <div className="blog-container">
            <div className="nth-2 relative">
              <h1 data-aos="fade-right" data-aos-once="true">
                <span>02</span> Подписание договора
                {/* <p>оплата 25%</p> */}
              </h1>
              <div className="dot"></div>
            </div>
          </div>
        </div>

        <div className="blog">
          <div className="blog-container">
            <div className="nth-3 relative">
              <h1 data-aos="fade-right" data-aos-once="true">
                <span>03</span> Разработка макета <br /> дизайна
                {/* <p>оплата 25%</p> */}
              </h1>
              <div className="dot"></div>
            </div>
          </div>
        </div>

        <div className="blog">
          <div className="blog-container blog-4">
            <div className="nth-4 relative">
              <h1 data-aos="fade-left" data-aos-once="true">
                <span>04</span> Разработка ПО
                {/* <p>оплата 25%</p> */}
              </h1>
              <div className="dot"></div>
            </div>
          </div>
        </div>

        <div className="blog">
          <div className="blog-container last-blog">
            <div className="last-child relative">
              <h1 data-aos="fade-left" data-aos-once="true">
                <span>05</span> Презентация <br /> проекта
                {/* <p>оплата 25%</p> */}
              </h1>
              <div className="dot"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stages;
