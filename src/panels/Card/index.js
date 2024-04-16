import { SwipeCard } from "../../component";
import { constants } from "../../utils/constants";
import { Div, Panel, PanelHeader } from "@vkontakte/vkui";
import "./style.css";
const Card = ({ id, cardData, giveAnswerToQuestion, currentCardNumder }) => {
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
        <SwipeCard
          actionLeft={() => {
            giveAnswerToQuestion(cardData.questionNumber, false);
          }}
          actionRight={() => {
            giveAnswerToQuestion(cardData.questionNumber, true);
          }}
        >
          <div className="card__content">
            <span className="card__counter">{`${currentCardNumder + 1}/${
              constants.card.cardData.length
            }`}</span>
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
                  giveAnswerToQuestion(cardData.questionNumber, false);
                }}
              >
                {constants.card.buttonsText.false}
              </button>
              <button
                className="card__button card__button_green"
                onClick={() => {
                  giveAnswerToQuestion(cardData.questionNumber, true);
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
