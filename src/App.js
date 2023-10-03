
import {NumberofCharacters} from './components/NumberofCharacters '
import {ListeCharacters} from './components/ListeCharacters '
import {Header} from './components/Header ';


const characters = require("./data/characters.json");

function App() {

return (
  <>

 <Header/>
 <NumberofCharacters characters={characters}/>
 <br />
 <ListeCharacters characters ={characters}/>
 </>
);
}

export default App;