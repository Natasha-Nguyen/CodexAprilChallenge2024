export default function Questions(props) {
  // This handles scrolling to the next section
  const handleClick = () => {
    document
      .querySelector(props.scrollTo)
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="first h-screen flex flex-col p-4">
      <h1
        className="text-[28px] mb-6 text-white"
        style={{
          textShadow:
            "2.5px 2.5px 0px #000, -2.5px -2.5px 0px #000, 2.5px -2.5px 0px #000, -2.5px 2.5px 0px #000",
          paddingTop: "100px",
        }}
      >
        {props.question}
      </h1>
      <div className="grid grid-cols-2 grid-flow-row flex-grow p-4">
        {/* When user click on a button, the function handleClick() is called */}
        <div>
          <button
            className="bg-sky-400 hover:bg-sky-600 border-4 border-white p-2 text-white mb-4 text-[16px] h-[50%] w-[60%]"
            onClick={() => {
              handleClick();
              props.handleAnswer(props.answers[0].type);
            }}
          >
            {props.answers[0].content}
          </button>
        </div>
        <div>
          <button
            className="bg-sky-400 hover:bg-sky-600 border-4 border-white p-2 text-white mb-4 text-[16px] h-[50%] w-[50%]"
            onClick={() => {
              handleClick();
              props.handleAnswer(props.answers[1].type);
            }}
          >
            {props.answers[1].content}
          </button>
        </div>
      </div>
    </div>
  );
}
