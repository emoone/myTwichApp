import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeComponent } from './pages/home';
import { TwichComponent } from './pages/twich';
import TheLayOut from './components/theLayout/TheLayout';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TheLayOut />}>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/twich" element={<TwichComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
