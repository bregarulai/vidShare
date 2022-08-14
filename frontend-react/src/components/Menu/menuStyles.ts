import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    background-color:${({theme} ) => theme.bg};
    color:${({theme} ) => theme.text};
    height: 100vh;
    font-size: 14px;
    position: sticky;
    top: 0;
`

export const Wrapper = styled.div`
    padding: 18px 26px;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
`

export const Image = styled.img`
    height: 25px;
`
export const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 0px;
`

export const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme}) => theme.soft};
`

export const Login = styled.div`

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
    margin-top: 10px;
    cursor: pointer;
`
