import React, { useEffect, useState } from 'react';

import api from '../../api/axios';

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
import TabelaPlantas from '../../components/TabelaPlantas';

import { Box, FormControl, InputLabel, MenuItem, Select, Slider } from '@mui/material';

const Painel = () => {
    const [value, setValue] = useState(0);
    const [planta, setPlanta] = useState('');

    const [textoBotao, setTextoBotao] = useState('Enviar');
    const [textoBotaoPlanta, setTextoBotaoPlanta] = useState('Enviar');

    const [tableData, setTableData] = useState([]);

    const getData = async () => {
        await api.get('/planta/listar')
        .then(res => {
            setTableData(res.data);
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        (() => {
            const fetchData = async () => {
                await getData();
                console.log("Dados atualizados!");
            };
            fetchData();
        })();
    }, [getData]);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleLEDExternoClick = async () => {
        setTextoBotao('Enviando...');
        if (value >= 0 && value <= 255) {
            await fetch(`http://192.168.171.251/led_externo/pwm/${value}`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }
        setTextoBotao('Enviar');
    };

    const handleChangePlanta = (event) => {
        setPlanta(event.target.value);
    };

    const handleChangePlantaClick = async () => {
        if (planta) {
            setTextoBotaoPlanta('Enviando...');
            await fetch(`http://192.168.171.251/distancia_sensor/${planta}`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setTextoBotaoPlanta('Enviar');
        }
    };

    return (
        <Content>
            <BoxBranca>
                <Sidebar />
                <BarraLateral />
                <ContainerDados>
                    <ContainerControlador>
                        <Titulo>Controlador de LED</Titulo>
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
                    <ContainerControlador>
                        <Titulo>Tipo de planta</Titulo>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Tipo de planta</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={planta}
                                    label="Tipo de planta"
                                    onChange={handleChangePlanta}
                                >
                                    {tableData.map((item, index) => (
                                        <MenuItem id={index} value={item.distancia}>{item.nome}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                        <ContainerBotao>
                            <BotaoEnviar onClick={handleChangePlantaClick}>{textoBotaoPlanta}</BotaoEnviar>
                        </ContainerBotao>
                    </ContainerControlador>
                </ContainerDados>
            </BoxBranca>
            <TabelaPlantas tableData={tableData} />
        </Content>
    );
};

export default Painel;