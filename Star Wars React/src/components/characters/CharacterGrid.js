import React from 'react'                                       //importando a biblioteca e criando um objeto react
import CharacterItem from "../characters/CharacterItem";        //importando os dados dos personagens direto do arquivo characteritem


// aqui nós criamos uma função que passa dois parametros. o primeiro são os items obtidos na API. o segundo é o parametro criado na app.js 
const CharaterGrid = ({ items, isloading }) => {                
    return isloading ? (                                    //aqui nós estamos testando se o parâmetro isloading é true, se for true aparece a mensagem, se for false ele vai inserir o condeúto através de uma section
        <h1>Loading...</h1>
    ) : (
            <section className="cards">
                {items.map((item) => (                      //aqui nós estamos fazendo um map que vai percorrer o array items e vamos passar 1 array por array dentro do component Characteritem
                    <CharacterItem key={item.id} item={item}></CharacterItem>
                ))}
            </section>
        )
}

export default CharaterGrid                                 //aqui estamos exportando o elemento que vamos importar fora