import React from "react";
import "./MainImg.css";
import SearchW from "../../images/Main/searchW.svg";
import proverka from "../../images/Main/lilo2.png";
import FullScreen from "../../images/Main/fullScreen.svg";
import Arc from "../../images/Main/arc.svg";
import Razmer from "../../images/Main/razmer.svg";
import Capel from "../../images/Main/capel.svg";
import Star from "../../images/Main/star.svg";

function MainImg(props) {

  function toggleFullScreen() {
    props.setIsFullScreenAnim(!props.isFullScreenAnim);
    props.setIsPopup(true)
    setTimeout(() => {
      props.setIsFullScreen(!props.isFullScreen);
    }, 2000);
  }
  function handleBackToStartFromFound() {
    props.setIsError(false);
    props.setIsFirst(true)
    props.setIsClosingAnimImage(true); // Начинаем анимацию закрытия

    setTimeout(() => {

      setTimeout(() => {
        props.setIsFound(false);
        props.setIsClosingAnimImage(false); // Сбрасываем анимацию
        props.setIsClosingFound(true);
        props.setIsClosingStart(false);
        props.setIsClosingFound(false);
      }, 500); // Даем время для проигрывания анимации
    }, 500);

    props.setIsLoading(false);
    props.setFormValues({ ArticulInput: "" });
  }

  return (
    <div className={`main__imgs ${
      props.isFullScreenAnim ? "openImg" : props.isFirst ? null : "closeImg"
    }`}>
      <img
        src={proverka}
        alt="result"
        className={`main__imgs__img ${
          props.isCloasingAnimImage ? "slideUpImg" : "slideDownImg"
        } ${
          props.isFullScreenAnim ? "openImg" : props.isFirst ? null : "closeImg"
        }`}
      />

      <div
        className={`main__imgs__op ${
          props.isCloasingAnimImage ? "slideUpImg" : "slideDownImg"
        } ${
          props.isFullScreenAnim ? "openImg" : props.isFirst ? "" : "closeImg"

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
            <button
              onClick={toggleFullScreen}
              className="main__imgs__op__container__btns__fullscreen"
            >
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
  );
}

export default MainImg;
