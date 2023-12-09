import { Banner, BoxesContainer, DesktopHeader, TabletHeader } from "./components";

function App() {
  return (
    <>
      <DesktopHeader />
      <TabletHeader />
      <main className="container-main-content">

        <Banner />
        <BoxesContainer />

      </main>
    </>
  );
}

export default App;
