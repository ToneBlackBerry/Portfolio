import Titulo from '../Titulo'
import Paragrafo from '../Paragrafo'
import { GithubSecao } from './styles'
const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
      reprehenderit rem maiores provident amet optio, odit quae sit fuga nisi
      consequatur aliquid in beatae eius et quam molestias aliquam quis.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=ToneBlackBerry&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ToneBlackBerry&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
