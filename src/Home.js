import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <header>
                <h1>Welcome to LinguaSwap</h1>
                <p>Connect, Communicate, Cultivate Fluency.</p>
            </header>

            <section className="main">
                <h2>About Us</h2>
                <p>LinguaSwap is a vibrant online community dedicated to helping language enthusiasts around the world connect and exchange their linguistic prowess. Whether you're looking to master a new language or refine your existing skills, LinguaSwap provides a platform where users can seamlessly find language exchange partners. Our intuitive interface allows for easy scheduling of virtual meetups, while robust communication tools ensure that you can converse with confidence. Join LinguaSwap and embark on a journey to unlock a world of new cultures and connections through language exchange.</p>
            </section>

            <section className="cta">
                <h2>Get Started</h2>
                <Link to="/chat">Take me to the app!</Link>
            </section>

            <footer>
                <p>&copy; 2023 LinguaSwap</p>
            </footer>
        </div>
    );
}

export default Home;
