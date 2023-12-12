import {
  Banner,
  BoxesContainer,
  DesktopHeader,
  TabletHeader,
} from "./components";

import data from "../mock.json";

import SliderContainer from "./components/SliderContainer";
import Footer from "./components/Footer";

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
        <SliderContainer sliderType="SimpleSlider" title="Best Sellers in Clothing, Shoes & Jewelry" data={data[3]} />
        <SliderContainer sliderType="SimpleSlider" title="Best Sellers in Books" data={data[4]} />
      </main>
      <Footer />
    </>
  );
}

export default App;
