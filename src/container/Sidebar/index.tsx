import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer, Centro } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Centro>
        <Avatar />
        <Titulo fontSize={18}>Renato Batista</Titulo>
        <Paragrafo fontSize={16} tipo="secundario">
          renatobatizta
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Desenvolvedor WEB
        </Descricao>
        <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
      </Centro>
    </SidebarContainer>
  </aside>
)

export default Sidebar
