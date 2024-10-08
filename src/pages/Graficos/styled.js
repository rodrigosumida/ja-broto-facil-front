import styled from "styled-components";

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

export const ContainerGraficos = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const TituloGrafico = styled.div`
    font-size: 1.7rem;
`;