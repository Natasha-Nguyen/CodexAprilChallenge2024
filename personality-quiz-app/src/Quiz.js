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
    U: 0,
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

  const results_bank = useMemo(
    () => [
      {
        DINFJU: {
          name: "a Whale Shark",
          image: "./whaleshark.png",
          content:
            "Like this gentle giant of the sea, you possess a nurturing and compassionate nature. You are known for your peaceful and harmonious presence, radiating a sense of calm and serenity wherever you go. Much like the Whale Shark's gentle demeanor, you have a natural ability to bring comfort and support to those around you. Keep on fishing!",
        },
        DISTJA: {
          name: "an Emperor Angelfish",
          image: "emperorangelfish.png",
          content:
            "Emperor Angelfish are beautiful and graceful creatures of the sea. You possess a unique and captivating presence that sets you apart from others. Emperor Angelfish rarely mingle with other fish, preferring to stay alone. Similarly, you often find solace and fulfillment in your own company, preferring solitude over crowded social gatherings. Keep on fishing!",
        },
        GISTPU: {
          name: "a Pacific Octopus",
          image: "octopus.png",
          content:
            "Like this intelligent creature, you possess remarkable adaptability and ingenuity. You excel in navigating various situations with ease, utilizing your resourcefulness to overcome challenges. Much like the octopus, you thrive in environments where you can express your creativity and problem-solving skills. Keep on fishing!",
        },
        GISFPA: {
          name: "a Moray Eel",
          image: "morayeel.png",
          content:
            "Like this mysterious creature, you possess a complex and misunderstood nature. You are fiercely independent and prefer to carve your own path, much like the Moray Eel's solitary nature. Despite your solitary tendencies, you form deep and meaningful connections with those you trust, fiercely loyal to your inner circle. Keep on fishing!",
        },
        DENFJA: {
          name: "a Clownfish",
          image: "./clownfish.png",
          content:
            "You are a vibrant clownfish, bringing color and energy to the coral reefs with your extroverted and sociable nature. Your curiosity and intuition guide you through the intricate underwater world, always eager to explore new territories and make connections with fellow marine life. With a caring and empathetic heart, you foster harmony and cooperation, making you a beloved member of the reef community. Keep on fishing!",
        },
        DESFJA: {
          name: "a Bluefin Tuna",
          image: "./bluefin_tuna.png",
          content:
            "You are a daytime bluefin tuna, embracing the vast ocean with your sociable and exploratory nature. Your extroverted personality thrivaes in social interactions and new experiences, while your keen senses guide you through the dynamic marine environment. With a thoughtful blend of empathy and practicality, you navigate challenges with confidence and adaptability, contributing to the harmony of the ocean's ecosystem Keep on fishing!",
        },
        GESTPU: {
          name: "a Zebra Shark",
          image: "./zebra_shark.png",
          content:
            "You are a nocturnal zebra shark, thriving in the darkness of the ocean with your adventurous and curious nature. Your keen senses guide you through the underwater world, always open to new experiences and interactions. With a logical and analytical mind, you approach challenges with precision and strategic thinking, adapting to changes with flexibility and spontaneity. Keep on fishing!",
        },
        GENFPU: {
          name: "a Manta Ray",
          image: "./mantaray.png",
          content:
            "You are a curious and adaptable manta ray, navigating the ocean depths with a gentle and peaceful demeanor. Your intelligence and independence shine through as you explore new wonders and form connections with other sea creatures, all while embracing the harmony of your underwater world. Keep on fishing!",
        },
        ALL: {
          name: "a Siamese fighting fish",
          image: "./fightingfish.png",
          content:
            "You are a Siamese fighting fish, an all-rounder, known for your vibrant colors and fierce independence. With a confident and assertive demeanor, you navigate your territory with pride, always ready to defend your space. Your keen senses and strategic mind make you a skilled hunter, while your solitary nature reflects your preference for independence and self-reliance in the underwater world. Keep on fishing!",
        },
      },
    ],
    []
  );

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

      const match = results_bank.find((result) => result[resultString]);
      const value = match ? match[resultString] : undefined;

      if (value === undefined || value === "") {
        setResult(results_bank[0].ALL);
      } else setResult(value);
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
            <Results result={result} />
          </div>
        </>
      )}
    </div>
  );
}
