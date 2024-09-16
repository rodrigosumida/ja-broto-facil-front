import styled from 'styled-components';

export const Content = styled.div`
    background: white;
    height: fit-content;
    width: 95%;
    background-color: #f0f0f0;
    margin: 20px auto;
    border: none;
    border-radius: 15px;
    display: flex;
    padding: 0 25px;
    flex-wrap: wrap;
`;

export const ContainerDados = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto 0;
    background-color: #fcfcfc;
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
`;

export const ContainerDadosRowInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30%;
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
`;

export const ListaInfo = styled.ul`
    
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
    padding: 20px;
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
