
import axios from "axios";   

const fetchItems6 = async (setDados, setIsloading) => {
    const result6 = await axios.get("https://swapi.dev/api/starships/")

  // console.log(result6.data.results);
    

    setDados(result6.data.results);

    setIsloading(false);

  } 

  export default fetchItems6 ;