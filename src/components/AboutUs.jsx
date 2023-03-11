import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us container hidden">
      <div className="title">
        <h1>О НАС</h1>
        <img src="/images/titles/aboutUs.png" />
      </div>

      <div
        className="first-blog flex"
        data-aos="fade-left"
        data-aos-once="true"
      >
        {/* <div className="imgs relative">
          <img className="up-img" data-src="/images/aboutUs/img-2.jpg" />

          <img className="down-img" data-src="/images/aboutUs/img-1.jpg" />
        </div> */}
          <img src="/images/image.jpg" alt="" />

        <div className="texts flex">
          <p>
            Наша IT компания была основана в 2018 году с целью создания
            качественных сайтов, систем автоматизации бизнес процессов и
            мобильных приложений. Мы являемся командой профессионалов, которые
            стараются удовлетворить все потребности наших клиентов.
          </p>

          <p>
            Наша компания сотрудничает с различными клиентами, от небольших
            стартапов до крупных компаний. Мы готовы предоставить самые
            современные решения и инновационные подходы для всех наших клиентов.
          </p>
          {/* <p>1. Создаем визуальную коммуникацию бренда</p>
          <p>
            2. Разрабатываем сайты от простых лэндинг пейджев до больших маркет
            плейсов
          </p>
          <p>3. Разрабатываем мобильные приложения для IOS и Android</p> */}
        </div>
      </div>

      <div
        className="second-blog flex"
        data-aos="fade-right"
        data-aos-once="true"
      >
        {/* <div className="imgs relative">
          <img className="up-img " data-src="/images/aboutUs/img-4.jpg" />
          <img className="down-img " data-src="/images/aboutUs/img-3.jpg" />
        </div> */}

        <div className="texts flex">
          <p>
            Мы специализируемся на разработке сайтов, систем автоматизации
            бизнес процессов и мобильных приложений. В нашей команде работают
            профессионалы в области дизайна, разработки и тестирования.
          </p>

          <p>
            Мы уделяем большое внимание каждому проекту и стараемся найти
            наиболее эффективное решение для наших клиентов. Мы уверены, что
            наша компания является надежным партнером для всех, кто ищет
            качественные и современные IT-решения.
          </p>

          <p>
            Мы гордимся нашими успехами и готовы предоставить нашим клиентам
            только самые высококачественные и инновационные решения.
          </p>
          {/* <p>1. Создаем визуальную коммуникацию бренда</p>
          <p>
          2. Разрабатываем сайты от простых лэндинг пейджев до больших маркет
          плейсов
          </p>
        <p>3. Разрабатываем мобильные приложения для IOS и Android</p> */}
        </div>
        <img src="/images/image-1.jpg" alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
