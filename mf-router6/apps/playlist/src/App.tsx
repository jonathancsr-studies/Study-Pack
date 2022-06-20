import { AppShell } from 'ui';

import { Playlist } from './components/Playlist'
import { MoviesContent } from  "movies-content";

function App() {
  return (
    <AppShell 
      title={"Playlist"} 
      colorScheme="dark"
      routes={[
        {
          path: "/",
          element: MoviesContent,
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
