// src/App.js
import React from 'react';
import PlayersList from './PlayersList';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  return (
    <div className="App">
      <header className="App-header" style={headerStyle}>
        <h1>FIFA Player Cards</h1>
      </header>
      <main style={mainStyle}>
        <PlayersList />
      </main>
    </div>
  );
}

// Inline styles
const headerStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
};

const mainStyle = {
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
};

export default App;
