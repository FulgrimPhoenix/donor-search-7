import React, { useEffect, useState } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  Div,
  Button,
  Avatar,
  Panel,
  PanelHeader,
  ScreenSpinner,
} from "@vkontakte/vkui";
// import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner'
import rasterizehtml from "rasterizehtml";
import axios from "axios";
import "./style.css";
import a_q from "../Q&A.json";
import R0_4 from "../../img/0_4.svg";
import R5_8 from "../../img/5_8.svg";
import R9_10 from "../../img/9_10.svg";
import pgrants from "../../img/pgrants_logo_gp-horizontal_dark.png";
import { constants } from "../../utils/constants";
import { joinToGroup } from "../../utils/VKApi";
// import Stories from './stories'
// import Post from './post'

const photo_wall_post = [
  "photo-182940946_457239037",
  "photo-182940946_457239038",
  "photo-182940946_457239039",
  "photo-182940946_457239040",
  "photo-182940946_457239041",
  "photo-182940946_457239042",
  "photo-182940946_457239043",
  "photo-182940946_457239044",
  "photo-182940946_457239045",
  "photo-182940946_457239046",
];

const Final = ({ correctAnswers, id }) => {
  const spinner = <ScreenSpinner size="large" />;
  const [lengthT, setLengthT] = useState(0);
  const [randInt, setRandInt] = useState(0);
  const [rank, setRank] = useState("");

  useEffect(() => {
    if (correctAnswers >= 0 && correctAnswers <= 4) {
      setRank(R0_4);
    }
    if (correctAnswers >= 5 && correctAnswers <= 8) {
      setRank(R5_8);
    }
    if (correctAnswers >= 9 && correctAnswers <= 10) {
      setRank(R9_10);
    }
    setLengthT(correctAnswers);
  }, []);

  return (
    <Panel id={id} separator={false} centered>
      <PanelHeader>
        <div style={{ color: "white" }}>День донора</div>
      </PanelHeader>
      <Div className="final">
        {constants.final.resultText(correctAnswers, 2, "final__title")}
        <div className="final__avatar-cell">
          <img
            src={
              "https://sun9-68.userapi.com/impg/_l9QHTBgqyvRQMw0uGhWLcVveTeehay-rFjv7A/CDPVX9Z6V9A.jpg?size=774x942&quality=95&sign=561e182cf896e19f45dbe19222736b71&type=album"
            } //hardcode
            className="final__avatar"
          />
          <img className="final__avatar-rank" src={rank} />
        </div>

        <span className="final__accent">Отличный результат!</span>
        <span className="final__text">
          Присоединяйся к донорскому
          <br />
          движению - "протяну руку городу!"
        </span>
        <Button
          id="final__button"
          className="final__button"
          style={{ color: "#E50D22" }}
          onClick={() => {
            joinToGroup();
          }}
        >
          <b>Подписаться на сообщество</b>
        </Button>

        <div className="patrners_block">
          <img className="pgrants" src={pgrants} />
        </div>
      </Div>
    </Panel>
  );
};

export default Final;
