import styled from 'styled-components';

export const Content = styled.div`
    background: white;
    height: 100vh;
    width: 95%;
    margin: 70px auto;
    border: none;
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
`;

export const ContainerInfo = styled.div`
    width: 20%;
    border-radius: 15px;
`;

export const Logo = styled.div`
    height: 15%;
    border-radius: 15px;
    justify-content: center;
    display: flex;
`;

export const ImagemLogo = styled.img`
    height: 100%;
    max-width: 100%;
`;

export const Perfil = styled.div`
    height: 35%;
`;

export const PerfilFoto = styled.div`
    height: 65%;
    justify-content: center;
    align-items: center;
    display: flex;
`;

export const PerfilFotoImg = styled.img`
    height: 90%;
    max-width: 75%;
    border-radius: 50%;
    border: none;
`;

export const PerfilInfo = styled.div`
    height: 30%;
    align-items: center;
    justify-content: center;
    display: flex;
`;

export const TextoPerfil = styled.h3`
    font-size: 1.3rem;
    text-align: center;
`;

export const ContainerSidebar = styled.nav`
    height: 50%;
    border-radius: 15px;
    padding: 10px 20px;
`;

export const ListaItens = styled.ul`
    text-decoration: none;
    width: 100%;
    height: 100%;
`;

export const ItemLista = styled.li`
    width: 100%;
    text-align: start;
    height: fit-content;
    border: none;
    border-radius: 5px;
    padding: 12px 5px;
    margin: 5px 0;
    font-size: 0.82rem;
    color: #555;
    align-items: center;
    display: flex;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
`;

export const BarraLateral = styled.div`
    width: 0.5px;
    height: 85%;
    margin: auto 0;
    background-color: #999;
`;

export const ContainerDados = styled.div`
    width: 50%;
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
    gap: 10px;
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
    font-size: 5rem;
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

export const BoxHistorico = styled.div`
    width: 90%;
    height: 90px;
    border-radius: 10px;
    margin: 10px 0;
    padding: 10px 20px;
    background-color: #EEE;
    box-shadow: 20px 10px 17px -7px rgba(219,219,219,0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const TituloHistorico = styled.h5`
    font-size: 1rem;
`;

export const DataHistorico = styled.p`

`;

export const ContainerTabela = styled.div`
    width: 29.5%;
    border-radius: 15px;
    padding: 15px;
`;

export const TituloTabela = styled.h4`
    font-size: 1.4rem;
    margin: 20px 10px;
`;
