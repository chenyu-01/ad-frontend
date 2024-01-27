import React from "react";
export default function PredictionSection() {
  return (
    <section className="w-full md:w-1/2 mt-14 md:mt-0 md:ml-5">
      <h1 className="text-slate-900 text-4xl font-bold tracking-wide">
        Prediction
      </h1>
      <div className="trend-prediction-container border bg-zinc-300 h-[400px] rounded-md border-black mt-10">
        {/* <DynamicPredictionChart /> */}
      </div>
    </section>
  );
}