import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
  <>
    <Header/>  
    <main className='py-3'>
      <Container>

        <h1>Welcome to Gatka E-shop </h1>
        <h2>Sakkikliyan haalll...Sajaji..Inthikhaf..Aashif!!! </h2>

      </Container>
      
    </main>
    <Footer/>
  </>
  ); 
}

export default App;
