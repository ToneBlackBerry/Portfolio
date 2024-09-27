import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Projetos from './container/Projetos'
import Sobre from './container/Sobre'
import Sidebar from './container/Sidebar'
import EstiloGlobal, { Container } from './styles'
import TemaLight from './themes/light'
import TemaDark from './themes/dark'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(true)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? TemaDark : TemaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
