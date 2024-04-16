import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import "@vkontakte/vkui/dist/vkui.css";
import "./app.css";

import { Manual, Loader, Start_1, Final, Result, Card } from "./panels";
import { constants } from "./utils/constants";
import { Avatar, ModalPage, ModalRoot, Snackbar, View } from "@vkontakte/vkui";
import CardResult from "./panels/CardResult";
import { api } from "./utils/Api";
import { getMyUserInfo, getUsersAvatars } from "./utils/VKApi";

const App = (props) => {
  const url = "https://dendonora2020.donorsearch.org/backendD";

  const [activePanel, setActivePanel] = useState("start_1");
  const [history, setHistory] = useState(["final"]);
  const [userInfo, setUserInfo] = useState({});
  const [answerResult, setAnswerResult] = useState({});
  const [sequenceOfQuestions, setSequenceOfQuestions] = useState(
    generateRandomSequenceOfQuestions({ lengthOfSequence: 10 })
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    getMyUserInfo().then((res) => {
      setUserInfo(res);
      console.log(userInfo);
    });
  }, []);

  useEffect(() => {
    if (activePanel === "card_result") {
    }
  }, [activePanel]);

  function generateRandomSequenceOfQuestions({ lengthOfSequence }) {
    let i = 0;
    let arr = [];
    while (i < lengthOfSequence) {
      arr.push(i);
      i++;
    }
    arr.sort(() => Math.random() - 0.5);
    return arr;
  }

  function giveAnswerToQuestion(questionNumber, answer) {
    api
      .checkQuestion(questionNumber, answer)
      .then(async (res) => {
        console.log(4444);
        let usersIdString = "";
        const question = constants.card.cardData[questionNumber];
        res.ava_uri.forEach((userData) => {
          usersIdString = usersIdString + userData.id_user + ",";
        });
        const anotherPlayerAvatars = await getUsersAvatars({
          ids: usersIdString,
        });
        console.log(2, anotherPlayerAvatars);
        setAnswerResult({
          ...answerResult,
          trueAnswer: question.true_answer,
          answerText: question.answer,
          myAnswer: answer,
          truePercent: res.per,
          anotherPlayerAvatars: anotherPlayerAvatars,
        });
        console.log(userInfo);
        answer === question.true_answer
          ? setCorrectAnswers(correctAnswers + 1)
          : "";
        console.log(5555);
        setActivePanel("card_result");
        console.log(6666);
      })
      .catch((err) => console.log(err));
  }

  function setNextQuestion() {
    setCurrentQuestion(currentQuestion + 1);

    currentQuestion < sequenceOfQuestions.length - 1
      ? setActivePanel("card")
      : setActivePanel("final");
  }

  const goBack = () => {
    window.history.back();
  };

  return (
    <View
      activePanel={activePanel}
      history={history}
      onSwipeBack={goBack}
      className="background"
    >
      <Start_1 key="start_1" id="start_1" setActivePanel={setActivePanel} />
      <Manual key="manual" id="manual" setActivePanel={setActivePanel} />
      <Final id="final" correctAnswers={correctAnswers} userInfo={userInfo} />
      <Card
        id="card"
        cardData={constants.card.cardData[sequenceOfQuestions[currentQuestion]]}
        giveAnswerToQuestion={giveAnswerToQuestion}
        currentCardNumder={currentQuestion}
      />
      <CardResult
        id="card_result"
        setNextQuestion={setNextQuestion}
        staticPanelData={constants.cardResult}
        answer={answerResult}
      />
    </View>
  );
};

export default App;
