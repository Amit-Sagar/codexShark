import React from 'react';
import './App.css';
import Mytodo from './components';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div>
      <main>
        <Mytodo/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;