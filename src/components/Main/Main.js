import React, { useState } from "react";
import "./Main.css";
import { NavLink } from "react-router-dom";
import Logo from "../../images/Main/logo.svg";
import SingIn from "../../images/Main/signin.svg";
import Search from "../../images/Main/search.svg";
import Img from "../../images/Main/img.svg";
import Err from "../../images/Main/err.svg";
import Quest from "../../images/Main/imgQuest.png";
import Like from "../../images/Main/like.svg";

function Main() {
  const [formValues, setFormValues] = useState({
    ArticulInput: "",
  });
  const [isQuestOpen, setIsQuestOpen] = useState(false); // Статус открытия окна
  const [isClosing, setIsClosing] = useState(false); // Статус анимации закрытия

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formValues.ArticulInput);
  }

  function handleOpenQuest() {
    setIsQuestOpen(true); // Открыть окно
  }

  function handleCloseQuest() {
    setIsClosing(true); // Запустить анимацию закрытия
    setTimeout(() => {
      setIsQuestOpen(false); // Скрыть окно после завершения анимации
      setIsClosing(false); // Сбросить состояние анимации
    }, 500); // Длительность анимации должна соответствовать CSS-анимации
  }

  return (
    <div className="main">
      <div className="main__popup">
        <div className="main__popup__containerTitle">
          <div className="main__popup__containerTitle__con">
            <p className="main__popup__containerTitle__con__title">
              Находите нужное быстро и удобно
            </p>
            <p className="main__popup__containerTitle__con__subtitle">
              и без лишних деталей
            </p>
          </div>
          <NavLink to="/admin" className="main__popup__containerTitle__navlink">
            <img
              src={SingIn}
              className="main__popup__containerTitle__navlink__img"
              alt="icon"
            />
            Войти как администратор
          </NavLink>
        </div>
        <form onSubmit={handleSubmit} className="main__popup__containerInput">
          <input
            placeholder="Введите артикул"
            className="main__popup__containerInput__input"
            type="text"
            value={formValues.ArticulInput}
            onChange={handleChange}
            name="ArticulInput"
          />
          <button type="submit" className="main__popup__containerInput__btn">
            <img
              src={Search}
              className="main__popup__containerInput__btn__img"
              alt="search"
            />
          </button>
        </form>
        <div className="main__popup__containerBtns">
          <p className="main__popup__containerBtns__title">
            <img alt="icon" className="main__popup__containerBtns__title__img" src={Img} />
            Ищите артикул на обратной или лицевой стороне
          </p>
          <button className="main__popup__containerBtns__btn" onClick={handleOpenQuest}>
            <img alt="icon" className="main__popup__containerBtns__btn__img" src={Err} />
            Не могу найти
          </button>
        </div>

        {/* Всплывающее окно для артикулов */}
        {isQuestOpen && (
          <div
            className={`main__popup__containerImgQuest ${isClosing ? "fade-out" : "fade-in"}`}
          >
            <div
              className={`main__popup__containerImgQuest__popup ${isClosing ? "slide-down" : "slide-up"}`}
            >
              <img alt="img" className="main__popup__containerImgQuest__popup__img" src={Quest} />
              <div className="main__popup__containerImgQuest__popup__containerText">
                <p className="main__popup__containerImgQuest__popup__containerText__title">
                  Найти артикул не сложно
                </p>
                <p className="main__popup__containerImgQuest__popup__containerText__subtitle">
                  Достаточно отыскать соответствующую надпись на задней или лицевой стороне. Это и будет артикул, который и нужно ввести в поиск.
                </p>
              </div>
              <div className="main__popup__containerImgQuest__popup__containerBtn">
                <button
                  className="main__popup__containerImgQuest__popup__containerBtn__btn"
                  onClick={handleCloseQuest}
                >
                  <img alt="icon" className="main__popup__containerImgQuest__popup__containerBtn__btn__img" src={Like} />
                  Теперь понятно
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="main__copyrite">
        <img src={Logo} alt="logo" className="main__copyrite__img" />
        <p className="main__copyrite__text">2024 © Copyright. All right reserved</p>
      </div>
    </div>
  );
}

export default Main;
