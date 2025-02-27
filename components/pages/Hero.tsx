import Link from "next/link";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

export default function Hero() {
  return (
    <BackgroundBeamsWithCollision>
    <section className="h-96 flex flex-col items-center justify-center text-center  text-white px-6 overflow-hidden">
      
      <h1 className="text-4xl sm:text-6xl font-extrabold flex items-center gap-1">
        Hey{" "}
        <span className=" text-4xl sm:text-6xl md:text-7xl inline-block hover:animate-waving-hand pb-1">👋</span> 
        I'm Abhinay,
      </h1>
      <h2 className="text-4xl sm:text-6xl font-bold mt-3">
        a{" "}
        <span className="bg-blue-600 px-3 py-1 rounded-lg text-white">
          developer
        </span>
      </h2>
      <p className="text-gray-400 mt-4">
        I am a Web developer & Web3 enthusiast
      </p>
      <div className="mt-5 flex gap-5 flex-col sm:flex-row">
        <Link
          href="/aboutme"
          className="px-6 py-2 text-lg font-semibold rounded-lg bg-white/10 backdrop-blur-md shadow-md transition duration-300 hover:bg-white/20 hover:backdrop-blur-lg"
        >
         😎 About Me
        </Link>
        <Link
          href="/projects"
          className="px-6 py-2 text-lg font-semibold rounded-lg bg-white/10 backdrop-blur-md shadow-md transition duration-300 hover:bg-white/20 hover:backdrop-blur-lg"
        >
         📂 Projects
        </Link>
        <Link
          href="https://github.com/withabhinay"
          target="_blank"
          className="px-6 py-2 text-lg font-semibold rounded-lg bg-white/10 backdrop-blur-md shadow-md transition duration-300 hover:bg-white/20 hover:backdrop-blur-lg"
        >
         🔗 GitHub
        </Link>
      </div>
    </section>
    </BackgroundBeamsWithCollision>
  );
}
