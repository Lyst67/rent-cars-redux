import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Cars = lazy(() => import('pages/Cars/Cars'));
const Favorite = lazy(() => import('pages/Favorite/Favorite'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<Cars />} />
          <Route path="favorites" element={<Favorite />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
