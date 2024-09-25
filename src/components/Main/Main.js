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
import SearchW from "../../images/Main/searchW.svg";
import ErrG from "../../images/Main/errG.svg";
import proverka from "../../images/Main/lilo2.png";
import FullScreen from "../../images/Main/fullScreen.svg";
import NoFullScreen from "../../images/Main/noFullScreen.svg";
import Arc from "../../images/Main/arc.svg";
import Razmer from "../../images/Main/razmer.svg";
import Capel from "../../images/Main/capel.svg";
import Star from "../../images/Main/star.svg";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Main() {
  const [formValues, setFormValues] = useState({
    ArticulInput: "",
  });
  const [isQuestOpen, setIsQuestOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isClosingStart, setIsClosingStart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDolg, setIsLoadingDolg] = useState(false);
  const [isFound, setIsFound] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isClosingLoading, setIsClosingLoading] = useState(false);
  const [isClosingErr, setIsClosingErr] = useState(false);
  const [isClosingFound, setIsClosingFound] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isFullScreenAnim, setIsFullScreenAnim] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsClosingStart(true);
    setIsError(false);

    const storedArticul = localStorage.getItem("arc");
    const inputArticul = formValues.ArticulInput.trim().toLowerCase();
    setTimeout(() => {
      setIsClosingLoading(false);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoadingDolg(true);
        setTimeout(() => {
          if (storedArticul && storedArticul.toLowerCase() === inputArticul) {
            setIsFound(false);
            setIsClosingLoading(true);
            setTimeout(() => {
              setIsClosingFound(false);
              setIsLoading(false);
              setIsFound(true);
              setIsLoadingDolg(false);
            }, 500);
          } else {
            setIsFound(false);
            setIsClosingLoading(true);
            setTimeout(() => {
              setIsClosingErr(false);
              setIsLoading(false);
              setIsError(true);
              setIsLoadingDolg(false);
            }, 500);
          }
        }, 2000);
      }, 3000);
    }, 2000);
  }

  function handleOpenQuest() {
    setIsQuestOpen(true);
  }

  function handleCloseQuest() {
    setIsClosing(true);
    setTimeout(() => {
      setIsQuestOpen(false);
      setIsClosing(false);
    }, 500);
  }

  function handleBackToStart() {
    setIsError(false);
    setIsFound(false);
    setIsClosingStart(false);
    setIsLoading(false);
    setFormValues({ ArticulInput: "" });
  }

  function handleBackToStartFromFound() {
    setIsError(false);
    setIsClosingFound(true);
    setTimeout(() => {
      setIsFound(false);
      setIsClosingStart(false);
    }, 500);

    setIsLoading(false);
    setFormValues({ ArticulInput: "" });
  }

    function toggleFullScreen() {
      setIsFullScreenAnim(!isFullScreenAnim);
      setTimeout(() => {
        setIsFullScreen(!isFullScreen);
      }, 500);
  }
  return (
    <div className="main">
      <div className="main__popup">
        {/* Блок начального экрана */}
        {!isLoading && !isFound && !isError && (
          <>
            <div
              className={`main__start ${
                isClosingStart ? "fade-out" : "fade-in"
              }`}
            >
              <div className="main__popup__containerTitle">
                <div className="main__popup__containerTitle__con">
                  <p className="main__popup__containerTitle__con__title">
                    Находите нужное быстро и удобно
                  </p>
                  <p className="main__popup__containerTitle__con__subtitle">
                    и без лишних деталей
                  </p>
                </div>
                <NavLink
                  to="/admin"
                  className="main__popup__containerTitle__navlink"
                >
                  <img
                    src={SingIn}
                    className="main__popup__containerTitle__navlink__img"
                    alt="icon"
                  />
                  Войти как администратор
                </NavLink>
              </div>

              {/* Форма поиска артикула */}
              <form
                onSubmit={handleSubmit}
                className="main__popup__containerInput"
              >
                <input
                  placeholder="Введите артикул"
                  className="main__popup__containerInput__input"
                  type="text"
                  value={formValues.ArticulInput}
                  onChange={handleChange}
                  name="ArticulInput"
                />
                <button
                  type="submit"
                  className="main__popup__containerInput__btn"
                >
                  <img
                    src={Search}
                    className="main__popup__containerInput__btn__img"
                    alt="search"
                  />
                </button>
              </form>

              {/* Дополнительные кнопки */}
              <div className="main__popup__containerBtns">
                <p className="main__popup__containerBtns__title">
                  <img
                    alt="icon"
                    className="main__popup__containerBtns__title__img"
                    src={Img}
                  />
                  Ищите артикул на обратной или лицевой стороне
                </p>
                <button
                  className="main__popup__containerBtns__btn"
                  onClick={handleOpenQuest}
                >
                  <img
                    alt="icon"
                    className="main__popup__containerBtns__btn__img"
                    src={Err}
                  />
                  Не могу найти
                </button>
              </div>
            </div>
          </>
        )}

        {/* Всплывающее окно с подсказкой */}
        {isQuestOpen && (
          <div
            className={`main__popup__containerImgQuest ${
              isClosing ? "fade-out" : "fade-in"
            }`}
          >
            <div
              className={`main__popup__containerImgQuest__popup ${
                isClosing ? "slide-down" : "slide-up"
              }`}
            >
              <img
                alt="img"
                className="main__popup__containerImgQuest__popup__img"
                src={Quest}
              />
              <div className="main__popup__containerImgQuest__popup__containerText">
                <p className="main__popup__containerImgQuest__popup__containerText__title">
                  Найти артикул не сложно
                </p>
                <p className="main__popup__containerImgQuest__popup__containerText__subtitle">
                  Достаточно отыскать соответствующую надпись на задней или
                  лицевой стороне. Это и будет артикул.
                </p>
              </div>
              <div className="main__popup__containerImgQuest__popup__containerBtn">
                <button
                  className="main__popup__containerImgQuest__popup__containerBtn__btn"
                  onClick={handleCloseQuest}
                >
                  <img
                    alt="icon"
                    className="main__popup__containerImgQuest__popup__containerBtn__btn__img"
                    src={Like}
                  />
                  Теперь понятно
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Блок загрузки */}
        {isLoading && (
          <div
            className={`main__loading ${
              isClosingLoading ? "fade-out" : "fade-in"
            }`}
          >
            <p className="main__loading__title">
              <img
                className="main__loading__title__img"
                alt="icon"
                src={SearchW}
              />
              <span className="main__loading__title__span__title">
                Выполняется поиск
              </span>
              <span className="main__loading__title__span">.</span>
              <span className="main__loading__title__span">.</span>
              <span className="main__loading__title__span">.</span>
            </p>
            <p
              className={`main__loading__err ${isLoadingDolg ? "fade-in" : ""}`}
            >
              <img alt="icon" className="main__loading__err__img" src={ErrG} />
              <span>
                Поиск идёт дольше чем ожидалось. Проверьте соединение или
                повторите попытку позже
              </span>
            </p>
          </div>
        )}

        {/* Блок результата поиска */}
        {isFound && (
          <div className="main__imgs">
            <img
              src={proverka}
              alt="result"
              className={`main__imgs__img ${
                isClosingFound ? "slideUpImg" : "slideDownImg"
              }`}
            />
            <div
              className={`main__imgs__op ${
                isClosingFound ? "slideUpImg" : "slideDownImg"
              }`}
            >
              <div className="main__imgs__op__container">
                <p className="main__imgs__op__container__title">Лило и стич</p>
                <div className="main__imgs__op__container__opcon">
                  <div className="main__imgs__op__container__opcon__one">
                    <p className="main__imgs__op__container__opcon__card">
                      <img
                        src={Arc}
                        className="main__imgs__op__container__opcon__card__img"
                        alt="icon"
                      />
                      <span>Артикул: Lilo2</span>
                    </p>
                    <p className="main__imgs__op__container__opcon__card">
                      <img
                        src={Capel}
                        className="main__imgs__op__container__opcon__card__img"
                        alt="icon"
                      />
                      <span>Цветов: 40</span>
                    </p>
                  </div>
                  <div className="main__imgs__op__container__opcon__two">
                    <p className="main__imgs__op__container__opcon__card">
                      <img
                        src={Razmer}
                        className="main__imgs__op__container__opcon__card__img"
                        alt="icon"
                      />
                      <span>Размер: 40x50</span>
                    </p>

                    <p className="main__imgs__op__container__opcon__card">
                      <img
                        src={Star}
                        className="main__imgs__op__container__opcon__card__img"
                        alt="icon"
                      />
                      <span>
                        Сложность: <span>Сложно</span>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="main__imgs__op__container__btns">
                  <button
                    onClick={handleBackToStartFromFound}
                    className="main__imgs__op__container__btns__back"
                  >
                    <img
                      alt="icon"
                      className="main__imgs__op__container__btns__back__img"
                      src={SearchW}
                    />
                    <span>Вернуться к поиску</span>
                  </button>
                  <button onClick={toggleFullScreen} className="main__imgs__op__container__btns__fullscreen">
                    <img
                      alt="icon"
                      src={FullScreen}
                      className="main__imgs__op__container__btns__fullscreen__img"
                    />
                    <span>Развернуть</span>
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        )}

        {/* Блок ошибки */}
        {isError && (
          <div className={`main__err ${isClosingErr ? "fade-out" : "fade-in"}`}>
            <p className="main__err__title">
              Артикул не найден. Попробуйте снова.
            </p>
            <button
              onClick={handleBackToStart}
              className="main__err__back__btn"
            >
              Назад на главную
            </button>
          </div>
        )}
      </div>
      {isFullScreen && (
        <div className={`popupOpenImg`}>
          <TransformWrapper
            defaultScale={1}
            doubleClick={{ mode: "zoomIn" }}
            wheel={{ step: 0.1 }}
            pan={{ disabled: false }} // панорамирование включено
            pinch={{ disabled: false }} // pinch-to-zoom включён
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <TransformComponent>
                  <img
                    alt="img"
                    src={proverka}
                    className={`popupOpenImg__img ${isFullScreenAnim ? "open" : "close"}`}
                  />
                </TransformComponent>
                <div className="popupOpenImg__op">
                  <div className="popupOpenImg__op__containerTitle">
                  <p className="popupOpenImg__op__containerTitle__title">Лило и стич</p>
                <div className="popupOpenImg__op__containerTitle__con">
                  <div className="popupOpenImg__op__containerTitle__con__one">
                    <p className="popupOpenImg__op__containerTitle__con__card">
                      <img
                        src={Arc}
                        className="popupOpenImg__op__containerTitle__con__card__img"
                        alt="icon"
                      />
                      <span>Артикул: Lilo2</span>
                    </p>
                    <p className="popupOpenImg__op__containerTitle__con__card">
                      <img
                        src={Capel}
                        className="popupOpenImg__op__containerTitle__con__card__img"
                        alt="icon"
                      />
                      <span>Цветов: 40</span>
                    </p>
                  </div>
                  <div className="popupOpenImg__op__containerTitle__con__two">
                    <p className="popupOpenImg__op__containerTitle__con__card">
                      <img
                        src={Razmer}
                        className="popupOpenImg__op__containerTitle__con__card__img"
                        alt="icon"
                      />
                      <span>Размер: 40x50</span>
                    </p>

                    <p className="popupOpenImg__op__containerTitle__con__card">
                      <img
                        src={Star}
                        className="popupOpenImg__op__containerTitle__con__card__img"
                        alt="icon"
                      />
                      <span>
                        Сложность: <span>Сложно</span>
                      </span>
                    </p>
                  </div>
                </div>
                  </div>
                  <div className="popupOpenImg__op__containerBtn">
                <button className="popupOpenImg__op__containerBtn__btn" onClick={toggleFullScreen}><img alt="icon" src={NoFullScreen} className="popupOpenImg__op__containerBtn__btn__img"/><span>Свернуть</span></button>
                </div>
                </div>
              </>
            )}
          </TransformWrapper>
        </div>
      )}
      {/* Нижний блок с копирайтом */}
      <div className="main__copyrite">
        <img src={Logo} alt="logo" className="main__copyrite__img" />
        <p className="main__copyrite__text">
          2024 © Copyright. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Main;
