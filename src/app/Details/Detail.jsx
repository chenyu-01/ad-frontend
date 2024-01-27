import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import HeroComponent from "./_HeroComponent";
import MoreList from "./_MoreList";
import DetailComponent from "./_DetailComponent";
import "../globals.css";

export default function Details() {

  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState(null);

  //const moreItemsData = [];
  // useEffect(() => {
  //   if (id) {
      
  //     fetch(`/api/details/${id}`)
  //       .then((response) => response.json())
  //       .then((responseData) => {
  //         setData(responseData);
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching data:', error);
  //       });
  //   }
  // }, [id]);

    return (
      <div className="container mx-auto px-4 py-8">
        <HeroComponent />
        <DetailComponent />

        <MoreSection items={[]} />
  
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