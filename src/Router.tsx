import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeComponent } from './pages/home';
import { TwichComponent } from './pages/twich';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/twich" element={<TwichComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
