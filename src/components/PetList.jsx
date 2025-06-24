import React from 'react'
import PetCard from './PetCard'
import '../styles/PetList.css'

function PetList({ pets }) {
  return (
    <div className="pet-list">
      {pets.map(pet => (
        <PetCard key={pet.id} {...pet} />
      ))}
    </div>
  )
}



export default PetList
