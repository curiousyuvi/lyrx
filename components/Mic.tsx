import { FaMicrophone } from "react-icons/fa";

export default function Mic() {
  return (
    <button className="fixed right-0 bottom-0 z-40 lg:hidden">
      <FaMicrophone className="text-7xl p-5 text-white bg-indigo-500 rounded-full m-6  shadow hover:shadow-xl hover:shadow-indigo-500/30" />
    </button>
  );
}
