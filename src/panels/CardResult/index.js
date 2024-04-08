import { SwipeCard } from "../../component";
import { constants } from "../../utils/constants";
import { Div, Panel, PanelHeader } from "@vkontakte/vkui";
import "./style.css";
const CardResult = ({
  id,
  answer,
  staticPanelData,
  setActivePanel,
  sequenceOfQuestions,
  currentQuestion,
}) => {
  const staticData = constants.cardResult;

  return (
    <Panel id={id} className="card-result" separator={false}>
      <PanelHeader
        className="card-result__header"
        delimiter="none"
        typographyProps={"div"}
      >
        <h2 className="card-result__title">{staticPanelData.title}</h2>
      </PanelHeader>
      <Div className="card-result__container">
        <SwipeCard
          actionLeft={() => {
            currentQuestion < sequenceOfQuestions.length
              ? setActivePanel("card")
              : setActivePanel("final");
          }}
          actionRight={() => {
            currentQuestion < sequenceOfQuestions.length
              ? setActivePanel("card")
              : setActivePanel("final");
          }}
        >
          <div className="card-result__content">
            <span
              className={`card-result__answer-title ${
                answer.trueAnswer === answer.myAnswer
                  ? "card-result__answer-title_true"
                  : "card-result__answer-title_false"
              }`}
            >{`${
              answer.trueAnswer
                ? answer.trueAnswer === answer.myAnswer
                  ? staticPanelData.youAreRightText +
                    staticPanelData.trueAnswerText
                  : staticPanelData.youAreWrongText +
                    staticPanelData.trueAnswerText
                : answer.trueAnswer === answer.myAnswer
                ? staticPanelData.youAreRightText +
                  staticPanelData.falseAnswerText
                : staticPanelData.youAreWrongText +
                  staticPanelData.falseAnswerText
            }`}</span>
            <div className="card-result__progress-line">
              <div
                className="card-result__answer-line card-result__answer-line_true"
                style={{ width: `${answer.truePercent}%` }}
              >
                <span className="card-result__answer-line-percent">{`${answer.truePercent}%`}</span>
              </div>
              <div
                className="card-result__answer-line card-result__answer-line_false"
                style={{ width: `${100 - answer.truePercent}%` }}
              >
                <span className="card-result__answer-line-percent">{`${
                  100 - answer.truePercent
                }%`}</span>
              </div>
            </div>
            <ul className="card-result__another-player-cells">
              {answer.anotherPlayerAvatars.map((avatar) => {
                return (
                  <li key={avatar} className="card-result__another-player-cell">
                    <img
                      className="card-result__another-player-avatar"
                      src={avatar}
                      alt={"аватар"}
                    />
                  </li>
                );
              })}
            </ul>

            <span className="card-result__text">{answer.answerText}</span>
            <button
              className="card-result__button"
              onClick={() => {
                currentQuestion < sequenceOfQuestions.length - 1
                  ? setActivePanel("card")
                  : setActivePanel("final");
              }}
            >
              {staticPanelData.buttonText}
            </button>
          </div>
        </SwipeCard>
      </Div>
    </Panel>
  );
};

export default CardResult;
