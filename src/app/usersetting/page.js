'use client'

import React, { useState } from 'react';
import Sidebar from './compoents/side';
import Profile from './compoents/profile';
import Preferences from './compoents/preference';
import AddProperty from './compoents/addProperty';
import PropertyList from './compoents/propertylist';


export default function Usersetting() {


    const [selectedPage, setSelectedPage] = useState('profile');

    const handlePageChange = (page) => {
        setSelectedPage(page);
    };

    return (
        <div className='container max-w-md md:max-w-screen-sm mx-auto  mx-4'>
            <div className="flex justify-center">
                <Sidebar onPageChange={handlePageChange} className=" hidden md:block "/>

                <div className="">
                    {selectedPage === 'profile' && <Profile />}
                    {selectedPage === 'preference' && <Preferences />}
                    {selectedPage === 'addproperty' && <AddProperty />}
                    {selectedPage === 'list' && <PropertyList onPageChange={handlePageChange}/>}
                
                </div>
            
            

            </div>
        </div>
    );
};
