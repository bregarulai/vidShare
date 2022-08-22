import { constants } from "crypto";
import { setMaxListeners } from "events";
import styled from "styled-components";

interface ICardStyleProps {
    type?: string
}

export const Container = styled.div<ICardStyleProps>`
    width: ${({type}) => type !== 'sm' && '360px' };
    margin-bottom: ${({type}) =>type === 'sm' ? '10px' : '45px'};
    cursor: pointer;
    display: ${({type}) => type === 'sm' && 'flex' };
    gap: 10px;
`

export const Image = styled.img<ICardStyleProps>`
    width: 100%;
    height: ${({type}) => type === 'sm' ? '120px' : '202px'};
    background-color: #999999;
    flex: 1;
`

export const Details = styled.div<ICardStyleProps>`
    display: flex;
    margin-top: ${({type}) => type !== 'sm' && '16px' };
    gap: 12px;
    flex: 1;
`

export const ChannelImage = styled.img<ICardStyleProps>`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999999;
    object-fit: cover;
    display: ${({type}) => type === 'sm' && 'none'};
`

export const Texts = styled.div`

`
export const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
`
export const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
    margin: 9px 0px;
    `
export const Info = styled.p`
    font-size:14px;
    color: ${({theme}) => theme.textSoft};
`