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
      <h1>{props.name}</h1>
      {/* When user click on a button, the function handleClick() is called */}
      <button className="option1" onClick={handleClick}>
        Option 1
      </button>
      <button className="option2" onClick={handleClick}>
        Option 2
      </button>
      <button className="option3" onClick={handleClick}>
        Option 3
      </button>
      <button className="option4" onClick={handleClick}>
        Option 4
      </button>
    </div>
  );
}
