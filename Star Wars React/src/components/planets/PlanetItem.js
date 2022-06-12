import React from 'react'; //importando a biblioteca e criando um objeto react

const CharacterItem2 = ({ dado, key }) => {
    //console.log("teste", dado)
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-back">
                    <img src={dado.image} alt='' />
                </div>
                <div className="card-front">
                    <h1> {[dado.name]}</h1>
                    <ul>
                        <li>
                            <strong>Clima: </strong>{dado.region}
                        </li>
                        <li>
                            <strong>População: </strong>{dado.species}
                        </li>
                        <li>
                            <strong>Geografia: </strong>{dado.description}
                        </li>
                        <li>
                 
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default CharacterItem2;