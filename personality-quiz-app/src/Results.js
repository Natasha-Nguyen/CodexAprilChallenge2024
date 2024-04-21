export default function Results() {
    const RestartQuiz = () => {
        console.log("Quiz Restarted");
        window.location.reload();
        window.scrollTo(0,0);
      };

      return (
        <div className="flex flex-col items-center justify-center px-4 sm:px-0">
          <img src="./fishing-character.png" className="w-full sm:w-auto" alt="Fishing Character" />
          <div className="border-8 border-white p-10 w-full md:w-1/3 sm:w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-sky-600">You Caught...</h1>
          <br></br>
<p className="text-sm sm:text-base md:text-lg text-sky-600">You love the great outdoors and spending time by the water. You are patient and enjoy the thrill of the catch. Keep on fishing!</p>
          </div>
          <button className="bg-sky-400 hover:bg-sky-600 border-4 border-white text-slate-100 p-5 w-full sm:w-auto mt-10"
            onClick={RestartQuiz}>
            Fish Again
          </button>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-10 content-start mt-5">
            <button>
              <img className="w-full h-auto" src="https://img.icons8.com/color/96/twitterx--v1.png" alt="share to twitterx" />
            </button>
            <button>
              <img className="w-full h-auto" src="./url.svg" alt="copy url" />
            </button>
          </div>
        </div>
      )
}