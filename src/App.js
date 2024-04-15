
import React from 'react';
import MainApp from './routes/MainApp'
import './Root.css'
import { Header } from './container/Header/Header';
import { Footer } from './container/Footer/Footer';
// import Timer from './components/Timer/Timer';
function App() {
//   useEffect(() => {
//     if (window.particlesJS) {
//       window.particlesJS("particles-js", {
//         particles: {
//             number: {
//                 value: 100, // Moderate number of particles to keep it light and fluid
//             },
//             color: {
//                 value: "#eb4d5a" // Light blue for a water-like appearance
//             },
//             shape: {
//                 type: "circle", // Simple shapes for a subtle effect
//             },
//             opacity: {
//                 value: 0.6,
//                 random: true, // Varying opacity to simulate light reflection
//             },
//             size: {
//                 value: 4,
//                 random: true, // Varying sizes for a dynamic look
//             },
//             line_linked: {
//                 enable: false, // No links to keep the effect soft and fluid
//             },
//             move: {
//                 enable: true,
//                 speed: 2, // Gentle speed for a calming motion
//                 direction: "bottom", // A downward drift like sinking in water
//                 random: true, // Random movement for a natural fluid effect
//                 straight: false, // Allows for more organic movement
//                 out_mode: "out", // Particles will flow out and reappear
//                 attract: {
//                     enable: true,
//                     rotateX: 300,
//                     rotateY: 1200 // Attraction settings to add a wavy motion
//                 },
//             },
//         },
//         interactivity: {
//             detect_on: "canvas",
//             events: {
//                 onhover: {
//                     enable: true,
//                     mode: "bubble" // Gentle bubbling effect on hover
//                 },
//                 onclick: {
//                     enable: true,
//                     mode: "repulse" // Particles scatter on click
//                 },
//             },
//             modes: {
//                 bubble: {
//                     distance: 40,
//                     size: 6,
//                     duration: 2,
//                     opacity: 0.8,
//                     speed: 3 // Smooth, slow bubbling
//                 },
//                 repulse: {
//                     distance: 200,
//                     duration: 0.4 // Quick scatter on click
//                 },
//             },
//         },
//         retina_detect: true, // Adjusts for high DPI screens
//     });
    
    
    
//     }
//   }, []);

  return (
    <>
      {/* <div id="particles-js" style={{
        position: 'fixed', 
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}></div> */}
      <Header />
      {/* <Timer /> */}
      <MainApp />
      <Footer />
    </>
  );
}

export default App;
