import { Button, Table } from 'react-bootstrap';
import React from 'react'; //importando a biblioteca e criando um objeto react

const CharacterItem = ({ item }) => {
    return (

        <div id="personagens">
            <div className="card">
                <div className="row">
                    <img src={item.image} alt="" class="col-lg-4 perfil" />
                    <div className="col-lg-8">
                        <h2 className="card-title text-warning text-center">{[item.name]}</h2>
                        <div className="card-text">
                            <ul>
                                <strong>Altura: </strong>{item.height}
                                <span> | </span>
                                <strong>Peso: </strong>{item.mass}
                                <span> | </span>
                                <strong>Gênero: </strong>{item.gender}
                                <span> | </span>
                                <strong>Espécie: </strong>{item.species}
                            </ul>
                            <ul>
                                <strong>Cor do Cabelo: </strong>{item.hairColor}
                                <span> | </span>
                                <strong>Cor de Pele: </strong>{item.skinColor}
                            </ul>
                            <ul>
                                <strong>Local de Nascimento: </strong>{item.homeworld}
                            </ul>
                            <ul>
                                <strong>Partes Cibernéticas: </strong>{item.cybernetics}
                            </ul>
                            <ul>
                                <strong>Mestres: </strong>{item.masters + ""}
                            </ul>
                            <ul>
                                <strong>Aprendizes: </strong>{item.apprentices + ""}
                            </ul>
                            <ul>
                                <strong>Alianças: </strong>{item.affiliations + ""}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default CharacterItem;