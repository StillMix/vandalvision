import React, { useState, useEffect } from "react";
import "./AdminPopupPersons.css";
import Close from "../../images/AdminPopupPersons/close.svg";
import Del from "../../images/AdminPopupPersons/del.svg";
import NoStar from "../../images/AdminPopupPersons/nostar.svg";
import PersonAdd from "../../images/AdminPopupPersons/personAdd.svg";
import Reset from "../../images/AdminPopupPersons/reset.svg";
import Star from "../../images/AdminPopupPersons/star.svg";
import AdminNewPerson from "../AdminNewPerson/AdminNewPerson";
import AdminNewPass from "../AdminNewPass/AdminNewPass";

function AdminPopupPersons(props) {
  const [close, setClose] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMountedPopup, setIsMountedPopup] = useState(false);
  const [openPerson, setOpenPerson] = useState(false);
  const [openPass, setOpenPass] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [openCard, setOpenCard] = useState({});

  const [openMenuPopup, setOpenMenuPopup] = useState(false);
  const [openAnim, setOpenAnim] = useState(false);
  const [openAnimDelay, setOpenAnimDelay] = useState(false);

  const person = [
    {
      id: 1,
      login: "sania223",
      password: "12345678",
      admins: "ok",
    },
    {
      id: 2,
      login: "sani",
      password: "12345678",
      admins: "no",
    },
    {
      id: 3,
      login: "sanei",
      password: "12345678",
      admins: "no",
    },
    {
      id: 4,
      login: "sanei4",
      password: "12345678",
      admins: "ok",
    },
    {
      id: 5,
      login: "sanei4",
      password: "12345678",
      admins: "ok",
    },
    {
      id: 6,
      login: "sanei4",
      password: "12345678",
      admins: "ok",
    },
    {
      id: 7,
      login: "sanei4",
      password: "12345678",
      admins: "ok",
    },
    {
      id: 8,
      login: "sanei4",
      password: "12345678",
      admins: "ok",
    },
    {
      id: 9,
      login: "sanei4",
      password: "12345678",
      admins: "no",
    },
    {
      id: 10,
      login: "sanei4",
      password: "12345678",
      admins: "ok",
    },
    {
      id: 11,
      login: "sanei4",
      password: "12345678",
      admins: "no",
    },
    {
      id: 12,
      login: "sanei4",
      password: "12345678",
      admins: "no",
    },
    {
      id: 13,
      login: "sane44i4",
      password: "12345678",
      admins: "no",
    },

    {
      id: 14,
      login: "san22e44i4",
      password: "12345678",
      admins: "no",
    },
    {
      id: 15,
      login: "san22e44i4",
      password: "12345678",
      admins: "no",
    },

    {
      id: 16,
      login: "san22e44i4",
      password: "12345678",
      admins: "no",
    },
    {
      id: 17,
      login: "san22e44i4",
      password: "12345678",
      admins: "no",
    },
    {
      id: 18,
      login: "san22e44i4",
      password: "12345678",
      admins: "no",
    },
    {
      id: 19,
      login: "san22e44i4",
      password: "12345678",
      admins: "no",
    },
    {
      id: 20,
      login: "san22e44i4",
      password: "12345678",
      admins: "no",
    },
    {
      id: 21,
      login: "san22e44i4",
      password: "12345678",
      admins: "no",
    },
    {
      id: 22,
      login: "san22e44i4",
      password: "12345678",
      admins: "no",
    },
    {
      id: 23,
      login: "san22e44i4",
      password: "12345678",
      admins: "no",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 10); // Задержка для плавного появления
  }, []);

  const filteredPersons = person.filter((p) =>
    p.login.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div
        className={`adminpopupperson ${isMounted && !close ? "in" : "out"} `}
      >
        <div className="for1024 adminpopupperson__popup">
          <div className="adminpopupperson__popup__header">
            <p className="adminpopupperson__popup__header__title">Сотрудники</p>
            <button
              onClick={() => {
                setClose(true);
                setIsMounted(false);
                setTimeout(() => {
                  props.setIsPersonOpen(false);
                }, 500);
              }}
              className="adminpopupperson__popup__header__btn"
            >
              <img
                alt="icon"
                className="adminpopupperson__popup__header__btn__img"
                src={Close}
              />
              <span className="adminpopupperson__popup__header__btn__span">
                Закрыть панель
              </span>
            </button>
          </div>
          <div className="adminpopupperson__popup__inputs">
            <input
              type="text"
              placeholder="Поиск сотрудников"
              className="adminpopupperson__popup__inputs__input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={() => {
                setOpenPerson(true);
              }}
              className="adminpopupperson__popup__inputs__btn"
            >
              <img
                alt="icon"
                className="adminpopupperson__popup__inputs__btn__img"
                src={PersonAdd}
              />
              <span className="adminpopupperson__popup__inputs__btn__span">
                Добавить сотрудника
              </span>
            </button>
          </div>
          <div className="adminpopupperson__popup__cards">
            <table>
              <thead>
                <tr>
                  <th>Имя сотрудника</th>
                  <th>Тип аккаунта</th>
                  <th>Действие с аккаунтом</th>
                </tr>
              </thead>
              <tbody>
                {filteredPersons.length === 0 ? (
                  <tr>
                    <td colSpan="3">Сотрудники не найдены</td>
                  </tr>
                ) : (
                  filteredPersons.map((i) => (
                    <tr key={i.id}>
                      <td>{i.login}</td>
                      <td>
                        {i.admins === "ok"
                          ? "Высший администратор"
                          : "Стандартный сотрудник"}
                      </td>
                      <td>
                        <button>
                          <img
                            alt="star"
                            src={i.admins === "ok" ? NoStar : Star}
                          />
                          <span>
                            {i.admins === "ok"
                              ? `Понизить до стандартного`
                              : `Повысить до высшего`}
                          </span>
                        </button>
                        <button
                          onClick={() => {
                            setOpenPass(true);
                          }}
                        >
                          <img alt="reset" src={Reset} />
                          <span>Сбросить пароль</span>
                        </button>
                        <button>
                          <img alt="del" src={Del} />
                          <span>Удалить аккаунт</span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div
          className={`for728 adminpopupperson__popup ${
            isMountedPopup && !close ? "in" : "out"
          }`}
        >
          <div className="adminpopupperson__popup__header">
            <p className="adminpopupperson__popup__header__title">Сотрудники</p>
            <button
              onClick={() => {
                setClose(true);
                setIsMountedPopup(false);
                setTimeout(() => {
                  setIsMounted(false);
                  setTimeout(() => {
                    props.setIsPersonOpen(false);
                  }, 500);
                }, 800);
              }}
              className="adminpopupperson__popup__header__btn"
            >
              <img
                alt="icon"
                className="adminpopupperson__popup__header__btn__img"
                src={Close}
              />
              <span className="adminpopupperson__popup__header__btn__span">
                Закрыть панель
              </span>
            </button>
          </div>
          <div className="adminpopupperson__popup__inputs">
            <input
              type="text"
              placeholder="Поиск сотрудников"
              className="adminpopupperson__popup__inputs__input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={() => {
                setOpenPerson(true);
              }}
              className="adminpopupperson__popup__inputs__btn"
            >
              <img
                alt="icon"
                className="adminpopupperson__popup__inputs__btn__img"
                src={PersonAdd}
              />
              <span className="adminpopupperson__popup__inputs__btn__span">
                Добавить сотрудника
              </span>
            </button>
          </div>
          <div className="adminpopupperson__popup__cards">
            {filteredPersons.length === 0 ? (
              <div className="adminpopupperson__popup__cards__err">
                <p
                  className="adminpopupperson__popup__cards__err__text"
                  colSpan="3"
                >
                  Сотрудники не найдены
                </p>
              </div>
            ) : (
              filteredPersons.map((i) => (
                <div
                  className="adminpopupperson__popup__cards__card"
                  key={i.id}
                >
                  <p className="adminpopupperson__popup__cards__card__title">
                    {i.login}
                  </p>
                  <div className="adminpopupperson__popup__cards__card__title__bck"></div>
                  <p className="adminpopupperson__popup__cards__card__subtitle">
                    {i.admins === "ok" ? "SE" : "SA"}
                  </p>

                  <button
                    className="adminpopupperson__popup__cards__card__btn"
                    onClick={() => {
                      setOpenCard(i);
                      setOpenMenuPopup(true);
                      setOpenAnim(true);
                    }}
                  >
                    Редактировать
                  </button>
                </div>
              ))
            )}
          </div>
  {openMenuPopup ? (
          <div className={`adminpopupperson__popup__popupmenu__bck ${openAnim && !openAnimDelay ? "in" :  "out"}`}>
          <div className={`adminpopupperson__popup__popupmenu  ${openAnim ? "in" : "out"}`}>
            <p className="adminpopupperson__popup__popupmenu__login">
              {openCard ? openCard.login : ""}
            </p>
            <p className="adminpopupperson__popup__popupmenu__tip">
              {" "}
              {openCard.admins === "ok"
                ? "Высший администратор"
                : "Стандартный сотрудник"}
            </p>
            <div>
            <button className="adminpopupperson__popup__popupmenu__btn">
              <img
                className="adminpopupperson__popup__popupmenu__btn__img"
                alt="star"
                src={openCard.admins === "ok" ? NoStar : Star}
              />
              <span className="adminpopupperson__popup__popupmenu__btn__span">
                {openCard.admins === "ok"
                  ? `Понизить до стандартного`
                  : `Повысить до высшего`}
              </span>
            </button>
            <button
              className="adminpopupperson__popup__popupmenu__btn"
              onClick={() => {
                setOpenAnim(false)
                setTimeout(() => {
                  setTimeout(() => {
                  
                    setOpenMenuPopup(false);
                    setOpenAnimDelay(false)
                    setOpenPass(true);
                  }, 400);
                  setOpenAnimDelay(true)
                }, 800);
              }}
            >
              <img
                className="adminpopupperson__popup__popupmenu__btn__img"
                alt="reset"
                src={Reset}
              />
              <span className="adminpopupperson__popup__popupmenu__btn__span">
                Сбросить пароль
              </span>
            </button>
            <button className="adminpopupperson__popup__popupmenu__btn">
              <img
                className="adminpopupperson__popup__popupmenu__btn__img"
                alt="del"
                src={Del}
              />
              <span className="adminpopupperson__popup__popupmenu__btn__span">
                Удалить аккаунт
              </span>
            </button>
            </div>
            <button
              onClick={() => {
                setOpenAnim(false)
                setTimeout(() => {
                  setTimeout(() => {
                  
                    setOpenMenuPopup(false);
                    setOpenAnimDelay(false)
                  }, 400);
                  setOpenAnimDelay(true)
                }, 800);
              }}
              className="adminpopupperson__popup__popupmenu__btn__back"
            >
                Вернуться назад
            </button>
          </div>
        </div>
  ) : null}

        </div>

        {openPerson ? <AdminNewPerson setOpenPerson={setOpenPerson} /> : null}
        {openPass ? <AdminNewPass setOpenPass={setOpenPass} /> : null}
      </div>
    </>
  );
}

export default AdminPopupPersons;
