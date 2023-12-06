import React from 'react';
import { useState, useEffect } from 'react';
import { getCharacters } from '../api/character-api';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';




const CompareCharactersPage = () => {
    // change the title of the page
    document.title = "Compare | Marvel App";

    // to be replaced with the real data
    const [characters, setCharacters] = useState([]);

    // transform the characters to array of label/value objects
    const options = characters.map((character, index) => ({
        value: index,
        label: character.name,
        capaci: character.capacities,
    }));

    // set the default options to the first two characters
    const [option1, setOption1] = React.useState(options[0]);
    const [option2, setOption2] = React.useState(options[1]);

    const centerStyle = {
        textAlign: 'center',
        width: 500,
    };

    useEffect(() => {
        const characters = getCharacters();
        setCharacters(characters);
        setOption1(characters[0]);
        setOption2(characters[1]);
    }, []);



    return (
        <>
            <h2>Compare characters</h2>

            <p style={centerStyle}>
            <select
                value={option1?.id}
                onChange={(event) => setOption1(characters.find(character => character.id === event.target.value))}
>
                    {characters.map((character) => (
                        <option key={character.id} value={character.id}>
                            {character.name}
                        </option>
                    ))}
                </select>&nbsp; {/* Fix the ambiguous spacing */}
                with&nbsp;
                <select
                    value={option2?.id}
                    onChange={(event) => setOption2(characters.find(character => character.id === event.target.value))}
>
                    {characters.map((character) => (
                        <option key={character.id} value={character.id}>
                            {character.name}
                        </option>
                    ))}
                </select>
            </p>
            <div style={centerStyle}>
                <img 
                    src={`${option1?.thumbnail.path}.${option1?.thumbnail.extension}`} 
                    alt={option1?.name} 
                    style={{ width: '200px', height: '200px' }}
                />
                <img 
                    src={`${option2?.thumbnail.path}.${option2?.thumbnail.extension}`} 
                    alt={option2?.name} 
                    style={{ width: '200px', height: '200px' }}
                />
            </div>

            <p style={centerStyle}>
            {option1?.name} vs {option2?.name}
            </p>
            <div style={{flex: '50%'}}>
            <h3>Using Recharts</h3>
            <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={options}>
                <PolarGrid />
                <PolarAngleAxis dataKey={option1?.capaci} />
                <PolarRadiusAxis />
                <Radar name={option1?.label} dataKey={option1?.label}  stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name={option2?.label} dataKey={option2?.label}  stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            </RadarChart>
            </div>


        </>
    );
 
};

export default CompareCharactersPage;