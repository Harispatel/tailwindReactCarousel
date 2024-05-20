import React from "react";
import { SkillsList } from "./data";

// Infinite Carousel Using Tailwind in React JS

const SkillsCarousel = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
      <h1 className="text-center uppercase text-4xl font-bold text-blue-400">
        Infinite Carousel of Skills List
      </h1>
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <div className="flex animate-marquee space-x-8">
          {SkillsList.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={logo?.image}
                alt={`logo-${index}`}
                className="h-24 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
      <a
        href="https://github.com/Harispatel"
        target="new"
        class="forced-color-adjust-none text-white text-center focus:forced-color-adjust-auto"
      >
        Copyright ©{new Date().getFullYear()} Developed by HSP Dev
      </a>
    </div>
  );
};

export default SkillsCarousel;
