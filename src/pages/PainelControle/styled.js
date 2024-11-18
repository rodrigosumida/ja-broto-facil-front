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

export const ContainerControlador = styled.div`
    padding: 10px 30px;
`;

export const Titulo = styled.h1`
    font-size: 1.7rem;
    padding: 30px 0;
`;

export const InfoTextos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TituloLEDExterno = styled.h2`
    font-size: 1.3rem;
`;

export const Intensidade = styled.span`
    font-size: 1rem;
`;

export const ContainerBotao = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    justify-content: end;
    align-items: center;
`;

export const BotaoEnviar = styled.div`
    padding: 10px 15px;
    display: flex;
    margin: 15px 0;
    background-color: #6f8d1c;
    color: #fff;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
    }
`;
