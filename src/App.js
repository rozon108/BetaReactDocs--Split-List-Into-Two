import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function List() {
  const listItems = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  const chemists = people.filter((x) => x.profession === "chemist");
  const others = people.filter((x) => x.profession !== "chemist");

  const chemistsList = chemists.map((thisChemist) => (
    <li key={thisChemist.id}>
      <img src={getImageUrl(thisChemist)} alt={thisChemist.name} />
      <p>
        <b>{thisChemist.name}:</b>
        {" " + thisChemist.profession + " "}
        known for {thisChemist.accomplishment}
      </p>
    </li>
  ));
  const otherList = others.map((xyz) => (
    <li key={xyz.id}>
      <img src={getImageUrl(xyz)} alt={xyz.name} />
      <p>
        <b>{xyz.name}:</b>
        {" " + xyz.profession + " "}
        known for {xyz.accomplishment}
      </p>
    </li>
  ));

  return (
    <article>
      <h1>Scientists</h1>
      <h3>Chemist</h3>
      <ul>{chemistsList}</ul>
      <h3>Others</h3>
      <ul>{otherList}</ul>

      <h1 style={{ marginTop: "10rem", backgroundColor: "lightblue" }}>
        FullList
      </h1>
      <ul>{listItems}</ul>
    </article>
  );
}
