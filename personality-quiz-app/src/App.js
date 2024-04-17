import "./App.css";
import Questions from "./Questions.js";

function App() {
  // This function is called when the user clicks on the "Start" button
  // Then scrolls to the first question section
  const startQuiz = () => {
    console.log("Quiz started");
    document.querySelector(".first").scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="App">
      <div className="section">
      <div className="header">
        <h1>Personality Quiz!</h1>
        <button className="start" onClick={startQuiz}>
          Start
        </button>
      </div>
      <div className="first">
        <Questions name="blah blah?" scrollTo=".second" />
      </div>
      <div className="second">
        <Questions name="blah blah 2?" scrollTo=".third"/>
      </div>
      <div className="third">
        <Questions name="blah blah 3?" scrollTo=".results"/>
      </div>
      </div>
      <div className="transition">

      </div>
      <div className="results">
        <h1>Results</h1>
      </div>
    </div>
  );
}

export default App;
