import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Pokemons } from './pokemons'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <Pokemons />
    // <ThemeProvider theme={defaultTheme}>
    //   <BrowserRouter>
    //     <Router />
    //   </BrowserRouter>
    //   <GlobalStyle />
    // </ThemeProvider>
  )
}
