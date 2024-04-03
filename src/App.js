import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
// import View from '@vkontakte/vkui/dist/components/View/View'
import "@vkontakte/vkui/dist/vkui.css";
import axios from "axios";
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
import {
  Icon28CancelCircleOutline,
  Icon28SmileOutline,
} from "@vkontakte/icons";
import CardResult from "./panels/CardResult";

const App = (props) => {
  const url = "https://dendonora2020.donorsearch.org/backendD";

  const [snackbar, setSnackbar] = useState(null);
  const [activePanel, setActivePanel] = useState("start_1");
  const [history, setHistory] = useState(["final"]);
  const [fetchedUser, setUser] = useState(constants.myUserInfo); // hardcode
  const [infoUser, setInfoUser] = useState({ first: true, data: null }); // hardcode
  const [popout, setPopout] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

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
      <Start_1 key="start_1" id="start_1" setActivePanel={setActivePanel}  />
      <Manual key="manual" id="manual" setActivePanel={setActivePanel} />
      {/* <Final id="final" {...propsPanels} /> */}
      {/* <Result id="result" {...propsPanels} /> */}
      <Card
        id="card"
        cardData={constants.card.cardData[0]}
        setActivePanel={setActivePanel}
        currentCardNumder={1}
        
      />
      <CardResult
        id="card_result"
        setActivePanel={setActivePanel}
        answer={{
          trueAnswer: true,
          truePercent: 42,
          answerText:
            "Отрицательные группы крови действительно редкие. Но и таких пациентов гораздо меньше, чем людей с распространенными группами крови. Как правило, не хватает доноров с популярной группой крови. Но кровь всех групп требуется постоянно.",
          anotherPlayerAvatars: [
            "https://sun9-61.userapi.com/impg/rCMb_HtE_EbTPenbH04NhmwSFLr7AptY_OSJYA/FzfiI3Xqfy8.jpg?size=100x0",
            ,
            "https://sun9-65.userapi.com/c624220/v624220541/5e76/wC5X0M1NKjI.jpg?ava=1",
            ,
            "https://sun9-2.userapi.com/impf/546IsSoTLpqVvsBKBMi0Ivyas9BayH0SgxHZWg/4spqKir5zkA.jpg?size=200x0",
            ,
            "https://sun9-43.userapi.com/impg/3og4huEC37klsz5qXytgGyz4Y3k0lQb2k4LT7Q/TTF75dOODes.jpg?size=100x0",
            ,
            "https://sun1-90.userapi.com/impf/c623627/v623627134/53ad/cqr7v39Fd94.jpg?size=100x0",
            ,
          ],
        }}
      />
    </View>
  );
};

export default App;
