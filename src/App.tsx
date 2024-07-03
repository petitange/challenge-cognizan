import './App.css';
import { useState, useEffect } from 'react'

interface Character {
  id: number;
  name?: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image?: string;
  episode: string[];
  url: string;
  created: string;
}

interface Origin {
  name: string;
  url: string;
}

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);

  const fetchRandomCharacter = async () => {
    const randomNum = Math.floor(Math.random() * 826) + 1;
    const response = await fetch(`https://rickandmortyapi.com/api/character/${randomNum}`);
    const data = await response.json();
    setCharacters((prevCharacters:any) => [...prevCharacters, data]);
  };

  useEffect(() => {
    fetchRandomCharacter(); 
  }, []);

  return (
    <div>
      <button className="button-primary" onClick={fetchRandomCharacter}>Add random character</button>
      <div className="card-container">
        {characters.map((character:Character, index:number) => (
          <div key={index} className="card">
            <img 
            src={character.image} 
            alt={character.name} 
            className="image-container"
            />
            <h2>{character.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
