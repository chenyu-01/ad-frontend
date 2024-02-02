'use client'

import React, { useState } from 'react';
import Sidebar from './compoents/side';
import Profile from './compoents/profile';
import Preference from './compoents/preference';
import AddProperty from './compoents/addProperty';
import PropertyList from './compoents/propertylist';


export default function Usersetting() {


    const [selectedPage, setSelectedPage] = useState('profile');

    const handlePageChange = (page) => {
        setSelectedPage(page);
    };

    return (
        <div className='container mx-auto'>
            <div className="flex justify-center   ">


            <div className="">
                {selectedPage === 'profile' && <Profile />}
                {selectedPage === 'preference' && <Preference />}
                {selectedPage === 'addproperty' && <AddProperty />}
                {selectedPage === 'list' && <PropertyList onPageChange={handlePageChange}/>}
            
            </div>
            <Sidebar onPageChange={handlePageChange} />
            

            </div>
        </div>
    );
};
