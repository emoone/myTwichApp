import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeComponent } from './pages/home';
import { TwichComponent } from './pages/twich';
import TheLayOut from './components/theLayout/TheLayout';
import { TwGamesComponent } from './pages/twGamesPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TheLayOut />}>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/twitch" element={<TwichComponent />} />
          <Route path="/twitch/:id" element={<TwGamesComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
