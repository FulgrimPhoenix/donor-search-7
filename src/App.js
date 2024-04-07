import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
// import View from '@vkontakte/vkui/dist/components/View/View'
import "@vkontakte/vkui/dist/vkui.css";
// import ModalPage from '@vkontakte/vkui/dist/components/ModalPage/ModalPage'
// import ModalRoot from '@vkontakte/vkui/dist/components/ModalRoot/ModalRoot'
// import Icon28CancelCircleOutline from '@vkontakte/icons/dist/28/cancel_circle_outline'
// import Icon28SmileOutline from '@vkontakte/icons/dist/28/smile_outline';
// import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar'
// import Snackbar from '@vkontakte/vkui/dist/components/Snackbar/Snackbar'
import "./app.css";

import { Manual, Loader, Start_1, Final, Result, Card } from "./panels";
import { constants } from "./utils/constants";
import { Avatar, ModalPage, ModalRoot, Snackbar, View } from "@vkontakte/vkui";
import CardResult from "./panels/CardResult";
import { api } from "./utils/Api";

const App = (props) => {
  const url = "https://dendonora2020.donorsearch.org/backendD";

  const [snackbar, setSnackbar] = useState(null);
  const [activePanel, setActivePanel] = useState("start_1");
  const [history, setHistory] = useState(["final"]);
  const [fetchedUser, setUser] = useState(constants.myUserInfo); // hardcode
  const [infoUser, setInfoUser] = useState({ first: true, data: null }); // hardcode
  const [popout, setPopout] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [answerResult, setAnswerResult] = useState({});


  useEffect(() => {
    bridge.send('VKWebAppGetUserInfo', {
      user_ids: "122856133,127044462"
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (activePanel === "card_result") {
    }

  }, [activePanel]);

  function giveAnswerToQuestion(questionNumber, answer) {
    api
      .checkQuestion(questionNumber, answer)
      .then((res) => {
        setAnswerResult({
          ...answerResult,
          trueAnswer: constants.card.cardData[questionNumber].true_answer,
          myAnswer: answer,
          truePercent: res.per,
          anotherPlayerAvatars: res.ava_uri.map((userData) => userData.ava_uri),
        });
      })
      .then(() => {
        console.log(answerResult);
        setActivePanel("card_result");
      })
      .catch((err) => console.log(err));
  }

  const goBack = () => {
    window.history.back();
  };

  return (
    <View
      activePanel={activePanel}
      history={history}
      onSwipeBack={goBack}
      // popout={popout} Разобраться с параметром!!!
      // modal={modal} Разобраться с параметром!!!
      className="background"
    >
      {/*  <Loader key="loading" id="loading" /> на случай инициализирующего запроса к апи*/}
      <Start_1 key="start_1" id="start_1" setActivePanel={setActivePanel} />
      <Manual key="manual" id="manual" setActivePanel={setActivePanel} />
      {/* <Final id="final" {...propsPanels} /> */}
      {/* <Result id="result" {...propsPanels} /> */}
      <Card
        id="card"
        cardData={constants.card.cardData[0]}
        setActivePanel={giveAnswerToQuestion}
        currentCardNumder={1}
      />
      <CardResult
        id="card_result"
        setActivePanel={setActivePanel}
        staticPanelData={constants.cardResult}
        answer={answerResult}
      />
    </View>
  );
};

export default App;
