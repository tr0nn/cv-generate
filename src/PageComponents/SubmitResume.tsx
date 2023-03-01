function SubmitResume(props: any) {
  return (
    <div>
      <button
        onClick={() => {
          props.stateEducationShow(true);
          props.stateSubmitResume(false);
        }}
      >
        back
      </button>

      <h3>{props.nameInput}</h3>
      <h3>{props.surnameInput}</h3>
      <img style={{ width: 100 }} src={props.imageInput} />
      <h3>{props.aboutMeInput}</h3>
      <h3>{props.emailInput}</h3>
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
  );
}

export default SubmitResume;
