import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './../pages/Home'
import Tour from './../pages/Tour'
import Tourdetails from './../pages/Tourdetails'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResults from './../pages/SearchResults'

const routers = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/tour' element={<Tour />} />
            <Route path='/tours/:id' element={<Tourdetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/tours/search' element={<SearchResults />} />
        </Routes>
    );
};

export default routers;