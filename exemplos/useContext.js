// import React, { useContext, useState } from 'react';
// import './App.css';

// const globalState = {
//   title: 'O título de contexto',
//   body: 'O body do contexto',
//   counter: 0,
// };

// const GlobalContext = React.createContext();

// //eslint-disable-next-line
// function Div({ children }) {
//   return (
//     <>
//       <H1 />
//       <Paragraphy />
//     </>
//   );
// }

// //eslint-disable-next-line
// function H1() {
//   const theContext = useContext(GlobalContext);
//   const {
//     contextState: { title, counter },
//   } = theContext;
//   return (
//     <h1>
//       {title} {counter}{' '}
//     </h1>
//   );
// }

// function Paragraphy() {
//   const theContext = useContext(GlobalContext);
//   const {
//     contextState: { body, counter },
//     contextState,
//     setContextState,
//   } = theContext;
//   console.log(theContext);
//   return (
//     <p
//       onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}
//     >
//       {body}
//     </p>
//   );
// }

// function App() {
//   const [contextState, setContextState] = useState(globalState);

//   return (
//     <GlobalContext.Provider value={{ contextState, setContextState }}>
//       <Div />
//     </GlobalContext.Provider>
//   );
// }

// export default App;
