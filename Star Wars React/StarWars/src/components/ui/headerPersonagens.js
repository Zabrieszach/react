import React from 'react'                           //importando a biblioteca e criando um objeto react
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

const HeaderPersonagens = () => {                              //criei uma constante pro header que puxa uma função 
  return (                                        //essa função retorna um script com o logo, já com uma classe e com a tag img
    /*   <!-- Page Header --> */
    <header className="masthead temapersonagens">
      <div className="overlay"></div>
      <Container>
        <Row>
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <h1 className="text-warning">Personagens</h1>
              <h2 className="subheading font-italic">Os personagens mais marcantes de toda a saga!</h2>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
};
export default HeaderPersonagens                               //depois é preciso exportar esse arquivo