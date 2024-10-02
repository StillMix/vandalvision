import React from "react";
import "./MainPopupImg.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import NoFullScreen from "../../images/Main/noFullScreen.svg";
import proverka from "../../images/Main/lilo2.png";

function MainPopupImg(props) {
  function toggleFullScreen() {
    props.setIsFullScreenAnim(!props.isFullScreenAnim);
    props.setIsFirst(false);
    props.setIsFullScreen(!props.isFullScreen);
    setTimeout(() => {
      props.setIsPopup(false);
    }, 2000);
  }

  return (
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
                className={`popupOpenImg__img ${
                  props.isFullScreenAnim ? "open" : "close"
                }`}
              />
            </TransformComponent>
            <div className="popupOpenImg__op__containerBtn">
              <button
                className="popupOpenImg__op__containerBtn__btn"
                onClick={toggleFullScreen}
              >
                <img
                  alt="icon"
                  src={NoFullScreen}
                  className="popupOpenImg__op__containerBtn__btn__img"
                />
                <span>Свернуть</span>
              </button>
            </div>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}

export default MainPopupImg;
