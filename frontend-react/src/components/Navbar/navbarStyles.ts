import styled from "styled-components";

export const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: ${({theme}) => theme.bgLighter};
    height: 56px;
`
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0px 20px;
    justify-content: flex-end;
    position: relative;
`


export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 15px;
    background-color: transparent;
    outline: none;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
`
export const Search = styled.div`
    position: absolute;
    left: 0px;
    right: 0px;
    margin: auto;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
`
export const Input = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
`