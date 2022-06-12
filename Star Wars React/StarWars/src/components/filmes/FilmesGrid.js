import React from 'react'                                       //importando a biblioteca e criando um objeto react
import { Row } from 'react-bootstrap';
import FilmesItem from "./FilmesItem";        //importando os dados dos personagens direto do arquivo characteritem


// aqui nós criamos uma função que passa dois parametros. o primeiro são os items obtidos na API. o segundo é o parametro criado na app.js 
const FilmesGrid = ({ dados, isloading}) => {                
    return isloading ? (                                    //aqui nós estamos testando se o parâmetro isloading é true, se for true aparece a mensagem, se for false ele vai inserir o condeúto através de uma section
        <h1>Loading...</h1>
    ) : (
            <Row>
                {dados.map((filmesdados) => (                      //aqui nós estamos fazendo um map que vai percorrer o array items e vamos passar 1 array por array dentro do component Characteritem
                    <FilmesItem key={filmesdados.id} filmesdados={filmesdados}></FilmesItem>
                    ))
                    }
            </Row>  
        )
}

export default FilmesGrid;       