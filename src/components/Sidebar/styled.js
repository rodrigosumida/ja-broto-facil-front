import styled from 'styled-components';

export const ContainerInfo = styled.div`
    width: 25%;
    border-radius: 15px;
`;

export const ContainerSidebar = styled.nav`
    height: 50%;
    border-radius: 15px;
    padding: 10px 20px;
`;

export const ImagemLogo = styled.img`
    height: 100%;
    max-width: 100%;
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

export const ListaItens = styled.ul`
    text-decoration: none;
    width: 100%;
    height: 100%;
`;

export const Logo = styled.div`
    height: 15%;
    border-radius: 15px;
    justify-content: center;
    display: flex;
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