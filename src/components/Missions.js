import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center" data-testid="missions">
        <Title headline="Missões" />
        <div className="grid grid-cols-4 gap-4">
          {missions.map((ele) => (
            <MissionCard
              key={ ele.name }
              name={ ele.name }
              year={ ele.year }
              country={ ele.country }
              destination={ ele.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
