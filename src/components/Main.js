import React from 'react';

const Main = () => {
    return (
        <main className="main-content">
            <section id="home">
                <h1>Welcome to MySite</h1>
                <p>This is a responsive website built with React and Tailwind CSS.</p>
            </section>
            <section id="about">
                <h2>About Us</h2>
                <p>Some information about us.</p>
            </section>
            <section id="contact">
                <h2>Contact</h2>
                <p>Contact information goes here.</p>
            </section>
        </main>
    );
};

export default Main;
