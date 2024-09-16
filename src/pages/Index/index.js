import React, { useEffect, useMemo, useState } from 'react';

import { MaterialReactTable } from 'material-react-table';
import { MRT_Localization_PT_BR } from 'material-react-table/locales/pt-BR';

import {
    Content,
    ContainerDados,
    ContainerTabela,
    ContainerDadosDado,
    BoxDado,
    NumeroGrande,
    Texto,
    BarraHorizontal,
    ListaInfo,
    ListaItem,
    ContainerDadosRowDados,
    ContainerDadosRowInfo,
    BarraVertical,
    ContainerAtualizacao
} from "./styled";

import api from '../../api/axios';

const Index = () => {
    const [tableData, setTableData] = useState({});

    const [temperatura, setTemperatura] = useState(0.0);
    const [umidade, setUmidade] = useState(0.0);

    const [maxTemp, setMaxTemp] = useState({});
    const [minTemp, setMinTemp] = useState({});

    const [maxUmi, setMaxUmi] = useState({});
    const [minUmi, setMinUmi] = useState({});

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

    const getData = async () => {
        await api.get('/relatorio/listar')
        .then(res => {
            updateMinMax(res.data);

            setTemperatura(res.data[0].temperatura);
            setUmidade(res.data[0].umidade);
            setTableData(res.data);
            setMensagem(`Última atualização ${new Date(res.data[0].data_hora).toLocaleString()}`);
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        (() => {
            setTimeout(async () => {
                await getData();
            }, 10000);
        })();
    }, [getData]);

    const columns = useMemo(
        () => [
            {
                accessorKey: 'temperatura',
                header: 'Temperatura',
                size: 70
            },
            {
                accessorKey: 'umidade',
                header: 'Umidade',
                size: 70
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
            <ContainerDados>
                <ContainerDadosRowDados>
                    <ContainerDadosDado>
                        <BoxDado>
                            <Texto>Temperatura</Texto>
                            <NumeroGrande>{`${temperatura}º`}</NumeroGrande>
                        </BoxDado>
                    </ContainerDadosDado>
                    <BarraVertical />
                    <ContainerDadosDado>
                        <BoxDado>
                            <Texto>Umidade do ar</Texto>
                            <NumeroGrande>{`${umidade}%`}</NumeroGrande>
                        </BoxDado>
                    </ContainerDadosDado>
                </ContainerDadosRowDados>
                <BarraHorizontal />
                <ContainerDadosRowInfo>
                    <ContainerDadosDado>
                        <ListaInfo>
                            <ListaItem>{`Maior temperatura registrada: ${maxTemp.temperatura}ºC`}</ListaItem>
                            <ListaItem>{`${new Date(maxTemp.data_hora).toLocaleString()}`}</ListaItem>
                            <BarraHorizontal />
                            <ListaItem>{`Maior temperatura registrada: ${minTemp.temperatura}ºC`}</ListaItem>
                            <ListaItem>{`${new Date(minTemp.data_hora).toLocaleString()}`}</ListaItem>
                        </ListaInfo>
                    </ContainerDadosDado>
                    <BarraVertical />
                    <ContainerDadosDado>
                        <ListaInfo>
                            <ListaItem>{`Maior porcentagem registrada: ${maxUmi.umidade}%`}</ListaItem>
                            <ListaItem>{`${new Date(maxUmi.data_hora).toLocaleString()}`}</ListaItem>
                            <BarraHorizontal />
                            <ListaItem>{`Maior porcentagem registrada: ${minUmi.umidade}%`}</ListaItem>
                            <ListaItem>{`${new Date(minUmi.data_hora).toLocaleString()}`}</ListaItem>
                        </ListaInfo>
                    </ContainerDadosDado>
                </ContainerDadosRowInfo>
                <ContainerAtualizacao>
                    {mensagem}
                </ContainerAtualizacao>
            </ContainerDados>
            <ContainerTabela>
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