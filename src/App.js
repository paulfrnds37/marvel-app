
import logo from './logo.svg';
import './App.css';
import data from "./characters.json"
const characters = require("./characters.json");

function Title({ color = 'red', children, hidden = false, ...props }) {
 if (hidden) {
 return null;
 }

 return (<h1 style={{color: color}} {...props}>{children}</h1>);
}

function ListeCharacters(){
 return(<ul>
 {data.map((item, index) => (
 <li key={index}>{item.name}</li> 
 ))}
 </ul>);
 }

function App() {
return (
 <>
 {/* 
 La propriété id et data-demo sont passées au composant Title grâce au spread operator.
 La propriété color est définie dans le composant Title
 */}
 <Title color="black" id="my-id" data-demo="demo">Liste de personnage</Title>
 <ListeCharacters></ListeCharacters>
 </>
);
}

export default App;