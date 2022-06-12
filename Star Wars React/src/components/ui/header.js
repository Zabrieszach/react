import React from 'react'                           //importando a biblioteca e criando um objeto react
import logo from '../../img/logo original.png'      //importando a imagem do logo direto da pasta

const Header = () => {                              //criei uma constante pro header que puxa uma função 
    return (                                        //essa função retorna um script com o logo, já com uma classe e com a tag img
        <header className='center'>  
            <img src={logo} alt='' />
        </header>
    )
}

export default Header                               //depois é preciso exportar esse arquivo