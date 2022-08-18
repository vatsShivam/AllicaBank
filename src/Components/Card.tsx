import { Link } from "react-router-dom";

interface Props {
  name?: string;
  gender?: string;
  planetName?: string;
  url?: string;

}
const getIDFromUrl=(url:any)=>{
    let url_split = url.split('/')
    return url_split[url_split.length-2];
}
const CardComponent = ({ name, gender, planetName, url }: Props) => {
  let id= getIDFromUrl(url);
  return (
    <div className="cards__item"  data-testid="people-list">
      <div className="card__title" >Name : {name}</div>
      <p className="card__text">Gender : {gender}</p>
      <p className="card__text">PlanetName : {planetName}</p>
      <Link to={`/details/${id}?planetName=${planetName}`} >
        <button className="btn ">View Details</button>
      </Link>
    </div>
  );
};
export default CardComponent;
