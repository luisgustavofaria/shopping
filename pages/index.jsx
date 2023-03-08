import { Container, Header } from "@/src/components/Header"
import logoImg from "../public/logo.svg"
import {HomeContainer, Product} from "../src/components/Home"
import camiseta1 from "../public/1.png"
import camiseta2 from "../public/2.png"
import camiseta3 from "../public/3.png"
import camiseta4 from "../public/4.png"
import { stripe } from "../src/lib/stripe"

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from "next/image"
import Stripe from "stripe"
import { useState, useEffect } from "react"


export default function Home() {
  
  /*
  const fetchProduct = async() => {
    
    const response = await fetch(`https://api.stripe.com/v1/products/sk_test_51MhCPzGqlSLMeOosLeZPEXtSeeuUaV1J7b8Tl4H281zFJ9ItiSUDriK1t6bhePqMRfXSWvQxgUi0OyVCU3u7MpvU004IopHiLv`)
    const data = await response.json()
    
    
    console.log(data);
  };
  fetchProduct()
  */
  
  const [listProducts, setlistProducts] = useState([])
  
  const fetchProduct = async() => {
    const stripe = require('stripe')('sk_test_51MhCPzGqlSLMeOosLeZPEXtSeeuUaV1J7b8Tl4H281zFJ9ItiSUDriK1t6bhePqMRfXSWvQxgUi0OyVCU3u7MpvU004IopHiLv');

    const response = await stripe.products.list({
      expand: ['data.default_price']
    });

    const products = response.data.map(product => {
      const price = product.default_price
  
      return {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount / 100),
      }
    })
    setlistProducts(products)
  }  

  useEffect(() => {
    fetchProduct()
  }, [listProducts])

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  });

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>  
      <HomeContainer ref={sliderRef} className="keen-slider">
        {listProducts.map(product => {
          return (
            <Product key={product.id} className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          )
        })}

      </HomeContainer>
    </Container>  
        
  )
}
