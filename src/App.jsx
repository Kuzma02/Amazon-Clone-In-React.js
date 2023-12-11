import {
  Banner,
  BoxesContainer,
  DesktopHeader,
  TabletHeader,
} from "./components";

import data from "../mock.json";

import SliderContainer from "./components/SliderContainer";

function App() {
  return (
    <>
      <DesktopHeader />
      <TabletHeader />
      <main className="container-main-content">
        <Banner />
        <BoxesContainer />
        <SliderContainer title="Most wished for in Movies & TV" data={data[0]} />
        <SliderContainer title="Top Sellers in Baby Products for you" data={data[1]} />
      </main>
    </>
  );
}

export default App;
