import React from 'react';
import Header from './components/Header';
import Highlight from './components/Highlight';
import About from './components/About'
import Hero from './components/Hero';
import Services from './components/Services';
import ServicesB from './components/ServicesB';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return ( <
        div className = "App" >
            <Header />
            <Highlight></Highlight>
            <About />
            <Hero />
            <Services />
            <ServicesB />
            <Partners />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;