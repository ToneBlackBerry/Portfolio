import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={18}>Renato Batista</Titulo>
      <Paragrafo fontSize={16} tipo="secundario">
        renatobatizta
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor WEB
      </Descricao>
      <BotaoTema>Troca tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
