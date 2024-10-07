import React, { useState } from 'react';

import {
    ContainerInfo,
    ContainerSidebar,
    ImagemLogo,
    ItemLista,
    ListaItens,
    Logo,
    Perfil,
    PerfilFoto,
    PerfilFotoImg,
    PerfilInfo,
    TextoPerfil
} from "./styled";

import api from '../../api/axios';

import BarChartIcon from '@mui/icons-material/BarChart';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import FlashlightOffIcon from '@mui/icons-material/FlashlightOff';
import FlashlightOnIcon from '@mui/icons-material/FlashlightOn';
import HomeIcon from '@mui/icons-material/Home';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [ledInterno, setLedInterno] = useState(false);
    const [mensagemLedInterno, setMensagemLedInterno] = useState('Ligar LED Interno');

    const navigate = useNavigate();

    const handleLEDInternoClick = async () => {
        if (!ledInterno) {
            setMensagemLedInterno('Ligando LED...');
            await fetch('http://192.168.159.251/led/on', {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setMensagemLedInterno('Desligar LED Interno');
        } else {
            setMensagemLedInterno('Desligando LED...');
            await fetch('http://192.168.159.251/led/off', {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setMensagemLedInterno('Ligar LED Interno');
        }
        setLedInterno(!ledInterno);
    }

    return (
        <ContainerInfo>
            <Logo>
                <ImagemLogo src="https://www.brotofacil.com.br/img/logo_compartilhamento.png" />
            </Logo>
            <Perfil>
                <PerfilFoto>
                    <PerfilFotoImg src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" />
                </PerfilFoto>
                <PerfilInfo>
                    <TextoPerfil>Seja bem-vindo, Rodrigo!</TextoPerfil>
                </PerfilInfo>
            </Perfil>
            <ContainerSidebar>
                <ListaItens>
                    <Link to={'/'}>
                        <ItemLista>
                            <HomeIcon sx={{ marginLeft: 1.5, marginRight: 1.5, height: 20 }} />
                            Dados Atuais
                        </ItemLista>
                    </Link>
                    <Link to={'/graficos'}>
                        <ItemLista>
                            <BarChartIcon sx={{ marginLeft: 1.5, marginRight: 1.5, height: 20 }} />
                            Gráficos
                        </ItemLista>
                    </Link>
                    <ItemLista onClick={handleLEDInternoClick}>
                        {ledInterno ? <FlashlightOnIcon sx={{
                            marginLeft: 1.5, marginRight: 1.5, height: 20
                        }} /> : <FlashlightOffIcon sx={{
                            marginLeft: 1.5, marginRight: 1.5, height: 20
                        }} />}
                        {mensagemLedInterno}
                    </ItemLista>
                    <ItemLista>
                        <BatteryChargingFullIcon sx={{ marginLeft: 1.5, marginRight: 1.5, height: 20 }} />
                        Placeholder
                    </ItemLista>
                    <ItemLista>
                        <SettingsIcon sx={{ marginLeft: 1.5, marginRight: 1.5, height: 20 }} />
                        Configurações
                    </ItemLista>
                </ListaItens>
            </ContainerSidebar>
        </ContainerInfo>
    );
};

export default Sidebar;