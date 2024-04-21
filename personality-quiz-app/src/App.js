import "./App.css";
import Quiz from "./Quiz.js";
import Welcome from "./Welcome.js";
import Results from "./Results.js";

function App() {
  // This function is called when the user clicks on the "Start" button
  // Then scrolls to the first question section
  const startQuiz = () => {
    console.log("Quiz started");
    document.querySelector(".first").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Welcome />
      <div className="section">
        <Quiz />
      </div>
    </div>
  );
}

export default App;
