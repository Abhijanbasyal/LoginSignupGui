import React from 'react';
import { Outlet  } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';




function App() {




  return (
    <>

        <Toaster />
        <Header />
        <main className='overflow-hidden'>

          <Outlet />
        </main>

        <Footer />


    </>

  );
}

export default App;