import BrandsSlider from "./components/sections/BrandsSlider";
import { CourseTeaser } from "./components/sections/CourseTeaser";
import { FAQ } from "./components/sections/FAQ";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import ToolsSlider from "./components/sections/ToolsSlider";


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <BrandsSlider />
      <CourseTeaser />
      <ToolsSlider />
      <FAQ />
    </>
  );
}