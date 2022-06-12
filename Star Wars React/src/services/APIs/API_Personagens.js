
import axios from "axios";   

const fetchItems = async (setItems, setIsloading) => {
    const result = await axios.get("https://akabab.github.io/starwars-api/api/all.json"   
    )

    //console.log(result.data);

    setItems(result.data);

    setIsloading(false);

  }

  export default fetchItems;
