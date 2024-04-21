import React, { useState } from "react";
import Questions from "./Questions";
import QuizBank from "./QuizBank";

// calculating the results, starting the quiz, and scrolling to the next section
export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [results, setResults] = useState({ I: 0, E: 0, A: 0, B: 0 });

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QuizBank.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleAnswer = () => {
    handleNextQuestion();
  }
  return (
    <div>
      <div className="first">
      <Questions {...QuizBank[currentQuestionIndex]} handleAnswer={handleAnswer} />
      </div>
      <div className="second">
      <Questions {...QuizBank[currentQuestionIndex]} handleAnswer={handleAnswer}/>
      </div>
      <div className="third">
      <Questions {...QuizBank[currentQuestionIndex]} handleAnswer={handleAnswer}/>
      </div>
    </div>
  );
}
