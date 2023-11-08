import characters from "../data/characters.json";

function ListeCharacters() {
  if (characters.length === 0) {
    return <p>pas de perso</p>;
  } else {
    return (
      <ul>
        {characters.map((item, index) => (
          <li key={index}>
            {item.name} 
          </li>
        ))} 
      </ul>
    );
  }
}

export default ListeCharacters;
