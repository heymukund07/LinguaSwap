import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './English.css';
import { firestore } from './Chat.js';
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { db, auth } from './Chat.js';
import { useAuthState } from 'react-firebase-hooks/auth';

function French(props) {
    const location = useLocation();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const USERNAME = localStorage.getItem('username');
    const [newMessages, setNewMessages] = useState([]);

    const messageReference = collection(db, "french-messages");

    useEffect(() => {
        const queryMessages = query(
            messageReference,
            orderBy('createdAt', 'asc')
        );
    
        onSnapshot(queryMessages, (snapshot) => {
            let newMessages = [];
            snapshot.forEach((doc) => {
                newMessages.push({ ...doc.data(), id: doc.id });
            })
    
            setNewMessages(newMessages);
        });
    }, [])
    

    const handleSendMessage = async (e) => {
        e.preventDefault();
        setMessages([...messages, input]);
        setInput('');

        if (input.trim() === "") return;

        const currentUser = auth.currentUser;

        if (currentUser) {
            await addDoc(messageReference, {
                text: input,
                createdAt: serverTimestamp(),
                user: currentUser.displayName,
            });
        } else {
            console.error("User is not logged in");
        }
    };

    return (
        <div>
            <header>
                <h1>LinguaSwap</h1>
                <p>Connect, Communicate, Cultivate Fluency.</p>
            </header>
            <div className="chat-page">

                <div className="chatroom">
                    <div className="messages">
                        {newMessages.map((message) => (
                            <div key={message.id} className="message">
                                <span className="user">{message.user}</span> {':     '}
                                {message.text}
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                        />
                        <button type="submit">Send</button>
                    </form>
                    <a href="https://meet.google.com/kkb-eiai-kgh" className="meet-button">
                        <button >MEET your friends now!</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default French;
