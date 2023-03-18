import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeComponent } from './pages/home';
import { TwTopGameMain } from './pages/twTopGame';
import TheLayOut from './components/theLayout/TheLayout';
import { TwStreamMain } from './pages/twStream';
import { TwDetailMain } from './pages/twDetail';
import { Pokemon } from './pages/pokemon';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TheLayOut />}>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/twitch" element={<TwTopGameMain />} />
          <Route path="/twitch/:id" element={<TwStreamMain />} />
          <Route path="/twitch/stream" element={<TwTopGameMain />} />
          <Route path="/detail" element={<TwDetailMain />} />
          <Route path="/pokemon" element={<Pokemon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
