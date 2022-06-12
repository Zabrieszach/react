import React from 'react'                           //importando a biblioteca e criando um objeto react
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

const HeaderFilmes = () => {                              //criei uma constante pro header que puxa uma função 
  return (                                        //essa função retorna um script com o logo, já com uma classe e com a tag img
    /*   <!-- Page Header --> */
    <header className="masthead temafilmes">
      <div className="overlay"></div>
      <Container>
        <Row>
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <h1 className="text-warning">Filmes</h1>
              <h2 className="subheading font-italic">A Lista com o 6 primeiros e principais filmes!</h2>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
};
export default HeaderFilmes                               //depois é preciso exportar esse arquivo