import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[44vh] text-white flex flex-col justify-center items-center gap-5">
        <div className="text-5xl font-bold ">Get me A Chai</div>
        <p className="text-xl">This website is a crowd funding plateform for creators.</p>
        <div>
          <button>Get Chai</button>
          <button>Read More</button>
        </div>
    </div>
  );
}
