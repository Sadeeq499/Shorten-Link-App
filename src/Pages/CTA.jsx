import React from "react";

function CTA() {
  return (
    <section id="cta" className="py-24 bg-DarkViolet">
      <div className="flex flex-col p-2  space-y-6 ">
        <h2 className="text-3xl font-bold text-center space-y-10 text-white">
          Boost your links today
        </h2>
        <button className="w-1/2 p-4 mx-auto text-white bg-Cyan hover:bg-cyan-300 rounded-full md:w-60">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default CTA;
