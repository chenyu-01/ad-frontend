import { config } from "@/config";
const serverUrl = config.serverUrl;

export async function fetchListByProps(dataPrams) {
  // update dataprops with searchParams
  const searchParams = { ...dataProps(), ...dataPrams };
  // fetch data from API
  try {
    // ... fetch data from API ...
    let fetchurl = serverUrl + "/api/property/list/search/";
    let response = await fetch(fetchurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchParams),
    });
    // if response is no content, return empty array
    if (response.status === 204) {
      return [];
    }
    if (response.ok) {
      let data = await response.json();
      return data;
    } else {
      let message = await response.text();
      throw new Error(message);
    }
  } catch (error) {
    console.error(error.message);
    return new Promise((resolve, reject) => {
      reject(error.message);
    });
  }
}
export const dataProps = () => {
  return {
    lowPrice: 0,
    highPrice: 0,
    town: "",
    roomOne: false,
    roomTwo: false,
    roomThree: false,
    roomFour: false,
  };
};
