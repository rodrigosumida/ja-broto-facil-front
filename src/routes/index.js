import React from "react";
import { Route, Routes } from 'react-router-dom';

import Index from '../pages/Index';
import Graficos from '../pages/Graficos';
import PainelControle from '../pages/PainelControle';

import IndexOld from '../pages/IndexOld';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/graficos' element={<Graficos />} />
            <Route path='/painel-de-controle' element={<PainelControle />} />
            <Route path='/old' element={<IndexOld />} />
        </Routes>
    )
}