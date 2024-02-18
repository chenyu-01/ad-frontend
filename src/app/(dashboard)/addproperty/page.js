"use client";
import { config } from "@/config";
import React, { useState, useEffect } from "react";
import "@/app/(dashboard)/usersetting/styles/index.css";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const serverUrl = config.serverUrl;
function AddProperty() {
  const router = useRouter();
  // for image
  const [imagePreview, setImagePreview] = useState(null);
  const [isSelect, setIsSelect] = useState(false);
  const [property, setProperty] = useState([]);
  /*
  const [property, setProperty] = useState({
    propertyid: "null",
    town: "",
    propertyStatus: "",
    flatType: "",
    storeyRange: "",
    streetName: "",
    floorArea: "",
    price: "",
    contractMonthPeriod: "",
    block: "",
    leaseCommenceDate: "",
    flatModel: "",
    ownerid: "",
    imageUrl: "",
  });

   */
  function transformString(str) {
    if (/^\d/.test(str)) {
      str = str.replace(/\d+/g, function(match) {
        switch (parseInt(match)) {
          case 1:
            return 'ONE';
          case 2:
            return 'TWO';
          case 3:
            return 'THREE';
          case 4:
            return 'FOUR';
          case 5:
            return 'FIVE';
          default:
            return match;
        }
      });
    }
    str = str.replace(/[^\w]+/g, '_').toUpperCase();
    return str;
  }


  const [enumStatusOptions, setEnumStatusOptions] = useState([]);
  const [enumTownOptions, setEnumTownOptions] = useState([]);
  const [enumFlatTypes, setEnumFlatTypes] = useState([]);
  const [enumFlatModels, setEnumFlatModels] = useState([]);

  const [role, setRole] = useState();
  const fetchImage = async (id) => {
    const fetchURL = `${serverUrl}/api/usersetting/fetchImg/` + id;
    const response = await fetch(fetchURL);
    // if response not found, then just return
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    console.log(data);
    setImagePreview(data.imageUrl);
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("image"));
    const idtoSend = property.id || "null";
    const uploadURL = `${serverUrl}/api/usersetting/upload/` + idtoSend;
    try {
      const response = await fetch(uploadURL, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("Image uploaded successfully");
        let data = await response.json();
        const imageUrl = data.imageUrl;
        console.log(imageUrl);
        property.imageUrl = imageUrl;
        window.alert("submit image successfully");
      }
    } catch (error) {
      console.log(error);
      window.alert("failed to submit image");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      // Check if the file is an image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // reader.result contains the base64 encoded image
        setIsSelect(true);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };
  async function fetchRole() {
    // fetch data from API
    try {
      // ... fetch data from API ...
      let fetchurl = serverUrl + "/api/usersetting/getRole";
      let response = await fetch(fetchurl, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      });
      let data = await response.json();
      if (response.ok) console.log(data);
      setRole(data.role);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function fetchProperty() {
    try {
      let fetchurl = serverUrl + "/api/usersetting/getProperty";
      let response = await fetch(fetchurl, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      });
      let data = await response.json();
      if (response.ok) {
        const attributesToTransform = ['flatType', 'town', 'flatModel'];
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key) && attributesToTransform.includes(key)) {
            let transformedValue = transformString(data[key]);
            data[key] = transformedValue;
          }
        }
        setProperty(data);
        await fetchImage(data.id);
        console.log(data);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  async function fetchPropertyStatus() {
    // fetch data from API
    try {
      // ... fetch data from API ...
      let fetchurl = serverUrl + "/api/usersetting/getPropertyStatus";
      let response = await fetch(fetchurl, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      });
      let data = await response.json();
      setEnumStatusOptions(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function fetchTownName() {
    // fetch data from API
    try {
      // ... fetch data from API ...
      let fetchurl = serverUrl + "/api/usersetting/getTownNames";
      let response = await fetch(fetchurl, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      });
      let data = await response.json();
      setEnumTownOptions(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function fetchFlatType() {
    // fetch data from API
    try {
      // ... fetch data from API ...
      let fetchurl = serverUrl + "/api/usersetting/getFlatTypes";
      let response = await fetch(fetchurl, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      });
      let data = await response.json();
      setEnumFlatTypes(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function fetchFlatModel() {
    // fetch data from API
    try {
      // ... fetch data from API ...
      let fetchurl = serverUrl + "/api/usersetting/getFlatModels";
      let response = await fetch(fetchurl, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      });
      let data = await response.json();
      setEnumFlatModels(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  const handleChange = (e,typed) => {
    const { name, value,type,checked } = e.target;
    console.log(name+"name");
    console.log(value+"value");
    console.log(type+"type");
    console.log(checked+"type");


    setProperty((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetchRole();
    fetchPropertyStatus();
    fetchTownName();
    fetchFlatType();
    fetchFlatModel();
    // the first time the page is loaded, fetch data from API
    //SelectStatus({target:{value:'rented'}});
    setProperty((prevProperty) => {
      return {
        ...prevProperty,
        propertyStatus: "rented",
      };
    });
    console.log(enumTownOptions[0])

    fetchProperty();
  }, []);




  const handleSave = async () => {
    try {
      console.log("要发送的房产");
      console.log(property);
      if(!property.hasOwnProperty("town")){
        property.town = enumTownOptions[0];
      }
      if(!property.hasOwnProperty("flatType")){
        property.flatType = enumFlatTypes[0];
      }
      if(!property.hasOwnProperty("flatModel")){
        property.flatModel = enumFlatModels[0];
      }
      console.log("现在的");
      console.log(property)
      let fetchurl = serverUrl + "/api/usersetting/saveProperty";
      let response = await fetch(fetchurl, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(property),
      });
      let data = await response.json();
      console.log("要发送的，解析的");
      console.log(JSON.stringify(property));
      console.log("电报")
      console.log(data);
      if (response.ok) {
        window.alert("save success");
        await fetchProperty();
        router.refresh();
      } else {
        window.alert("save failed");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      {role == "owner" && (
        <div className="main-container w-full  flex flex-col items-center mx-auto my-0 overflow-y-auto">
          <div className="w-full  bg-[#fff]  top-0 left-0  z-[3]">
            <div className="w-full  text-[0px] bg-[rgba(255,255,255,0.2)] rounded-[3.0px] border-solid border-[5px] border-[#eff0f6]  z-[4] mt-0 mr-0 mb-0 ml-0">
              <table className="w-full table-auto  border-collapse overflow-y-auto font-['Inter'] md:text-[25px] sm:text-[12.5px] font-semibold leading-[38px] text-[#000] ">
                <tbody className="text-center ">
                  <tr>
                    <td colSpan={2}>
                      <div className="flex justify-center items-center text-[35px]   font-medium  text-gray-900   text-left z-[13] ">
                        Register Property
                      </div>
                    </td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td>
                      <div className=" h-[50px]   mt-[5px]">
                        <div className="flex  items-center gap-[8px] flex-nowrap  inset-x-0 top-0   ">
                          <span
                            id="listbox-Status"
                            className="flex items-center  text-[25px]   font-medium leading-6 text-gray-900"
                          >
                            Status
                          </span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="flex items-center  mt-2">
                        <select
                          name="propertyStatus"
                          value={property.propertyStatus}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          className=" w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        >
                          {property.propertyid == null &&
                            enumStatusOptions.map((option) => (
                              <option
                                key={option}
                                value={option}
                                className="flex items-center ml-3  truncate  "
                              >
                                {option}
                              </option>
                            ))}

                          {property.propertyid != null && (
                            <>
                              <option
                                value="forRent"
                                className="flex items-center ml-3 truncate"
                              >
                                forRent
                              </option>
                              <option
                                value="forSale"
                                className="flex items-center ml-3 truncate"
                              >
                                forSale
                              </option>
                            </>
                          )}
                        </select>
                      </div>
                    </td>
                  </tr>
                </tbody>

                <tbody className="text-center ">
                  <tr>
                    <td>
                      <div className=" h-[50px] relative  mt-[5px]">
                        <div className="flex items-center gap-[8px] flex-nowrap absolute inset-x-0 top-0   ">
                          <span
                            id="listbox-label"
                            className="flex items-center  text-[25px] font-medium leading-6 text-gray-900"
                          >
                            Town
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center  w-full">
                        <select
                          name="town"
                          value={property.town}
                          onChange={handleChange}
                          className=" w-full  cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        >
                          {enumTownOptions.map((option) => (
                            <option
                              key={option}
                              value={option}
                              className="flex items-center ml-3 truncate  "
                            >
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </td>
                  </tr>
                </tbody>

                <tbody className="text-center ">
                  <tr>
                    <td>
                      <div className=" h-[50px]   mt-[5px]">
                        <div className="flex  items-center gap-[8px] flex-nowrap  inset-x-0 top-0   ">
                          <span
                            id="listbox-label"
                            className="flex items-center  text-[25px] font-medium leading-6 text-gray-900"
                          >
                            FlatType
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center  w-full">
                        <select
                          name="flatType"
                          value={property.flatType}
                          onChange={handleChange}
                          className=" w-full  cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        >
                          {enumFlatTypes.map((option) => (
                            <option
                              key={option}
                              value={option}
                              className="flex items-center ml-3 truncate  "
                            >
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </td>
                  </tr>
                </tbody>

                <tbody className="text-center ">
                  <tr>
                    <td>
                      <div className=" h-[50px]  mt-[5px]">
                        <div className="flex  items-center gap-[8px] flex-nowrap inset-x-0 top-0   ">
                          <span
                            id="listbox-label"
                            className="flex items-center  text-[25px]  font-medium leading-6 text-gray-900"
                          >
                            StoryRange
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center   mt-2">
                        <input
                          name="storeyRange"
                          value={property.storeyRange}
                          onChange={handleChange}
                          className=" w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>

                <tbody className="text-center ">
                  <tr>
                    <td>
                      <div className=" h-[50px]   mt-[5px]">
                        <div className="flex items-center gap-[8px] flex-nowrap  inset-x-0 top-0   ">
                          <span
                            id="listbox-label"
                            className="flex items-center  text-[25px] font-medium leading-6 text-gray-900"
                          >
                            StreetName
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center   mt-2">
                        <input
                          name="streetName"
                          value={property.streetName}
                          onChange={handleChange}
                          className=" w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>

                <tbody className="text-center ">
                  <tr>
                    <td>
                      <div className=" h-[50px]   mt-[5px]">
                        <div className="flex  items-center gap-[8px] flex-nowrap  inset-x-0 top-0   ">
                          <span
                            id="listbox-label"
                            className="flex items-center  text-[25px] font-medium leading-6 text-gray-900"
                          >
                            FloorArea
                          </span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="flex items-center   mt-2">
                        <input
                          name="floorArea"
                          value={property.floorArea}
                          onChange={handleChange}
                          className=" w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>

                <tbody className="text-center ">
                  <tr>
                    <td>
                      <div className=" h-[50px]  mt-[5px]">
                        <div className="flex  items-center gap-[8px] flex-nowrap inset-x-0 top-0   ">
                          <span
                            id="listbox-label"
                            className="flex items-center  text-[25px] font-medium leading-6 text-gray-900"
                          >
                            Block
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center  mt-2">
                        <input
                          name="block"
                          value={property.block}
                          onChange={handleChange}
                          className=" w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>

                <tbody className="text-center ">
                  <tr>
                    <td>
                      <div className=" h-[50px] relative  mt-[5px]">
                        <div className="flex  items-center gap-[8px] flex-nowrap absolute inset-x-0 top-0   ">
                          <span
                            id="listbox-label"
                            className="flex items-center  text-[25px] font-medium leading-6 text-gray-900"
                          >
                            FlatModel
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center  w-full">
                        <select
                          name="flatModel"
                          value={property.flatModel}
                          onChange={handleChange}
                          className=" w-full  cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        >
                          {enumFlatModels.map((option) => (
                            <option
                              key={option}
                              value={option}
                              className="flex items-center ml-3 truncate  "
                            >
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </td>
                  </tr>
                </tbody>

                <tbody className="text-center ">
                  <tr>
                    <td>
                      <div className=" h-[50px]   mt-[5px]">
                        <div className="flex items-center gap-[8px] flex-nowrap  inset-x-0 top-0   ">
                          <span
                            id="listbox-label"
                            className="flex items-center  text-[25px]  font-medium leading-6 text-gray-900"
                          >
                            Price
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center  relative mt-2">
                        <input
                          name="price"
                          value={property.price}
                          onChange={handleChange}
                          className=" w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>

                {(property.propertyStatus === "forSale" ||
                  property.propertyStatus === "soldOut") && (
                  <>
                    <tbody className="text-center ">
                      <tr>
                        <td>
                          <div className=" h-[50px]   mt-[5px]">
                            <div className="flex  items-center gap-[8px] flex-nowrap  inset-x-0 top-0   ">
                              <span
                                id="listbox-label"
                                className="flex items-center  text-[25px] font-medium leading-6 text-gray-900"
                              >
                                LeaseCommenceDate
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center  mt-2">
                            <input
                              type="date"
                              name="leaseCommenceDate"
                              value={property.leaseCommenceDate}
                              onChange={handleChange}
                              className=" w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </>
                )}

                {(property.propertyStatus === "forRent" ||
                  property.propertyStatus === "rented") && (
                  <>
                    <tbody className="text-center ">
                      <tr>
                        <td>
                          <div className=" h-[50px]   mt-[5px]">
                            <div className="flex  items-center gap-[8px] flex-nowrap  inset-x-0 top-0   ">
                              <span
                                id="listbox-label"
                                className="flex items-center  text-[25px]   font-medium leading-6 text-gray-900"
                              >
                                ContractMonthPeriod
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center mt-2">
                            <input
                              name="contractMonthPeriod"
                              value={property.contractMonthPeriod}
                              onChange={handleChange}
                              className=" w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </>
                )}

                <tbody>
                  <tr>
                    <td>
                      <form
                        className="container mx-auto p-4"
                        onSubmit={uploadImage}
                      >
                        <h1 className="text-xl font-bold mb-4">
                          Upload an Image
                        </h1>
                        <input
                          type="file"
                          name="image"
                          onChange={handleImageChange}
                          className="file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-violet-50 file:text-violet-700
                   hover:file:bg-violet-100"
                        />
                        {imagePreview && (
                          <div className="mt-4">
                            <img
                              src={imagePreview}
                              alt="Preview"
                              className="max-w-xs max-h-xs rounded-md shadow-lg"
                            />
                          </div>
                        )}
                        {isSelect && <Button type="submit">Submit</Button>}
                      </form>
                    </td>
                  </tr>
                </tbody>

                <tbody className="text-center ">
                  <tr>
                    <td className="flex justify-center items-center">
                      <div className="flex justify-center items-center">
                        <Button onClick={handleSave}>Save</Button>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center">
                        <Button onClick={goBack}>Back</Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {role != "owner" && (
        <>
          <div className="main-container  flex flex-col items-center w-full  bg-[#fff]  overflow-hidden mx-auto my-0 ">
            <div className="font-['Inter'] md:text-[25px] sm:text-[12.5px] font-semibold leading-[38px] text-[#000]">
              You don not have the permission.
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default AddProperty;
