import { useEffect, useState } from "react";
import "./About.css";
import image1 from "./about-images/image1.png";
import image2 from "./about-images/image2.png";
import icon1 from "./about-images/icon1.png";
import icon2 from "./about-images/icon2.png";
import icon3 from "./about-images/icon3.png";
import bgimg1 from "./about-images/bgimg1.png";
import bgimg2 from "./about-images/bgimg2.png";
import bgimg3 from "./about-images/bgimg3.png";
import bgimg4 from "./about-images/bgimg4.png";

function About() {
  useEffect(() => {
    document.title = "О компании";
    console.log("About page loaded");
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const slides = [
    {
      title: "Десять советов по выбору кроссовок для спорта",
      date: "10 Августа 2023",
      badge: "СОВЕТЫ",
      image: bgimg1,
    },
    {
      title: "Наш каталог пополнился новыми коллекциями",
      date: "10 Августа 2023",
      badge: "НОВОСТИ",
      image: bgimg2,
    },
    {
      title: "Кроссовки как обувь. Плюсы и",
      date: "7 Августа 2023",
      badge: "СТАТЬИ",
      image: bgimg3,
    },
    {
      title: "Десять советов по выбору кроссовок для спорта",
      date: "10 Августа 2023",
      badge: "СОВЕТЫ",
      image: bgimg4,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < slides.length - 2 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNext = () => {
    if (currentIndex < slides.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setTranslateX(-currentIndex * 50);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    setTranslateX(-currentIndex * 50 + diff / 10);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const threshold = 50;
    if (
      translateX < -currentIndex * 50 - threshold &&
      currentIndex < slides.length - 2
    ) {
      setCurrentIndex(currentIndex + 1);
    } else if (
      translateX > -currentIndex * 50 + threshold &&
      currentIndex > 0
    ) {
      setCurrentIndex(currentIndex - 1);
    }
    setTranslateX(0);
  };

  return (
    <main>
      <section className="about">
        {/*TODO: ABOUT START */}
        <div className="container about__container">
          <div className="about__top">
            <a href="/" className="home__link">
              Swoosh Store
            </a>
            <span className="">→</span>
            <p>О компании</p>
          </div>
          <h1 className="about__title">
            Интернет-магазин <br /> Swoosh Store
            <span className="about__line"></span>
          </h1>
          <p className="about__text">
            Добро пожаловать в <strong>Swoosh Store</strong> – ваш источник
            подлинных кроссовок Nike и непревзойденного стиля! Мы рады
            представить вам уникальную онлайн-платформу, где вы сможете
            окунуться в мир инноваций и моды от легендарного бренда спортивной
            обуви.
          </p>
          <img src={image1} alt="Изображение" className="about__image" />
        </div>
        {/* FIXME: ABOUT END */}
        {/* TODO: ADS START */}
        <div className="container about__ads">
          <div className="about__left">
            <h2 className="about__title2">Легендарное наследие Nike:</h2>
            <br />
            <p className="about__text2">
              Swoosh Store - это место, где история и стиль сливаются воедино.
              Мы гордимся тем, что предлагаем вам только оригинальные кроссовки
              Nike, продукцию, которая воплощает более чем полувековое наследие
              инноваций, комфорта и качества. Каждая пара кроссовок – это не
              просто спортивная обувь, это произведение искусства, воплощающее
              дух победы и страстную преданность активному образу жизни. <br />{" "}
              <br />
              Swoosh Store - это не просто интернет-магазин, а место, где ваша
              страсть к стилю и качеству встретится с легендарной маркой Nike.
              Мы стремимся предоставлять нашим клиентам только подлинные
              продукты, которые отражают высший стандарт дизайна, инноваций и
              технологий, заложенных в каждой кроссовке Nike.
            </p>
          </div>
          <div className="about__right">
            <h2 className="about__title3">Подпишитесь на рассылку</h2>
            <p className="about__text3">
              Регулярные скидки и спецпредложения, а также новости компании.
            </p>
            <form
              action="https://echo.htmlacademy.ru/"
              method="post"
              className="about__form"
            >
              <div className="input-container">
                <input
                  className="about__input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  required
                />
                <label htmlFor="email">Ваш Email</label>
              </div>
              <button type="submit" className="about__button">
                Подписаться
              </button>
              <a
                href="/privacy"
                className="blank"
                target="_blank"
                rel="noopener noreferrer"
              >
                Согласен с политикой конфиденциальности
              </a>
            </form>
          </div>
        </div>
        {/* FIXME: ADS END */}
        {/* TODO: CENTER START */}
        <hr className="linehr" />
        <div className="container about__center">
          <div className="about__cards">
            <div className="about__card">
              <img src={icon1} alt="Иконка" className="about__card--image" />
              <span className="about__card--span">
                <h2>Только оригинальные товары</h2>
                <p>
                  Гарантированная подлинность Nike и высокое качество кроссовок.
                </p>
              </span>
            </div>
            <div className="about__card">
              <img src={icon2} alt="Иконка" className="about__card--image" />
              <span className="about__card--span">
                <h2>Профессиональный сервис</h2>
                <p>
                  Команда экспертов, готовых помочь с выбором размера и ответить
                  на все вопросы.
                </p>
              </span>
            </div>
            <div className="about__card">
              <img src={icon3} alt="Иконка" className="about__card--image" />
              <span className="about__card--span">
                <h2>Эксклюзивный выбор</h2>
                <p>
                  Богатый ассортимент оригинальных моделей Nike, включая редкие
                  выпуски.
                </p>
              </span>
            </div>
          </div>
        </div>
        {/* FIXME: CENTER END */}
        {/* TODO: ARTICLE START */}
        <hr className="linerh" />
        <article className="container article__container">
          <p className="article__left">
            Наши кроссовки отличаются не только эстетическим великолепием, но и
            функциональностью. Мы предлагаем широкий выбор моделей для разных
            видов спорта, от бега до баскетбола, и для различных повседневных
            ситуаций. Будь то икона стиля, такая как Air Max, или универсальная
            классика, как Air Force 1 - у нас есть именно то, что подойдет вам.
            <br /> <br />
            На Swoosh Store мы ценим ваше доверие и комфорт при покупке. Вся
            наша обувь поставляется непосредственно от производителя, что
            гарантирует вам аутентичность каждой пары кроссовок. Мы также
            предлагаем удобные опции доставки и безопасные методы оплаты, чтобы
            сделать ваш опыт покупки максимально приятным и беззаботным.
            <br /> <br />
            Присоединяйтесь к нашему сообществу любителей Nike, чтобы разделить
            радость от качественной обуви и уникального стиля. Мы всегда готовы
            помочь вам с выбором, ответить на вопросы и обеспечить вас идеальной
            парой кроссовок, которая подчеркнет вашу индивидуальность и даст вам
            уверенность в каждом шаге.
            <br /> <br />
            <strong>
              Спасибо, что выбираете Swoosh Store – ваш источник оригинальных
              кроссовок Nike!
            </strong>
          </p>
          <img src={image2} alt="Изображение" className="article__image" />
        </article>
        {/* FIXME: ARTICLE END */}
        {/* TODO: SLIDER START */}
        <div className="container">
          <div
            className="slider-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="slider-header">
              <div className="title">ПОСЛЕДНИЕ ПУБЛИКАЦИИ</div>
              <div className="arrows">
                <div className="arrow prev" onClick={handlePrev}>
                  ←
                </div>
                <div className="arrow next" onClick={handleNext}>
                  →
                </div>
              </div>
            </div>
            <div
              className="slider"
              style={{
                transform: `translateX(${
                  isDragging ? translateX : -currentIndex * 50
                }%)`,
              }}
            >
              {slides.map((slide, index) => (
                <div className="slide" key={index}>
                  <div className="slide-content">
                    <div className="slide-text">
                      <div className="slide-title">{slide.title}</div>
                      <div className="slide-footer">
                        <span>{slide.date}</span>
                        <a href="/">Подробнее</a>
                      </div>
                    </div>
                    <div className="slide-image">
                      <div className="badge">{slide.badge}</div>
                      <img src={slide.image} alt={slide.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* FIXME: SLIDER END */}
      </section>
    </main>
  );
}

export default About;
