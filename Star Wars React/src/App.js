import React, { useState, useEffect } from 'react';                 //aqui estou importanto a biblioteca e criando um objeto react
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/ui/header";                        //importei o documento header para esse arquivo principal
import CharacterGrid from "./components/characters/CharacterGrid";  //importei o documento charactergrid para esse arquivo principal
import PlanetGrid from "./components/planets/PlanetGrid";  //importei o documento charactergrid para esse arquivo principal
//import TrailerDiv from "./components/trailers/t";

import fetchItems from "./services/APIs/API_Personagens";
import fetchItems2 from "./services/APIs/API_Planetas";
//import fetchItems3 from "./services/APIs/API_Youtube";

import './App.css';                                                //importei o documento do css para esse arquivo principal



export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Personagens">Personagens</Link>
          </li>
          <li>
            <Link to="/Planetas">Planetas</Link>
          </li>
          <li>
            <Link to="/Trailer">Trailer</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/Personagens">
            <Personagens />
          </Route>
          <Route path="/Planetas">
            <Planetas />
          </Route>
         {/*  <Route path="/Trailer">
            <Trailer />
          </Route>
          */} <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Personagens() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetchItems(setItems, setIsloading);

  })
  
  return (<div className="container"> 
  <Header />                                            [aqui eu importo fisicamente o header]
  <CharacterGrid isLoading={isLoading} items={items} /> [aqui eu importo fisicamente o grid que eu criei pros dados]

</div>);
}


function Planetas() {
  const [dados, setDados] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetchItems2(setDados, setIsloading);
  })
  
  return (<div className="container"> 
  <Header />                                            {/* [aqui eu importo fisicamente o header] */}
  <PlanetGrid isLoading={isLoading} dados={dados} /> {/* [aqui eu importo fisicamente o grid que eu criei pros dados] */}

</div>);
}



/* function Trailer() {
  const [data] = useState([]);

  useEffect(() => {
    fetchItems3(data);
  })
  
  return (<div className="container"> 
  <Header />   
  <TrailerDiv  data={data} /> 

</div>);
} */