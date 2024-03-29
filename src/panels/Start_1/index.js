import React from "react";
import "./style.css";
import {
  Div,
  Button,
  PanelHeader,
  Panel,
  SplitLayout,
  SplitCol,
} from "@vkontakte/vkui";
import donorLogo from "../../img/DonorSearch.png";
import puls from "../../img/puls.png";

const Home = (props) => {
  return (
    <SplitLayout>
      <SplitCol >
        <Panel separator={false} id={props.id} className="start1">
          <img className="start1__logo" src={donorLogo} alt="donor Logo" />
          <div className="start_top">
            <img className="start1__pulsLogo" src={puls} alt="donor Logo" />
            <span className="start1__text" style={{ marginBottom: 0 }}>
              15 августа пройдёт первый фестиваль донорского движения
              "Пульсация" в Казани.
            </span>
          </div>
          <span className="start1__text">
            Вокруг донорства существует множество мифов - давай узнаем, сможешь
            ли ты их разоблачить?"
          </span>
          <Button
            className="start_button"
            onClick={() => {
              props.setActivePanel("home");
            }}
          >
            Начать
          </Button>
        </Panel>
      </SplitCol>
    </SplitLayout>
  );
};

export default Home;
