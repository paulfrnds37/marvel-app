
import NumberofCharacters from './components/NumberofCharacters'
import ListeCharacters from './components/ListeCharacters'
import Header from './components/Header'
import Details from './components/Details-test';



const characters = require("./characters.json")

function App() {
return (
 <>
 <Header color="black" id="my-id" data-demo="demo">Liste de personnage</Header>
 <ListeCharacters characters={characters} />
 <NumberofCharacters characters={characters}/>
 <Details character={characters[0]}/> 
</>
);
}

export default App;