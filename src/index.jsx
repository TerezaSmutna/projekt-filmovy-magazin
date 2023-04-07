import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style.css';
import Articles from './components/Articles';
import Home from './components/Home';
import Movies from './components/Movies';
import Reviews from './components/Reviews';
import Menu from './components/Menu';
import Movie from './components/Movie';

const App = () => {
  return (
    <Menu />
  );
};

const ErrorPage = () => {
  return (
    <main>
      <h2>Error 404</h2>
      <p>Pravděpodobně máte špatnou adresu.</p>
    </main>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "articles",
        element: <Articles />,
      },
      {
        path: "movies",
        element: <Movies />,
        children: [
          {
            path: ":movieId",
            element: <Movie />,
          },
        ]
      },
    ],
  },
]);




createRoot(
  document.querySelector('#app'),
).render(
  <RouterProvider router={router} />
);
