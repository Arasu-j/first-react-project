import React from 'react';
import Header from './components/header';
import Footer from './components/Footer';
import LoginForm from './components/loginform';
import Sidebar from './components/sidebar';

function App() {
  return (
    <>
      <Header />
      <div className="app-layout">
        <Sidebar /> 
        <main className="main-content">
          <LoginForm />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
