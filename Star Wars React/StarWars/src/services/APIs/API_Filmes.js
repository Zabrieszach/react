
import axios from "axios";   

const fetchItems5 = async (setDados, setIsloading) => {
    const result5 = await axios.get("https://swapi.dev/api/films/")

   //console.log(result5.data.results);

    setDados(result5.data.results);

    setIsloading(false);

  }

  export default fetchItems5 ;