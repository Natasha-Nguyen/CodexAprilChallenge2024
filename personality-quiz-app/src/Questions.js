export default function Questions(props) {
  // This handles scrolling to the next section
  const handleClick = () => {
    console.log(props.scrollTo);
    document
      .querySelector(props.scrollTo)
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="options">
      <h1>{props.question}</h1>
      {/* When user click on a button, the function handleClick() is called */}
      <button
        className="option1"
        onClick={() => {
          handleClick();
          props.handleAnswer();
        }}
      >
        {props.answers[0].content}
      </button>
      <button
        className="option2"
        onClick={() => {
          handleClick();
          props.handleAnswer();
        }}
      >
        {props.answers[1].content}
      </button>
    </div>
  );
}
