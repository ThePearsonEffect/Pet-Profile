# CODE ALONG: PET PROFILE CARDS
## React Fundamentals Mini-Project

This code-along will guide you through creating a fun "Pet Profile Cards" application to reinforce React fundamentals:

1. Setting up a new React project with Vite
2. Creating multiple components (Header, PetCard, PetList, Footer)
3. Passing data between components 
4. Adding styling to components
5. Understanding JSX differences from HTML

## PART 1: SETTING UP THE PROJECT

1. Open your terminal/command prompt
2. Run the following commands to create and start a new React project:

```bash
npm create vite@latest pet-profile-cards -- --template react
cd pet-profile-cards
npm install
npm run dev
```

3. Open the URL shown in your terminal (usually http://localhost:5173)
4. You should see the default Vite React starter page

## PART 2: CLEANING UP THE STARTER PROJECT

Let's remove the starter content and create our own structure:

1. In the project directory, create the following folders:
   - `src/components` (for UI components)
   - `src/assets` (for images)
   - `src/styles` (for CSS files)

2. Delete the following default files:
   - `src/assets/react.svg`

3. Replace the content of `App.jsx` with:

```jsx
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>Pet Profile Cards</h1>
      <p>Welcome to our pet showcase!</p>
    </div>
  )
}

export default App
```

4. Replace the content of `App.css` with:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f2f5;
  color: #333;
  line-height: 1.5;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

a {
  color: #0077cc;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```

## PART 3: CREATING THE HEADER COMPONENT

1. Create a new file: `src/components/Header.jsx`
2. Add the following code:

```jsx
import React from 'react'
import '../styles/Header.css'

function Header({ title }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="site-title">{title}</h1>
        <nav className="main-nav">
          <a href="#" className="nav-item">Home</a>
          <a href="#" className="nav-item">Gallery</a>
          <a href="#" className="nav-item">About</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
```

3. Create a new file: `src/styles/Header.css`
4. Add the following styles:

```css
.header {
  background-color: #4b6bfb;
  color: white;
  padding: 16px 0;
  border-radius: 8px;
  margin-bottom: 20px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.site-title {
  font-size: 1.8rem;
  margin: 0;
}

.main-nav {
  display: flex;
  gap: 20px;
}

.nav-item {
  color: white;
  font-weight: 500;
  transition: opacity 0.2s;
}

.nav-item:hover {
  opacity: 0.8;
  text-decoration: none;
}
```

5. Update `App.jsx` to include the Header:

```jsx
import './App.css'
import Header from './components/Header'

function App() {
  return (
    <div className="app">
      <Header title="Pet Profile Cards" />
      <main className="content">
        <p>Welcome to our pet showcase!</p>
      </main>
    </div>
  )
}

export default App
```

## PART 4: CREATING THE PET CARD COMPONENT

1. Create a new file: `src/components/PetCard.jsx`
2. Add the following code:

```jsx
import React from 'react'
import '../styles/PetCard.css'

function PetCard({ name, species, age, hobbies, imageUrl }) {
  return (
    <div className="pet-card">
      <div className="pet-image-container">
        <img src={imageUrl} alt={`${name} the ${species}`} className="pet-image" />
      </div>
      <div className="pet-info">
        <h2 className="pet-name">{name}</h2>
        <p className="pet-species">{species}</p>
        <p className="pet-age">{age} years old</p>
        <div className="pet-hobbies">
          <h3>Favorite Activities:</h3>
          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PetCard
```

3. Create a new file: `src/styles/PetCard.css`
4. Add the following styles:

```css
.pet-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.pet-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.pet-image-container {
  height: 200px;
  overflow: hidden;
}

.pet-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.pet-card:hover .pet-image {
  transform: scale(1.05);
}

.pet-info {
  padding: 16px;
}

.pet-name {
  font-size: 1.4rem;
  margin: 0 0 8px 0;
  color: #333;
}

.pet-species {
  color: #4b6bfb;
  font-weight: 500;
  margin: 0 0 8px 0;
}

.pet-age {
  color: #666;
  margin: 0 0 12px 0;
}

.pet-hobbies h3 {
  font-size: 1rem;
  margin: 0 0 8px 0;
  color: #555;
}

.pet-hobbies ul {
  list-style-type: none;
  padding: 0;
}

.pet-hobbies li {
  background-color: #f0f2f5;
  border-radius: 16px;
  padding: 4px 12px;
  margin: 4px 4px 4px 0;
  display: inline-block;
  font-size: 0.85rem;
}
```

## PART 5: CREATING THE PET LIST COMPONENT

1. Create a new file: `src/components/PetList.jsx`
2. Add the following code:

```jsx
import React from 'react'
import PetCard from './PetCard'
import '../styles/PetList.css'

function PetList({ pets }) {
  return (
    <div className="pet-list">
      {pets.map((pet) => (
        <PetCard
          key={pet.id}
          name={pet.name}
          species={pet.species}
          age={pet.age}
          hobbies={pet.hobbies}
          imageUrl={pet.imageUrl}
        />
      ))}
    </div>
  )
}

export default PetList
```

3. Create a new file: `src/styles/PetList.css`
4. Add the following styles:

```css
.pet-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin: 20px 0;
}

@media (max-width: 768px) {
  .pet-list {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
```

## PART 6: CREATING THE FOOTER COMPONENT

1. Create a new file: `src/components/Footer.jsx`
2. Add the following code:

```jsx
import React from 'react'
import '../styles/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {currentYear} Pet Profile Cards - Created with React & Vite</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
```

3. Create a new file: `src/styles/Footer.css`
4. Add the following styles:

```css
.footer {
  margin-top: auto;
  padding: 20px 0;
  border-top: 1px solid #ddd;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.footer-links {
  display: flex;
  gap: 20px;
}

@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    gap: 12px;
  }
  
  .footer-links {
    gap: 12px;
  }
}
```

## PART 7: ADDING SAMPLE PET DATA AND UPDATING THE APP

1. For the pet images, you can use placeholder URLs or download some pet images to your `src/assets` folder.
   - For placeholders, you can use: `https://placedog.net/300/300` or `https://placekitten.com/300/300`

2. Update your `App.jsx` to use all the components:

```jsx
import './App.css'
import Header from './components/Header'
import PetList from './components/PetList'
import Footer from './components/Footer'

function App() {
  // Sample pet data - in a real app, this might come from an API
  const pets = [
    {
      id: 1,
      name: "Fluffy",
      species: "Cat",
      age: 3,
      hobbies: ["Napping", "Chasing string", "Knocking things over"],
      imageUrl: "https://placekitten.com/300/300"
    },
    {
      id: 2,
      name: "Buddy",
      species: "Dog",
      age: 5,
      hobbies: ["Fetching balls", "Swimming", "Going for walks"],
      imageUrl: "https://placedog.net/300/300"
    },
    {
      id: 3,
      name: "Hopper",
      species: "Rabbit",
      age: 2,
      hobbies: ["Jumping", "Eating carrots", "Digging holes"],
      imageUrl: "https://place-puppy.com/300x300"
    },
    {
      id: 4,
      name: "Spike",
      species: "Hedgehog",
      age: 1,
      hobbies: ["Rolling into a ball", "Foraging", "Snuggling"],
      imageUrl: "https://placekitten.com/301/301"
    },
    {
      id: 5,
      name: "Nemo",
      species: "Fish",
      age: 2,
      hobbies: ["Swimming", "Blowing bubbles", "Hide and seek"],
      imageUrl: "https://placedog.net/301/301"
    },
    {
      id: 6,
      name: "Polly",
      species: "Parrot",
      age: 10,
      hobbies: ["Talking", "Flying", "Cracking seeds"],
      imageUrl: "https://place-puppy.com/301x301"
    }
  ];

  return (
    <div className="app">
      <Header title="Pet Profile Cards" />
      <main className="content">
        <div className="intro">
          <h2>Welcome to our Pet Showcase!</h2>
          <p>Meet some of our amazing animal friends and learn about their favorite activities.</p>
        </div>
        <PetList pets={pets} />
      </main>
      <Footer />
    </div>
  )
}

export default App
```

3. Add some additional styles to `App.css`:

```css
/* Add these styles to your existing App.css */

.content {
  flex: 1;
}

.intro {
  text-align: center;
  margin-bottom: 30px;
}

.intro h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #333;
}

.intro p {
  color: #666;
  max-width: 800px;
  margin: 0 auto;
}
```

## PART 8: KEY REACT CONCEPTS DEMONSTRATED

### 1. Component-Based Architecture
The application is broken down into reusable components:
- `App`: Main container
- `Header`: Site header with navigation
- `PetList`: Container for pet cards
- `PetCard`: Individual pet profile displays
- `Footer`: Site footer

### 2. Props
Data is passed from parent to child components:
- `title` prop from App to Header
- `pets` array from App to PetList
- Individual pet data from PetList to each PetCard

### 3. JSX and JavaScript Integration
- JSX allows HTML-like syntax in JavaScript
- JavaScript expressions inside JSX using curly braces `{}`
- Map function to render lists of components
- Conditional rendering capabilities

### 4. Component Styling
Different approaches to styling:
- Component-specific CSS files
- Class-based styling (using `className` instead of `class`)
- Inline styles (if needed)

## PART 9: EXTENSION CHALLENGES

Now that you've built the basic application, try these challenges to enhance it:

1. **Add a "Favorite" button to each pet card**
   - Add a state to track which pets are favorited
   - Create a button that toggles the favorite status
   - Style favorited cards differently

2. **Create a filter system**
   - Add buttons to filter pets by species (cats, dogs, etc.)
   - Implement a search bar to filter by name

3. **Add a form to add new pets**
   - Create a form component with inputs for name, species, age, etc.
   - Use React state to manage the form inputs
   - Add functionality to add the new pet to the list

4. **Create a detailed view**
   - Add a "View Details" button to each card
   - When clicked, show a modal or new page with more details
   - Include additional information not shown on the card

## CONCLUSION

Congratulations! You've built a React application from scratch that demonstrates:
- Setting up a project with Vite
- Creating and composing React components
- Passing data through props
- Using JSX to create UI elements
- Styling your components

This Pet Profile Cards application helps reinforce the fundamental concepts of React while creating something fun and visually engaging. Remember that React is all about creating reusable components and efficiently updating the UI based on data changes.