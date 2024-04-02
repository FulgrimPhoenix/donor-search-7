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
  const [activePanel, setActivePanel] = useState("loading");
  const [history, setHistory] = useState(["final"]);
  const [fetchedUser, setUser] = useState(constants.myUserInfo); // hardcode
  const [infoUser, setInfoUser] = useState({ first: true, data: null }); // hardcode
  const [popout, setPopout] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    // bridge.subscribe(({ detail: { type, data } }) => {
    // 	if (type === 'VKWebAppUpdateConfig') {
    // 		const schemeAttribute = document.createAttribute('scheme')
    // 		schemeAttribute.value = data.scheme ? data.scheme : 'client_light'
    // 		document.body.attributes.setNamedItem(schemeAttribute)
    // 	}
    // })
    window.addEventListener(
      "popstate",
      (event) => {
        const his = history;
        his.pop();
        const active = his[his.length - 1];
        if (active === "main") {
          bridge.send("VKWebAppDisableSwipeBack");
        }
        setHistory(his);
        setActivePanel(active);
      },
      false
    );

    (() => {
      // const user = await bridge.send('VKWebAppGetUserInfo')
      setUser(constants.myUserInfo); // hardcode
      console.log(fetchedUser);
      const params = "?" + "action=login" + "&id_vk=" + fetchedUser.id; // hardcode
      // axios.get(url + '/API/index.php' + params).then((res) => {
      setInfoUser({ first: true, data: null }); // hardcode
      if (infoUser.first) {
        // hardcode
        setActivePanel("start_1");
      } else {
        var leng = 0;
        for (/*var s in res.data.data.info.answer*/ let i = 0; i < 10; i++) {
          leng++;
        }
        if (leng < 10) {
          setActivePanel("start_1");
        } else {
          setActivePanel("final");
        }
      }
      // })
    })();
  }, []);

  function generateSequenceOfQuestions(length) {
    let sequenceOfQuestions = [];
    while (sequenceOfQuestions.length < length) {
      var random = Math.floor(Math.random() * length - 1);
      if (sequenceOfQuestions.indexOf(random) === -1) {
        sequenceOfQuestions.push(random);
      }
    }
    return sequenceOfQuestions.slice(0, length);
  }

  ///

  const openSnackBar = (text, type) => {
    if (snackbar) return;
    let icon, color;
    if (type === "error") {
      icon = <Icon28CancelCircleOutline fill="#fff" width={20} height={20} />;
      color = "#E50D22";
    }
    if (type === "success") {
      icon = <Icon28SmileOutline fill="#fff" width={20} height={20} />;
      color = "#2ACA53";
    }
    setSnackbar(
      <Snackbar
        duration={1500}
        layout="vertical"
        onClose={() => setSnackbar(null)}
        before={
          <Avatar
            style={{ background: color }}
            size={24}
            className="blueBackground"
          >
            {icon}
          </Avatar>
        }
      >
        {text}
      </Snackbar>
    );
  };

  useEffect(() => {
    bridge.send("VKWebAppSetViewSettings", {
      status_bar_style: "light",
      action_bar_color: "#E50D22",
    });
  });

  const checkHash = (hash, del) => {
    let temp = hash.split(del);
    let obj = {};

    for (let i = 0; i < temp.length; i++) {
      const t = temp[i].split("=");
      obj[t[0]] = t[1];
    }

    return obj;
  };

  const goBack = () => {
    window.history.back();
  };

  const goForward = (activePanelLocal, replace = false) => {
    const historyLocal = [...history];
    historyLocal.push(activePanelLocal);
    if (activePanel === "home") {
      bridge.send("VKWebAppEnableSwipeBack");
    }
    if (replace) {
      setHistory(history.pop());
      window.history.replaceState({}, "", "#h=" + activePanelLocal);
    } else {
      window.history.pushState({}, "", "#h=" + activePanelLocal);
    }
    setHistory(history.push(activePanelLocal));
    setActivePanel(activePanelLocal);
  };

  const declOfNum = (number, titles) => {
    var cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  };

  const propsPanels = {
    declOfNum,
    openSnackBar,
    fetchedUser,
    goForward,
    goBack,
    setActiveModal,
    setActivePanel,
    checkHash,
    infoUser,
    setInfoUser,
    url,
    setPopout,
  };

  const modal = (
    <ModalRoot
      activeModal={activeModal}
      onClose={() => {
        setActiveModal(null);
      }}
    >
      <ModalPage
        id="reg_form"
        onClose={() => {
          setActiveModal(null);
        }}
      ></ModalPage>
    </ModalRoot>
  );

  return (
    <View
      activePanel={activePanel}
      history={history}
      onSwipeBack={goBack}
      popout={popout}
      modal={modal}
      className="background"
    >
      <Loader id="loading" />
      <Start_1 id="start_1" {...propsPanels} />
      <Manual id="manual" {...propsPanels} />
      <Final id="final" {...propsPanels} />
      <Result id="result" {...propsPanels} />
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
          answerText: "Отрицательные группы крови действительно редкие. Но и таких пациентов гораздо меньше, чем людей с распространенными группами крови. Как правило, не хватает доноров с популярной группой крови. Но кровь всех групп требуется постоянно.",
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
