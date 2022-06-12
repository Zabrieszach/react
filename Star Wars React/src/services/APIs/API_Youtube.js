import YTSearch from "youtube-api-search";
const API_KEY = 'AIzaSyBOReu2M28Kny1MEwFLqe6jdmDzdquAMkk';

const fetchItems3 = YTSearch({key: API_KEY, term: 'Star Wars Trailers', WHATEVERYOUWANT: 20}, (data) =>{
  console.log(data);
});



export default fetchItems3 ;