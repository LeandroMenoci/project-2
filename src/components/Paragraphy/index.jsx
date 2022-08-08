import { useContext } from 'react';
import { GlobalContext } from '../context/AppContext';

export function Paragraphy() {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    setState,
  } = theContext;
  console.log(theContext);
  return (
    <p onClick={() => setState((s) => ({ ...s, counter: s.counter + 1 }))}>
      {body}
    </p>
  );
}
