import React, { useState } from "react";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/Admin/logo.svg"
import SignInIcon from "../../images/Admin/signin.svg"

function Admin() {
  const navigate = useNavigate();

  const [admins, setAdmins] = useState(false);

  const [isClosingStart, setIsClosingStart] = useState(false);
  const [isFormStart, setIsFormStart] = useState(false);
  const [isFirstForm, setIsFirstForm] = useState(false);

  function handleSubmit() {
    setIsFirstForm(true);
    setIsClosingStart(true);
    setIsFormStart(true);
    setTimeout(() => {
      navigate("/signin");
    }, 2000);

  }

  return (
    <div className="admin">
      <div
        className={`admin__popup ${
          isFormStart ? "fade-out" : isFirstForm ? "fade-in" : null
        }`}
      >
        <div
          className={`admin__start ${isClosingStart ? "fade-out" : "fade-in"}`}
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
        </div>
      </div>
      <div className="admin__copyrite">
        <img src={Logo} alt="logo" className="admin__copyrite__img" />
        <p className="admin__copyrite__text">
          2024 © Copyright. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Admin;
