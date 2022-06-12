import React from 'react'                           //importando a biblioteca e criando um objeto react
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

const HeaderNaves = () => {                              //criei uma constante pro header que puxa uma função 
  return (                                        //essa função retorna um script com o logo, já com uma classe e com a tag img
    /*   <!-- Page Header --> */
    <header className="masthead temanaves">
      <div className="overlay"></div>
      <Container>
        <Row>
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <h1 className="text-warning">Naves Espaciais</h1>
              <h2 className="subheading font-italic">Confira a coleção de naves espaciais!</h2>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
};
export default HeaderNaves                               //depois é preciso exportar esse arquivo