import React, { useEffect, useMemo, useState } from 'react';

import { MaterialReactTable } from 'material-react-table';
import { MRT_Localization_PT_BR } from 'material-react-table/locales/pt-BR';

import {
    BarraLateral,
    BoxHistorico,
    ContainerDados,
    ContainerHistorico,
    ContainerInfo,
    ContainerSidebar,
    ContainerTabela,
    Content,
    Dado,
    DadosAtuais,
    DadosHistoricos,
    DataHistorico,
    ImagemLogo,
    ItemLista,
    ListaItens,
    Logo,
    Numero,
    Perfil,
    PerfilFoto,
    PerfilFotoImg,
    PerfilInfo,
    TextoPerfil,
    Titulo,
    TituloDado,
    TituloDados,
    TituloHistorico,
    TituloTabela
} from "./styled";

import api from '../../api/axios';
import { LineChart } from '@mui/x-charts';

import FlashlightOnIcon from '@mui/icons-material/FlashlightOn';
import FlashlightOffIcon from '@mui/icons-material/FlashlightOff';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import SettingsIcon from '@mui/icons-material/Settings';

import CircularProgress from '@mui/material/CircularProgress';

const Index = () => {
    const [tableData, setTableData] = useState({});

    const [temperatura, setTemperatura] = useState(0.0);
    const [umidade, setUmidade] = useState(0.0);

    const [maxTemp, setMaxTemp] = useState({});
    const [minTemp, setMinTemp] = useState({});

    const [maxUmi, setMaxUmi] = useState({});
    const [minUmi, setMinUmi] = useState({});

    const [temperaturaGrafico, setTemperaturaGrafico] = useState([]);
    const [umidadeGrafico, setUmidadeGrafico] = useState([]);
    const [dataHoraGrafico, setDataHoraGrafico] = useState([]);

    const [ledInterno, setLedInterno] = useState(false);
    const [mensagemLedInterno, setMensagemLedInterno] = useState('');

    const [mensagem, setMensagem] = useState('');

    const updateMinMax = (data) => {
        const maiorTemp = data.reduce((prev, current) => (prev && prev.temperatura > current.temperatura) ? prev : current);
        setMaxTemp(maiorTemp);
        const menorTemp = data.reduce((prev, current) => (prev && prev.temperatura < current.temperatura) ? prev : current);
        setMinTemp(menorTemp);

        const maiorUmidade = data.reduce((prev, current) => (prev && prev.umidade > current.umidade) ? prev : current);
        setMaxUmi(maiorUmidade);
        const menorUmidade = data.reduce((prev, current) => (prev && prev.umidade < current.umidade) ? prev : current);
        setMinUmi(menorUmidade);
    }

    const getGraphData = (data) => {
        const ultimos = data.slice(0, 10).reverse();

        setTemperaturaGrafico(ultimos.map(item => item.temperatura));
        setUmidadeGrafico(ultimos.map(item => item.umidade));
        setDataHoraGrafico(ultimos.map(item => new Date(item.data_hora)));
    }

    const getData = async () => {
        await api.get('/relatorio/listar')
        .then(res => {
            updateMinMax(res.data);

            setTemperatura(res.data[0].temperatura);
            setUmidade(res.data[0].umidade);

            getGraphData(res.data);

            setTableData(res.data);
            setMensagem(`Última atualização ${new Date(res.data[0].data_hora).toLocaleString()}`);
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

    const columns = useMemo(
        () => [
            {
                accessorKey: 'temperatura',
                header: 'Temperatura',
                size: 50
            },
            {
                accessorKey: 'umidade',
                header: 'Umidade',
                size: 50
            },
            {
                accessorKey: 'data_hora',
                header: 'Data e hora',
                size: 180,
                Cell: ({ row }) => {
                    return new Date(row.original.data_hora).toLocaleString();
                }
            },
        ], [],
    );

    const handleLEDInternoClick = async () => {
        // if (!ledInterno) {
        //     setMensagemLedInterno('Ligando LED...');
        //     await fetch('http://192.168.67.251/led/on', {
        //         method: 'GET',
        //         mode: 'cors',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //     });
        // } else {
        //     setMensagemLedInterno('Desligando LED...');
        //     await fetch('http://192.168.67.251/led/off', {
        //         method: 'GET',
        //         mode: 'cors',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //     });
        // }

        setMensagemLedInterno('');
        setLedInterno(!ledInterno);
    }

    return (
        <Content>
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
                        <ItemLista onClick={handleLEDInternoClick}>
                            {!ledInterno ? 
                            <>
                                <FlashlightOnIcon sx={{
                                    marginLeft: 1.5, marginRight: 1.5, height: 20
                                }} />
                                Ligar LED Interno
                            </>
                            : <>
                                <FlashlightOffIcon sx={{ marginLeft: 1.5, marginRight: 1.5, height: 20 }} />
                                Desligar LED Interno
                            </>}
                            {/* <CircularProgress /> */}
                        </ItemLista>
                        <ItemLista>
                            <BatteryChargingFullIcon sx={{ marginLeft: 1.5, marginRight: 1.5, height: 20 }} />
                            Placeholder
                        </ItemLista>
                        <ItemLista>
                            <NightlightRoundIcon sx={{ marginLeft: 1.5, marginRight: 1.5, height: 20 }} />
                            Teste
                        </ItemLista>
                        <ItemLista>
                            <SettingsIcon sx={{ marginLeft: 1.5, marginRight: 1.5, height: 20 }} />
                            Configurações
                        </ItemLista>
                    </ListaItens>
                </ContainerSidebar>
            </ContainerInfo>
            <BarraLateral />
            <ContainerDados>
                <TituloDados>
                    <Titulo>Dados atuais</Titulo>
                    mensagem
                </TituloDados>
                <DadosAtuais>
                    <Dado>
                        <TituloDado>Temperatura</TituloDado>
                        <Numero>18.9ºC</Numero>
                    </Dado>
                    <BarraLateral />
                    <Dado>
                        <TituloDado>Umidade</TituloDado>
                        <Numero>22.7%</Numero>
                    </Dado>
                </DadosAtuais>
                <DadosHistoricos>
                    <ContainerHistorico>
                        <BoxHistorico>
                            <TituloHistorico>Maior temperatura medida: 25.7ºC</TituloHistorico>
                            <DataHistorico>25/09/2024, 01:12:33</DataHistorico>
                        </BoxHistorico>
                        <BoxHistorico>
                            <TituloHistorico>Menor temperatura medida: -2.7ºC</TituloHistorico>
                            <DataHistorico>25/09/2024, 01:12:33</DataHistorico>
                        </BoxHistorico>
                    </ContainerHistorico>
                    <ContainerHistorico>
                        <BoxHistorico>
                            <TituloHistorico>Maior umidade medida: 95.7%</TituloHistorico>
                            <DataHistorico>25/09/2024, 01:12:33</DataHistorico>
                        </BoxHistorico>
                        <BoxHistorico>
                            <TituloHistorico>Menor umidade medida: 25.7%</TituloHistorico>
                            <DataHistorico>25/09/2024, 01:12:33</DataHistorico>
                        </BoxHistorico>
                    </ContainerHistorico>
                </DadosHistoricos>
            </ContainerDados>
            <ContainerTabela>
                <TituloTabela>Tabela</TituloTabela>
                <MaterialReactTable
                    enableColumnActions={false}
                    enableColumnFilters={false}
                    enablePagination={true}
                    enableSorting={false}
                    enableDensityToggle={false}
                    enableFullScreenToggle={false}
                    enableHiding={false}
                    enableFilters={false}
                    initialState={{
                        density: 'compact',
                        pagination: {
                            pageIndex: 0,
                            pageSize: 10
                        }
                    }}
                    muiTopToolbarProps={{ sx: { display: 'none' } }}
                    muiTableHeadCellProps={{
                        sx: {
                            border: '1px solid rgba(81, 81, 81, .5)',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                        },
                    }}
                    muiTableBodyCellProps={{
                        sx: {
                            border: '1px solid rgba(81, 81, 81, .5)',
                        },
                    }}
                    columns={columns}
                    data={tableData}
                    localization={MRT_Localization_PT_BR}
                />
            </ContainerTabela>
        </Content>
    );
};

export default Index;