import { Container, Header } from "@/src/components/Header"
import styled from "styled-components"

const Button = styled.button`
  padding: 4px 8px;
  border-radius: 4px;
  border: 0;
  background-color: ${props => props.theme.green300};

  :hover{
    cursor: pointer;
    filter: brightness(1.8);
    transition: 0.3s;
  }

`


export default function Home() {
  return (
    <div>
    <Container>
      <Header>
        <img src="logo.svg" alt="" />
      </Header>
      <Button>ENVIAR</Button>
    </Container>
    </div>
        
  )
}
