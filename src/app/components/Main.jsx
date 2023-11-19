// import React, { useState, useEffect } from "react";
// import About from "./About";
// import Works from "./Works";
// import Skills from "./Skills";
// import Qualifications from "./Qualifications";
// import SelfStudy from "./SelfStudy";
// import MyLink from "./MyLink";

// const Main = () => {
//   const [isFadeIn, setIsFadeIn] = useState(false);

//   useEffect(() => {
//     // 3秒後にフェードインさせる
//     const timer = setTimeout(() => {
//       setIsFadeIn(true);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div>
//       <main>
//         <div className={`fade-in-text ${isFadeIn ? "fade-in" : ""}`}>
//           <h1 className="glowing-text">Shin's Portfolio Site</h1>
//         </div>
//         <section>
//           <Works />
//         </section>
//         <section>
//           <SelfStudy />
//         </section>
//         <section>
//           <Skills />
//         </section>
//         <section>
//           <Qualifications />
//         </section>
//         <section>
//           <About />
//         </section>
//         <section>
//           <MyLink />
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Main;
