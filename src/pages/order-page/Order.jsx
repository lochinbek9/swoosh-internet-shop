import React, { useEffect, useState } from "react"; // useState qo‘shildi
import "./Order.css";

function Order() {
  useEffect(() => {
    document.title = "Индивидуальный заказ";
    console.log("Order page loaded");
  }, []);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name__input, phone__input, email__input, message__input } =
      e.target.elements;

    const BOT_TOKEN = "8087323596:AAFs65Wbo4RKDbhcK-wx-EYvQiA1wwISoaI";
    const CHAT_ID = "6243027711";

    const telegramMessage = `
Order Page Form:
Name: ${name__input.value}
Phone: ${phone__input.value}
Email: ${email__input.value}
Message: ${message__input.value}
    `;

    if (
      name__input.value.trim() &&
      phone__input.value.trim() &&
      email__input.value.trim() &&
      message__input.value.trim()
    ) {
      try {
        const response = await fetch(
          `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              chat_id: CHAT_ID,
              text: telegramMessage,
            }),
          }
        );

        if (response.ok) {
          setIsSubmitted(true);
          setIsError(false);
        } else {
          setIsError(true);
          setIsSubmitted(false);
        }
      } catch (error) {
        console.error("Error:", error);
        setIsError(true);
        setIsSubmitted(false);
      }
    }
  };

  return (
    <section className="order">
      <div className="container order__container">
        <div className="order__top">
          <a href="/" className="home__link">
            Swoosh Store
          </a>
          <span className="">→</span>
          <p>Индивидуальный заказ</p>
        </div>
        <div className="order__left">
          <h1 className="order__title">Индивидуальный заказ</h1>
          <p className="order__text">
            Здесь вы можете стать обладателем поистине уникальных и
            лимитированных моделей кроссовок Nike, ожидая их поступления в
            продажу. Мы ценим вашу страсть к стилю и предоставляем вам
            уникальную возможность заказать кроссовки, которые будут дополнением
            вашей индивидуальности.
          </p>
          <div className="order__flex">
            <div className="order__conditions">
              <h2 className="order__subtitle">Условия заказа:</h2>
              <ol className="order__list">
                <li className="order__list__item">
                  <p className="order__list__text">
                    <strong className="">Выбор модели:</strong>
                    Ознакомьтесь с нашим каталогом лимитированных моделей и
                    выберите ту, которая вам больше всего понравилась.
                  </p>
                </li>
                <li className="order__list__item">
                  <p className="order__list__text">
                    <strong className="">Предоплата:</strong>
                    Предоплата: Для подтверждения вашего заказа требуется внести
                    предоплату в размере 100% от стоимости кроссовок.
                  </p>
                </li>
                <li className="order__list__item">
                  <p className="order__list__text">
                    <strong className="">Сроки ожидания:</strong>
                    Обычно срок поступления лимитированных кроссовок составляет
                    4-6 недель с момента оформления заказа и внесения
                    предоплаты.
                  </p>
                </li>
                <li className="order__list__item">
                  <p className="order__list__text">
                    <strong className="">Уведомление о готовности:</strong>
                    Как только заказанные кроссовки поступят в наш магазин, мы
                    отправим вам уведомление по электронной почте или SMS.
                  </p>
                </li>
                <li className="order__list__item">
                  <p className="order__list__text">
                    <strong className="">Доставка:</strong>
                    После полной оплаты мы доставим ваши уникальные кроссовки
                    прямо к вам по указанному адресу.
                  </p>
                </li>
              </ol>
            </div>
            {isError ? (
              <div className="order__error">
                <i
                  className="fa fa-times-circle"
                  style={{
                    fontSize: "80px",
                    color: "#d32f2f",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "50%",
                  }}
                ></i>
                <h2>Ошибка!</h2>
                <p>
                  Произошла ошибка при отправке сообщения. Пожалуйста,
                  попробуйте еще раз.
                </p>
              </div>
            ) : isSubmitted ? (
              <div className="order__success">
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
                  Мы получили Ваш заказ. В ближайшее время наши менеджеры
                  свяжутся с вами и ответят на все вопросы.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="order__form">
                <label htmlFor="name__input" className="order__label">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name__input"
                  className="order__input"
                  placeholder="Как вас зовут"
                  required
                />
                <label htmlFor="phone__input" className="order__label">
                  Ваш телефон *
                </label>
                <input
                  type="tel"
                  id="phone__input"
                  className="order__input"
                  placeholder="+7 (___) ___ - ___ - ___"
                  required
                />
                <label htmlFor="email__input" className="order__label">
                  Ваш email *
                </label>
                <input
                  type="email"
                  id="email__input"
                  className="order__input"
                  placeholder="Введите ваш email адрес"
                  required
                />
                <label htmlFor="message__input" className="order__ Chipmunk">
                  Ваше сообщение *
                </label>
                <textarea
                  id="message__input"
                  className="order__textarea"
                  placeholder="Укажите любой другой способ связи"
                  required
                />
                <button className="order__button" type="submit">
                  Заказать <span className="order__arrow">→</span>
                </button>
                <p className="order__link">
                  Нажимая кнопку “Отправить” я соглашаюсь с
                  <a href="/" target="_blank" className="">
                    политикой конфиденциальности
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Order;
