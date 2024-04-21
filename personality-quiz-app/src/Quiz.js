import React, { useRef, useEffect, useState } from "react";
import Questions from "./Questions";
import QuizBank from "./QuizBank";
import Results from "./Results";

// calculating the results, starting the quiz, and scrolling to the next section
export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [results, setResults] = useState({ I: 0, E: 0, A: 0, B: 0 });
  const resultsRef = useRef(null);

  // increment the currentQuestionIndex
  const handleNextQuestion = () => {
    if (currentQuestionIndex < QuizBank.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  //  calculating the results
  const handleAnswer = () => {
    handleNextQuestion();
  }

  // scroll to Results section
  useEffect(() => {
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [quizFinished]);

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
    {quizFinished && (
        <div className="results" ref={resultsRef}>
        <Results />
      </div>
    )}
    </div>
  );
}
