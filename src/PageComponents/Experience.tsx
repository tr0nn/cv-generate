function Experience(props: any) {
  return (
    <div>
      <button
        onClick={() => {
          props.stateChangeBack(false);
          props.stateShowPersInfo(true);
        }}
      >
        {' '}
        back
      </button>
      <button
        onClick={() => {
          props.stateExperienceHide(false);
          props.stateEqucationShow(true);
        }}
      >
        next{' '}
      </button>
      <h1>experience</h1>
    </div>
  );
}

export default Experience;
