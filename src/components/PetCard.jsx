import React from 'react'
import '../styles/PetCard.css'

function PetCard({ name, species, age, hobbies, imageUrl }) {
  return (
    <div className="pet-card">
      <img
        src={imageUrl || "https://via.placeholder.com/300x300?text=Loading..."}
        alt={`A cute ${species.toLowerCase()} named ${name}`}
        className="pet-image"
        referrerPolicy="no-referrer"
      />
      <h2>{name}</h2>
      <p>{species}</p>
      <p>{age} years old</p>
      <h3>Favorite Activities:</h3>
      <ul>
        {hobbies.map((hobby, i) => (
          <li key={i}>{hobby}</li>
        ))}
      </ul>
    </div>
  )
}

export default PetCard
