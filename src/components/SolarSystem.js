import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div
        className="flex flex-col items-center justify-center"
        data-testid="solar-system"
      >
        <Title headline="Planetas" />
        <div className="grid grid-cols-2 gap-4">
          {Planets.map((planeta) => (
            <PlanetCard
              key={ planeta.name }
              planetName={ planeta.name }
              planetImage={ planeta.image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
