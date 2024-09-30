import React from "react";
import { Route, Routes } from 'react-router-dom';

import Index from '../pages/Index';
import Teste from '../pages/Teste';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/teste' element={<Teste />} />
        </Routes>
    )
}