import {
  Banner,
  BoxesContainer,
  DesktopHeader,
  TabletHeader,
} from "./components";

import SliderContainer from "./components/SliderContainer";

function App() {
  return (
    <>
      <DesktopHeader />
      <TabletHeader />
      <main className="container-main-content">
        <Banner />
        <BoxesContainer />
        <SliderContainer />
      </main>
    </>
  );
}

export default App;
