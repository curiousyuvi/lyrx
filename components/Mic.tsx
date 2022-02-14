import { useEffect, useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { BsStopFill } from "react-icons/bs";

export default function Mic() {
  return (
    <button className="fixed right-0 bottom-0 z-40 lg:hidden text-4xl p-5 text-white bg-indigo-500 rounded-full m-6  shadow hover:shadow-xl hover:shadow-indigo-500/30">
      <FaMicrophone />
    </button>
  );
}
