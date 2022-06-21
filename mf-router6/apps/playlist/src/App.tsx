import React, { Suspense } from 'react';
import { AppShell } from 'ui';
import { Playlist } from './components/Playlist'
// @ts-ignore
const MoviesContent =  React.lazy(() => import("movies/Movies"));

function App() {
  return (
    <AppShell 
      title={"Playlist"} 
      colorScheme="dark"
      routes={[
        {
          path: "/",
          element: () => (
            <Suspense fallback={null}>
              <MoviesContent/>
            </Suspense>
          ),
        },
        {
          path: "/playlist",
          element: Playlist,
        }
      ]}
      navLinks={[
        {
          label: "home",
          path: "/"
        },
        {
          label: "Playlist",
          path: "/playlist"
        }
      ]}
    />
  );
}

export default App;
