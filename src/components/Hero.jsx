import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="p-4 md:p-6 lg:p-8 mt-20 h-screen max-w-[90vw] mx-auto"
    >
      <div>
        <div className="container mx-auto rounded-lg p-4 min-h-[70vh] grid grid-cols-1 md:grid-cols-2 justify-items-start">
          <div className="flex flex-col justify-around items-start">
            <h1 className="text-4xl md:text-5xl xl:text-5xl font-bold text-accent text-wrap">
              Welcome to Zero Waste
            </h1>
            <div className="mt-4 text-text">
              <p className="md:text-md md:leading-8 lg:text-lg ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                dicta id consequuntur exercitationem in modi, maxime saepe
                molestiae obcaecati tempore veniam odit laboriosam quia? Aut
                dolores temporibus quod maiores quibusdam?
              </p>
            </div>
            <div className="mt-4 p-4">
              <button className="bg-primary px-4 py-2 font-semibold text-text rounded-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="text-text hidden md:block justify-self-center self-center">
            Img
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
