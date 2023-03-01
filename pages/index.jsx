import { Container, Header } from "@/src/components/Header"
import logoImg from "../public/logo.svg"
import {HomeContainer, Product} from "../src/components/Home"
import camiseta1 from "../public/1.png"
import camiseta2 from "../public/2.png"
import camiseta3 from "../public/3.png"


import Image from "next/image"


export default function Home() {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>  
      <HomeContainer>
        <Product>
          <Image src={camiseta1} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>

        <Product>
          <Image src={camiseta2} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
      </HomeContainer>
    </Container>  
        
  )
}
