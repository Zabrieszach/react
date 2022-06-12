import React, { useState, useEffect, Component } from 'react';                 //aqui estou importanto a biblioteca e criando um objeto react
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from "./components/ui/header";                        //importei o documento header para esse arquivo principal
import HeaderEspecies from "./components/ui/headerEspecies";                        //importei o documento header para esse arquivo principal
import HeaderPlanetas from "./components/ui/headerPlanetas";                        //importei o documento header para esse arquivo principal
import HeaderFilmes from "./components/ui/headerFilmes";                        //importei o documento header para esse arquivo principal
import HeaderPersonagens from "./components/ui/headerPersonagens";                        //importei o documento header para esse arquivo principal
import HeaderTrailer from "./components/ui/headerTrailer";                        //importei o documento header para esse arquivo principal
import HeaderNaves from "./components/ui/headerNaves";                        //importei o documento header para esse arquivo principal


import CharacterGrid from "./components/characters/CharacterGrid";  //importei o documento charactergrid para esse arquivo principal
import EspecieGrid from "./components/especies/EspecieGrid";  //importei o documento charactergrid para esse arquivo principal
import PlanetGrid from "./components/planets/PlanetGrid";  //importei o documento charactergrid para esse arquivo principal
import FilmesGrid from "./components/filmes/FilmesGrid";  //importei o documento charactergrid para esse arquivo principal
import NaveGrid from "./components/naves/NavesGrid";  //importei o documento charactergrid para esse arquivo principal
import Capa from "./components/Principal/capa";  //importei o documento charactergrid para esse arquivo principal


import Pagination from "./components/pagination/pagination";


import fetchItems from "./services/APIs/API_Personagens";
import fetchItems2 from "./services/APIs/API_Planetas";
import fetchItems4 from "./services/APIs/API_Especie";
import fetchItems5 from "./services/APIs/API_Filmes";
import fetchItems6 from "./services/APIs/API_Naves";


import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import './css/clean-blog.min.css';                                                //importei o documento do css para esse arquivo principal
import './css/clean-blog.css';                                                //importei o documento do css para esse arquivo principal
import './simples.css';                                                //importei o documento do css para esse arquivo principal

import YTSearch from 'youtube-api-search';
import VideoList from './components/trailers/video_list';
import VideoDetail from './components/trailers/video_detail';
const API_KEY = 'AIzaSyBOReu2M28Kny1MEwFLqe6jdmDzdquAMkk';



// NavBar com o Router
export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
          <div className="container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
        <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Personagens" className="nav-link">Personagens</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Planetas" className="nav-link">Planetas</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Filmes" className="nav-link">Filmes</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Especies" className="nav-link">Especies</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Naves" className="nav-link">Naves</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Trailer" className="nav-link">Trailers</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/Personagens"> <Personagens /> </Route>
          <Route path="/Planetas"> <Planetas /> </Route>
          <Route path="/Filmes"> <Filmes /> </Route>
          <Route path="/Especies"> <Especies /> </Route>
          <Route path="/Naves"> <Naves /> </Route>
          <Route path="/Trailer"> <Trailer /> </Route>
          <Route path="/"> <Home /> </Route>
        </Switch>
      </div>
    </Router >
  );
}

function Home() {
  return (
    <div id="capa" className="universe">
      <Header />
      <Capa />
    </div>
  );
}

function Personagens() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);

  useEffect(() => {
    fetchItems(setItems, setIsloading);
  }, []);


  //Get current characters
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentItems = items.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="universe">
      <HeaderPersonagens />                                            {/* [aqui eu importo fisicamente o header] */}
      <Container>
        <Pagination postPerPage={postPerPage} totalPosts={items.length} paginate={paginate}></Pagination>
        <CharacterGrid isLoading={isLoading} items={currentItems} />{/*  [aqui eu importo fisicamente o grid que eu criei pros dados] */}
        <Pagination postPerPage={postPerPage} totalPosts={items.length} paginate={paginate}></Pagination>
      </Container>
    </div>);
}

function Planetas() {
  const [dados, setDados] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(2);

  useEffect(() => {
    fetchItems2(setDados, setIsloading);
  })

  //Get current characters
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentDados = dados.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="universe">
      <HeaderPlanetas />                                            {/* [aqui eu importo fisicamente o header] */}
      <section>
        <Container>
          <Pagination postPerPage={postPerPage} totalPosts={dados.length} paginate={paginate}></Pagination>
          <PlanetGrid isLoading={isLoading} dados={currentDados} /> {/* [aqui eu importo fisicamente o grid que eu criei pros dados] */}
          <Pagination postPerPage={postPerPage} totalPosts={dados.length} paginate={paginate}></Pagination>
        </Container>
      </section>
    </div>);
}

function Especies() {
  const [dados, setDados] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(2);

  useEffect(() => {
    fetchItems4(setDados, setIsloading);
  })

  //Get current characters
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentDados = dados.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="universe">
      <HeaderEspecies />                                            {/* [aqui eu importo fisicamente o header] */}
      <section>
        <Container>
          <Pagination postPerPage={postPerPage} totalPosts={dados.length} paginate={paginate}></Pagination>
          <EspecieGrid isLoading={isLoading} dados={currentDados} /> {/* [aqui eu importo fisicamente o grid que eu criei pros dados] */}
          <Pagination postPerPage={postPerPage} totalPosts={dados.length} paginate={paginate}></Pagination>
        </Container>
      </section>
    </div>);
}

function Filmes() {
  const [dados, setDados] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetchItems5(setDados, setIsloading);
  })

  return (
    <div className="universe">
      <HeaderFilmes />                                            {/* [aqui eu importo fisicamente o header] */}
      <section>
        <Container>
          <FilmesGrid isLoading={isLoading} dados={dados} /> {/* [aqui eu importo fisicamente o grid que eu criei pros dados] */}
        </Container>
      </section>
    </div>);
}

function Naves() {
  const [dados, setDados] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);

  useEffect(() => {
    fetchItems6(setDados, setIsloading);
  })

  //Get current characters
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentDados = dados.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="universe">
      <HeaderNaves />                                            {/* [aqui eu importo fisicamente o header] */}
      <section>
        <Container>
          <Pagination postPerPage={postPerPage} totalPosts={dados.length} paginate={paginate}></Pagination>
          <NaveGrid isLoading={isLoading} dados={currentDados} /> {/* [aqui eu importo fisicamente o grid que eu criei pros dados] */}
          <Pagination postPerPage={postPerPage} totalPosts={dados.length} paginate={paginate}></Pagination>
        </Container>
      </section>
    </div>);
}

class Trailer extends Component {
  constructor() {
    super();

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('Trailer Star Wars');
  }

  componentDidMount() {

  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div className = "universe">
        <HeaderTrailer />
        {/* <SearchBar onSearchTermSubmit={(term) => this.videoSearch(term)} /> */}
        <div class="container">
          <div class="row">
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    )
  }
}

