import * as React from "react";
import Nav from "./nav";
import Header from "./header";
export default function Dashbaord() {
  return (
    <div className="flex gap-0 justify-between items-stretch pr-1.5 bg-white max-md:flex-wrap">
      

      <div className="flex flex-col flex-1 items-stretch my-auto max-md:max-w-full">
        

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
          <div className=" flex flex-col items-center">
            <table className="font-['Inter'] text-[32px] font-semibold leading-[38.727px] text-[#000] border-collapse ">
              <tbody className="text-center ">
                <tr>
                  <td class="p-12">
                    <img
                      loading="lazy"
                      src="hou1.jpeg"
                      className="object-center self-stretch my-auto w-full aspect-[1.54] max-md:mt-10"
                      style={{ width: 300, height: 300 }}
                    />
                    <div className="text-xl tracking-tighter whitespace-nowrap text-zinc-950">
                      Outram Park
                    </div>
                  </td>

                  <td class="p-12">
                    <img
                      loading="lazy"
                      src="hou2.jpeg"
                      className="object-center self-stretch my-auto w-full aspect-[1.54] max-md:mt-10"
                      style={{ width: 300, height: 300 }}
                    />
                    <div className="text-xl tracking-tighter whitespace-nowrap text-zinc-950">
                      Lakeside
                    </div>
                  </td>

                  <td class="p-12">
                    <img
                      loading="lazy"
                      src="hou3.jpeg"
                      className="object-center self-stretch my-auto w-full aspect-[1.54] max-md:mt-10"
                      style={{ width: 300, height: 300 }}
                    />
                    <div className="text-xl tracking-tighter whitespace-nowrap text-zinc-950">
                      Jurong West
                    </div>
                  </td>

                  <td class="p-12">
                    <img
                      loading="lazy"
                      src="dream.jpg"
                      className="object-center self-stretch my-auto w-full aspect-[1.54] max-md:mt-10"
                      style={{ width: 300, height: 300 }}
                    />
                    <div className="text-xl tracking-tighter whitespace-nowrap text-zinc-950">
                      Jurong West
                    </div>
                  </td>
                </tr>
              </tbody>

              <tbody className="text-center">
                <tr>
                  <td class="p-12">
                    <img
                      loading="lazy"
                      src="/pic2.jpeg"
                      className="object-center self-stretch my-auto w-full aspect-[1.54] max-md:mt-10"
                      style={{ width: 300, height: 300 }}
                    />
                    <div className="text-xl tracking-tighter whitespace-nowrap text-zinc-950">
                      Buona Vista
                    </div>
                  </td>

                  <td class="p-12">
                    <img
                      loading="lazy"
                      src="pic3.jpeg"
                      className="object-center self-stretch my-auto w-full aspect-[1.54] max-md:mt-10"
                      style={{ width: 300, height: 300 }}
                    />
                    <div className="text-xl tracking-tighter whitespace-nowrap text-zinc-950">
                      Pasir Ris
                    </div>
                  </td>

                  <td class="p-12">
                    <img
                      loading="lazy"
                      src="pic4.jpeg"
                      className="object-center self-stretch my-auto w-full aspect-[1.54] max-md:mt-10"
                      style={{ width: 300, height: 300 }}
                    />
                    <div className="text-xl tracking-tighter whitespace-nowrap text-zinc-950">
                      Ang Mo Kio
                    </div>
                  </td>

                  <td class="p-12">
                    <img
                      loading="lazy"
                      src="pic6.avif"
                      className="object-center self-stretch my-auto w-full aspect-[1.54] max-md:mt-10"
                      style={{ width: 300, height: 300 }}
                    />
                    <div className="text-xl tracking-tighter whitespace-nowrap text-zinc-950">
                      Clementi
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
