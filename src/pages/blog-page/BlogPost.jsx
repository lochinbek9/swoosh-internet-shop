import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BlogPost.css";

function BlogPost() {
  useEffect(() => {
    document.title = "Блог - Полная статья";
    console.log("Blog post page loaded");
  }, []);

  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
          headers: {
            Authorization:
              "KTxUxJqJ7nFe7OCvV2jlECY3Ey0unB1kUB55DV391a6nR551H6LduXEi",
          },
        });
        if (!response.ok) {
          throw new Error("Не удалось загрузить статью");
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="container">Загрузка...</div>;
  }

  if (error) {
    return <div className="container">Ошибка: {error}</div>;
  }

  if (!post) {
    return <div className="container">Статья не найдена</div>;
  }

  return (
    <main className="main">
      <div className="container main__container">
        <div className="blog__top">
          <a href="/" className="home__link">
            Swoosh Store
          </a>
          <span className="">→</span>
          <a href="/" className="">
            {" "}
            Блог
          </a>
          <span className="">→</span>
          <p>Полная статья</p>
        </div>
        <h1 className="blog__post__title">{post.alt || "Заголовок статьи"}</h1>
        <p className="blog__post__text">
          Подбор обуви для повседневной носки – важный аспект, который
          определяет комфорт и стильность вашего образа. Среди множества
          вариантов обуви кроссовки занимают особое место. С их появлением в
          спортивной индустрии кроссовки перешли долгий путь от
          специализированной спортивной обуви к популярному элементу гардероба.
          В данной статье мы рассмотрим плюсы и минусы использования кроссовок в
          качестве повседневной обуви.
        </p>
        <img
          src={post.src.large}
          alt={post.alt || "Изображение"}
          className="blog__post__image"
        />
        <h1 className="blog__post__subtitle1">Плюсы</h1>
        <p className="blog__post__text1">
          <strong>Комфорт и поддержка:</strong> Кроссовки изначально
          разрабатывались для активных видов спорта, таких как бег и тренировки.
          Это означает, что они обеспечивают хорошую амортизацию и поддержку
          стопы. Когда вы носите кроссовки как повседневную обувь, вы получаете
          высокий уровень комфорта даже в течение долгого времени. <br /> <br />{" "}
          <strong>Стиль и разнообразие:</strong> Современные кроссовки
          предлагают огромное разнообразие дизайнов, цветов и стилей. Они могут
          быть идеальным дополнением к различным нарядам, от спортивных до
          повседневных и даже некоторых более формальных. <br /> <br />{" "}
          <strong>Прочность и долговечность:</strong> Кроссовки, как правило,
          изготовлены из высококачественных материалов, которые позволяют им
          выдерживать активное использование. Это делает их долговечными и
          позволяет сохранить первоначальный вид на протяжении длительного
          времени. <br /> <br /> <strong>Активный образ жизни:</strong> Если ваш
          образ жизни активен и включает в себя физические нагрузки или даже
          длительные прогулки, кроссовки могут быть идеальным выбором. Они
          поддерживают вашу стопу и способствуют комфортному передвижению.
        </p>
        <h1 className="blog__post__subtitle2">Минусы</h1>
        <p className="blog__post__text2">
          <strong>Неформальность:</strong> Хотя современные кроссовки стали
          более стильными, они всё равно часто ассоциируются с неформальностью.
          В некоторых профессиональных или формальных ситуациях кроссовки могут
          быть неуместны. <br /> <br />{" "}
          <strong>Ограниченная вентиляция:</strong> В зависимости от модели и
          материалов, кроссовки могут обладать ограниченной вентиляцией. Это
          может привести к неприятному запаху ног и дискомфорту в жаркую погоду.
          <br /> <br />{" "}
          <strong>
            Неидеально подходящие для определенных видов образов:
          </strong>{" "}
          В некоторых стилях одежды кроссовки могут выглядеть неподходяще.
          Например, при носке формальных или классических нарядов. <br /> <br />{" "}
          <strong>Износ подошвы:</strong> Если кроссовки активно используются
          как повседневная обувь, их подошва может быстрее изнашиваться по
          сравнению с другими типами обуви. Это может потребовать более частой
          замены пары.
        </p>
        <h1 className="blog__post__subtitle3">Выводы</h1>
        <p className="blog__post__text3">
          Кроссовки как повседневная обувь имеют как свои плюсы, так и минусы.
          Они обеспечивают высокий уровень комфорта, стильный внешний вид и
          подходят для активного образа жизни. Однако их неформальный характер и
          ограниченная подходящесть к некоторым стилям нарядов могут стать
          ограничениями. Важно сбалансировать выбор обуви в зависимости от
          конкретных ситуаций и предпочтений, чтобы сочетать стиль, комфорт и
          функциональность.
        </p>
      </div>
      <hr />
      <div className="blog__post__socials container">
        <h3 className="socials__title">Поделиться:</h3>
        <a
          href="http://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i className="fa-brands fa-square-instagram"></i>
        </a>
        <a href="http://vk.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-vk"></i>
        </a>
      </div>
    </main>
  );
}

export default BlogPost;
