export default function Welcome() {
  const startQuiz = () => {
    console.log("Quiz started");
    document.querySelector(".first").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className = "header">
        <div className = "header flex flex-col items-center justify-between h-screen">
          <div></div>
          <button
          className="bg-sky-400 hover:bg-sky-600 border-4 border-white p-2 text-white mb-20 text-[18px]"
          onClick={startQuiz}
        >
          Start Fishing
        </button>
        <p className = "text-slate-100 mb-5">Made by <a href = "https://github.com/Natasha-Nguyen" className = "text-slate-100 underline">@nhicodes</a> and <a href = "https://github.com/kriztin12" className = "text-slate-100 underline">@kwicodes</a> for <a href = "https://www.codedex.io/community/monthly-challenge/april-2024" className = "text-slate-100 underline">Codédex April Monthly Challenge</a></p>
        </div>
        
    </div>
  );
}
