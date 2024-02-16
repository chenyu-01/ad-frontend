import React from "react";
import LineChart from "./sections/chart";

export default function DetailComponent(props) {

  const generateTimeLabels = () => {
    const monthAbbreviations = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth(); 
  
    const timeLabels = [];
    for (let i = 0; i <= 6; i++) {
      timeLabels.push(monthAbbreviations[(currentMonth + i) % 12]); 
    }
  
    return timeLabels;
  };

  const time_labels = generateTimeLabels();

  return (
    <div className="bg-zinc-300 w-full mt-9 pt-8 pb-5 px-10 lg:px-5">
      <header className="flex flex-wrap gap-5">
        <div className="flex flex-col w-full lg:w-1/2">
          <section>
            <h1 className="text-slate-900 text-4xl font-bold tracking-wide">
              Description
            </h1>
            <hr className="bg-black h-px my-5" />
            <p className="text-gray-400 text-base leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </section>
          {/* <section className="mt-14">
            <h1 className="text-slate-900 text-4xl font-bold tracking-wide">
              Location
            </h1>
            <hr className="bg-black h-px my-7" />
            <div className="map-container border bg-zinc-300 h-[400px] rounded-md border-black my-6">
            </div>
          </section> */}

          { props.type === "forSale" && (
            <section>
            <h1 className="text-slate-900 text-4xl font-bold tracking-wide">
              Prediction
            </h1>
            <div className="trend-prediction-container border bg-zinc-300 h-[400px] rounded-md border-black mt-10">
              <LineChart currentValue = {props.price} 
              id={props.id}
              labels = {time_labels}
              />
            </div>
          </section>)
          }
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:ml-5">
          {/* Other contents */}
        </div>
      </header>
    </div>
  );
}
