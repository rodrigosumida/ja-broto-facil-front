import React, { useState } from 'react';

import {
    BarraLateral,
    BotaoEnviar,
    BoxBranca,
    ContainerBotao,
    ContainerControlador,
    ContainerDados,
    Content,
    InfoTextos,
    Intensidade,
    Titulo,
    TituloLEDExterno
} from "./styled";

import Sidebar from '../../components/Sidebar';
import { Slider } from '@mui/material';

const ControladorLED = () => {
    const [value, setValue] = useState(0);
    const [textoBotao, setTextoBotao] = useState('Enviar');

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleLEDExternoClick = async () => {
        setTextoBotao('Enviando...');
        if (value >= 0 && value <= 255) {
            await fetch(`http://192.168.211.251/led_externo/pwm/${value}`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }
        setTextoBotao('Enviar');
    }

    return (
        <Content>
            <BoxBranca>
                <Sidebar />
                <BarraLateral />
                <ContainerDados>
                <Titulo>Controlador de LED</Titulo>
                    <ContainerControlador>
                        <InfoTextos>
                            <TituloLEDExterno>LED Externo</TituloLEDExterno>
                            <Intensidade>Intensidade: {value}</Intensidade>
                        </InfoTextos>
                        <Slider
                            sx={{
                                paddingY: 4
                            }}
                            value={typeof value === 'number' ? value : 0}
                            onChange={handleSliderChange}
                            aria-labelledby='input-slider'
                            min={0}
                            max={255}
                        />
                        <ContainerBotao>
                            <BotaoEnviar onClick={handleLEDExternoClick}>{textoBotao}</BotaoEnviar>
                        </ContainerBotao>
                    </ContainerControlador>
                </ContainerDados>
                <BarraLateral />
            </BoxBranca>
        </Content>
    );
};

export default ControladorLED;