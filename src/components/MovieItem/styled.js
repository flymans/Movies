import styled from 'styled-components';

export const MovieItemStyled = styled.li`
    display: flex;
    border: 1px solid black;
    width: 50%;
    transition: 1s;
    margin: 10px 0px;

    &:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
`;

export const ImageContainer = styled.img`
    width: 250px;
    height: 300px;
`;
