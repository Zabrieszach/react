import React from 'react'                           //importando a biblioteca e criando um objeto react
import { Container, Row } from 'react-bootstrap'

const Footer = () => {                              //criei uma constante pro header que puxa uma função 
    return (                                        //essa função retorna um script com o logo, já com uma classe e com a tag img
        <Container>
        <Row>
          <div class="col-lg-8 col-md-10 mx-auto ">
            <ul class="list-inline text-center">
              <li class="list-inline-item">
                <a href="#">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
            <p class="copyright text-muted">Copyright &copy; Your Website 2020</p>
          </div>
        </Row>
      </Container>
    )
}

export default Footer                               //depois é preciso exportar esse arquivo