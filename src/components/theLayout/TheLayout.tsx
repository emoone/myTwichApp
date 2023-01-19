import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const TheLayOut = () => {
  return (
    <>
      <Header />
      <main>
        {/* children */}
        <Outlet />
        {/* children */}
      </main>
      <Footer />
    </>
  );
};
export default TheLayOut;
