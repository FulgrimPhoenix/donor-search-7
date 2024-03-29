import React from "react";
import "./style.css";
import { Div, Button, PanelHeader, Panel } from "@vkontakte/vkui";
import donorLogo from "../../img/DonorSearch.png";
import puls from "../../img/puls.png";

const Home = (props) => {
  return (
    <Panel separator={false} id={props.id} className="background">
      <PanelHeader separator={false}>
        <img className="donorLogo" src={donorLogo} alt="donor Logo" />
      </PanelHeader>
      <Div className="center">
        <div className="start_top">
          <img className="puslLogo" src={puls} alt="donor Logo" />
          <span className="start_text" style={{ marginBottom: 0 }}>
            15 августа пройдёт первый фестиваль донорского движения "Пульсация"
            в Казани.
          </span>
        </div>
        <span className="start_text">
          Вокруг донорства существует множество мифов - давай узнаем, сможешь ли
          ты их разоблачить?"
        </span>
        <Button
          className="start_button"
          onClick={() => {
            props.setActivePanel("home");
          }}
        >
          Начать
        </Button>
      </Div>
    </Panel>
  );
};

export default Home;
