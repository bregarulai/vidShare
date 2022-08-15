import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`

export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    background-color: #999999;
`

export const CommentDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
`

export const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.textSoft};
    margin-left: 5px;
`

export const Text = styled.span`
    font-size: 14px;
`