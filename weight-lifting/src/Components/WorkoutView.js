import React from 'react';
import styled from 'styled-components';

// Have to pull in Personal Record component
// Have to map over 'Exercises'

const WorkoutView = () => {
  return (
    <Wrapper>
      {/* Placeholder for Navbar */}
      <h3>This is our Navbar</h3>
      {/* Bring in Personal Record Component */}
      <h3>This is our Personal Record Component</h3>
      <Header>Worked out Today</Header>
      {/* Map over workouts created */}
      <h1>Placeholder Card</h1>
      <h1>Placeholder Card</h1>
      <h1>Placeholder Card</h1>

      {/* Link to the next page */}
      <Button>Start Exercise → </Button>
    </Wrapper>
  );
};

export default WorkoutView;

// All of our styled components
const Button = styled.button`
  position: fixed;
  opacity: 0.8;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: yellow;
  text-align: center;
  padding: 1.2rem;
  font-size: 1.5rem;
`;

const Wrapper = styled.div`
  background: darkgrey;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  color: white;
`;

const Header = styled.h3`
  color: white;
  text-align: left;
  padding: 1.2rem;
`;