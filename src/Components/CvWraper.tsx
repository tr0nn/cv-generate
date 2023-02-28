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
  const [watchName, setWatchName] = useState();

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

  //       Experience
  const [positionInput, setPositionInput] = useState();
  const [watchPosition, setWatchPosition] = useState();

  const [employerInput, setEmployerInput] = useState();
  const [watchEmployer, setWatchEmployer] = useState();

  const [startDateInput, setStartDateInput] = useState();
  const [watchStartDate, setWatchStartDate] = useState();

  const [endDateInput, setEndtDateInput] = useState();
  const [watchEndtDate, setWatchEndDate] = useState();

  const [DescriptionInput, setDescriptionInput] = useState();
  const [watchDescription, setWatchDescription] = useState();

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
      phoneInput +
      '' +
      positionInput +
      ' ' +
      employerInput +
      ' ' +
      startDateInput +
      ' ' +
      endDateInput +
      ' ' +
      DescriptionInput
  );

  function CvProps() {
    return (
      <>
        <Cv
          watchName={watchName}
          watchSurname={watchSurname}
          watchImage={watchImage}
          watchAboutMe={watchAboutMe}
          watchEmail={watchEmail}
          watchPhone={watchPhone}
          watchPosition={watchPosition}
          watchEmployer={watchEmployer}
          watchStartDate={watchStartDate}
          watchEndtDate={watchEndtDate}
          watchDescription={watchDescription}
        />
      </>
    );
  }
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
            CwWrapperNameState={setNameInput}
            watchName={setWatchName}
            //input Surname
            CvWrapperSurNameState={setSurnameInput}
            watchSurname={setWatchSurname}
            //input Image
            CvWrapperImageState={setImageInput}
            watchImage={setWatchImage}
            //input AboutMe
            CvWrapperAboutMeState={setAboutMeInput}
            watchAboutMe={setWatchAboutMe}
            //input Email
            CvWrapperEmailState={setEmailInput}
            watchEmail={setWatchEmail}
            //input Phone
            CvWrapperPhoneState={setPhoneInput}
            watchPhone={setWatchPhone}
          />
          <CvProps />
        </div>
      ) : null}

      {nextExperience ? (
        <div>
          <Experience
            stateShowPersInfo={setShowPersInfo}
            stateChangeBack={setNextExperience}
            stateExperienceHide={setNextExperience}
            stateEqucationShow={setShowEducation}
            //
            CvWrapperPositionState={setPositionInput}
            watchPosition={setWatchPosition}
            //
            CvWrapperEmployerState={setEmployerInput}
            watchEmployer={setWatchEmployer}
            //
            CvWrapperStartDateState={setStartDateInput}
            watchStartDate={setWatchStartDate}
            //
            CvWrapperEndDateState={setEndtDateInput}
            watchEndDate={setWatchEndDate}
            //
            CvWrapperDescriptionState={setDescriptionInput}
            watchDescription={setWatchDescription}
          />
          <CvProps />
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
          <CvProps />
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
