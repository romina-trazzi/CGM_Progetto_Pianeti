import { useState } from 'react';
import { planetsData } from '../assets/planets.js';
import './App.css';
import './AppMq.css';
import PlanetData from '../components/PlanetData/PlanetData.jsx';
import PlanetList from '../components/PlanetList/PlanetList.jsx';
import PlanetButton from '../components/PlanetButton/PlanetButton.jsx';

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState({});

  // Handler Function
  function handleClick(planetName) {
    const findPlanet = planetsData.find((planet) => planet.name === planetName);
    if (findPlanet) {
      setSelectedPlanet(findPlanet);
    }
  }

  function handleReset() {
    if (selectedPlanet !== undefined) {
      setSelectedPlanet({});
    }
  }

  return (
    <>
      <header>
        <h1>Data planet list</h1>
      </header>

      <main>
        <div className='planet_list'>
          <menu>
            <PlanetList onSelect={handleClick} />
            <PlanetButton onReset={handleReset} />
          </menu>
        </div>
        <div className='planet_data'>
          <PlanetData selectedPlanet={selectedPlanet} />
        </div>
      </main>

      <footer>
        <span> Made by ~ Romina Trazzi 2023 ~ </span>
      </footer>
    </>
  );
}

export default App;

// Componente + Props che gestisce la funzione Handler + funzione Handler(parametro)

