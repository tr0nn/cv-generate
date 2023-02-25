import { useState } from 'react';
import { useEffect } from 'react';
import PersInfo from '../PageComponents/PersInfo';
import Experience from '../PageComponents/Experience';
import Education from '../PageComponents/Education';
import Cv from '../PageComponents/Cv';
import SubmitResume from '../PageComponents/SubmitResume';

function CvWraper(props: any) {
  const [showPersInfo, setShowPersInfo] = useState(true);
  const [nextExperience, setNextExperience] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showSubmitResume, setShowSubmitResume] = useState(false);

  //        PersInfo
  const [nameInput, setNameInput] = useState();
  const [watchNameInput, setWatchNameInput] = useState();

  const [surnameInput, setSurnameInput] = useState();
  const [watchSurname, setWatchSurname] = useState();

  const [imageInput, setImageInput] = useState();
  const [watchImage, setWatchImage] = useState();

  const [aboutMeInput, setAboutMeInput] = useState();
  const [watchAboutMe, setWatchAboutMe] = useState();

  const [emailInput, setEmailInput] = useState();
  const [watchEmail, setWatchEmail] = useState();

  const [phoneInput, setPhoneInput] = useState();
  const [watchPhone, setWatchPhone] = useState();

  console.log(
    nameInput +
      ' ' +
      surnameInput +
      ' ' +
      imageInput +
      ' ' +
      aboutMeInput +
      ' ' +
      emailInput +
      ' ' +
      phoneInput
  );
  return (
    <div>
      {showPersInfo ? (
        <div>
          {' '}
          <PersInfo
            stateChangerBack={props.stateChangerCv}
            stateChangerNext={setNextExperience}
            stateChangeHidePerInfo={setShowPersInfo}
            //input Name
            watchName={setWatchNameInput}
            CwWrapperNameState={setNameInput}
            //input Surname
            watchSurname={setWatchSurname}
            CvWrapperSurNameState={setSurnameInput}
            //input Image
            watchImage={setWatchImage}
            CvWrapperImageState={setImageInput}
            //input AboutMe
            watchAboutMe={setWatchAboutMe}
            CvWrapperAboutMeState={setAboutMeInput}
            //input Email
            watchEmail={setWatchEmail}
            CvWrapperEmailState={setEmailInput}
            //input Phone
            watchPhone={setWatchPhone}
            CvWrapperPhoneState={setPhoneInput}
          />
          <Cv
            CwWrapperNameState={nameInput}
            watchName={watchNameInput}
            watchSurname={watchSurname}
            watchImage={watchImage}
            watchAboutMe={watchAboutMe}
            watchEmail={watchEmail}
            watchPhone={watchPhone}
          />
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
