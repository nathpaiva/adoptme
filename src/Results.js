import React from 'react';
import Pet from './Pet';

const Results = ({ pets }) => (
  <div className="search">
    {!pets.length ? (
      <h1>No Pets Found</h1>
    ) : (
      pets.map(pet => (
        <Pet
          animal={pet.type}
          key={pet.id}
          id={pet.id}
          name={pet.name}
          breed={pet.breeds.primary}
          media={pet.photos}
          location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
        />
      ))
    )}
  </div>
);

export default Results;