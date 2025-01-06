import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img,title }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div>
        <div
          className="hero h-[500px]"
        
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md bg-black bg-opacity-30 py-4 px-20">
              <h1 className="mb-5 text-5xl font-bold">{title}</h1>
              <p className="mb-5">
                "The food gonna favorite for you from now on."
              </p>
           
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
