
import { Container, Header } from '@/src/components/Header'
import { createGlobalStyle, ThemeProvider} from 'styled-components'
import logoImg from "../public/logo.svg"

import Image from 'next/image'
import theme from '../src/theme'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${props => props.theme.gray900};
    color: ${props =>  props.theme.gray100};
  }

  body input textarea button {
    font-family: 'Roboto';
    font-weight: 400px;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />   
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
