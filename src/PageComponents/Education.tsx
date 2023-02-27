import { useForm, SubmitHandler } from 'react-hook-form';
import '../styles/Education.css';

type EducationInputs = {};

function Education(props: any) {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors }
  } = useForm<EducationInputs>();

  const onSubmit: SubmitHandler<EducationInputs> = data => {};

  return (
    <div className="Experience-wrapper">
      <div className="btn-Title">
        <button
          className="back-Btn"
          onClick={() => {
            props.stateBackExperience(true);
            props.stateBackHideEducation(false);
          }}
        >
          back
        </button>

        <div className="title-hr">
          <div className="title-13">
            <h1>განათლება</h1>
            <p className="x13">3/3</p>
          </div>
          <hr />
        </div>
      </div>

      <button
        onClick={() => {
          props.stateEducationHide(false);
          props.stateSubmitResumeShow(true);
        }}
      >
        next{' '}
      </button>
    </div>
  );
}

export default Education;
