import React from 'react'                           //importando a biblioteca e criando um objeto react
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

const HeaderPlanetas = () => {                              //criei uma constante pro header que puxa uma função 
  return (                                        //essa função retorna um script com o logo, já com uma classe e com a tag img
    /*   <!-- Page Header --> */
    <header className="masthead temaplanetas">
      <div className="overlay"></div>
      <Container>
        <Row>
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <h1 className="text-warning">Planetas</h1>
              <h2 className="subheading font-italic">Os planetas mais importantes de toda a saga!</h2>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
};
export default HeaderPlanetas                               //depois é preciso exportar esse arquivo