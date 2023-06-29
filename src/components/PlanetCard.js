import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div
        className="flex-col items-center m-5 p-3 border-2 rounded-xl border-white"
        data-testid="planet-card"
      >
        <p className="font-bold text-center" data-testid="planet-name">{planetName}</p>
        <img className="" src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
}.isRequired;

export default PlanetCard;
