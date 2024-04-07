import a_q from "../Q&A.json";
import { SwipeCard } from "../../component";
import { constants } from "../../utils/constants";
import { Div, Panel, PanelHeader } from "@vkontakte/vkui";
import "./style.css";
import { api } from "../../utils/Api";
const Card = ({ id, cardData, setActivePanel, currentCardNumder }) => {
  return (
    <Panel id={id} className="card" separator={false}>
      <PanelHeader
        className="card__header"
        delimiter="none"
        typographyProps={"div"}
      >
        <h2 className="card__title">{constants.card.title}</h2>
      </PanelHeader>

      <Div className="card__container">
        <SwipeCard actionLeft={() => {setActivePanel(6, false);}} actionRight={() => {setActivePanel(6, true);}}>
          <div className="card__content">
            <span className="card__counter">{`${currentCardNumder}/${constants.card.cardData.length}`}</span>
            <img
              className="card__img"
              src={`./img/` + `${cardData.img}`}
              alt="Картика к вопросу"
            />
            <span className="card__text">{cardData.question}</span>
            <div className="card__button-cell">
              <button
                className="card__button card__button_red"
                onClick={() => {
                  api.checkQuestion(1);
                  setActivePanel(6, false);
                }}
              >
                {constants.card.buttonsText.false}
              </button>
              <button
                className="card__button card__button_green"
                onClick={() => {
                  api.checkQuestion(1);
                  setActivePanel(6, true);
                }}
              >
                {constants.card.buttonsText.true}
              </button>
            </div>
          </div>
        </SwipeCard>
      </Div>
    </Panel>
  );
};

export default Card;
