import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useHistory } from 'react-router-dom'; // Import Navigate
import Chat from './Chat.js';
import Home from './Home.js';
import Login from './Login.js';
import English from './English.js';
import { UserProvider } from './UserContext'; // Import the context
import {room} from './Chat.js';
import Spanish from './Spanish.js';
import French from './French.js';
import German from './German.js';
import Japanese from './Japanese.js';
import Korean from './Korean.js';

function App() {

  const [room, setRoom] = useState(null);
  return (
    <div>
      <UserProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/chat/English" element={<English />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat/spanish" element={<Spanish />} />
            <Route path="/chat/japanese" element={<Japanese />} />
            <Route path="/chat/french" element={<French />} />
            <Route path="/chat/german" element={<German />} />
            <Route path="/chat/korean" element={<Korean />} />

          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
