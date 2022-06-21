import { AppShell } from 'ui';
import  MoviesContent from './components/MoviesContent'
import React, { Suspense } from 'react';
// @ts-ignore
const Playlist =  React.lazy(() => import("playlist/Playlist"));

function App() {
  return (
    <AppShell 
      title={"Movies"} 
      routes={[
        {
          path: "/",
          element:  () => (
              <MoviesContent/>
          ),
        },
        {
          path: "/playlist",
          element:  () => (
            <Suspense fallback={null}>
              <Playlist/>
            </Suspense>
          ),
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
