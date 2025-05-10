import React from "react";
import { useEffect } from "react";
import "./NotFound.css";
import img1 from ".//notfound404-images/image1.png";

function NotFound() {
  useEffect(() => {
    document.title = "Страница не найдена";
    console.log("Not Found page loaded");
  }, []);

  return (
    <section className="notfound">
      <div className="container">
        <div className="notfound__top">
          <a href="/" className="home__link">
            Swoosh Store
          </a>
          <span className="">→</span>
          <p>Страница не найдена</p>
        </div>
      </div>
      <div className="container notfound__hero">
        <div className="notfound__left">
          <h1 className="notfound__title">
            Ошибка
            <span className="notfound__line"></span>
          </h1>
          <h1 className="notfound__subtitle">такая Страница не найдена</h1>
          <p className="notfound__text">
            Запрашиваемая страница не найдена. Возможно она была удалена, либо
            её адрес был изменен. Попробуйте воспользоваться поиском.
          </p>
          <form
            className="notfound__search"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="input__wrapper">
              <input
                type="text"
                id="search"
                className="notfound__input"
                placeholder=" "
                required
              />
              <label htmlFor="search">Поиск по каталогу...</label>
              <button type="submit" className="notfound__search--btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
          <button
            className="notfound__btn"
            onClick={() => (window.location.href = "/")}
          >
            На главную <span className="notfound__arrow">→</span>
          </button>
        </div>
        <div className="notfound__right">
          <img src={img1} alt="Not Found" />
        </div>
      </div>
    </section>
  );
}

export default NotFound;
