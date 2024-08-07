import React from 'react';
import Card from 'react-bootstrap/Card'; 
import PropTypes from 'prop-types';
import './player.css';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  const imageStyle = {
    height: '400px',
    objectFit: 'cover',
  };

  return (
    <Card className="card-container">
      <Card.Img variant="top" src={imageUrl} alt={name} style={imageStyle} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}<br />
          <strong>Nationality:</strong> {nationality}<br />
          <strong>Jersey Number:</strong> {jerseyNumber}<br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  jerseyNumber: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Unknown Team',
  nationality: 'Unknown Nationality',
  jerseyNumber: 0,
  age: 0,
  imageUrl: 'https://via.placeholder.com/150'
};

export default Player;
