import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  // Here we declare a state boolean variable "loggedIn" and a function to update it.
  const [loggedIn, setLoggedIn] = useState(false);

  // We return the Welcome component and pass loggedIn and setLoggedIn as props.
  return <Welcome loggedIn={loggedIn} setLoggedIn={setLoggedIn} />;
}

export default App;



// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      {/* //card = menu item??  */}
      <Card /> 
      <Card />
      <Card />
    </div>
  );
}

export default App;