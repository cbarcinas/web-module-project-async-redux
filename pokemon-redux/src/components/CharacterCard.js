import React from "react";

export default function CharacterCard({ character }) {
  const { name, species, status, gender, location, image } = character;

  return (
    <div>
      <h3>{name}</h3>
      <div>
        <img src={image} alt={name} />
      </div>
      <p>Location: {location.name}</p>
      <p>Gender: {gender}</p>
      <p>Species: {species}</p>
      <p>Status: {status}</p>
    </div>
  );
}
