import "../styles/App.scss";
import { useRef, useEffect } from "react";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {
  // to register the plugin
  gsap.registerPlugin(ScrollTrigger);
  // var to store elements
  const ref = useRef();

  // text animation
  useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      // selected element
      [document.querySelector(".header"), document.querySelector(".scroll")],
      //   from
      {
        duration: 2,
        opacity: 1,
        y: 0,
        stagger: 1,
        scale: 1,
      },
      //   to
      {
        scale: 1.1,
        opacity: 0,
        y: 60,
        ease: Power3.easeInOut,
        scrollTrigger: {
          trigger: element.querySelector(".app-header"),
          start: "center center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    // square animation
    gsap.fromTo(
      document.querySelector(".square-shape"),
      {
        duration: 2,
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: document.querySelector(".square"),
          start: "top center",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    ScrollTrigger.batch(".box", {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 60,
          stagger: 0.1,
        });
      },
      once: true,
    });
  }, []);

  return (
    <div className="App" ref={ref}>
      <div className="app-header">
        <h1 className="header">Scroll Trigger GSAP</h1>
        <p className="scroll">Scroll Down</p>
      </div>
      <div className="shapes">
        <div className="square">
          <div className="shape square-shape"></div>
        </div>
        <div className="boxes">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
