function Education(props: any) {
  return (
    <div>
      <button
        onClick={() => {
          props.stateBackExperience(true);
          props.stateBackHideEducation(false);
        }}
      >
        back
      </button>
      <button
        onClick={() => {
          props.stateEducationHide(false);
          props.stateSubmitResumeShow(true);
        }}
      >
        finish
      </button>
      <h1>Education</h1>
    </div>
  );
}

export default Education;
