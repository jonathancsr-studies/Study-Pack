import { AppShell } from 'ui';

import { Playlist } from './components/Playlist'

function App() {
  return (
    <AppShell 
      title={"Playlist"} 
      colorScheme="dark"
      routes={[
        {
          path: "/",
          element:  () => <div>Should be the movies route!!</div>,
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
