import React, { useState, useEffect } from "react";
import { Div, Panel, PanelHeader } from "@vkontakte/vkui";
import "./style.css";
import leftImg from "../../img/left.png";
import rightImg from "../../img/right.png";

const Manual = (props) => {
  return (
    <Panel id={props.id} className="manual" separator={false}>
      <PanelHeader
        className="manual__header"
        delimiter="none"
        typographyProps={"div"}
      >
        <h2 className="manual__title">День донора</h2>
      </PanelHeader>
      <Div className="manual__container">
        <div className="manual__content">
          <span className="card_text">
            Свайпай вправо, если считаешь,
            <br />
            что написанное — правда.
          </span>
          <img className="manual__img" src={rightImg} alt="right img" />
          <span className="card_text">
            Свайпай влево, если думашь,
            <br />
            что это ложь.
          </span>
          <img className="manual__img" src={leftImg} alt="left img" />
          <span className="card_text">Все просто.</span>
          <button
            className="manual__button"
            onClick={() => {
              props.setActivePanel("card");
            }}
          >
            Понятно
          </button>
        </div>
      </Div>
    </Panel>
  );
};

export default Manual;
