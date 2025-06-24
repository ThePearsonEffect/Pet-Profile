import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import PetList from './components/PetList'
import Footer from './components/Footer'

function App() {
  const [pets, setPets] = useState([
    {
      id: 1,
      name: "Fluffy",
      species: "Cat",
      age: 3,
      hobbies: ["Napping", "Chasing string", "Knocking things over"],
      imageUrl: ""
    },
{
  id: 2,
  name: "Buddy",
  species: "Dog",
  age: 5,
  hobbies: ["Fetching balls", "Swimming", "Going for walks"],
  imageUrl: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=300&q=80"
},
{
  id: 3,
  name: "Hopper",
  species: "Rabbit",
  age: 2,
  hobbies: ["Jumping", "Eating carrots", "Digging holes"],
  imageUrl: "https://images.unsplash.com/photo-1581804928342-4e3405e39c91?auto=format&fit=crop&w=300&q=80"
}

  ]);

  const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

  useEffect(() => {
    const cachedCat = localStorage.getItem('catImage');
    const cachedRabbit = localStorage.getItem('rabbitImage');

    if (cachedCat) {
      setPets(prev =>
        prev.map(p =>
          p.species === "Cat" ? { ...p, imageUrl: cachedCat } : p
        )
      )
    } else {
      fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(data => {
          const url = data[0].url;
          localStorage.setItem('catImage', url);
          setPets(prev =>
            prev.map(p =>
              p.species === "Cat" ? { ...p, imageUrl: url } : p
            )
          )
        });
    }

    if (cachedRabbit) {
      setPets(prev =>
        prev.map(p =>
          p.species === "Rabbit" ? { ...p, imageUrl: cachedRabbit } : p
        )
      )
    } else {
      fetch(`https://api.unsplash.com/search/photos?query=rabbit&client_id=${UNSPLASH_KEY}`)
        .then(res => res.json())
        .then(data => {
          const firstValid = data.results.find(result => result?.urls?.small);
          if (firstValid) {
            const rabbitUrl = firstValid.urls.small;
            localStorage.setItem('rabbitImage', rabbitUrl);
            setPets(prev =>
              prev.map(p =>
                p.species === "Rabbit" ? { ...p, imageUrl: rabbitUrl } : p
              )
            )
          }
        });
    }
  }, [UNSPLASH_KEY]);

  return (
    <div className="app">
      <Header />
      <main className="content">
        <div className="intro">
          <h2>Welcome to our Pet Showcase!</h2>
          <p>These adorable friends have a story to share. Meet them below!</p>
        </div>
        <PetList pets={pets.map(p => ({
          ...p,
          imageUrl: p.imageUrl || "https://via.placeholder.com/300x300?text=Loading..."
        }))} />
      </main>
      <Footer />
    </div>
  )
}

export default App
