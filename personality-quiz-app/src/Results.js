export default function Results(props) {
  const RestartQuiz = () => {
    console.log("Quiz Restarted");
    window.location.reload();
    window.scrollTo(0, 0);
  };

  return (
    // <div className="flex flex-col items-center justify-center h-screen">
    //   <img
    //     src="./fishing-character.png"
    //     className="w-full sm:w-auto"
    //     alt="Fishing Character"
    //   />{" "}
    //   <div className="border-4 border-white w-full p-5">
    //     <h1 className="text-2xl sm:text-3xl md:text-4xl text-sky-600">
    //       You Caught...
    //     </h1>
    //     <br></br>
    //     <p className="text-sm sm:text-base md:text-lg text-sky-600">
    //       You love the great outdoors and spending time by the water. You are
    //       patient and enjoy the thrill of the catch. Keep on fishing!
    //     </p>
    //   </div>
    //   <button
    //     className="bg-sky-400 hover:bg-sky-600 border-4 border-white text-slate-100 p-5 w-full sm:w-auto mt-10"
    //     onClick={RestartQuiz}
    //   >
    //     Fish Again
    //   </button>
    //   <button>
    //     <img
    //       className="w-full h-auto"
    //       src="https://img.icons8.com/color/96/twitterx--v1.png"
    //       alt="share to twitterx"
    //     />
    //   </button>
    //   <button>
    //     <img className="w-full h-auto" src="./url.svg" alt="copy url" />
    //   </button>
    // </div>
    <div className="results h-screen">
      <div className="results flex flex-col items-center justify-center h-auto">
        <img
          src={props.result.image}
          className="w-auto h-1/2 sm:w-auto object-contain"
          alt="Fishing Character"
        />
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-sky-600 mb-5">
          You Caught... {props.result.name}
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-sky-600 mb-5">
          {props.result.content}
        </p>
        <p className="text-xs xs:text-base text-white mb-5">
          Made by{" "}
          <a
            href="https://github.com/Natasha-Nguyen"
            className="text-white underline"
          >
            @nhicodes
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/kriztin12"
            className="text-white underline"
          >
            @kwicodes
          </a>{" "}
          for{" "}
          <a
            href="https://www.codedex.io/community/monthly-challenge/april-2024"
            className="text-white underline"
          >
            Codédex April Monthly Challenge
          </a>
        </p>
        <button
          className="bg-sky-400 hover:bg-sky-600 border-4 border-white text-slate-100 w-full sm:w-auto p-2 sm:p-4"
          onClick={RestartQuiz}
        >
          Fish Again
        </button>
      </div>
    </div>
  );
}
