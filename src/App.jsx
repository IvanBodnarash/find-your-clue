import { useEffect, useState } from "react";
import "./App.css";
import MapComponent from "./components/MapComponent";
import Hero from "./components/Hero";
import InputsComponent from "./components/InputsComponent";
import HintComponent from "./components/HintComponent";
import confetti from "canvas-confetti";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";

function App() {
  const [displayedHint, setDisplayedHint] = useState(false);
  const [mapDisplay, setMapDisplay] = useState(false);
  const [error, setError] = useState(false);

  const coordinates = [48.2647, 25.9992];

  useEffect(() => {
    confetti({
      particleCount: 250,
      spread: 100,
      origin: { y: 0.8 },
    });
  }, []);

  return (
    <div
      className={`bg-cyan-950 text-amber-100 ${
        displayedHint || mapDisplay ? "h-full" : "h-screen"
      }`}
    >
      <Hero onToggleHint={setDisplayedHint} onError={setError} />
      <AnimatePresence>
        {mapDisplay && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <MapComponent />
          </motion.div>
        )}
        {displayedHint && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <HintComponent />
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <h1 className="text-xl text-red-400 text-center">
              Wrong values! Try again
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
      <InputsComponent
        rightCoordinates={coordinates}
        onToggleHint={setDisplayedHint}
        onCheck={setMapDisplay}
        setError={setError}
      />
    </div>
  );
}

export default App;
