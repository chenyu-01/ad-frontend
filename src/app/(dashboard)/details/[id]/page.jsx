"use client";
import { config } from "@/config";
import { useContext } from "react";
import { AuthContext } from "@/app/(dashboard)/AuthProvider";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import HeroComponent from "./_HeroComponent";
import MoreList from "./_MoreList";
import DetailComponent from "./_DetailComponent";
import Image from "next/image";
import "../../../globals.css";

export default function Details() {
  const router = useRouter();
  const [id, setId] = useState(null);
  const [data, setData] = useState(null);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState({});
  const { userData, isAuthenticated } = useContext(AuthContext);
  const [item_id_list, setItem_id_list] = useState([]);
  const serverUrl = config.serverUrl;

  useEffect(() => {
    if (isAuthenticated && id) {
      fetch(serverUrl + `/api/property/recommend/${id}`)
        .then((response) => {
          if (response.ok) {
            return response.json();  
          } else {
            throw new Error('Network response was not ok.');
          }
        })
        .then((responseData) => {
          console.log("Data received:", responseData);
          //shall not have the same id as the current property
          responseData = responseData.filter((item) => item !== params.id);
          responseData = responseData.sort(() => 0.5 - Math.random()) 
          .slice(0, window.innerWidth >= 768 ? 5 : 3);
          setItem_id_list(responseData);

        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [id]);

  useEffect(() => {
    if (isAuthenticated && userData) {
      if (params.id) {
        setIsLoading(true);
        fetch(serverUrl + `/api/property/details/${params.id}`)
          .then((response) => {
            if (response.ok) {
              return response.json();  
            } else {
              throw new Error('Network response was not ok.');
            }
          })
          .then((responseData) => {
            setData(responseData);
            setId(userData?.customerId);

            const newInfo = {
              userid: id,
              estate: params.id,
              area: responseData.floorArea,
              bedrooms: responseData.flatType,
              owner: responseData.ownerId,
              loc: responseData.town,
              ...(responseData.propertyStatus === "forRent" && {
                contractMonthPeriod: responseData.contractMonthPeriod,
              }),
            };


            setInfo(newInfo);

            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            setIsLoading(false);
            //SHALL GOTO 404 PAGE
            router.push("/error");
          });
      } 
    }
  }, [params.id, isAuthenticated, userData]);


  if (isLoading || !data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Image
          src="/details/loading.gif"
          alt="Loading..."
          width={300}
          height={300}
          className="block"
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <HeroComponent
        type={data.propertyStatus}
        name={data.streetName}
        price={data.price}
        info={info}
      />
      <DetailComponent
      price = {data.price} 
      id = {params.id} 
      type = {data.propertyStatus}
      />

      <MoreSection items={item_id_list} />
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
