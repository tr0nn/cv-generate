import { useState } from 'react';
import '../styles/Cv.css';

export default function Cv(props: any) {
  const [experienceShow, setExperienceShow] = useState(false);
  const [educationShow, setEducationShow] = useState(false);
  return (
    <div className="cv-wrapper">
      <div className="persInfo-photo">
        <div className="only-persInfo">
          <div className="name-surname-wrapper-cv">
            <h3 className="name">{props.watchName}</h3>
            <h3 className="surname">{props.watchSurname}</h3>
          </div>

          <h3 className="email">
            {props.watchEmail ? (
              <img
                className="spaceIcon"
                src={require('../images/Vector1.png')}
                alt="vector1"
              />
            ) : null}
            {props.watchEmail}
          </h3>
          <h3 className="phone">
            {' '}
            {props.watchPhone ? (
              <img
                className="spaceIcon"
                src={require('../images/Vector2.png')}
                alt="vector2"
              />
            ) : null}
            {props.watchPhone}
          </h3>

          <div className="aboutMe-wrapper">
            <h3 className="aboutMe">
              {props.watchAboutMe ? <h2>ჩემ შესახებ</h2> : null}
              {props.watchAboutMe}
            </h3>
          </div>
        </div>
        <div className="only-photo">
          <img className="image" src={props.watchImage} />
        </div>
      </div>

      {props.watchAboutMe ? <hr className="cv-hr" /> : null}

      <div className="Experience-cv-wrapper">
        {props.watchPosition ? (
          <h3 className="cv-exp-title">გამოცდილება</h3>
        ) : null}

        <div className="pos-empl-wrapper">
          <h3 className="cv-position-title">{props.watchPosition + ','}</h3>

          <h3 className="cv-empl-title">{props.watchEmployer}</h3>
        </div>

        <div className="expstart-end-wrappper">
          <h3 className="exp-start">{props.watchStartDate + ' -'}</h3>

          <h3 className="exp-end">{props.watchEndtDate}</h3>
          <div />
        </div>
        <h3 className="exp-descr">{props.watchDescription}</h3>
      </div>

      <h3>{props.watchEducation}</h3>
      <h3>{props.watchQuality}</h3>
      <h3>{props.watchEducationEndDate}</h3>
      <h3>{props.watchDescription2}</h3>

      {/*<h1>Cv bakar@redberry.ge +995514636969</h1>*/}
    </div>
  );
}
