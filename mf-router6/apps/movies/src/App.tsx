import { AppShell } from 'ui';

import  MoviesContent from './components/MoviesContent'
import { Playlist } from 'playlist-content'

function App() {
  return (
    <AppShell 
      title={"Movies"} 
      routes={[
        {
          path: "/",
          element:  MoviesContent,
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
