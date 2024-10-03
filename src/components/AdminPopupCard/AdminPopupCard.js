import React, { useState } from "react";
import "./AdminPopupCard.css";
import NewImg from "../../images/Admin/newImg.svg";
import Arc from "../../images/Admin/arc.svg";
import Colorses from "../../images/Admin/capel.svg";
import Razmer from "../../images/Admin/razmer.svg";
import Star from "../../images/Admin/star.svg";

function AdminPopupCard(props) {
  const [formValues, setFormValues] = useState({
    NameInput: props.op.name ? props.op.name : "",
    ArcInput: props.op.arc ? props.op.arc : "",
    ColorsInput: props.op.colors ? props.op.colors : "",
    RazmerInput: props.op.razm ? props.op.razm : "",
    ImgInput: props.op.img ? props.op.img : "",
    DiffInput: props.op.difficulty ? props.op.difficulty : "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  return (
    <div className="adminpopupcard">
      <div className="adminpopupcard__popup">
        <button
          className="adminpopupcard__popup__img"
          style={{ backgroundImage: `url(${formValues.ImgInput})` }}
        >
          <div className="adminpopupcard__popup__img__container">
            <img
              alt="icon"
              className="adminpopupcard__popup__img__container__img"
              src={NewImg}
            />
            <p className="adminpopupcard__popup__img__container__text">
              Загрузить новое изображение
            </p>
          </div>
        </button>
        <div className="adminpopupcard__popup__container">
          <input
            className="adminpopupcard__popup__container__title"
            type="text"
            value={formValues.NameInput}
            onChange={handleChange}
            name="NameInput"
            placeholder="Придумайте название"
          />
          <div className="adminpopupcard__popup__container__element">
            <img
              alt="icon"
              src={Razmer}
              className="adminpopupcard__popup__container__element__img"
            />
            <p className="adminpopupcard__popup__container__element__text">
              Размер:
            </p>
            <input
              className="adminpopupcard__popup__container__element__input"
              type="text"
              value={formValues.ArcInput}
              onChange={handleChange}
              name="ArcInput"
              placeholder="Введите артикул"
            />
          </div>
          <div className="adminpopupcard__popup__container__element">
            <img
              alt="icon"
              src={Colorses}
              className="adminpopupcard__popup__container__element__img"
            />
            <p className="adminpopupcard__popup__container__element__text">
              Цветов:
            </p>
            <input
              className="adminpopupcard__popup__container__element__input"
              type="text"
              value={formValues.ColorsInput}
              onChange={handleChange}
              name="ColorsInput"
              placeholder="Введите количество цветов"
            />
          </div>
          <div className="adminpopupcard__popup__container__element">
            <img
              alt="icon"
              src={Arc}
              className="adminpopupcard__popup__container__element__img"
            />
            <p className="adminpopupcard__popup__container__element__text">
              Размер:
            </p>
            <input
              className="adminpopupcard__popup__container__element__input"
              type="text"
              value={formValues.RazmerInput}
              onChange={handleChange}
              name="RazmerInput"
              placeholder="Введите размер"
            />
          </div>
          <div className="adminpopupcard__popup__container__element">
            <img
              alt="icon"
              src={Star}
              className="adminpopupcard__popup__container__element__img"
            />
            <p className="adminpopupcard__popup__container__element__text">
              Сложность:
            </p>
            <button
              disabled={formValues.DiffInput === "eazy"}
              onClick={() => {
                setFormValues({
                  ...formValues,
                  DiffInput: "eazy",
                });
              }}
              className={`adminpopupcard__popup__container__element__diff ${
                formValues.DiffInput === "eazy" && "green"
              }`}
            >
              Легко
            </button>
            <button
              disabled={formValues.DiffInput === "normal"}
              onClick={() => {
                setFormValues({
                  ...formValues,
                  DiffInput: "normal",
                });
              }}
              className={`adminpopupcard__popup__container__element__diff ${
                formValues.DiffInput === "normal" && "yellow"
              }`}
            >
              Средняя
            </button>
            <button
              disabled={formValues.DiffInput === "hard"}
              onClick={() => {
                setFormValues({
                  ...formValues,
                  DiffInput: "hard",
                });
              }}
              className={`adminpopupcard__popup__container__element__diff ${
                formValues.DiffInput === "hard" && "red"
              }`}
            >
              Сложно
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPopupCard;
