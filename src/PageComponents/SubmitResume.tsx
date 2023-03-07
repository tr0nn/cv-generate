import styled from 'styled-components';
import '../styles/submitCv.css';

function SubmitResume(props: any) {
  return (
    <div className="subtmi-cv-main">
      <div>
        <button
          className="submit-back-btn"
          onClick={() => {
            props.stateEducationShow(true);
            props.stateSubmitResume(false);
          }}
        >
          {'<'}
        </button>
      </div>

      <div className="submit-cv-wrapper">
        <div className="submit-persInfo-photo">
          <div className="submit-persInfo">
            <SubName>{props.nameInput}</SubName>
            <SubSurname>{props.surnameInput}</SubSurname>
            <h3>{props.aboutMeInput}</h3>
            <h3>{props.emailInput}</h3>
            <h3>{props.phoneInput}</h3>
          </div>
          <div>
            <img className="submit-image" src={props.imageInput} />
          </div>
        </div>

        <h3>{props.positionInput}</h3>
        <h3>{props.employerInput}</h3>
        <h3>{props.startDateInput}</h3>
        <h3>{props.endDateInput}</h3>
        <h3>{props.descriptionInput}</h3>
        <h3>{props.educationInput}</h3>
        <h3>{props.qualityInput}</h3>
        <h3>{props.educationEndDateInput}</h3>
        <h3>{props.educationEndDateInput}</h3>
      </div>

      <div>
        <h1>რეზიუმე წარემატებით გაიგზავნა</h1>
      </div>
    </div>
  );
}

export default SubmitResume;

const SubName = styled.h3`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 42px;
  color: #f93b1d;
`;

const SubSurname = styled.h3`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 42px;
  color: #f93b1d;
`;
