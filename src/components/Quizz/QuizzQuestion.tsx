//import { useContext } from "react";
import QuizzAnswer from "./QuizzAnswer";
import { QUIZZ_DATA } from "../../datas/quizzData";
import styled from "@emotion/styled";

const QuizzQuestion = () => {
  //const [quizState, dispatch] = useContext(QuizContext);
  //const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <QuestionGlobal>
      <div className="question">Question</div>{" "}
      {/* {currentQuestion.question} */}
      <div className="answers">
        {[...Array(4)].map((item, index) => {
          return <QuizzAnswer key={index} index={index} />;
        })}
      </div>
    </QuestionGlobal>
  );
};

export default QuizzQuestion;

const QuestionGlobal = styled.div`
  .question {
    background-color: dodgerblue;
    color: white;
    padding: 10px;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }

  .answers {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }
`;
