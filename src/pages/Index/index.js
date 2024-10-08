import React, { useEffect, useState } from 'react';

import {
    BarraLateral,
    BoxBranca,
    BoxHistorico,
    BoxHistoricoBaixo,
    ContainerDados,
    ContainerHistorico,
    Content,
    Dado,
    DadosAtuais,
    DadosHistoricos,
    DataHistorico,
    Numero,
    Titulo,
    TituloDado,
    TituloDados,
    TituloHistorico
} from "./styled";

import api from '../../api/axios';

import Sidebar from '../../components/Sidebar';
import Tabela from '../../components/Tabela';

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
            const fetchData = async () => {
                await getData();
                console.log("Dados atualizados!");
            };
            fetchData();
        })();
    }, [getData]);

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
            <Tabela tableData={tableData} />
        </Content>
    );
};

export default Index;