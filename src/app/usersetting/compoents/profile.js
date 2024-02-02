'use client'
import React ,{useState}from 'react';
import '../styles/index.css';

export default function Profile() {
  const [profile,setProfile ] = useState({
    name: "owner",
    password: "ownerpas",
    email:"owner@gmail.com",
    contactnumber:"12345678",
  });
    
  const handleChange = (e) => {
    const {name,value} = e.target;
    setProfile((prevData) => ({
      ...prevData,
      [name]:value
    }));
  
  };
  
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
              <input type="text" name="contactnumber" value={profile.contactnumber} onChange={handleChange}  className="h-[16px] font-['Inter'] text-[14px] font-medium px-4 text-[#534c4c]"/>
              
            </td>
          </tr >
        </tbody>

            
        
      </table>
      
                   
      <div className=" flex justify-center w-[625px] mt-4">
              
        <button type="submit" className="flex w-[200px] h-[45px] justify-center items-center rounded-[6px] bg-[#24265f] font-['Inter'] text-[20px] font-medium  text-[#fff]  whitespace-nowrap z-[41]">
          Save
        </button>
                        
      </div>
    </div>
                  
    </div>
  );
}
