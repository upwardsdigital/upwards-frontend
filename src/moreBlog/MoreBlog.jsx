import React from "react";

const moreBlog = () => {
  return (
    <div className="container more-blog">
      <p className="p-1">
        Главная {">>"} Блог {">>"} Высокая конверсия сайта: проверенные способы
      </p>
      <div className="more-info">
        <img src="./images/Bill-in-blog.jpeg" />
        <h1>Рекомендации Билл Гейтса: ТОП-5 книг к прочтению</h1>
        <p>
          Билл Гейтс выставил статью, где опубликовал ТОП-5 книг, что прочитал в
          этом году и советует другим. Давайте узнаем, что же советует создатель
          Microsoft и, по совместительству, один из богатейших людей Уолтер
          Айзексон – “Взламывание кода”
        </p>
        <p>
          По мнению Билла Гейтса CRISPR – система редактирования генома –
          является одним из величайших и важнейших открытий за 10 последних лет.
          Благодаря прочтению данной книги миллиардер почерпнул много интересной
          и полезной информации, которая помогла более глубоко понять систему.
          Над последней работал биохимик и лауреат Нобелевской премии Дженнифер
          Даудна вместе с командой коллег. Сам Гейтс уже был знаком с CRISPR,
          т.к. инвестировал в несколько проектов, использовавших данную
          технологию. Также, по его мнению, автору удалось более детально
          рассмотреть этическую сторону редактирования гнома, что даст читателю
          ответить на самые важные вопросы и отнестись к вопросу, как к
          настоящему открытию.
        </p>

        <p>
          Кадзуо Исигуро – “Klara and the Sun” Как оказалось Гейс является
          фанатом историй о роботах, поэтому роман “Klara and the Sun” пришелся
          ему по душе. В нем повествуется история маленькой больной девочке и ее
          роботе-друге. Все действо происходит в антиутопии, когда будущее уже
          наступило, но роботы не являются угрозой для человечества, а,
          наоборот, стали для них друзьями, помощниками и компаньонами.
        </p>

        <p>
          Энди Вейер “Проект «Ave Maria»” Гейтс, как и многие любители
          литературы, познакомился с Вейером по произведению “Марсианин”. Это и
          повлекло за собой желание также прочесть новую книгу “Проект “Ave
          Maria”, которая также не оставила равнодушным основателя Microsoft.
          Книга была настолько увлекательной, что он прочел ее за одни выходные.
          История завязывается на путешествии учителя, который проснувшись утром
          оказался в другой галактике. Он быстро преодолевает непонимание от
          происходящего и использует свои знания инженерии и наук для того,
          чтобы преодолеть случившийся с ним казус.
        </p>

        <p>
          Джефф Хокинс – “Тысяча мозгов: новая теория интеллекта” Многие
          фантасты уже по-разному использовали в своих произведениях
          искусственный интеллект, но это не простое чтиво. Новая
          преинтереснейшая теория, которая поможет читателю более детально
          разобраться в вопросах создания ИИ глубоко и сочно раскрыта в этом
          произведении. Гейтс по праву считает данную теорию увлекательной и
          нужной человеку.
        </p>

        <p>
          Мэгги О'Фаррелл – “Hamnet” Произведение немного по-другому раскрывает
          перед читателем историю Шекспира. Вся строится на двух немаловажных
          фактах о величайшей загадке личности писателя, которые достоверно
          известны о нем. Первый – его сын по имени Хамнет погиб, когда ему было
          всего 11 лет, второй – одна из величайших пьес “Гамлет” была написана
          всего через пару лет. Кроме того, Биллу очень понравилось, как в книге
          описывается жена Шекспира, ведь ее представили в виде
          сверхъестественного лика.
        </p>

        <div className="date">
          <p>01.03.2021</p>
        </div>
      </div>

      <div className="articles">
        <div className="article left-side ">
          <a href="#" className="all-articles">
            <img className="arrow-left" src="./images/arrow-left.png" /> Все
            статьи
          </a>
          <p>
            В Google запускают проект по обучению искусственного интеллекта
            изобразительному искусству интеллекта изобразительному искусству
          </p>
        </div>
        <div className="article right-side ">
          <a href="#" className="all-articles">
            Все статьи{" "}
            <img className="arrow-right" src="./images/arrow-right.png" />
          </a>
          <p>
            В Google запускают проект по обучению искусственного интеллекта
            изобразительному искусству
          </p>
        </div>
      </div>
    </div>
  );
};

export default moreBlog;
