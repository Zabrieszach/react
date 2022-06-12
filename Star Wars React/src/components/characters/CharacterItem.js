import React from 'react'; //importando a biblioteca e criando um objeto react

const CharacterItem = ({ item }) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.image} alt='' />
                </div>
                <div className="card-back">
                    <h1> {[item.name]}</h1>
                    <ul>
                        <li>
                            <strong>Altura: </strong>{item.height}
                        </li>
                        <li>
                            <strong>Peso: </strong>{item.mass}
                        </li>
                        <li>
                            <strong>Cor do Cabelo: </strong>{item.hair_color}
                        </li>
                        <li>
                            <strong>Cor de Pele: </strong>{item.skin_color}
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default CharacterItem;