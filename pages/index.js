import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
function Title2(porps){
  return <h1>TESTANDO {porps.children}</h1>
}
export default function Home() {
  return <>
  <Title2>TITULO</Title2>
    <Title>TESTANDO BUILD...</Title>
  </>
}
