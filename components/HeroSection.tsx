"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Button, Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Alec!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-purple-600">
              recent computer science graduate{" "}
            </span>
            with a passion for all things tech. Pushing myself to learn and grow
            every day!
          </p>
          <div className="flex flex-wrap mt-4 space-x-4">
            <button
              className="text-slate-950 font-semibold px-6 py-3 bg-neutral-100 rounded shadow hover:bg-neutral-200"
              onClick={() => {
                window.open(
                  "https://github.com/AlecMalenfant001",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              Github
            </button>
            <button
              className="text-neutral-100 font-semibold px-6 py-3 bg-sky-600 rounded shadow hover:bg-sky-700"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/alec-malenfant/",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              LinkedIn
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
