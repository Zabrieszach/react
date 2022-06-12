import React from 'react'; //importando a biblioteca e criando um objeto react

const PlanetItem = ({ dado, key }) => {
    return (
        <div className="col-lg-5 mx-auto">
            <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                <div className="blockquote-custom-icon bg-warning shadow-sm">
                    <i className="fa fa-quote-left text-white"></i>
                </div>
                <h1 className="text-center text-warning">{[dado.name]}</h1>
                <div>
                    <p className="text-center">
                        <span>
                            <strong>Clima: </strong>{dado.climate}
                        </span>
                        <ul></ul>
                        <span>
                            <strong>Diâmetro:  </strong>{dado.diameter}
                        </span>
                        <ul></ul>
                        <span>
                            <strong>Gravidade: </strong>{dado.gravity}
                        </span>
                        <ul></ul>
                        <span>
                            <strong>Período Orbital:  </strong>{dado.orbital_period}
                        </span>
                        <ul></ul>
                        <span>
                            <strong>População: </strong>{dado.population}
                        </span>
                        <ul></ul>
                        <span>
                            <strong>Geografia: </strong> {dado.terrain}
                        </span>
                        <ul></ul>
                        <span>
                            <strong>Período de Rotação: </strong> {dado.rotation_period}
                        </span>
                        <ul></ul>
                        <span>
                            <strong>Superfícies com Água: </strong> {dado.surface_water}
                        </span>
                    </p>
                </div>

            </blockquote>
        </div>
    )
}

export default PlanetItem;