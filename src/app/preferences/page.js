'use client'
import { config } from "@/config";
import React,{useState,useEffect} from 'react';
import '../usersetting/styles/index.css';
import Switchbtn from '../usersetting/compoents/switchbtn';

const serverUrl = config.serverUrl;
const customerid = 1;
export default function Preferences() {
  const [preferences,setPreferences ] = useState({
    town: '',
    storyRange: '',
    bedroom1: '',
    bedroom2: '',
    bedroom3: '',
    bedroom4: '',
    lowPriceRange:'',
    midPriceRange:'',
    highPriceRange:'',
  });
  const [enumOptions,setEnumOptions] = useState([]);


  async function fetchPreferences(customerid) {
    // fetch data from API
    try {
      // ... fetch data from API ...
      let fetchurl = serverUrl + "/api/usersetting/getPreferences/" + customerid;
      let response = await fetch(fetchurl,{
        method:'GET',
        mode:'cors',
        headers:{
          'Accept':'application/json',
        },
      });
      let data = await response.json();
      setPreferences(data)
    } catch (error) {
      console.error(error.message);
    }
  }

  async function fetchTownName() {
    // fetch data from API
    try {
      // ... fetch data from API ...
      let fetchurl = serverUrl + "/api/usersetting/getTownName";
      let response = await fetch(fetchurl,{
        method:'GET',
        mode:'cors',
        headers:{
          'Accept':'application/json',
        },
      });
      let data = await response.json();   
      setEnumOptions(data)      
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    // the first time the page is loaded, fetch data from API
    fetchTownName();
    fetchPreferences(customerid);    
  }, []);

    
  const handleChange = (e) => {
    const {name,value,type,checked} = e;
    if(type == "change"){
      const {name,value,type,checked} = e.target;
      setPreferences((prevData) => ({
        ...prevData,
        [name]:value
      }));
    }else{
      setPreferences((prevData) => ({
        ...prevData,
        [name]:value
      }));
    }     
  };

  const handleSave = async() => {
    try{   
      let fetchurl = serverUrl + "/api/usersetting/savePreferences/" + customerid;
      let response = await fetch(fetchurl, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },     
        body: JSON.stringify(preferences),
    });
   
    if (response.ok){
      window.alert("save success")
    }else{
      window.alert("save failed")
    }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div>
    <div className='main-container  flex flex-col items-center w-full  bg-[#fff]  overflow-hidden mx-auto my-0'>
      
    <div className=' flex flex-col items-center'>
      <table className="font-['Inter'] md:text-[25px] sm:text-[12.5px] font-semibold leading-[38px] text-[#000] border-collapse ">  
      
        <tbody className='text-center '>
          <tr>          
            <td >
              Town              
            </td>
            <td className='flex items-center justify-center w-full '>
              <div >
                <select name="town" value={preferences.town} onChange={handleChange} className=" w-full  cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6" >
                  {enumOptions.map(option =>(
                    <option key={option} value={option} className="flex items-center ml-3 truncate  ">
                       {option} 
                    </option>
                  ))}
                </select>
              </div>
            </td>
          </tr >
        </tbody>


        <tbody className='text-center '>
          <tr>          
            <td >
              storyRange              
            </td>
            <td className='flex items-center justify-center w-full '>
              <div className="flex items-center justify-center rounded-[6px] h-[50px] border-solid border border-[rgba(83,76,76,0.14)]   mr-0 mb-0 ml-[12px]">
                <input type="text" name="storyRange" value={preferences.storyRange} onChange={handleChange} className="flex items-center  h-[30px] font-['Inter'] md:text-[25px] sm:text-[20px] font-medium px-4 text-[#534c4c]"/>
              </div>
            </td>
          </tr >
        </tbody>

        <tbody className='text-center '>
          <tr>          
            <td className='flex-grow'>
              OneBedRoom              
            </td >
            <td className='flex items-center justify-center  w-full '>
              <div className='flex items-center justify-center '>
                <Switchbtn name="bedroom1" value={preferences.bedroom1} onChange={handleChange} className=" my-auto"></Switchbtn>
              </div>
            </td>
          </tr >
        </tbody>

        <tbody className='text-center'>
          <tr>          
            <td>
              TwoBedRooms            
            </td>
            <td className='flex  items-center justify-center w-full'>
              <Switchbtn name="bedroom2" value={preferences.bedroom2} onChange={handleChange}></Switchbtn>
            </td>
          </tr>
        </tbody>


        <tbody className='text-center '>
          <tr>          
            <td>
              ThreeBedRooms              
            </td>
            <td className='flex items-center justify-center content-center place-items-center w-full'>
              <Switchbtn name="bedroom3" value={preferences.bedroom3} onChange={handleChange}></Switchbtn>
            </td>
          </tr >
        </tbody>


        <tbody className='text-center '>
          <tr>          
            <td >
              FourBedRooms              
            </td>
            <td className='flex items-center justify-center content-center place-items-center w-full'>
              <Switchbtn name="bedroom4" value={preferences.bedroom4} onChange={handleChange}></Switchbtn>
            </td>
          </tr >
        </tbody>

        <tbody className='text-center '>
          <tr>          
            <td >
              LowPriceRange             
            </td>
            <td className='flex items-center justify-center content-center place-items-center w-full'>
              <Switchbtn name="lowPriceRange" value={preferences.lowPriceRange} onChange={handleChange}></Switchbtn>
            </td>
          </tr >
        </tbody>

        <tbody className='text-center '>
          <tr>          
            <td >
              MidPriceRange             
            </td>
            <td className='flex items-center justify-center content-center place-items-center w-full'>
              <Switchbtn name="midPriceRange" value={preferences.midPriceRange} onChange={handleChange}></Switchbtn>
            </td>
          </tr >
        </tbody>


        <tbody className='text-center '>
          <tr>          
            <td >
              HighPriceRange             
            </td>
            <td className='flex items-center justify-center content-center place-items-center w-full'>
              <Switchbtn name="highPriceRange" value={preferences.highPriceRange} onChange={handleChange}></Switchbtn>
            </td>
          </tr >
        </tbody>

            
        
      </table>
      
                   
      <div className=" flex justify-center w-full mt-4">
              
        <button type="submit" onClick={handleSave} className="flex w-[200px] h-[45px] justify-center items-center rounded-[6px] bg-[#24265f] font-['Inter'] text-[20px] font-medium  text-[#fff]  whitespace-nowrap z-[41]">
          Save
        </button>
                        
      </div>
      
    </div>
    
            
            
        

      
    </div>
    </div>
  );
}