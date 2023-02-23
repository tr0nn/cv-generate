import PersInfo from '../PageComponents/PersInfo';
import { useState } from 'react';
import Experience from '../PageComponents/Experience';
import Education from '../PageComponents/Education';
import Cv from '../PageComponents/Cv';
import SubmitResume from '../PageComponents/SubmitResume';

function CvWraper(props: any) {
  const [showPersInfo, setShowPersInfo] = useState(true);
  const [nextExperience, setNextExperience] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showSubmitResume, setShowSubmitResume] = useState(false);

  const [nameInput, setNameInput] = useState();
  const [watchNameInput, setWatchNameInput] = useState();

  console.log('nameInput shi aris ' + nameInput);
  return (
    <div>
      {showPersInfo ? (
        <div>
          <h1>{watchNameInput}</h1>
          <PersInfo
            stateChangerBack={props.stateChangerCv}
            stateChangerNext={setNextExperience}
            stateChangeHidePerInfo={setShowPersInfo}
            //input
            watchName={setWatchNameInput}
            CwWrapperNameState={setNameInput}
          />
          <Cv watchName={watchNameInput} CwWrapperNameState={nameInput} />
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
          <Cv />
        </div>
      ) : null}

      {showEducation ? (
        <div>
          <Education
            stateBackExperience={setNextExperience}
            stateBackHideEducation={setShowEducation}
            stateEducationHide={setShowEducation}
            stateSubmitResumeShow={setShowSubmitResume}
          />
          <Cv />
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
