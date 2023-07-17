import React from "react";
import Home from "./homepage";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
            Understand Your Environment.
            <span className="sm:block"> Increase Communication. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-lg/relaxed">
            This AI powered language predictor helps to ease conversations by
            letting you know the language spoken wherever you are.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/home"
              className="
                block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
