
import axios from "axios";   

const fetchItems2 = async (setDados, setIsloading) => {
    const result2 = await axios.get("https://swapi.dev/api/planets/")

   //console.log(result2.data.results);
    

    setDados(result2.data.results);

    setIsloading(false);

  } 

  export default fetchItems2 ;