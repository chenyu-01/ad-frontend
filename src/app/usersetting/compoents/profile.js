'use client'
import { config } from "@/config";
import React ,{useState,useEffect}from 'react';
import '../styles/index.css';
import { set } from 'date-fns';

const serverUrl = config.serverUrl;
const customerid = 1;
export default function Profile() {
  
  const [profile,setProfile ] = useState({
    name:'',
    password:'',
    email:'',
    contactNumber:'',

  });

  async function fetchProfile(customerid) {
    // fetch data from API
    try {
      // ... fetch data from API ...
      let fetchurl = serverUrl + "/api/usersetting/getProfile/" + customerid;
      let response = await fetch(fetchurl,{
        method:'GET',
        mode:'cors',
        headers:{
          'Accept':'application/json',
        },
      });
      let data = await response.json();
      console.log(data)
      setProfile(data)
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    // the first time the page is loaded, fetch data from API
    fetchProfile(customerid);
  }, []);

    
  const handleChange = (e) => {
    const {name,value} = e.target;
    setProfile((prevData) => ({
      ...prevData,
      [name]:value
    }));
  
  };

  const handleSave = async() => {
    try{
      let fetchurl = serverUrl + "/api/usersetting/saveProfile/" + customerid;
      let response = await fetch(fetchurl, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
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
    <div className='main-container  flex flex-col items-center  w-[700px] h-[844px] bg-[#fff] relative overflow-hidden mx-auto my-0'>
      
    <div className=' flex flex-col items-center'>
      <table className="font-['Inter'] text-[32px] font-semibold leading-[38.727px] text-[#000] border-collapse ">
        <tbody className='text-center '>
          <tr>          
            <td >
              Name              
            </td>
            <td className='flex items-center w-[342px] h-[44px] rounded-[6px] border-solid border border-[rgba(83,76,76,0.14)] relative z-[15] mt-[11px] mr-0 mb-0 ml-[24px]'>
              <input type="text" name="name" value={profile.name} onChange={handleChange} className="h-[16px] font-['Inter'] text-[14px] font-medium px-4 text-[#534c4c]" />
              
              
              
            </td>
          </tr >
        </tbody>

        <tbody className='text-center '>
          <tr>          
            <td >
              Password              
            </td>
            <td className='flex items-center w-[342px] h-[44px] rounded-[6px] border-solid border border-[rgba(83,76,76,0.14)] relative z-[15] mt-[11px] mr-0 mb-0 ml-[24px]'>
            <input type="password" name="password" value={profile.password} onChange={handleChange}  className="h-[16px] font-['Inter'] text-[14px] font-medium px-4 text-[#534c4c]"/>
            
            </td>
          </tr >
        </tbody>

        <tbody className='text-center '>
          <tr>          
            <td >
              Email              
            </td>
            <td className='flex items-center w-[342px] h-[44px] rounded-[6px] border-solid border border-[rgba(83,76,76,0.14)] relative z-[15] mt-[11px] mr-0 mb-0 ml-[24px]'>
              <input type="email" name="email" value={profile.email} onChange={handleChange}  className="h-[16px] font-['Inter'] text-[14px] font-medium px-4 text-[#534c4c]"/>
              
            </td>
          </tr >
        </tbody>


        <tbody className='text-center '>
          <tr>          
            <td >
              ContactNumber              
            </td>
            <td className='flex items-center w-[342px] h-[44px] rounded-[6px] border-solid border border-[rgba(83,76,76,0.14)] relative z-[15] mt-[11px] mr-0 mb-0 ml-[24px]'>
              <input type="text" name="contactnumber" value={profile.contactNumber} onChange={handleChange}  className="h-[16px] font-['Inter'] text-[14px] font-medium px-4 text-[#534c4c]"/>
              
            </td>
          </tr >
        </tbody>

            
        
      </table>
      
                   
      <div className=" flex justify-center w-[625px] mt-4">
              
        <button type="submit" onClick={handleSave} className="flex w-[200px] h-[45px] justify-center items-center rounded-[6px] bg-[#24265f] font-['Inter'] text-[20px] font-medium  text-[#fff]  whitespace-nowrap z-[41]">
          Save
        </button>
                        
      </div>
    </div>
                  
    </div>
  );
}
