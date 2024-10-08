import React, { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts';
import { BarChart } from '@mui/x-charts/BarChart';

import api from '../../api/axios';

import { BarraLateral, BoxBranca, ContainerGraficos, Content, TituloGrafico } from './styled';

import Sidebar from '../../components/Sidebar';
import Tabela from '../../components/Tabela';

const Graficos = () => {
    const [tableData, setTableData] = useState({});

    const [temperaturaGrafico, setTemperaturaGrafico] = useState([]);
    const [umidadeGrafico, setUmidadeGrafico] = useState([]);
    const [dataHoraGrafico, setDataHoraGrafico] = useState([]);

    const [temperaturaPorDia, setTemperaturaPorDia] = useState([]);

    const agruparPorDia = (dados) => {
        const agrupados = {};
    
        dados.forEach(({ temperatura, data_hora }) => {
        const dia = new Date(data_hora).toISOString().split('T')[0];
        if (!agrupados[dia]) {
            agrupados[dia] = { totalTemperatura: 0, contagem: 0 };
        }
        agrupados[dia].totalTemperatura += temperatura;
        agrupados[dia].contagem += 1;
        });
    
        setTemperaturaPorDia(Object.keys(agrupados).map((dia) => ({
            dia,
            mediaTemperatura: agrupados[dia].totalTemperatura / agrupados[dia].contagem,
        })).reverse());
    };

    const getGraphData = (data) => {
        console.log('aa', data)
        const ultimos = data.slice(0, 10).reverse();

        setTemperaturaGrafico(ultimos.map(item => item.temperatura));
        setUmidadeGrafico(ultimos.map(item => item.umidade));
        setDataHoraGrafico(ultimos.map(item => new Date(item.data_hora)));
    }

    const getData = async () => {
        await api.get('/relatorio/listar')
        .then(res => {
            getGraphData(res.data);
            agruparPorDia(res.data);
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

    return (
        <Content>
            <BoxBranca>
                <Sidebar />
                <BarraLateral />
                <ContainerGraficos>
                    <TituloGrafico>Temperatura e umidade</TituloGrafico>
                    <LineChart
                        xAxis={[{
                            data: dataHoraGrafico,
                            label: "Data e Hora",
                            scaleType: "time",
                            min: dataHoraGrafico[dataHoraGrafico.length - 1],
                            max: dataHoraGrafico[0],
                            tickInterval: 'auto'
                        }]}
                        series={[
                            {
                                data: umidadeGrafico,
                                label: 'Umidade'
                            },
                            {
                                data: temperaturaGrafico,
                                label: 'Temperatura',
                            }
                        ]}
                        tooltip={{
                            enabled: true,
                            shared: true,
                        }}
                        height={300}
                    />
                    <TituloGrafico>Média de temperatura por dia</TituloGrafico>
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: temperaturaPorDia.map(item => item.dia) }]}
                        series={[{ data: temperaturaPorDia.map(item => item.mediaTemperatura.toFixed(1)) }]}
                        height={300}
                    />
                </ContainerGraficos>
            </BoxBranca>
            <Tabela tableData={tableData} />
        </Content>
    );
};

export default Graficos;