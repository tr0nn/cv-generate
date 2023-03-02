import { useState } from 'react';
import '../styles/Cv.css';

export default function Cv(props: any) {
  return (
    <div className="cv-wrapper">
      <div className="name-surname-wrapper">
        <h3 className="name">{props.watchName}</h3>
        <h3 className="surname">{props.watchSurname}</h3>
      </div>
      <img style={{ width: 200, borderRadius: 40 }} src={props.watchImage} />
      <h3>{props.watchAboutMe}</h3>
      <h3>{props.watchEmail}</h3>
      <h3>{props.watchPhone}</h3>
      <h3>{props.watchPosition}</h3>
      <h3>{props.watchEmployer}</h3>
      <h3>{props.watchStartDate}</h3>
      <h3>{props.watchEndtDate}</h3>
      <h3>{props.watchDescription}</h3>
      <h3>{props.watchEducation}</h3>
      <h3>{props.watchQuality}</h3>
      <h3>{props.watchEducationEndDate}</h3>
      <h3>{props.watchDescription2}</h3>
      <h1>Cv bakar@redberry.ge +995514636969</h1>
    </div>
  );
}
