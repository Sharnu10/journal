import { useState } from "react";
import { IAnswer, IQBank } from "../../types/question";

interface IQuestionProps {
  question: IQBank;
  submitAns: (answer: IAnswer) => void;
}

const QuestionDetail: React.FC<IQuestionProps> = ({ question, submitAns }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<IAnswer | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAns = (option: IAnswer) => {
    setSelectedAnswer(option);
    setError(null);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedAnswer) {
      setError("Please select an option before submitting!");
      return;
    }

    submitAns(selectedAnswer);
    setSelectedAnswer(null);
  };

  return (
    <div>
      <h4>Question {question.id}</h4>

      <p>{question.question}</p>

      <form className="form-radio" onSubmit={handleSubmit}>
        {question.options &&
          question.options.map((option, index) => {
            return (
              <div key={`${option} - ${index}`}>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  id={option}
                  value={option}
                  checked={selectedAnswer?.ans === option}
                  onChange={() => handleAns({ id: question.id, ans: option })}
                />

                <label className="form-check-label ms-1">{option}</label>
                <br />
              </div>
            );
          })}

        {error && <div className="text-danger my-2">{error}</div>}

        <button className="btn btn-primary mt-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuestionDetail;
