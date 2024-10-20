import { useEffect, useState } from "react";
import { questionBank } from "./questions";
import { IAnswer, IQBank } from "../../types/question";
import QuestionDetail from "./question-detail";

import "../../styles/question.scss";

const QuestionLayout = () => {
  // State initialization
  const [qBank, setQBank] = useState<IQBank[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<IAnswer[]>([]);
  const [score, setScore] = useState<number>(0);

  // Load question bank data once on component mount
  useEffect(() => {
    setQBank(questionBank);
  }, []);

  // Calculate score whenever answers change
  useEffect(() => {
    if (answers.length === qBank.length) {
      calculateScore();
    }
  }, [answers, qBank]);

  // Function to calculate the score
  function calculateScore() {
    const commonEle = [];
    const map = new Map();

    for (let i = 0; i < qBank.length; i++) {
      map.set(qBank[i].answer, qBank[i]);
    }

    for (let j = 0; j < answers.length; j++) {
      if (map.has(answers[j].ans)) {
        commonEle.push(map.get(qBank[j].answer));
      }
    }

    setScore(commonEle.length);
  }

  // Handle answer submission
  const handleSubmition = (answer: IAnswer) => {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="question-container">
      <div>QUIZ APP</div>

      <div className="list-question">
        {qBank.length === answers.length ? (
          <div>
            <h4>Result</h4>
            Score is {score} / {qBank.length}
          </div>
        ) : (
          <ul>
            {qBank.length > 0 && (
              <QuestionDetail
                question={qBank[currentQuestionIndex]}
                submitAns={handleSubmition}
              />
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default QuestionLayout;
