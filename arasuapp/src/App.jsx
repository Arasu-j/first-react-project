import React from 'react';
import Header from './components/header';
import Footer from './components/Footer';
import LoginForm from './components/loginform';

function App() {
  return (
    <div>
      <Header />
      <main>
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
