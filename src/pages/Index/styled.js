import styled from 'styled-components';

export const Content = styled.div`
    background: white;
    height: fit-content;
    width: fit-content;
    background-color: #f0f0f0;
    margin: 20px auto;
    border: none;
    border-radius: 15px;
    display: flex;
    padding: 0 25px;
    flex-wrap: wrap;
`;

export const Div = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
`;

export const ContainerDados = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto 0;
    background-color: #f0f0f0;
    height: 100%;
    border-radius: 5px;
    width: 65%;
`;

export const ContainerDadosRowDados = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    gap: 20px;
    background-color: #fcfcfc;
`;

export const ContainerDadosRowInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    background-color: #fcfcfc;
    width: 100%;
    gap: 10px;
`;

export const ContainerDadosDado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 15px;
    width: 50%;
`;

export const BoxDado = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fcfcfc;
    padding: 7px;
    border-radius: 5px;
    text-align: center;
    width: 85%;
    height: 85%;
`;

export const NumeroGrande = styled.p`
    font-size: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Texto = styled.p`
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BarraVertical = styled.div`
    height: 130px;
    width: 1px;
    background-color: #999;
`;

export const BarraHorizontal = styled.div`
    height: 1px;
    width: 95%;
    background-color: #444;
    margin: 0 auto;
`;

export const ListaInfo = styled.ul`
    align-items: center;
    justify-content: center;
`;

export const ListaItem = styled.li`
    margin: 10px 0;
    font-size: 1.2rem;
    text-align: center;
`;

export const ContainerTabela = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px 20px 20px;
    height: 100%;
    border-radius: 15px;
    width: 35%;
`;

export const ContainerAtualizacao = styled.div`
    display: flex;
    text-align: start;
    height: fit-content;
    background-color: #888;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
`;

export const ContainerGraficos = styled.div`
    height: 300px;
    width: fit-content;
    margin-bottom: 20px;
    background-color: #fcfcfc;
    border-radius: 5px;
    margin: 15px auto;
`;

export const ContainerAcoes = styled.div`
    height: 70px;
    width: 100%;
    background-color: #888;
    padding: 15px;
    display: flex;
`;

export const BotaoHeader = styled.div`
    height: 100%;
    width: fit-content;
    color: white;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: #333;
    display: flex;
    padding: 0 20px;
    border-radius: 4px;

    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.7);
    }
`;

export const MensagemLEDInterno = styled.span`
    width: fit-content;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: #222;
    display: flex;
    margin: 0 15px;
`;
