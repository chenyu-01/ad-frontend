import React from "react";
import HeroComponent from "../components/HeroComponent";
import FloatInfoComponent from "../components/FloatInfoComponent";


export default function Details() {
    return (
      <div className="container mx-auto px-4 py-8">
        <HeroComponent />
        <FloatInfoComponent />
        
        <DescriptionSection />
        <LocationSection />
        <PredictionSection />
  
        <MoreSection items={moreItemsData} />
      </div>
    );


    function MoreSection({ items }) {
        return (
          <section className="my-10">
            <h2 className="text-center text-2xl font-bold mb-6">MORE</h2>
            <MoreList items={items} />
          </section>
        );
    }

    

}