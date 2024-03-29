import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image } = pokemon;

    return (
      <div className="pokemon">
        <div>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={ image } alt={ `${name} sprite` } />
      </div>
    )
  }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            measurementUnit: PropTypes.string,
            value: PropTypes.number,
        }),
        image: PropTypes.string,
    }).isRequired,
};