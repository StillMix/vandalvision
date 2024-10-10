import React, { useState, useEffect } from "react";
import "./AdminPopupCard.css";
import NewImg from "../../images/Admin/newImg.svg";
import Arc from "../../images/Admin/arc.svg";
import Colorses from "../../images/Admin/capel.svg";
import Razmer from "../../images/Admin/razmer.svg";
import Star from "../../images/Admin/star.svg";
import AdminPopupCardImg from "../AdminPopupCardImg/AdminPopupCardImg";

function AdminPopupCard(props) {
  const op = props.op || {};

  const [formValues, setFormValues] = useState({
    NameInput: op.name ? op.name : "",
    ArcInput: op.arc ? op.arc : "",
    ColorsInput: op.colors ? op.colors : "",
    RazmerInput: op.razm ? op.razm : "",
    ImgInput: op.img ? op.img : "",
    DiffInput: op.difficulty ? op.difficulty : "",
  });
  const [close, setClose] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [openImg, setOpenImg] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 10); // Задержка для плавного появления
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  return (
    <div
      className={`adminpopupcard ${isMounted && !close ? "in" : "out"} ${
        openImg ? "imgOpen" : ""
      }`}
    >
      <div className="adminpopupcard__popup">
        <button
          onClick={() => {
            setOpenImg(true);
          }}
          className={`adminpopupcard__popup__img ${
            formValues.ImgInput ? "" : "adminpopupcard__popup__img__nondisable"
          }`}
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
              Артикул:
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
          <div className="adminpopupcard__popup__container__btns">
            <button
              onClick={() => {
                setClose(true);
                setTimeout(() => {
                  props.setIsopenPopupCard(false);
                  props.setPopupCardOp("");
                }, 500);
              }}
              className="adminpopupcard__popup__container__btns__btn"
            >
              Создать новый файл
            </button>
            <button
              onClick={() => {
                setClose(true);
                setTimeout(() => {
                  props.setIsopenPopupCard(false);
                  props.setPopupCardOp("");
                }, 500);
              }}
              className="adminpopupcard__popup__container__btns__btn"
            >
              Отменить создание
            </button>
          </div>
        </div>
        {openImg && (
          <AdminPopupCardImg
            setForm={setFormValues}
            op={formValues.ImgInput}
            setCloseImg={setOpenImg}
          />
        )}
      </div>
    </div>
  );
}

export default AdminPopupCard;
