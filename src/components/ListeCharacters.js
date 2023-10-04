function ListeCharacters({characters}){
    // return(
    //     <ul>
    //  {characters.map((item, index) => (
    //  <li key={index}>{item.name}</li> 
    //  ))}
    //  </ul>
    // )
if (characters.length === 0) {
    return <p>pas de perso</p>;
}
else {
    return(
    <ul>
    {characters.map((item, index) => (
    <li key={index}>{item.name}</li> 
    ))}
    </ul>
    );
    }
}

export default ListeCharacters;