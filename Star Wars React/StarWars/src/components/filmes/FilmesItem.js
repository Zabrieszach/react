import { Button, Table } from 'react-bootstrap';
import React from 'react'; //importando a biblioteca e criando um objeto react
import CharacterItem from '../characters/CharacterItem';

const FilmesItem = ({ filmesdados, key }) => {
    return (

        <div id="personagens" className="col-lg-12 mb-4 text-white">
            <div className="card bg-dark">
                {/* <img src={item.image} alt="" class="card-img-top card-img" /> */}
                <div className="card-body">
                    <h2 className="card-title text-warning">
                        {[filmesdados.title]} <span> | {filmesdados.release_date}</span>
                    </h2>
                    <div className="card-text">
                        <p>
                            <strong className="text-warning">Diretor: </strong>{filmesdados.director}
                            <span> | </span>
                            <strong className="text-warning">Produtor: </strong>{filmesdados.producer}
                        </p>
                    </div>
                    <h5 className="text-center text-warning"> Sinopse </h5>
                    <p>{filmesdados.opening_crawl}</p>
                    {/* <Button>Ler Mais</Button>*/}                </div>
            </div>
        </div>

    )

}

export default FilmesItem;