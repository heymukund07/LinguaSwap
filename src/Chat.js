import React, { useRef, useState } from 'react';
import './Chat.css'; // Create a Chat.css file for styling
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter as Router, Routes, Route, useHistory } from 'react-router-dom'; // Import Navigate
import { useCollectionData } from 'react-firebase-hooks/firestore';
import English from './English';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore';
import  USFlag from './img/english.png';
import frenchFlag from './img/french.png';
import germanFlag from './img/german.png';
import japaneseFlag from './img/japanese.png';
import koreanFlag from './img/korean.jpg';
import spanishFlag from './img/spanish.jpg';


firebase.initializeApp({
  apiKey: "AIzaSyB3BNd1W5V8LSHS65xYCPl2gliqS4ftaeA",
  authDomain: "linguaswap-2f074.firebaseapp.com",
  projectId: "linguaswap-2f074",
  storageBucket: "linguaswap-2f074.appspot.com",
  messagingSenderId: "248796568186",
  appId: "1:248796568186:web:202530fa38f386172479c3",
  measurementId: "G-0JCR26SP7G"
})

const auth = firebase.auth()
const firestore = firebase.firestore();


export { auth, firestore};
export const db = getFirestore();

function Chat() {
  const [user] = useAuthState(auth);


  if (!user) {
    window.location.href = '/login';
  }

  const [username, setUsername] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
    localStorage.setItem('username', newUsername);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div>
      {user ? (
        <div>
          <header>
            <a href='/'>
              <h1 >LinguaSwap</h1>
            </a>
            <p>Connect, Communicate, Cultivate Fluency.</p>
          </header>
          <div className="main">
            {/* Here */}
          </div>
          <div className="chat-container">
            <div className="welcome-message">
              <h2 className="welcome-message">Choose a language to practice your langauge skills!</h2>
              <div className="language-buttons">
                <div className="button-group-left">
                  <Link to="/chat/English">
                    <button onClick={() => handleLanguageSelect('English')} className={selectedLanguage === 'English' ? 'selected' : ''}>
                      English <img src={USFlag} />
                    </button>
                  </Link>
                  <Link to="/chat/Spanish">
                    <button onClick={() => handleLanguageSelect('Spanish')} className={selectedLanguage === 'Spanish' ? 'selected' : ''}>
                      Spanish <img src={spanishFlag} alt="Spanish Flag" />
                    </button>
                  </Link>
                  <Link to="/chat/french">
                    <button onClick={() => handleLanguageSelect('French')} className={selectedLanguage === 'French' ? 'selected' : ''}>
                      French <img src={frenchFlag} alt="French Flag" />
                    </button>
                  </Link>
                </div>
                <div className="button-group-right">
                  <Link to="/chat/german">
                    <button onClick={() => handleLanguageSelect('German')} className={selectedLanguage === 'German' ? 'selected' : ''}>
                      German <img src={germanFlag} alt="German Flag" />
                    </button>
                  </Link>
                  <Link to="/chat/japanese">
                    <button onClick={() => handleLanguageSelect('Japanese')} className={selectedLanguage === 'Japanese' ? 'selected' : ''}>
                      Japanese <img src={japaneseFlag} alt="Japanese Flag" />
                    </button>
                  </Link>
                  <Link to="/chat/korean">
                    <button onClick={() => handleLanguageSelect('Korean')} className={selectedLanguage === 'Korean' ? 'selected' : ''}>
                      Korean <img src={koreanFlag} alt="Korean Flag" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Chat;

