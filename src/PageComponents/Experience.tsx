import { useForm, SubmitHandler } from 'react-hook-form';
import '../styles/Experience.css';
import '../styles/persInfo.css';

type ExperienceInputs = {
  Position: string;
  employer: string;
  startDate: any;
  endDate: any;
  Description: string;
};
function Experience(props: any) {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors }
  } = useForm<ExperienceInputs>();

  const onSubmit: SubmitHandler<ExperienceInputs> = data => {};

  return (
    <div className="Experience-wrapper">
      <div className="btn-Title">
        <button
          className="back-Btn"
          onClick={() => {
            props.stateChangeBack(false);
            props.stateShowPersInfo(true);
          }}
        >
          back
        </button>

        <div className="title-hr">
          <div className="title-13">
            <h1>გამოცდილება</h1>
            <p className="x13">2/3</p>
          </div>
          <hr />
        </div>
      </div>

      <button
        onClick={() => {
          props.stateExperienceHide(false);
          props.stateEqucationShow(true);
        }}
      >
        next{' '}
      </button>
    </div>
  );
}

export default Experience;
