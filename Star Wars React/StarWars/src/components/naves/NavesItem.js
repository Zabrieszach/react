import React from 'react'; //importando a biblioteca e criando um objeto react

const NaveItem = ({ dado, key }) => {
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
                            <strong>Equipe: </strong>{dado.crew}
                        </span>
                        <ul></ul>
                        <span>
                            <strong>Velocidade Hyperdrive:  </strong>{dado.hyperdrive_rating}
                        </span>
                        <ul></ul>
                        <span>
                            <strong>Fabricante: </strong>{dado.manufacturer}
                        </span>
                        <ul></ul>
                        <span>
                            <strong>Modelo:  </strong>{dado.model}
                        </span>
                        <ul></ul>
                        <span>
                            <strong>Passageiros: </strong>{dado.passengers}
                        </span>
                        <ul></ul>
                        <ul></ul>
                        <span>
                            <strong>CLasse de Naves: </strong> {dado.starship_class}
                        </span>
                        <ul></ul>
                        <span>
                            <strong>Custo em créditos Imperiais: </strong> {dado.cost_in_credits}
                        </span>
                    </p>
                </div>

            </blockquote>
        </div>
    )
}

export default NaveItem;