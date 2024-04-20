export default function Welcome() {

    const startQuiz = () => {
        console.log("Quiz started");
        document.querySelector(".first").scrollIntoView({ behavior: "smooth" });
      };

    return (
        <div className="header">
        <h1>Personality Quiz!</h1>
        <button className="start" onClick={startQuiz}>
          Start
        </button>
      </div>
    )
}