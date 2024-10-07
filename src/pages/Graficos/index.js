import React, { useEffect, useMemo, useState } from 'react';

import api from '../../api/axios';

import Sidebar from '../../components/Sidebar';
import { BarraLateral, BoxBranca, Content } from './styled';

const Graficos = () => {
    return (
        <Content>
            <BoxBranca>
                <Sidebar />
                <BarraLateral />
            </BoxBranca>
        </Content>
    );
};

export default Graficos;