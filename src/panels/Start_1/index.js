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
import { constants } from "../../utils/constants";

const Start_1 = ({id, setActivePanel}) => {
  return (
    // <SplitLayout>
    //   <SplitCol>
        <Panel separator="false" id={id} className="start1">
          <img
            className="start1__logo"
            src={constants.start1.logo}
            alt="donor Logo"
          />
          <img
            className="start1__pulsLogo"
            src={constants.start1.mainPicture}
            alt="donor Logo"
          />
          <div className="start1__text-block">
            {constants.start1.paragraphs.map((paragraph) => {
              return <span className="start1__text">{paragraph}</span>;
            })}
          </div>
          <Button
            className="start_button"
            onClick={() => {
              setActivePanel("manual");
            }}
          >
            Начать
          </Button>
        </Panel>
    //   </SplitCol>
    // </SplitLayout>
  );
};

export default Start_1;
