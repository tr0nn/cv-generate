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
      <h1>Submit Resume</h1>
    </div>
  );
}

export default SubmitResume;
