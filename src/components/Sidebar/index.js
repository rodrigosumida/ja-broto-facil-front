import React from 'react';

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

import BarChartIcon from '@mui/icons-material/BarChart';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const Sidebar = () => {
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
                    <Link to={'/controlador'}>
                        <ItemLista>
                            <SettingsIcon sx={{ marginLeft: 1.5, marginRight: 1.5, height: 20 }} />
                            Controlador do LED
                        </ItemLista>
                    </Link>
                </ListaItens>
            </ContainerSidebar>
        </ContainerInfo>
    );
};

export default Sidebar;