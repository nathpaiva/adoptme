import React, { useState, useEffect, useContext } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import Results from './Results';
import useDropdown from './useDropdown'
import ThemeContext from './ThemeContext';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });
    console.log("requestPets -> animals", animals)

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed('');

    pet.breeds(animal).then(({breeds}) => {
      const breedsStrings = breeds.map(({name}) => name);
      setBreeds(breedsStrings);
    }, console.error);

  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form onSubmit={event => {
        event.preventDefault();
        requestPets();
      }}>
        <label htmlFor="location">
          Location
          <input type="text" id="location" value={location} placeholder="location" onChange={event => setLocation(event.target.value)} />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          Theme
          <select
            id="theme"
            value={theme}
            onChange={event => setTheme(event.target.value)}
            onBlur={event => setTheme(event.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">darkblue</option>
            <option value="mediumorchid">mediumorchid</option>
            <option value="green">green</option>
            <option value="chartreuse">chartreuse</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }} type="submit">Submit</button>
      </form>

      <Results pets={pets} />
    </div>
  )
};

export default SearchParams;
