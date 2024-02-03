import * as React from "react";
export default function Dashbaord() {
  return (
    <div className="flex gap-0 justify-between items-stretch pr-1.5 bg-white max-md:flex-wrap">
      <div className="flex flex-col items-stretch py-11 text-base font-semibold tracking-tight bg-white basis-0">
        <div className="flex gap-4 justify-between items-stretch self-start px-5 mt-28 whitespace-nowrap text-stone-950 max-md:mt-10">
          <div className="flex flex-col w-1 h-6 bg-green-700 rounded-2xl" />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/52d9dae53d377dfb2814242de517b24867a8ec189e28c5cbccfeaee0b20c60f8?"
            className="icon object-center w-6 aspect-square fill-black fill-opacity-0"
          />
          <div className="flex-auto my-auto">Dashboard</div>
          </div>
 
        <div className="flex flex-col items-center px-10 mt-12 font-medium text-stone-300 max-md:px-5 max-md:mt-10">
          <div className="flex gap-4 justify-between items-stretch self-stretch whitespace-nowrap">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fa6a601b38a6736bc94da039166cf870b323535f8473509077948f3627ce8a6?"
              className="user icon object-center w-6 aspect-square fill-black fill-opacity-0"
            />
            <div className="flex-auto my-auto">Profile</div>
          </div>
 
          <div className="flex gap-4 justify-between items-stretch self-stretch mt-12 max-md:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a581a37ade11def61fb9ac15ec83ec00960069bc366e0ff1f1dcad24812cca6?"
              className="object-center w-6 aspect-square fill-black fill-opacity-0"
            />
            <div className="flex-auto my-auto">Settings</div>
          </div>
 
 
          <div className="flex gap-4 justify-between items-stretch self-stretch mt-12 max-md:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/89fcc01356529ac2391ad18aaec9fb55f79ec0bf538fe534cbc99fe4bf1c5782?"
              className="object-center w-6 aspect-square fill-black fill-opacity-0"
            />
            <div className="flex-auto">Message</div>
          </div>
 
          <div className="flex gap-4 justify-between items-stretch self-stretch mt-12 max-md:mt-10 flex-shrink-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/87312eb2a3eade9e4bbb94b8d6fff264f0b6294acc086d35a8484ca80e905672?"
              className="object-center w-6 aspect-square fill-black fill-opacity-0"
            />
            <div className="flex-auto">MySelections</div>
          </div>
 
 
          <div className="flex gap-4 justify-between items-stretch self-stretch mt-12 max-md:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3347dcb221679c2670e3d1e2b3c01385a0649b4d0a1e696e1201d37bf5ebaf50?"
              className="object-center w-6 aspect-square fill-black fill-opacity-0"
            />
            <div className="flex-auto">Support</div>
          </div>
 
        </div>
 
       
        <div className="mt-10 h-px bg-stone-300 bg-opacity-20 w-[196px]" />
        <div className="flex gap-4 items-stretch self-center px-5 mt-80 text-red-500 whitespace-nowrap max-md:mt-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e712466f04a9d9c1a038c4022b40471094342dc6a23c1bbfafea5afcdf0a549?"
            className="object-center w-6 aspect-square"
          />
          <div className="">Logout</div>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed186bff21282e15545644de3a068738daf4c5a441e51a76b1d3d2ee2755e1bf?"
        className="object-center w-px aspect-[0] stroke-[1px] stroke-black stroke-opacity-10"
      />
      <div className="flex flex-col flex-1 items-stretch my-auto max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start px-5 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto self-end mt-9 text-3xl font-bold tracking-tighter leading-10 text-stone-950 max-md:max-w-full">
            Hi,User! <span className="font-medium">Welcome Back </span>
          </div>
          <div className="flex gap-3 items-stretch self-start px-7 py-4 text-sm tracking-tight leading-7 rounded-xl border border-solid border-black border-opacity-10 text-stone-300 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <div className="flex-auto my-auto">Search destination</div>
          </div>
        </div>
        <div className="mt-4 max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
           
            <div className="flex flex-col items-stretch w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start mt-6 font-semibold whitespace-nowrap max-md:mt-10">
                <div className="ml-4 text-3xl tracking-tighter text-zinc-950 max-md:ml-2.5">
                  Popular Collection
                </div>   
              </div>
            </div>
          </div>
          <div className=' flex flex-col items-center'>
        <table className="font-['Inter'] text-[32px] font-semibold leading-[38.727px] text-[#000] border-collapse ">
          <tbody className='text-center '>
            <tr>          
              <td class="p-12">
                <img loading="lazy" src="hou1.jpeg" className="object-center self-stretch my-auto w-full aspect-[1.54] max-md:mt-10" style={{width:300,height:300}}/>
                <div className="text-xl tracking-tighter whitespace-nowrap text-zinc-950">
                      Outram Park
                </div>            
              </td>
 
              <td class="p-12">
                <img loading="lazy" src="hou2.jpeg" className="object-center self-stretch my-auto w-full aspect-[1.54] max-md:mt-10" style={{width:300,height:300}}/>
                <div className="text-xl tracking-tighter whitespace-nowrap text-zinc-950">
                      Lakeside
                </div>  
              </td>
 
 
              <td class="p-12">
                <img loading="lazy" src="hou3.jpeg" className="object-center self-stretch my-auto w-full aspect-[1.54] max-md:mt-10" style={{width:300,height:300}}/>
                <div className="text-xl tracking-tighter whitespace-nowrap text-zinc-950">
                      Jurong West
                </div>  
              </td>

              <td class="p-12">
                <img loading="lazy" src="dream.jpg" className="object-center self-stretch my-auto w-full aspect-[1.54] max-md:mt-10" style={{width:300,height:300}}/>
                <div className="text-xl tracking-tighter whitespace-nowrap text-zinc-950">
                      Jurong West
                </div>  
              </td>
            </tr >           
          </tbody>
 
 
          <tbody className='text-center'>
            <tr>          
              <td class="p-12">
                <img loading="lazy" src="/pic2.jpeg" className="object-center self-stretch my-auto w-full aspect-[1.54] max-md:mt-10" style={{width:300,height:300}}/>
                <div className="text-xl tracking-tighter whitespace-nowrap text-zinc-950">
                      Buona Vista
                </div>            
              </td>
 
              <td class="p-12">
                <img loading="lazy" src="pic3.jpeg" className="object-center self-stretch my-auto w-full aspect-[1.54] max-md:mt-10" style={{width:300,height:300}}/>
                <div className="text-xl tracking-tighter whitespace-nowrap text-zinc-950">
                      Pasir Ris
                </div>  
              </td>
 
 
              <td class="p-12">
                <img loading="lazy" src="pic4.jpeg" className="object-center self-stretch my-auto w-full aspect-[1.54] max-md:mt-10" style={{width:300,height:300}}/>
                <div className="text-xl tracking-tighter whitespace-nowrap text-zinc-950">
                      Ang Mo Kio
                </div>  
              </td>
 
              <td class="p-12">
                <img loading="lazy" src="pic6.avif" className="object-center self-stretch my-auto w-full aspect-[1.54] max-md:mt-10" style={{width:300,height:300}}/>
                <div className="text-xl tracking-tighter whitespace-nowrap text-zinc-950">
                      Clementi
                </div>  
              </td>
            </tr >
          </tbody> 
        </table>                
      </div>
      </div>
 
       
      </div>
    </div>
  );
}