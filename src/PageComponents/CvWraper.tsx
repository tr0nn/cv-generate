import PersInfo from './PersInfo';
import { useState } from 'react';
import Experience from './Experience';
import Education from './Education';
import Cv from './Cv';
import SubmitResume from './SubmitResume';

function CvWraper(props: any) {
  const [showPersInfo, setShowPersInfo] = useState(true);
  const [nextExperience, setNextExperience] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showSubmitResume, setShowSubmitResume] = useState(false);

  console.log(showPersInfo, nextExperience, showEducation, showSubmitResume);

  return (
    <div>
      {showPersInfo ? (
        <div>
          <PersInfo
            stateChangerBack={props.stateChangerCv}
            stateChangerNext={setNextExperience}
            stateChangeHidePerInfo={setShowPersInfo}
          />
          <Cv text={'text from CV page'} />
        </div>
      ) : null}

      {nextExperience ? (
        <div>
          <Experience
            stateShowPersInfo={setShowPersInfo}
            stateChangeBack={setNextExperience}
            stateExperienceHide={setNextExperience}
            stateEqucationShow={setShowEducation}
          />
          <Cv text={'text from CV page'} />
        </div>
      ) : null}

      {showEducation ? (
        <div>
          {' '}
          <Education
            stateBackExperience={setNextExperience}
            stateBackHideEducation={setShowEducation}
            stateEducationHide={setShowEducation}
            stateSubmitResumeShow={setShowSubmitResume}
          />
          <Cv text={'text from CV page'} />{' '}
        </div>
      ) : null}

      {showSubmitResume ? (
        <SubmitResume
          stateEducationShow={setShowEducation}
          stateSubmitResume={setShowSubmitResume}
        />
      ) : null}
    </div>
  );
}

export default CvWraper;
