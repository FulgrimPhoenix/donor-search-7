import React, { useEffect, useState } from "react";
import {
  Div,
  Button,
  Avatar,
  Panel,
  PanelHeader,
  ScreenSpinner,
} from "@vkontakte/vkui";
// import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner'
import "./style.css";

import R0_4 from "../../img/0_4.svg";
import R5_8 from "../../img/5_8.svg";
import R9_10 from "../../img/9_10.svg";
import pgrants from "../../img/pgrants_logo_gp-horizontal_dark.png";
import { constants } from "../../utils/constants";
import { joinToGroup } from "../../utils/VKApi";

const Final = ({ correctAnswers, id, userInfo }) => {
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
        {constants.final.resultText(
          correctAnswers,
          userInfo.sex,
          "final__title"
        )}
        <div className="final__avatar-cell">
          <img src={userInfo.photo_200} className="final__avatar" />
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
