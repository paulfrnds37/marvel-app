import { Link } from "react-router-dom";

export function CharactersList({ characters = [] }) {
    return (
        <ul id="characters">
            {characters.map((character) => {
                const date = new Date(character.modified);
                const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

                return (
                    <li key={character.id}>
                        <Link to={`/characters/${character.id}`}>
                            {character.name} - {formattedDate}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}