import React from "react";

export default function LocationSection() {
  return (
    <section className="w-full md:w-1/2 mt-14 md:mt-0">
      <h1 className="text-slate-900 text-4xl font-bold tracking-wide">
        Location
      </h1>
      <hr className="bg-black h-px my-7" />
      <div className="map-container border bg-zinc-300 h-[400px] rounded-md border-black my-6">
        {/* */}
        {/* <DynamicMap /> */}
      </div>
    </section>
  );
}