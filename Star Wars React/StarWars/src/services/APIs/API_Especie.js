
import axios from "axios";   

const fetchItems4 = async (setDados, setIsloading) => {
    const result4 = await axios.get("https://swapi.dev/api/species/")

   //console.log(result4.data.results[0].films);

   setDados(result4.data.results);

    setIsloading(false);

  }

  export default fetchItems4 ;