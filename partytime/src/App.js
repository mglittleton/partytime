import React from 'react';

import Navbar from './components/Navbar'
import Menu from './components/Menu'
import HostedParties from './components/HostedParties'
import InvitedParties from './components/InvitedParties'

function App() {
  return (
    <div style={{width:"100%"}}>
      <Navbar />
      <Menu />
      <HostedParties />
      <InvitedParties />      
    </div>
  );
}

export default App;
