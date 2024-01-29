'use client'

import React, { useState } from 'react';
import Sidebar from './compoents/side';
import Profile from './compoents/profile';
import Preference from './compoents/preference';
import AddProperty from './compoents/addProperty';


export default function Usersetting() {


    const [selectedPage, setSelectedPage] = useState('profile');

    const handlePageChange = (page) => {
        setSelectedPage(page);
    };

    return (
        <div className="flex">

            <Sidebar onPageChange={handlePageChange} />

            <div className="flex-grow">
                {selectedPage === 'profile' && <Profile />}
                {selectedPage === 'preference' && <Preference />}
                {selectedPage === 'submit' && <AddProperty />}
            </div>
        </div>
    );
};
