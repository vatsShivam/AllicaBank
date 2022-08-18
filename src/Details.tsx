import { useLocation ,useParams } from "react-router-dom";
import { useEffect, useState ,} from "react";
import axios from "axios";
import DetailedCard from "./Components/DetailedCard";
import Loader from "./Components/Loader";

 function Details() {
  interface film{
    title:string;
  }
  
  const search = useLocation().search;
  const name= new URLSearchParams(search).get('planetName');
  let navigate = useParams();
  let characterFilms: film[] = [];
  interface Details {
    [index: string]: string;
  }
  let  characterDetails: Details = {};
  const [myArray, setMyArray] = useState(characterFilms);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(characterDetails);
  async function fetchData() {
    const base_url='https://swapi.dev/api/people/';
    const id = navigate.id;
    setLoading(true);
    let character_response = await axios.get(`${base_url}${id}`);
    character_response.data.planetName=name;
    let temp_film_Array: film[] = [];
    for (const film_url of character_response.data.films) {
      const res = await axios.get(film_url);
      temp_film_Array.push(res.data);
    }
    setData(character_response.data);
    setMyArray(temp_film_Array);
    setLoading(false);
  }

  useEffect(() => {
    fetchData()
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="site-card-wrapper">
          <h2 className="heading" data-testid="details-heading">Character Details view</h2>
                 <DetailedCard {...data} filmArr={myArray} />;
        </div>
      )}
    </div>
  );
}

export default Details;
