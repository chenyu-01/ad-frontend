'use client'
import React from 'react';
import '../styles/index.css';
import Switchbtn from './switchbtn';

export default function Preference() {
  return (
    <div className='main-container  flex flex-col items-center  w-[700px] h-[844px] bg-[#fff] relative overflow-hidden mx-auto my-0'>
      
    <div className=' flex flex-col items-center'>
      <table className="table-auto font-['Inter'] text-[32px] font-semibold leading-[38.727px] text-[#000] border-collapse ">
      
        <tbody className='text-center '>
          <tr>          
            <td >
              Town              
            </td>
            <td className='flex items-center w-[342px] h-[44px] rounded-[6px] border-solid border border-[rgba(83,76,76,0.14)] relative z-[15] mt-[11px] mr-0 mb-0 ml-[24px]'>
              <input type="text" defaultValue="nus" className="h-[16px] font-['Inter'] text-[14px] font-medium px-4 text-[#534c4c]"/>
            </td>
          </tr >
        </tbody>


        <tbody className='text-center '>
          <tr>          
            <td >
              storyRange              
            </td>
            <td className='flex items-center w-[342px] h-[44px] rounded-[6px] border-solid border border-[rgba(83,76,76,0.14)] relative z-[15] mt-[11px] mr-0 mb-0 ml-[24px]'>
              <input type="text" defaultValue="1" className="h-[16px] font-['Inter'] text-[14px] font-medium px-4 text-[#534c4c]"/>
            </td>
          </tr >
        </tbody>

        <tbody className='text-center '>
          <tr>          
            <td >
              OneBedRoom              
            </td>
            <td className='flex items-center justify-center content-center place-items-center border-solid h-[80px] w-[342px]'>
              <Switchbtn></Switchbtn>
            </td>
          </tr >
        </tbody>

        <tbody className='text-center '>
          <tr>          
            <td >
              TwoBedRooms            
            </td>
            <td className='flex items-center justify-center content-center place-items-center border-solid h-[80px] w-[342px]'>
              <Switchbtn></Switchbtn>
            </td>
          </tr >
        </tbody>

        <tbody className='text-center '>
          <tr>          
            <td >
              ThreeBedRooms              
            </td>
            <td className='flex items-center justify-center content-center place-items-center border-solid h-[80px] w-[342px]'>
              <Switchbtn></Switchbtn>
            </td>
          </tr >
        </tbody>


        <tbody className='text-center '>
          <tr>          
            <td >
              FourBedRooms              
            </td>
            <td className='flex items-center justify-center content-center place-items-center border-solid h-[80px] w-[342px]'>
              <Switchbtn></Switchbtn>
            </td>
          </tr >
        </tbody>

        <tbody className='text-center '>
          <tr>          
            <td >
              LowPriceRange             
            </td>
            <td className='flex items-center justify-center content-center place-items-center border-solid h-[80px] w-[342px]'>
              <Switchbtn></Switchbtn>
            </td>
          </tr >
        </tbody>

        <tbody className='text-center '>
          <tr>          
            <td >
              MidPriceRange             
            </td>
            <td className='flex items-center justify-center content-center place-items-center border-solid h-[80px] w-[342px]'>
              <Switchbtn></Switchbtn>
            </td>
          </tr >
        </tbody>


        <tbody className='text-center '>
          <tr>          
            <td >
              HighPriceRange             
            </td>
            <td className='flex items-center justify-center content-center place-items-center border-solid h-[80px] w-[342px]'>
              <Switchbtn></Switchbtn>
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
