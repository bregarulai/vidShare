import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 56px);
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({theme}) => theme.bgLighter};
  border: 1px solid ${({theme}) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`

export const Title = styled.h1`

`
export const SubTitle = styled.h2`

`
export const Input = styled.input`

`
export const Button = styled.button`

`
export const More = styled.div`

`
export const Links = styled.div`

`
export const Link = styled.span`

`