import Image from "next/image";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FiArrowRight, FiTrendingUp } from "react-icons/fi";
import { BsMusicNoteList } from "react-icons/bs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LyricCard from "../components/LyricCard";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <div className="min-h-screen max-w-[1280px] mx-auto m-0 p-4 pt-32 flex flex-col">
        <div className="flex items-center my-4">
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-500 mr-4">
            Trending Songs
          </h1>
          <FiTrendingUp className="text-2xl sm:text-3xl text-gray-500" />
        </div>
        <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          <LyricCard />
          <LyricCard />
          <LyricCard />
          <LyricCard />
          <LyricCard />
          <LyricCard />
          <LyricCard />
          <LyricCard />
          <LyricCard />
        </div>
      </div>
    </div>
  );
}
