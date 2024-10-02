import React, { useState } from "react";
import "./Main.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/Main/logo.svg";
import SingIn from "../../images/Main/signin.svg";
import Search from "../../images/Main/search.svg";
import Img from "../../images/Main/img.svg";
import Err from "../../images/Main/err.svg";
import MainPopup from "../MainPopup/MainPopup";
import MainLoading from "../MainLoading/MainLoading";
import MainPopupImg from "../MainPopupImg/MainPopupImg";
import MainImg from "../MainImg/MainImg";
import MainErr from "../MainErr/MainErr";

function Main() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    ArticulInput: "",
  });
  const [isCloasingAnimImage, setIsClosingAnimImage] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [isQuestOpen, setIsQuestOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isClosingStart, setIsClosingStart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDolg, setIsLoadingDolg] = useState(false);
  const [isFound, setIsFound] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isClosingLoading, setIsClosingLoading] = useState(false);
  const [isClosingErr, setIsClosingErr] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
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
  function handleNavLinkClick() {
    setIsClosingStart(true);
    setTimeout(() => {
      navigate("/signin");
    }, 1000); // Замените 1000 на продолжительность вашей анимации в миллисекундах
  }
  function handleOpenQuest() {
    setIsQuestOpen(true);
  }

  return (
    <div className="main">
      <div className={`${isPopup ? "main__popup_vis" : "main__popup"}`}>
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
                <button
                  onClick={handleNavLinkClick}
                  className="main__popup__containerTitle__navlink"
                >
                  <img
                    src={SingIn}
                    className="main__popup__containerTitle__navlink__img"
                    alt="icon"
                  />
                  Войти как администратор
                </button>
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
          <MainPopup
            setIsClosing={setIsClosing}
            setIsQuestOpen={setIsQuestOpen}
            isClosing={isClosing}
          />
        )}

        {/* Блок загрузки */}
        {isLoading && (
          <MainLoading
            isClosingLoading={isClosingLoading}
            isLoadingDolg={isLoadingDolg}
          />
        )}

        {/* Блок результата поиска */}
        {isFound && (
          <MainImg
            setIsPopup={setIsPopup}
            isCloasingAnimImage={isCloasingAnimImage}
            setIsClosingAnimImage={setIsClosingAnimImage}
            isFirst={isFirst}
            setIsFirst={setIsFirst}
            setIsFullScreenAnim={setIsFullScreenAnim}
            setIsFullScreen={setIsFullScreen}
            isFullScreenAnim={isFullScreenAnim}
            isFullScreen={isFullScreen}
            setIsError={setIsError}
            setIsClosingFound={setIsClosingFound}
            setIsClosingStart={setIsClosingStart}
            setIsLoading={setIsLoading}
            setFormValues={setFormValues}
            setIsFound={setIsFound}
          />
        )}

        {/* Блок ошибки */}
        {isError && (
          <MainErr
            setIsError={setIsError}
            setIsFound={setIsFound}
            setIsClosingStart={setIsClosingStart}
            setIsLoading={setIsLoading}
            setFormValues={setFormValues}
            isClosingErr={isClosingErr}
          />
        )}
      </div>
      {isFullScreen && (
        <MainPopupImg
          setIsPopup={setIsPopup}
          isFirst={isFirst}
          setIsFirst={setIsFirst}
          setIsFullScreenAnim={setIsFullScreenAnim}
          setIsFullScreen={setIsFullScreen}
          isFullScreenAnim={isFullScreenAnim}
          isFullScreen={isFullScreen}
          isClosingFound={isClosingFound}
        />
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
