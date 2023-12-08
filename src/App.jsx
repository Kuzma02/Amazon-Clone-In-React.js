import { Banner, DesktopHeader, TabletHeader } from "./components";

function App() {
  return (
    <>
      <DesktopHeader />
      <TabletHeader />
      <main className="container-main-content">
        <Banner />
      </main>
    </>
  );
}

export default App;
