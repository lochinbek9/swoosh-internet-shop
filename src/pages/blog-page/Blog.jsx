import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

function Blog() {
  useEffect(() => {
    document.title = "Блог";
    console.log("Blog page loaded");
  }, []);

  const totalPages = 231;
  const postsPerPage = 10;
  const visiblePages = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("все публикации");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${postsPerPage}`,
          {
            headers: {
              Authorization:
                "KTxUxJqJ7nFe7OCvV2jlECY3Ey0unB1kUB55DV391a6nR551H6LduXEi",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Не удалось загрузить посты");
        }
        const data = await response.json();
        const categorizedPosts = data.photos.map((photo) => {
          const altText = photo.alt?.toLowerCase() || "";
          let category = "все публикации";
          if (altText.includes("news") || altText.includes("новости")) {
            category = "Новости";
          } else if (
            altText.includes("article") ||
            altText.includes("статья")
          ) {
            category = "Статьи";
          } else if (altText.includes("advice") || altText.includes("совет")) {
            category = "Советы";
          } else if (altText.includes("review") || altText.includes("обзор")) {
            category = "Обзоры";
          }
          return { ...photo, category };
        });
        setPosts(categorizedPosts);
        setFilteredPosts(categorizedPosts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [currentPage]);

  useEffect(() => {
    if (selectedCategory === "все публикации") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(
        (post) => post.category === selectedCategory
      );
      setFilteredPosts(filtered);
    }
  }, [selectedCategory, posts]);

  const changePage = (step) => {
    const newPage = currentPage + step;
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const updatePagination = () => {
    let pages = [];
    let startPage = currentPage - Math.floor(visiblePages / 2);
    let endPage = currentPage + Math.floor(visiblePages / 2);

    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(visiblePages, totalPages);
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, totalPages - visiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`page__number ${i === currentPage ? "active" : ""}`}
          onClick={() => goToPage(i)}
          aria-label={`Страница ${i}`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      pages.push(<span key="dots">...</span>);
      pages.push(
        <button
          key={totalPages}
          className="page__number"
          onClick={() => goToPage(totalPages)}
          aria-label={`Страница ${totalPages}`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  if (loading) {
    return <div className="container">Загрузка...</div>;
  }

  if (error) {
    return <div className="container">Ошибка: {error}</div>;
  }

  return (
    <main className="main">
      <div className="container main__container">
        <div className="blog__top">
          <a href="/" className="home__link">
            Swoosh Store
          </a>
          <span className="">→</span>
          <p>Блог</p>
        </div>
        <h1 className="blog__title">Блог</h1>
        <div className="blog__content">
          <div className="blog__posts">
            {filteredPosts.map((post) => (
              <div key={post.id} className="blog__item">
                <Link to={`/blog/${post.id}`}>
                  <div className="blog__item__image">
                    <img
                      src={post.src.medium}
                      alt={post.alt || "Изображение"}
                    />
                    <div className="blog__item__overlay"></div>
                    <div className="blog__item__info">
                      <span className="blog__item__category">
                        {post.category}
                      </span>
                      <h3 className="blog__item__title">
                        {post.alt || "Заголовок поста"}
                      </h3>
                      <span className="blog__item__date">10 августа 2023</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <aside className="blog__sidebar">
            <div className="sidebar__section">
              <h3 className="sidebar__title">Рубрики</h3>
              <ul className="sidebar__list">
                <li
                  className={`sidebar__item ${
                    selectedCategory === "все публикации" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("все публикации")}
                >
                  все публикации <span className="sidebar__count">123</span>
                </li>
                <li
                  className={`sidebar__item ${
                    selectedCategory === "Новости" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("Новости")}
                >
                  Новости <span className="sidebar__count">34</span>
                </li>
                <li
                  className={`sidebar__item ${
                    selectedCategory === "Статьи" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("Статьи")}
                >
                  Статьи <span className="sidebar__count">99</span>
                </li>
                <li
                  className={`sidebar__item ${
                    selectedCategory === "Советы" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("Советы")}
                >
                  Советы <span className="sidebar__count">14</span>
                </li>
                <li
                  className={`sidebar__item ${
                    selectedCategory === "Обзоры" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("Обзоры")}
                >
                  Обзоры <span className="sidebar__count">2</span>
                </li>
              </ul>
            </div>
            <div className="sidebar__section2">
              <h3 className="sidebar__title">Подписаться на рассылку</h3>
              <p className="sidebar__text">
                Регулярные скидки и спецпредложения, а так же новости компании.
              </p>
              <form className="sidebar__form">
                <input
                  type="email"
                  placeholder="Ваш Email"
                  className="sidebar__input"
                  required
                />
                <button className="sidebar__button">Подписаться</button>
                <p className="sidebar__disclaimer">
                  Согласен с
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sidebar__link"
                  >
                    политикой конфиденциальности
                  </a>
                </p>
              </form>
            </div>
          </aside>
        </div>
        <div className="pagination">
          <button
            onClick={() => changePage(-1)}
            disabled={currentPage === 1}
            aria-label="Предыдущая страница"
            className="pagination__arrow"
          >
            ← Назад
          </button>
          <div className="page__numbers">{updatePagination()}</div>
          <button
            onClick={() => changePage(1)}
            disabled={currentPage === totalPages}
            aria-label="Следующая страница"
            className="pagination__arrow"
          >
            Далее →
          </button>
        </div>
      </div>
    </main>
  );
}

export default Blog;
