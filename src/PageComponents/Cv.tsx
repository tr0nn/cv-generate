import { useState } from 'react';

export default function Cv(props: any) {
  const [y, sety] = useState();
  return (
    <div>
      <h1>Cv</h1>
      <h3>{props.CwWrapperNameState}</h3>
      <h3>{props.watchName}</h3>
      <h3>{props.watchSurname}</h3>
      <img style={{ width: 200, borderRadius: 40 }} src={props.watchImage} />
      <h3>{props.watchAboutMe}</h3>
      <h3>{props.watchEmail}</h3>
      <h3>{props.watchPhone}</h3>
    </div>
  );
}
