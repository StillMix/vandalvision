import React, { useState } from "react";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/Admin/logo.svg";
import SignInIcon from "../../images/Admin/signin.svg";
import NewFile from "../../images/Admin/newfile.svg";
import Person from "../../images/Admin/person.svg";
import Lilo from "../../images/Admin/lilo2.png";
import Arc from "../../images/Admin/arc.svg";
import Colorses from "../../images/Admin/capel.svg";
import Razmer from "../../images/Admin/razmer.svg";
import Star from "../../images/Admin/star.svg";
import Menu from "../../images/Admin/menu.svg";
import Arrow from "../../images/Admin/arrow.svg";
import AdminPopupCard from "../AdminPopupCard/AdminPopupCard";
import AdminPopupPersons from "../AdminPopupPersons/AdminPopupPersons";

function Admin() {
  const navigate = useNavigate();

  const [admins, setAdmins] = useState(true);

  const [isClosingStart, setIsClosingStart] = useState(false);
  const [isFormStart, setIsFormStart] = useState(false);
  const [isFirstForm, setIsFirstForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [isOpenPopupCard, setIsopenPopupCard] = useState(false);
  const [PopupCardOp, setPopupCardOp] = useState(null);
  const [isPersonOpen, setIsPersonOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpenPopup, setIsMenuOpenPopup] = useState(false);
  const [isMenuOpenOne, setIsMenuOpenOne] = useState(false);

  const card = [
    {
      id: 1,
      img: Lilo,
      name: "Лило и стич",
      arc: "Lilo2222222222222",
      razm: "45x55",
      colors: 54,
      difficulty: "eazy",
    },
    {
      id: 2,
      img: Lilo,
      name: "Лило и стич 2",
      arc: "Lilo2",
      razm: "45x50",
      colors: 50,
      difficulty: "eazy",
    },
    {
      id: 3,
      img: Lilo,
      name: "Лило и стич 3",
      arc: "Lilo3",
      razm: "40x50",
      colors: 45,
      difficulty: "normal",
    },
    {
      id: 4,
      img: Lilo,
      name: "Лило и стич 4",
      arc: "Lilo4",
      razm: "40x45",
      colors: 40,
      difficulty: "normal",
    },
    {
      id: 5,
      img: Lilo,
      name: "Лило и стич 5",
      arc: "Lilo5",
      razm: "35x45",
      colors: 35,
      difficulty: "hard",
    },
    {
      id: 6,
      img: Lilo,
      name: "Лило и стич 6",
      arc: "Lilo6",
      razm: "35x40",
      colors: 30,
      difficulty: "hard",
    },
    {
      id: 7,
      img: Lilo,
      name: "Лило и стич 7",
      arc: "Lilo7",
      razm: "30x40",
      colors: 35,
      difficulty: "hard",
    },
    {
      id: 8,
      img: Lilo,
      name: "Лило и стич 8",
      arc: "Lilo8",
      razm: "30x35",
      colors: 30,
      difficulty: "hard",
    },
  ];
  function handleSubmit() {
    if (isMenuOpen) {
      setIsMenuOpenOne(true);
      setIsMenuOpenPopup(false);
      setTimeout(() => {
        setTimeout(() => {
          setIsFirstForm(true);
          setIsClosingStart(true);
          setIsFormStart(true);
          setTimeout(() => {
            navigate("/signin");
          }, 2000);
        }, 800);
        setIsMenuOpen(false);
      }, 800);
    }
  }

  const filteredCards = card.filter((i) =>
    i.arc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="admin for1024">
        <div
          className={`admin__popup ${
            isFormStart ? "fade-out" : isFirstForm ? "fade-in" : null
          }`}
        >
          <div
            className={`admin__start ${
              isClosingStart ? "fade-out" : "fade-in"
            }`}
          >
            <div className="admin__start__header">
              <p className="admin__start__header__title">
                Панель администратора
                <span>
                  {admins ? "Senior Administrator" : "Standard employee"}
                </span>
              </p>
              <button
                type="button"
                onClick={handleSubmit}
                className="admin__start__header__btn"
              >
                <img
                  alt="icon"
                  className="admin__start__header__btn__img"
                  src={SignInIcon}
                />
                Выйти из панели администратора
              </button>
            </div>
            <div className="admin__start__btns">
              <input
                placeholder="Поиск артикуля"
                type="text"
                className="admin__start__btns__input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                onClick={() => {
                  setIsopenPopupCard(true);
                }}
                className="admin__start__btns__new"
              >
                <img
                  alt="icon"
                  src={NewFile}
                  className="admin__start__btns__new__img"
                />
                <span className="admin__start__btns__new__span">
                  Создать новый файл
                </span>
              </button>
              {admins ? (
                <button
                  onClick={() => {
                    setIsPersonOpen(true);
                  }}
                  className="admin__start__btns__person"
                >
                  <img
                    alt="icon"
                    src={Person}
                    className="admin__start__btns__person__img"
                  />
                  <span className="admin__start__btns__person__span">
                    Сотрудники
                  </span>
                </button>
              ) : null}
            </div>
            <div className="admin__start__cards">
              {filteredCards.map((i) => (
                <div key={i.id} className="admin__start__cards__card">
                  <img
                    alt="cardImg"
                    src={i.img}
                    className="admin__start__cards__card__img"
                  />
                  <div className="admin__start__cards__card__conimg"> </div>
                  <div className="admin__start__cards__card__opcon">
                    <p className="admin__start__cards__card__opcon__title">
                      {i.name}
                    </p>
                    <div className="admin__start__cards__card__opcon_op">
                      <div className="admin__start__cards__card__opcon_op__containerone">
                        <p className="admin__start__cards__card__opcon_op__containerone__text">
                          <img
                            alt="icon"
                            src={Razmer}
                            className="admin__start__cards__card__opcon_op__containerone__text__img"
                          />
                          <span className="admin__start__cards__card__opcon_op__containerone__text__span">
                            Артикул: {i.arc}
                          </span>
                        </p>
                        <p className="admin__start__cards__card__opcon_op__containerone__text">
                          <img
                            alt="icon"
                            src={Colorses}
                            className="admin__start__cards__card__opcon_op__containerone__text__img"
                          />
                          <span className="admin__start__cards__card__opcon_op__containerone__text__span">
                            Цветов: {i.colors}
                          </span>
                        </p>
                      </div>
                      <div className="admin__start__cards__card__opcon_op__containertwo">
                        <p className="admin__start__cards__card__opcon_op__containertwo__text">
                          <img
                            alt="icon"
                            src={Arc}
                            className="admin__start__cards__card__opcon_op__containertwo__text__img"
                          />
                          <span className="admin__start__cards__card__opcon_op__containertwo__text__span">
                            Размер: {i.razm}
                          </span>
                        </p>
                        <p className="admin__start__cards__card__opcon_op__containertwo__text">
                          <img
                            alt="icon"
                            src={Star}
                            className="admin__start__cards__card__opcon_op__containertwo__text__img"
                          />
                          <span className="admin__start__cards__card__opcon_op__containertwo__text__span">
                            Сложность:
                            <span
                              className={`admin__start__cards__card__opcon_op__containertwo__text__span__diff ${
                                i.difficulty === "hard" && "red"
                              } ${i.difficulty === "normal" && "yellow"} ${
                                i.difficulty === "eazy" && "green"
                              }`}
                            >
                              {i.difficulty === "hard" && "Сложно"}{" "}
                              {i.difficulty === "normal" && "Средняя"}{" "}
                              {i.difficulty === "eazy" && "Легко"}
                            </span>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="admin__start__cards__card__opcon__btns">
                      <button
                        className="admin__start__cards__card__opcon__btns__btn"
                        onClick={() => {
                          setIsopenPopupCard(true);
                          setPopupCardOp(i);
                        }}
                      >
                        Редактировать
                      </button>
                      <button className="admin__start__cards__card__opcon__btns__btn">
                        Удалить
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {isOpenPopupCard ? (
            <AdminPopupCard
              setPopupCardOp={setPopupCardOp}
              setIsopenPopupCard={setIsopenPopupCard}
              op={PopupCardOp}
            />
          ) : null}
          {isPersonOpen ? (
            <AdminPopupPersons setIsPersonOpen={setIsPersonOpen} />
          ) : null}
        </div>
        <div className="admin__copyrite">
          <img src={Logo} alt="logo" className="admin__copyrite__img" />
          <p className="admin__copyrite__text">
            2024 © Copyright. All rights reserved
          </p>
        </div>
      </div>
      <div className="admin for768">
        <div
          className={`admin__popup ${
            isFormStart ? "fade-out" : isFirstForm ? "fade-in" : null
          }`}
        >
          <div
            className={`admin__start ${
              isClosingStart ? "fade-out" : "fade-in"
            }`}
          >
            <div className="admin__start__header">
              <p className="admin__start__header__title">
                Панель администратора
                <span>{admins ? "SA" : "SE"}</span>
              </p>
              <button
                className="admin__start__header__btn"
                onClick={() => {
                  setIsMenuOpen(true);
                  setTimeout(() => {
                    setIsMenuOpenPopup(true);
                  }, 800);
                }}
              >
                <img
                  src={Menu}
                  className="admin__start__header__btn__img"
                  alt="icon"
                />
              </button>
            </div>
            <div className="admin__start__btns">
              <input
                placeholder="Поиск артикуля"
                type="text"
                className="admin__start__btns__input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="admin__start__cards">
              {filteredCards.map((i) => (
                <div
                  key={i.id}
                  style={{
                    backgroundImage: `url(${i.img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="admin__start__cards__card"
                >
                  <div className="admin__start__cards__card_backimg"> </div>
                  <div className="admin__start__cards__card__conimg"> </div>
                  <div className="admin__start__cards__card__opcon">
                    <p className="admin__start__cards__card__opcon__title">
                      {i.name}
                    </p>
                    <div className="admin__start__cards__card__opcon_op">
                      <div className="admin__start__cards__card__opcon_op__containerone">
                        <p className="admin__start__cards__card__opcon_op__containerone__text">
                          <img
                            alt="icon"
                            src={Razmer}
                            className="admin__start__cards__card__opcon_op__containerone__text__img"
                          />
                          <span className="admin__start__cards__card__opcon_op__containerone__text__span">
                            Артикул: {i.arc}
                          </span>
                        </p>
                        <p className="admin__start__cards__card__opcon_op__containerone__text">
                          <img
                            alt="icon"
                            src={Colorses}
                            className="admin__start__cards__card__opcon_op__containerone__text__img"
                          />
                          <span className="admin__start__cards__card__opcon_op__containerone__text__span">
                            Цветов: {i.colors}
                          </span>
                        </p>
                      </div>
                      <div className="admin__start__cards__card__opcon_op__containertwo">
                        <p className="admin__start__cards__card__opcon_op__containertwo__text">
                          <img
                            alt="icon"
                            src={Arc}
                            className="admin__start__cards__card__opcon_op__containertwo__text__img"
                          />
                          <span className="admin__start__cards__card__opcon_op__containertwo__text__span">
                            Размер: {i.razm}
                          </span>
                        </p>
                        <p className="admin__start__cards__card__opcon_op__containertwo__text">
                          <img
                            alt="icon"
                            src={Star}
                            className="admin__start__cards__card__opcon_op__containertwo__text__img"
                          />
                          <span className="admin__start__cards__card__opcon_op__containertwo__text__span">
                            Сложность:
                            <span
                              className={`admin__start__cards__card__opcon_op__containertwo__text__span__diff ${
                                i.difficulty === "hard" && "red"
                              } ${i.difficulty === "normal" && "yellow"} ${
                                i.difficulty === "eazy" && "green"
                              }`}
                            >
                              {i.difficulty === "hard" && "Сложно"}{" "}
                              {i.difficulty === "normal" && "Средняя"}{" "}
                              {i.difficulty === "eazy" && "Легко"}
                            </span>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="admin__start__cards__card__opcon__btns">
                      <button
                        className="admin__start__cards__card__opcon__btns__btn"
                        onClick={() => {
                          setIsopenPopupCard(true);
                          setPopupCardOp(i);
                        }}
                      >
                        Редактировать
                      </button>
                      <button className="admin__start__cards__card__opcon__btns__btn">
                        Удалить
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {isOpenPopupCard ? (
            <AdminPopupCard
              setPopupCardOp={setPopupCardOp}
              setIsopenPopupCard={setIsopenPopupCard}
              op={PopupCardOp}
            />
          ) : null}
          {isPersonOpen ? (
            <AdminPopupPersons setIsPersonOpen={setIsPersonOpen} />
          ) : null}
        </div>

        <div
          className={`admin__popup__menu ${
            isMenuOpen ? "open" : isMenuOpenOne ? "close" : null
          }`}
        >
          <div
            className={`admin__popup__menu__popup ${
              isMenuOpenPopup ? "open" : isMenuOpenOne ? "close" : null
            }`}
          >
            <button
              onClick={() => {
                setIsMenuOpenOne(true);
                setIsMenuOpenPopup(false);
                setTimeout(() => {
                  setIsMenuOpen(false);
                }, 800);
              }}
              className="admin__popup__menu__popup__btn"
            >
              <img
                alt="icon"
                src={Arrow}
                className="admin__popup__menu__popup__btn__img"
              />
            </button>
            <div className="admin__popup__menu__popup__con">
              <p className="admin__popup__menu__popup__con__tip">
                {admins ? "Senior Administrator" : "Standard employee"}
              </p>
              {admins ? (
                <button
                  onClick={() => {
                    setIsMenuOpenOne(true);
                    setIsMenuOpenPopup(false);
                    setTimeout(() => {
                      setTimeout(() => {
                        setIsPersonOpen(true);
                      }, 800);
                      setIsMenuOpen(false);
                    }, 800);
                  }}
                  className="admin__popup__menu__popup__con__btn"
                >
                  <img
                    alt="icon"
                    className="admin__popup__menu__popup__con__btn__img"
                    src={Person}
                  />
                  <span className="admin__popup__menu__popup__con__btn__span">
                    Сотрудники
                  </span>
                </button>
              ) : null}
              <button
                onClick={() => {
                  setIsMenuOpenOne(true);
                  setIsMenuOpenPopup(false);
                  setTimeout(() => {
                    setTimeout(() => {
                      setIsopenPopupCard(true);
                    }, 800);
                    setIsMenuOpen(false);
                  }, 800);
                }}
                className="admin__popup__menu__popup__con__btn"
              >
                <img
                  alt="icon"
                  className="admin__popup__menu__popup__con__btn__img"
                  src={NewFile}
                />
                <span className="admin__popup__menu__popup__con__btn__span">
                  Создать новый файл
                </span>
              </button>
              <button
                onClick={handleSubmit}
                className="admin__popup__menu__popup__con__btn"
              >
                <img
                  alt="icon"
                  className="admin__popup__menu__popup__con__btn__img"
                  src={SignInIcon}
                />
                <span className="admin__popup__menu__popup__con__btn__span">
                  Выйти из панели
                </span>
              </button>
            </div>
            <div className="admin__copyrite">
              <img src={Logo} alt="logo" className="admin__copyrite__img" />
              <p className="admin__copyrite__text">
                2024 © Copyright. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
