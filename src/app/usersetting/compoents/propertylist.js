'use client'
import React from 'react';



function PropertyList({ onPageChange}) {

    const handleButtonClick = (page) => {
        onPageChange(page);
    }
    const propertylists = [
        {
        id: "1",
        title: 'SaaS Homepage redesign and onboarding updates',
        stitle: 'UX/UI Design',
        post: 'Posted 27 minutes ago'
        },
        {
        id: "2",
        title: 'SaaS Homepage redesign and onboarding updates',
        stitle: 'UX/UI Design',
        post: 'Posted 27 minutes ago'
        },
        {
        id: "3",
        title: 'SaaS Homepage redesign and onboarding updates',
        stitle: 'UX/UI Design',
        post: 'Posted 27 minutes ago'
        },
    ];
  return (
    <div className="w-[700px] h-[812px] bg-stone-50 relative">
      <div className='flex justify-center mt-[10px] '>
        <table className="">
          {propertylists.map((propertylist) => (
            <tbody>
            <tr className="border" key={propertylist.id}>
              <table className="w-[318px] h-[122px]  bg-white rounded-[20px] shadow mt-[10px] relative z-10">
                
                <tr className="border">
                  <td rowSpan="2" className="border">
                    <img className="" src="https://via.placeholder.com/53x11" alt="placeholder" />
                  </td>
                  <td className="border text-stone-950 text-base font-medium font-['SF UI Display'] whitespace-normal">
                    {propertylist.title}
                  </td>
                </tr>

                <tr className="border">
                  <td className="text-neutral-400 text-sm font-medium font-['SF UI Display']">
                    {propertylist.stitle}
                    <div>
                      {propertylist.post}
                    </div>
                  </td>
                </tr>
              </table>
            </tr>
            </tbody>
          ))}
        </table>

        <div className="absolute bottom-4 right-4 z-20">
          <div className="flex items-center justify-center w-[53px] h-[53px] bg-red-600 bg-opacity-20 rounded-full text-[20px] text-white mb-4 mr-4">
            <button onClick={() => handleButtonClick('addproperty')} className="w-[45px] h-[45px] bg-red-600 rounded-full text-white text-[40px] flex items-center justify-center">
              +
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PropertyList;
