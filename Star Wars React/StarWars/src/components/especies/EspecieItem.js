import React from 'react'; //importando a biblioteca e criando um objeto react

const EspecieItem = ({ dado, key }) => {
    return (
        <div className="col-lg-5 mx-auto">
            <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                <div className="blockquote-custom-icon bg-success shadow-sm">
                    <i className="fa fa-quote-left text-white"></i>
                </div>
                <h1 className="text-center text-success">{[dado.name]}</h1>
                <p className="text-center">
                    <span>
                        <strong>Classificação: </strong>{dado.classification}
                    </span>
                    <ul></ul>
                    <span>
                        <strong>Linguagem: </strong>{dado.language}
                    </span>
                    <ul></ul>
                    <span>
                        <strong>Designação: </strong>{dado.designation}
                    </span>
                    <ul></ul>
                    <span>
                        <strong>Altura Média: </strong>{dado.average_height}
                    </span>
                    <ul></ul>
                    <span>
                        <strong>Anos de Vida Médio: </strong>{dado.average_lifespan}
                    </span>
                    <ul></ul>
                    <span>
                        <strong>Designação: </strong>{dado.designation}
                    </span>
                    <ul></ul>
                    <span>
                        <strong>Cor dos Olhos: </strong>{dado.eye_colors}
                    </span>
                    <ul></ul>
                    <span>
                        <strong>Cor dos Cabelos: </strong>{dado.hair_colors}
                    </span>
                    <ul></ul>
                    <span>
                        <strong>Cor de Pele: </strong>{dado.skin_colors}
                    </span>
                    <ul></ul>
                   </p>
            </blockquote>
        </div>
    )
}

export default EspecieItem;