import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 24px;
`
export const Content = styled.div`
    flex: 5;
`

export const VideoWrapper = styled.div`

`
export const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
`

export const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Info = styled.span`
    color: ${({theme}) => theme.textSoft};
`
export const Buttons = styled.div`
    display: flex;
    gap: 20px;
    `
export const Button = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`

export const Recommendation = styled.div`
    flex: 2;
`

export const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme}) => theme.soft};
`