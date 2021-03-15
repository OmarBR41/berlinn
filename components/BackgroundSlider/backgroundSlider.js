// React hooks
import { useLayoutEffect, useEffect, useState, useRef } from "react";

// KeenSlider hook
import { useKeenSlider } from "keen-slider/react";

// Component styles
import styles from "./backgroundSlider.module.css";

// Slider images
const mobileImages = [
  "images/mobile/white-tower-berlin.jpeg",
  "images/mobile/brandenburg-gate-berlin.jpeg",
  "images/mobile/green-trees-in-berlin.jpeg",
  "images/mobile/cars-on-berlin-road.jpeg",
];

const desktopImages = [
  "images/desktop/gray-concrete-tower-during-golden-hour.jpeg",
  "images/desktop/sky-sunset-federal-chancellery-berlin.jpeg",
  "images/desktop/tv-tower-in-berlin.jpeg",
  "images/desktop/abendstimmung-berlin-bridge-sunset.jpeg",
];

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default function BackgroundSlider() {
  const [width] = useWindowSize();

  const [images, setImages] = useState([]);
  const [opacities, setOpacities] = useState([]);
  const timer = useRef();

  // Change slider images on resize
  useEffect(() => {
    if (width < 800 && images !== mobileImages) {
      setImages(mobileImages);
    }
    if (width >= 800 && images !== desktopImages) {
      setImages(desktopImages);
    }
  }, [width]);

  // Initialize slider
  const [sliderRef, slider] = useKeenSlider({
    slides: images.length,
    loop: true,
    duration: 3000,
    move(s) {
      const new_opacities = s.details().positions.map((slide) => slide.portion);
      setOpacities(new_opacities);
    },
  });

  // Changes slide every 5 seconds
  useEffect(() => {
    timer.current = setInterval(() => {
      if (slider) {
        slider.next();
      }
    }, 5000);
    return () => {
      clearInterval(timer.current);
    };
  }, [slider]);

  return (
    <div ref={sliderRef} className={styles.container}>
      <div className={styles.wrapper}></div>

      {images.map((src, idx) => (
        <div
          key={idx}
          className={styles.slide}
          style={{ opacity: opacities[idx] }}
        >
          <img src={src} className={styles.slideImage} />
        </div>
      ))}
    </div>
  );
}
