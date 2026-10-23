import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-[44vh] text-white flex flex-col justify-center items-center gap-4">
        <div className="text-3xl font-bold flex justify-center items-center">
          <span>Get me A Chai</span>
          <img src="tea.gif" className="w-20" alt=""/>
        </div>
        <p>
          A crowdfunding plateform for creators. Get funded by your fans and
          followers. Start now!
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5"
          >
            Start Here
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white w-full h-1 opacity-10"></div>
      <div className="text-white container mx-auto">
          <h1 className="font-bold text-2xl text-center my-4">Your Fans can buy you a Chai</h1>
          <div className="flex gap-5 justify-around">
          <div>
          <img className="bg-slate-400 p-2 rounded-full"  width={88} src="man.gif" alt="" />
          <p>Fun Yourself</p>
          </div>
          <div>
          <img className="bg-slate-400 p-2 rounded-full"  width={88} src="man.gif" alt="" />
          <p>Fun Yourself</p>
          </div>
          <div>
          <img className="bg-slate-400 p-2 rounded-full"  width={88} src="man.gif" alt="" />
          <p>Fun Yourself</p>
          </div>
          </div>
      </div>
    </>
  );
}
