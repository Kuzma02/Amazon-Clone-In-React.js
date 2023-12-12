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
        <SliderContainer sliderType="SimpleSlider" title="Most wished for in Movies & TV" data={data[0]} />
        <SliderContainer sliderType="SimpleSlider" title="Top Sellers in Baby Products for you" data={data[1]} />
        <SliderContainer sliderType="ProductSlider" title="Exciting deals" data={data[2]} />
      </main>
    </>
  );
}

export default App;
