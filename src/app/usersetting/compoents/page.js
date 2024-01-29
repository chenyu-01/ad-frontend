'use client'
import * as React from "react";
import '../styles/index.css'



function Submit() {
  return (
    <div >

      <div className='main-container w-1/2 h-[1000px] relative mx-auto my-0 overflow-y-auto'>
          <div className='w-full h-[1000px] bg-[#fff] absolute top-0 left-0 overflow-hidden z-[3]'>
              <div className='w-full h-[800px] text-[0px] bg-[rgba(255,255,255,0.2)] rounded-[3.0px] border-solid border-[5px] border-[#eff0f6] relative z-[4] mt-0 mr-0 mb-0 ml-0'>
                  
                  <table className="w-full table-auto  border-collapse overflow-y-auto">
      
                    <tbody className='text-center '>
                      <tr>          
                          <td >
                                <div className="flex justify-center items-center text-[55px] block  font-medium  text-gray-900   relative text-left z-[13] ">
                                  Register Property
                                </div>
                          </td>
                      </tr>
                    </tbody>

                    <tbody className='text-center '>
                      <tr>          
                          <td >
                            
                            <div className=' h-[100px] relative z-[10] mt-[15px]'>
                              
                              <div className=' gap-[8px] flex-nowrap absolute inset-x-0 top-0   z-[10]'>
                                <label id="listbox-label" className="flex items-center  text-[30px] block  font-medium leading-6 text-gray-900">
                                Status
                                </label>
                              

                                <div className="flex items-center  relative mt-2">
                                  <select  className=" w-1/2 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                                    <option value="Sale" className="flex items-center ml-3 block truncate ">Sale</option>
                                    <option value="Rent" className="flex items-center ml-3 block truncate ">Rent</option>
                                  </select>
                                </div>
                                
                              </div>
                            </div>                                
                          </td>
                      </tr>
                    </tbody>

                    <tbody className='text-center '>
                      <tr>          
                          <td >
                            
                            <div className=' h-[100px] relative z-[10] mt-[15px]'>
                              
                              <div className=' gap-[8px] flex-nowrap absolute inset-x-0 top-0   z-[10]'>
                                <label id="listbox-label" className="flex items-center  text-[30px] block  font-medium leading-6 text-gray-900">
                                FlatType
                                </label>
                              

                                <div className="flex items-center  relative mt-2">
                                  <input  className=" w-1/2 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                                    
                                  
                                </div>
                                
                              </div>
                            </div>                                
                          </td>
                      </tr>
                    </tbody>

                    <tbody className='text-center '>
                      <tr>          
                          <td >
                            
                            <div className=' h-[100px] relative z-[10] mt-[15px]'>
                              
                              <div className=' gap-[8px] flex-nowrap absolute inset-x-0 top-0   z-[10]'>
                                <label id="listbox-label" className="flex items-center  text-[30px] block  font-medium leading-6 text-gray-900">
                                FloorArea
                                </label>
                              

                                <div className="flex items-center  relative mt-2">
                                  <input  className=" w-1/2 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                                    
                                  
                                </div>
                                
                              </div>
                            </div>                                
                          </td>
                      </tr>
                    </tbody>

                    <tbody className='text-center '>
                      <tr>          
                          <td >
                            
                            <div className=' h-[100px] relative z-[10] mt-[15px]'>
                              
                              <div className=' gap-[8px] flex-nowrap absolute inset-x-0 top-0   z-[10]'>
                                <label id="listbox-label" className="flex items-center  text-[30px] block  font-medium leading-6 text-gray-900">
                                StoryRange
                                </label>
                              

                                <div className="flex items-center  relative mt-2">
                                  <input  className=" w-1/2 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                                    
                                  
                                </div>
                                
                              </div>
                            </div>                                
                          </td>
                      </tr>
                    </tbody>

                    <tbody className='text-center '>
                      <tr>          
                          <td >
                            
                            <div className=' h-[100px] relative z-[10] mt-[15px]'>
                              
                              <div className=' gap-[8px] flex-nowrap absolute inset-x-0 top-0   z-[10]'>
                                <label id="listbox-label" className="flex items-center  text-[30px] block  font-medium leading-6 text-gray-900">
                                StreetName
                                </label>
                              

                                <div className="flex items-center  relative mt-2">
                                  <input  className=" w-1/2 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                                    
                                  
                                </div>
                                
                              </div>
                            </div>                                
                          </td>
                      </tr>
                    </tbody>


                    <tbody className='text-center '>
                      <tr>          
                          <td >
                            
                            <div className=' h-[100px] relative z-[10] mt-[15px]'>
                              
                              <div className=' gap-[8px] flex-nowrap absolute inset-x-0 top-0   z-[10]'>
                                <label id="listbox-label" className="flex items-center  text-[30px] block  font-medium leading-6 text-gray-900">
                                BedRooms
                                </label>
                              

                                <div className="flex items-center  relative mt-2">
                                  <select  className=" w-1/2 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                                    <option value="1" className="flex items-center ml-3 block truncate ">1</option>
                                    <option value="2" className="flex items-center ml-3 block truncate ">2</option>
                                    <option value="3" className="flex items-center ml-3 block truncate ">3</option>
                                    <option value="4" className="flex items-center ml-3 block truncate ">4</option>
                                  </select>
                                </div>
                                
                              </div>
                            </div>                                
                          </td>
                      </tr>
                    </tbody>


                    <tbody className='text-center '>
                      <tr>          
                          <td >
                            <div>
                              <button className='flex justify-center items-center h-[40px]  w-1/2  flex-nowrap bg-[#4a3aff] rounded-[3.0px] border-none relative z-[39] pointer mt-[9.6px] mr-0 mb-0 ml-[22.0px]'>
                                <span className="flex justify-center items-center h-[30px] shrink-0 basis-auto font-['Inter'] text-[25px] font-normal  text-[#fff] relative text-left whitespace-nowrap z-40">
                                  Continue
                                </span>
                              </button>
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
export default Submit;