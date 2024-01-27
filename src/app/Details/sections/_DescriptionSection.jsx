import React from "react";

function DescriptionSection() {
  return (
    <section className="flex flex-col w-full md:w-1/2">
      <h1 className="text-slate-900 text-4xl font-bold tracking-wide">
        Description
      </h1>
      <hr className="bg-black h-px my-5" />
      <p className="text-gray-400 text-base leading-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </section>
  );
}

export default DescriptionSection;
