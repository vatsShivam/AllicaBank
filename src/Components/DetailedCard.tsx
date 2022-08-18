import { Link } from "react-router-dom";
interface Film {
  title: string;
}

interface Props {
  name?: string;
  gender?: string;
  planetName?: string;
  url?: string;
  filmArr?: Film[];
  hair_color?: string;
  eye_color?: string;
}
const CardComponent = ({ name, gender, filmArr, hair_color, eye_color, planetName }: Props) => {
  return (

    <div className="card-container">
      <div className="card-details">
        <div className="card__title" data-testid="people-lists">Name : {name}</div>
        <p className="card__text" >Gender : {gender}</p>
        <p className="card__text" >HairColor : {hair_color}</p>
        <p className="card__text" >EyeColor : {eye_color}</p>
        <p className="card__text" >Planet Name: {planetName}</p>
        {filmArr?.map((ele, id) => {
          return <p className="card__text" key={id}>Film : {ele.title}</p>
        })}
        <Link to="/" >
          <button className="btn ">Go Back</button>
        </Link>
      </div>
    </div>
  );
};
export default CardComponent;
