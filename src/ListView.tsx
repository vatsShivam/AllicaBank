import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Components/Loader";
import PaginationComponent from "./Components/PaginationComponent";
import CardComponent from "./Components/Card";

function ListView() {
  type Character = {
    name?: string;
    gender?: string;
    planetName?: string;
    url?: string;
  };
  const [current, setCurrent] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [data, setData] = useState([]);
  async function fetchData(pageNumber: number) {
    setLoading(true);
    let characters_response = await axios.get(
      `https://swapi.dev/api/people/?page=${pageNumber}`
    );
    for (const character of characters_response.data.results) {
      const character_planet_response = await axios.get(character.homeworld);
      character.planetName = character_planet_response.data.name;
    }
    setData(characters_response.data.results);
    setTotalCount(characters_response.data.count);
    setLoading(false);
  }
  useEffect(() => {
    fetchData(1);
  }, []);

  const handlePageChange = (page: number) => {
    setCurrent(page);
    fetchData(page);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="site-card-wrapper">
          <h1 className="heading" data-testid="list-heading">Character List View</h1>
          <div className="cards">
            {data.length > 0 &&
              data.map((character: Character, index) => {
                return <CardComponent {...character} key={index} />;
              })}
          </div>
          <PaginationComponent
            current={current}
            onPageChange={handlePageChange}
            totalCount={totalCount}
          />
        </div>
      )}
    </div>
  );
}


export default ListView;