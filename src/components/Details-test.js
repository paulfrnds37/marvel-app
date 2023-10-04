
function Details({character}) {
    const imageUrl = `${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`;
    return (

        <div>
            <p>{character.name}</p>
            <img src={imageUrl} alt={character.name} />
        </div>


    )
}

export default Details;
