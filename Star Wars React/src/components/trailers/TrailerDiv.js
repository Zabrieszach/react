 import React from 'react'                                       //importando a biblioteca e criando um objeto react
import TrailerItem from "./TrailerItem";        //importando os dados dos personagens direto do arquivo characteritem


// aqui nós criamos uma função que passa dois parametros. o primeiro são os items obtidos na API. o segundo é o parametro criado na app.js 
const TrailerDiv = ({data}) => {                
    return  ( data.map((dado) => (                      //aqui nós estamos fazendo um map que vai percorrer o array items e vamos passar 1 array por array dentro do component Characteritem
                    <TrailerItem key={} dado={dado}></TrailerItem>
                    ))
                    
     
        )
}

export default TrailerDiv;                               //aqui estamos exportando o elemento que vamos importar fora