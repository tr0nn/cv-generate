import { useState } from 'react';

export default function Cv(props: any) {
  const [y, sety] = useState();
  return (
    <div>
      <h1>Cv</h1>
      <h3>{props.CwWrapperNameState}</h3>
      <h3>{props.watchName}</h3>
    </div>
  );
}
