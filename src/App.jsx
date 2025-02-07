
import { useState } from "react";
import Video from "./assets/HeroBackVideo.mp4";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Logos from "./components/Logos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="relative min-h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-[780px] object-cover -z-10 xl:h-[900px]"
        >
          <source src={Video} type="video/mp4" />
        </video>

        <div className="relative">
          <Header />
          <Hero />
        </div>
      </div>
      <Logos />
    </>
  );
}

export default App;

