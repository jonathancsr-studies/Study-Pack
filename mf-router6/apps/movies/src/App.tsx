import { AppShell } from 'ui';

import MoviesContent from './components/MoviesContent'

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
          element: () => <div>Playlisttsss!!</div>
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
