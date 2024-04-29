import React, { useRef, useEffect, useState, useMemo } from "react";
import Questions from "./Questions";
import QuizBank from "./QuizBank";
import Results from "./Results";

// calculating the results, starting the quiz, and scrolling to the next section
export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [results, setResults] = useState({
    D: 0,
    G: 0,
    I: 0,
    E: 0,
    N: 0,
    S: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
    A: 0,
    U: 0
  });
  const [result, setResult] = useState("");
  const resultsRef = useRef(null);

  // increment the currentQuestionIndex
  const handleNextQuestion = () => {
    if (currentQuestionIndex < QuizBank.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  //  calculating the results, add +1
  // D or G Day or Night
  // I or E
  // N or S
  // T or F
  // J or P
  // A or U Assertive or Turbulent
  const handleAnswer = (props) => {
    const answer = props;
    if (answer === "D") {
      setResults({ ...results, D: results.D + 1 });
    } else if (answer === "G") { 
      setResults({ ...results, G: results.G + 1 });
    } else if (answer === "I") {
      setResults({ ...results, I: results.I + 1 });
    } else if (answer === "E") {
      setResults({ ...results, E: results.E + 1 });
    } else if (answer === "N") {
      setResults({ ...results, N: results.N + 1 });
    } else if (answer === "S") {
      setResults({ ...results, S: results.S + 1 });
    } else if (answer === "T") {
      setResults({ ...results, T: results.T + 1 });
    } else if (answer === "F") {
      setResults({ ...results, F: results.F + 1 });
    } else if (answer === "J") {
      setResults({ ...results, J: results.J + 1 });
    } else if (answer === "P") {
      setResults({ ...results, P: results.P + 1 });
    } else if (answer === "A") {
      setResults({ ...results, A: results.A + 1 });
    } else if (answer === "U") { 
      setResults({ ...results, U: results.U + 1 });
    }
    handleNextQuestion();
  };

  const results_bank = useMemo(() => [
    {
      INFP: "you are infp!",
      INFJ: "you are infj!",
      INTJ: "you are intj!",
      INTP: "you are intp!",
      ISFJ: "you are isfj!",
      ISFP: "you are isfp!",
      ISTJ: "you are istj!",
      ISTP: "you are istp!",
      ENFJ: "you are enfj!",
      ENFP: "you are enfp!",
      ENTJ: "you are entj!",
      ENTP: "you are entp!",
      ESFJ: "you are esfj!",
      ESFP: "you are esfp!",
      ESTJ: "you are estj!",
      ESTP: "you are estp!",
    },
  ], []);

  // scroll to Results section
  useEffect(() => {
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [quizFinished]);

  // display the results
  useEffect(() => {
    if (quizFinished) {
      let resultString = Object.entries(results)
        .filter(([key, value]) => value >= 1)
        .map(([key, value]) => `${key}`)
        .join("");
      console.log("result string: ", resultString);

      const match = results_bank.map((result) => result[resultString]).join("");
      console.log(match);
      setResult(match);
    }
  }, [quizFinished, results, results_bank]);

  return (
    <div>
      <div className="section">
        <div className="first">
          <Questions
            {...QuizBank[currentQuestionIndex]}
            handleAnswer={handleAnswer}
          />
        </div>
        <div className="second">
          <Questions
            {...QuizBank[currentQuestionIndex]}
            handleAnswer={handleAnswer}
          />
        </div>
        <div className="third">
          <Questions
            {...QuizBank[currentQuestionIndex]}
            handleAnswer={handleAnswer}
          />
        </div>
        <div className="fourth">
          <Questions
            {...QuizBank[currentQuestionIndex]}
            handleAnswer={handleAnswer}
          />
        </div>
        <div className="fifth">
          <Questions
            {...QuizBank[currentQuestionIndex]}
            handleAnswer={handleAnswer}
          />
        </div>
        <div className="sixth">
          <Questions
            {...QuizBank[currentQuestionIndex]}
            handleAnswer={handleAnswer}
          />
        </div>
      </div>
      <div className="transition"></div>
      {quizFinished && (
        <>
          <div className="results" ref={resultsRef}>
            <Results name={result} />
          </div>
        </>
      )}
    </div>
  );
}
