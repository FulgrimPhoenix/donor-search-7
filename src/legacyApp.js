function legacyApp() {
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
  }, []);

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

  return;
}
