import React, { useEffect, useMemo, useState } from 'react';

import { MaterialReactTable } from 'material-react-table';
import { MRT_Localization_PT_BR } from 'material-react-table/locales/pt-BR';

import {
    BarraLateral,
    BoxBranca,
    BoxHistorico,
    BoxHistoricoBaixo,
    ContainerDados,
    ContainerHistorico,
    ContainerTabela,
    Content,
    Dado,
    DadosAtuais,
    DadosHistoricos,
    DataHistorico,
    Numero,
    Titulo,
    TituloDado,
    TituloDados,
    TituloHistorico,
    TituloTabela
} from "./styled";

import api from '../../api/axios';

import Sidebar from '../../components/Sidebar';

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
    const [mensagemLedInterno, setMensagemLedInterno] = useState('Ligar LED Interno');

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

    return (
        <Content>
            <BoxBranca>
                <Sidebar />
                <BarraLateral />
                <ContainerDados>
                    <TituloDados>
                        <Titulo>Dados atuais</Titulo>
                        {mensagem}
                    </TituloDados>
                    <DadosAtuais>
                        <Dado>
                            <TituloDado>Temperatura</TituloDado>
                            <Numero>{temperatura}ºC</Numero>
                        </Dado>
                        <Dado>
                            <TituloDado>Umidade</TituloDado>
                            <Numero>{umidade}%</Numero>
                        </Dado>
                    </DadosAtuais>
                    <DadosHistoricos>
                        <ContainerHistorico>
                            <BoxHistoricoBaixo>
                                <BoxHistorico>
                                    <TituloHistorico>Maior temperatura medida: {maxTemp.temperatura}ºC</TituloHistorico>
                                    <DataHistorico>{`${new Date(maxTemp.data_hora).toLocaleString()}`}</DataHistorico>
                                </BoxHistorico>
                            </BoxHistoricoBaixo>
                            <BoxHistoricoBaixo>
                                <BoxHistorico>
                                    <TituloHistorico>Menor temperatura medida: {minTemp.temperatura}ºC</TituloHistorico>
                                    <DataHistorico>{`${new Date(minTemp.data_hora).toLocaleString()}`}</DataHistorico>
                                </BoxHistorico>
                            </BoxHistoricoBaixo>
                        </ContainerHistorico>
                        <ContainerHistorico>
                            <BoxHistoricoBaixo>
                                <BoxHistorico>
                                    <TituloHistorico>Maior umidade medida: {maxUmi.umidade}%</TituloHistorico>
                                    <DataHistorico>{`${new Date(maxUmi.data_hora).toLocaleString()}`}</DataHistorico>
                                </BoxHistorico>
                            </BoxHistoricoBaixo>
                            <BoxHistoricoBaixo>
                                <BoxHistorico>
                                    <TituloHistorico>Menor umidade medida: {minUmi.umidade}%</TituloHistorico>
                                    <DataHistorico>{`${new Date(minUmi.data_hora).toLocaleString()}`}</DataHistorico>
                                </BoxHistorico>
                            </BoxHistoricoBaixo>
                        </ContainerHistorico>
                    </DadosHistoricos>
                </ContainerDados>
            </BoxBranca>
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