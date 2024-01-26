import React from "react";
import "./priya.css";

export default function Main() {
  return (
    <div className="main-container w-[1426px] h-[1127px] text-[0px] relative overflow-hidden mx-auto my-0">
      <span className="block h-[51px] font-['Inter'] text-[32px] font-semibold leading-[38.727px] text-[#000] relative text-left whitespace-nowrap mt-[19px] mr-0 mb-0 ml-[537px]">
        Appointment List
      </span>
      <div className="w-[1229.216px] h-[61px] relative z-[16] mt-[69px] mr-0 mb-0 ml-[9.784px]">
        <span className="flex h-[58px] justify-start items-start font-['Inter'] text-[32px] font-semibold leading-[38.727px] text-[#000] absolute top-0 left-[0px] text-left whitespace-nowrap z-[15]">
          Appointment ID
        </span>
        <span className="flex h-[58px] justify-start items-start font-['Inter'] text-[32px] font-semibold leading-[38.727px] text-[#000] absolute top-0 left-[457.216px] text-left whitespace-nowrap z-[15]">
          Appointment Date
        </span>

        <span className="flex h-[50px] justify-start items-start font-['Inter'] text-[32px] font-semibold leading-[38.727px] text-[#000] absolute top-[11px] left-[1047.216px] text-left whitespace-nowrap z-[16]">
          Actions
        </span>
      </div>
      <div className="w-[773px] h-[58px] relative z-20 mt-[79px] mr-0 mb-0 ml-0">
        <span className="flex h-[45px] justify-start items-start font-['Inter'] text-[32px] font-semibold leading-[38.727px] text-[#000] absolute top-0 left-0 text-left whitespace-nowrap z-[17]">
          1029
        </span>
        <span className="flex h-[58px] justify-start items-start font-['Inter'] text-[32px] font-semibold leading-[38.727px] text-[#000] absolute top-0 left-[467px] text-left whitespace-nowrap z-20">
          10/02/2024
        </span>

        <button
          className="flex h-[58px] justify-center items-center font-['Inter'] text-[32px] font-semibold leading-[38.727px] text-[#000] absolute top-0 left-[960px]  whitespace-nowrap z-20
          w-[160px] border-solid border-t-[3px] border-x-[3px]  border-b-[5px] border-black rounded-[18px]"
        >
          Modify
        </button>
        <button
          className="flex h-[58px] justify-center items-center font-['Inter'] text-[32px] font-semibold leading-[38.727px] text-[#000] absolute top-0 left-[1180px]  whitespace-nowrap z-20
          w-[160px] border-solid border-t-[3px] border-x-[3px]  border-b-[5px] border-black rounded-[18px]"
        >
          Cancel
        </button>
      </div>

      <div className="w-[761px] h-[65px] relative z-[21] mt-[109px] mr-0 mb-0 ml-0">
        <span className="flex h-[48px] justify-start items-start font-['Inter'] text-[32px] font-semibold leading-[38.727px] text-[#000] absolute top-0 left-[475px] text-left whitespace-nowrap z-[21]">
          13/02/2024
        </span>
        <span className="flex w-[213px] h-[59px] justify-start items-start font-['Inter'] text-[32px] font-semibold leading-[38.727px] text-[#000] absolute top-[6px] left-0 text-left z-[18]">
          1098
        </span>
        <button
          className="flex h-[58px] justify-center items-center font-['Inter'] text-[32px] font-semibold leading-[38.727px] text-[#000] absolute top-0 left-[960px]  whitespace-nowrap z-20
          w-[160px] border-solid border-t-[3px] border-x-[3px]  border-b-[5px] border-black rounded-[18px]"
        >
          Modify
        </button>
        <button
          className="flex h-[58px] justify-center items-center font-['Inter'] text-[32px] font-semibold leading-[38.727px] text-[#000] absolute top-0 left-[1180px]  whitespace-nowrap z-20
          w-[160px] border-solid border-t-[3px] border-x-[3px]  border-b-[5px] border-black rounded-[18px]"
        >
          Cancel
        </button>
      </div>

      <div className="flex w-[761px] h-[66px] justify-between items-center relative z-[22] mt-[103px] mr-0 mb-0 ml-0">
        <span className="flex w-[213px] h-[66px] justify-start items-start shrink-0 font-['Inter'] text-[32px] font-semibold leading-[38.727px] text-[#000] relative text-left z-[19]">
          1120
        </span>
        <span className="flex w-[281px] h-[62px] justify-start items-start shrink-0 font-['Inter'] text-[32px] font-semibold leading-[38.727px] text-[#000] relative text-left z-[22]">
          01/03/2024
        </span>
        <button
          className="flex h-[58px] justify-center items-center font-['Inter'] text-[32px] font-semibold leading-[38.727px] text-[#000] absolute top-0 left-[960px]  whitespace-nowrap z-20
          w-[160px] border-solid border-t-[3px] border-x-[3px]  border-b-[5px] border-black rounded-[18px]"
        >
          Modify
        </button>
        <button
          className="flex h-[58px] justify-center items-center font-['Inter'] text-[32px] font-semibold leading-[38.727px] text-[#000] absolute top-0 left-[1180px]  whitespace-nowrap z-20
          w-[160px] border-solid border-t-[3px] border-x-[3px]  border-b-[5px] border-black rounded-[18px]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
