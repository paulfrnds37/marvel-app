import NbCharacters from './component/compteur.js'
import ListeCharacters from './component/liste.js'
import Title from './component/titre.js';

const characters = require('../characters.json')

function Charac() {
return (
 <>
 <br></br>
 <Title>Marvels characters</Title>
 <ListeCharacters characters={characters}/>
 <NbCharacters characters={characters}/>
 </>
);
}

export default Charac;