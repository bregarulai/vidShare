import styled from "styled-components";

export const Container = styled.div``

export const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    background-color: #999999;
`

export const Input = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid ${({theme}) => theme.soft};
    width: 100%;
    background-color: transparent;
    padding: 5px;
    
`