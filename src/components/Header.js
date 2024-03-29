import React, { useContext } from "react";
import Loader from "./Loader";
import { VideoContext } from "../context/videoState";
import { Link } from "react-router-dom";

export default function Header() {
  const { loading } = useContext(VideoContext);
  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-center h-14 px-4 md:px-5 bg-black">
      {loading && <Loader />}
      <div className="flex h-5 items-center">
        <Link to={`/`}>
          <h1 className="text-lg text-textPrimary font-bold">
            <span className="text-blue-300">Assignment</span>
          </h1>
        </Link>
      </div>
    </div>
  );
}
