import styled from 'styled-components';

export const Content = styled.div`
    background: #ebf5cf;
    height: 100vh;
    width: 95%;
    margin: 40px auto;
    border: none;
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
`;

export const BoxBranca = styled.div`
    display: flex;
    width: 60%;
    border-radius: 15px;
    background-color: white;
`;

export const BarraLateral = styled.div`
    width: 0.5px;
    height: 85%;
    margin: auto 0;
    background-color: #999;
`;

export const ContainerDados = styled.div`
    width: 75%;
    border-radius: 15px;
`;

export const TituloDados = styled.div`
    height: 15%;
    padding: 0 30px;
    border-top-right-radius: 15px;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

export const Titulo = styled.h1`
    font-size: 1.7rem;
`;

export const DadosAtuais = styled.div`
    height: 35%;
    padding: 12px;
    display: flex;
    justify-content: center;
    gap: 30px;
`;

export const Dado = styled.div`
    width: 45%;
    height: 100%;
    background-color: #EEE;
    border-radius: 25px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TituloDado = styled.h4`
    font-weight: 400;
    font-size: 1.15rem;
`;

export const Numero = styled.span`
    font-size: 4.75rem;
`;

export const DadosHistoricos = styled.div`
    height: 50%;
    padding: 10px;
    border-bottom-right-radius: 15px;
    display: flex;
`;

export const ContainerHistorico = styled.div`
    height: 100%;
    width: 50%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BoxHistoricoBaixo = styled.div`
    width: 90%;
    height: 90px;
    margin: 10px 0;
    background-color: #7a8a56;
    border-radius: 10px;
    box-shadow: 20px 10px 17px -7px rgba(219,219,219,0.7);
    display: flex;
    justify-content: end;
`;

export const BoxHistorico = styled.div`
    width: 97%;
    height: 90px;
    padding: 10px 20px;
    background-color: #EEE;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const TituloHistorico = styled.h5`
    font-size: 0.92rem;
`;

export const DataHistorico = styled.p`
    font-size: 0.85rem;
`;

export const ContainerTabela = styled.div`
    width: 39.5%;
    border-radius: 15px;
    padding: 15px;
`;

export const TituloTabela = styled.h4`
    font-size: 1.4rem;
    margin: 20px 10px;
`;
