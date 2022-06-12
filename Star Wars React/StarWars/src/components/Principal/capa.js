import React from 'react'; //importando a biblioteca e criando um objeto react
import { Container, Row } from 'react-bootstrap';

const Capa = () => {

  return (
    <Container>
      <Row>
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="post-preview">
            <h1 className="post-title text-warning">
              O Universo de Star Wars é extremamente vasto, e queremos ajudar-te a explorá-lo!
            </h1>

            <p className="text-light">Para todos os que não conhecem a fundo esse universo,
            Star Wars (ou "Guerra nas Estrelas") resume-se a uma série de filmes que aparecem de tempos em tempos para
            arrastar massas de pessoas ao cinema.
            Porém, meu jovem "padwan", acontece que os filmes são apenas uma pequena parte de um universo muito maior!
            </p>

            <p className="text-white">Criado por George Lucas nos anos 1970, o maior ícone da comunidade nerd é um universo gigantesco que inclui:
            filmes, videojogos, bandas desenhadas, livros, séries animadas e live action.
            É raro achar alguém que goste de cultura pop e não conheça nada da franquia – afinal, quem nunca ouviu falar do Baby Yoda hoje em dia?</p>

            <h4 className="text-warning font-italic"> <a href="/Filmes" className="text-warning"> Os Filmes</a> </h4>
            <p className="text-light">Até o momento, podemos contar um total de 17 filmes da franquia Star Wars
            (sem incluir os filmes feitos por fãs, ou filmes temáticos como o especial de Natal do Star wars -really?)
            </p>
            <p className="text-light">Como toda grande franquia de sucesso, o lançamento dos filmes não segue uma ordem cronológica
            de eventos dentro do universo da ficção. Isso significa, por exemplo, que o primeiro filme lançado,
            “Star Wars – Episódio IV: Uma Nova Esperança”, em 1975, é cronologicamente, o 4º filme na sequência dos eventos
            - ou o 10º se formos contar todos os spin-offs.
            </p>
            <p className="text-warning post-meta">Não vamos mencionar a história toda aqui,
            porque é realmente gigantesca (acredite, é muito longa) mas podemos explicar como a história é dividida.
            </p>
            <p className="text-light">Basicamente existem 3 arcos principais, com 3 filmes cada, o que dá ao todo 9 filmes.
            Esses 9 filmes narram a Saga da família Skywalker, através da luta entre os jedis, os sith, a aliança, o império,
            a república e muitos outros elementos. Nesses 9 filmes somos introduzidos ao Anakin Skywalker e sua batalha contra o medo,
            a Luke Skywalker e a luta entre o perdão e a vingança e, por fim, somos introduzidos a Rey,
            uma catadora de sucatas que tem seu destino atrelado aos dois protagonistas anteriores.
            </p>
            <p className="text-warning post-meta">No meio disso tudo há também as séries e filmes animados que ajudam a preencher
            as lacunas entre esses 3 grandes arcos, e por fim, a última série a ser lançada: The Mandalorian,
            que narra a jornada de um implacável caçador de recompensas pela galáxia.
             </p>
            <p className="text-light">É claro que não podemos esquecer dos spin-offs.
            Em 2016, “Rogue One: Uma História Star Wars” foi lançado e a história se encaixa entre os episódios III e IV.
            Dois anos depois, foi a vez da história de Han Solo chegar às telonas com o objetivo de contar a história do
            contrabandista espacial mais conhecido da galáxia.
                </p>


            <h4 className="text-warning font-italic"> <a href="/Personagens" className="text-warning"> Os Personagens </a></h4>
            <p className="text-light"> Quem disser que nunca ouviu o nome “Skywalker” ou “Darth Vader” provavelmente está a mentir ou viveu em uma caverna nos últimos 50 anos!
            Por mais ignorante que possas ser no universo do Star Wars, é muito provável que conheças muitos personagens que marcaram a cultura Pop e são reconhecidos no mundo inteiro!
            </p>
            <p className="text-light"> Personagens como Darth Vader, Luke Skywalker, Princesa Leia, Han Solo, Yoda e muitos outros
            dão vida a esse universo e ajudaram a tornar a cultura pop esse fenômeno que é hoje.
             Aproveite para conhecer outros personagens importantes da saga.</p>

            <h4 className="text-warning font-italic"> <a href="/Especies" className="text-warning"> As Espécies</a> </h4>
            <p className="text-light">Tecnicamente, podemos afirmar que membros de uma espécie compartilham um conjunto fixo de características biológicas observáveis.
            Algumas espécies são sencientes, capazes de pensamento inteligente, enquanto outras não.
                </p>
            <p className="text-light"> As espécies cujo plano corporal se assemelhava ao dos humanos eram chamadas de humanoides.
            Para nossa sorte, a galáxia e seus muitos planetas estão repletos de diversas espécies e ao longo dos 12 filmes pudermos conhecer
            uma grande parte delas!
                </p>
            <p className="text-light"> A variedade de raças no universo é limitada apenas pela mente humana, temos raças monocromáticas ou coloridas,
            peludas ou lisas, grandes ou pequenas, aquáticas, terrestres ou voadoras, de personagens odiados a heróis, enfim,
            não há mesmo limite para a criatividade humana!
                </p>

            <h4 className="text-warning font-italic"> <a href="/Planetas" className="text-warning"> Os Planetas</a> </h4>
            <p className="text-light">Não importa o quão grande seja esse universo, há sempre planetas a serem explorados e descobertos!
             Há muita vida espalhada nos 4 cantos da galáxia e aqui reunimos uma pequena parte dos principais planetas da saga.</p>
            <p className="text-light">Leia mais sobre eles!</p>

            <h3 className="post-subtitle text-warning">
              Ainda há muito o que ser dito sobre esse universo! Logo mais atualizamos o guia com esses outros temas:
            </h3>
            <ul className="text-center">
              <h4 className="text-white font-italic"> Os Livros </h4>
              <h4 className="text-white font-italic"> As Séries e Animações </h4>
              <h4 className="text-white font-italic"> Os Video-jogos </h4>
            </ul>

          </div>

        </div>
      </Row>
    </Container>
  )
}

export default Capa;