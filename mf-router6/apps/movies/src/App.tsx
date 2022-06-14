import { AppShell } from 'ui';

function App() {
  return (
    <AppShell 
      title={"Movies"} 
      routes={[
        {
          path: "/",
          element: () => <div>Home</div>
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
