import React, { useEffect, useState } from "react";
import "./Contact.css";

function Contact() {
  const [location, setLocation] = useState("rostov");

  useEffect(() => {
    document.title = "Контакты";
  }, []);

  const maps = {
    rostov: {
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473.7402014453504!2d39.583490013955526!3d47.24102048863256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3c74a5867fe97%3A0xb486e4eb6467a44e!2sUlitsa%20Dovatora%2C%20158%D0%94%2C%20Rostov%2C%20Rostovskaya%20oblast'%2C%20Rossiya%2C%20344090!5e0!3m2!1suz!2s!4v1746711971322!5m2!1suz!2s",
      address: "Ростов-на-Дону, улица Доватора, дом 158а, -1 этаж.",
    },
    moscow: {
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577343.9848490721!2d36.726198395538646!3d55.58025704814085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoskva%2C%20Rossiya!5e0!3m2!1suz!2s!4v1746721483992!5m2!1suz!2s",
      address: "Москва, Тверская улица, дом 15, -1 этаж.",
    },
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;
    if (name.value.trim() && email.value.trim() && message.value.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="contact__top">
          <a href="/" className="home__link">
            Swoosh Store
          </a>
          <span>→</span>
          <p>О компании</p>
        </div>
        <div className="contact__middle">
          <h1 className="contact__title">Наши контакты</h1>
        </div>
        <nav className="contact__nav">
          <button
            className={`contact__btn ${location === "rostov" ? "active" : ""}`}
            onClick={() => setLocation("rostov")}
          >
            Ростов-на-Дону
          </button>
          <button
            className={`contact__btn ${location === "moscow" ? "active" : ""}`}
            onClick={() => setLocation("moscow")}
          >
            Москва
          </button>
        </nav>
        <hr />
        <div className="contact__map">
          <div className="map__address">
            <div className="map__location">
              <span className="material-symbols-outlined">location_on</span>
              <div className="map__texts">
                <h3 className="map__title">Адрес:</h3>
                <p className="map__text">{maps[location].address}</p>
              </div>
            </div>
            <div className="map__tel">
              <span className="material-symbols-outlined">call</span>
              <div className="map__texts">
                <h3 className="map__title">Телефон:</h3>
                <p className="map__text">
                  <a href="tel:+79185472083">+7 918 547 20 83</a>{" "}
                </p>
              </div>
            </div>
            <div className="map__email">
              <span className="material-symbols-outlined">mail</span>
              <div className="map__texts">
                <h3 className="map__title">Email:</h3>
                <p className="map__text">
                  <a href="mailto:orders@sstore.ru">orders@sstore.ru</a>{" "}
                </p>
              </div>
            </div>
            <div className="map__socials">
              <div className="map__socials--icons">
                <span>Мы в соц.сетях:</span>
                <a
                  href="http://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-square-instagram"></i>
                </a>
                <a
                  href="http://vk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-vk"></i>
                </a>
              </div>
              <p className="socials__text">
                * Instagram является запрещенным в РФ
              </p>
            </div>
          </div>
          <iframe
            src={maps[location].mapUrl}
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="contact__map--map"
            title="Location Map"
          ></iframe>
        </div>
      </div>
      <hr className="contact__line" />
      <div className="container contact__bottom">
        {isSubmitted ? (
          <div className="success">
            <i
              className="fa fa-check-circle"
              style={{
                fontSize: "80px",
                color: "#28a745",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "50%",
              }}
            ></i>
            <h2>Спасибо!</h2>
            <p>
              Мы получили Ваше сообщение. В ближайшее время наши менеджеры
              свяжутся с вами и ответят на все вопросы.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="contact__form"
            action={"https://echo.htmlacademy.ru"}
          >
            <div className="form__row">
              <div className="input__group">
                <input type="text" id="name" placeholder=" " required />
                <label htmlFor="name">Ваше имя</label>
              </div>
              <div className="input__group">
                <input type="email" id="email" placeholder=" " required />
                <label htmlFor="email">Ваш Email</label>
              </div>
            </div>
            <div className="input__group">
              <textarea id="message" placeholder=" " required></textarea>
              <label htmlFor="message">Текст вопроса</label>
            </div>
            <button type="submit">Отправить</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
