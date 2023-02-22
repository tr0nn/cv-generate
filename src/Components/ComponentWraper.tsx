import { useState } from 'react';
import App from '../PageComponents/App';
import CvWrapper from './CvWraper';

function ComponentWraper() {
  const [backHomePage, setBackHomePage] = useState(true);

  function PersInfoAndCV() {
    return (
      <div>
        <CvWrapper stateChangerCv={setBackHomePage} />
      </div>
    );
  }

  return <div>{backHomePage ? <PersInfoAndCV /> : <App />}</div>;
}

export default ComponentWraper;
