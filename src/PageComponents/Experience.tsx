import { useForm, SubmitHandler } from 'react-hook-form';
import '../styles/Experience.css';
import '../styles/persInfo.css';

type ExperienceInputs = {
  position: any;
  employer: string;
  startDate: any;
  endDate: any;
  description: string;
};
function Experience(props: any) {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors }
  } = useForm<ExperienceInputs>();

  const onSubmit: SubmitHandler<ExperienceInputs> = data => {
    props.CvWrapperPositionState(data.position);
    props.CvWrapperEmployerState(data.employer);
    props.CvWrapperStartDateState(data.startDate);
    props.CvWrapperEndDateState(data.endDate);
    props.CvWrapperDescriptionState(data.description);
  };

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

      <div className="Experience-input-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>თანამდებობა</h3>
          <input
            placeholder={'დეველოპერი, დიზაინერი, ა.შ.'}
            {...register('position', {
              required: true,
              minLength: 2
            })}
            onInput={() => {
              props.watchPosition(watch('position'));
            }}
          />
          {errors.position && <span>მინიმუმ 2 სიმბოლო</span>}

          <h3>დამსაქმებელი</h3>
          <input
            placeholder={'დამსაქმებელი'}
            {...register('employer', {
              required: true,
              minLength: 2
            })}
            onInput={() => {
              props.watchEmployer(watch('employer'));
            }}
          />
          {errors.employer && <span>მინიმუმ 2 სიმბოლო</span>}

          <h3>დაწყების რიცხვი</h3>
          <input
            type="date"
            {...register('startDate', { required: true })}
            onInput={() => {
              props.watchStartDate(watch('startDate'));
            }}
          />
          <h3>დამთავრების რიცხვი</h3>
          <input
            type="date"
            {...register('endDate', { required: true })}
            onInput={() => {
              props.watchEndDate(watch('endDate'));
            }}
          />

          <h3>აღწერა</h3>
          <textarea
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            {...register('description', { required: true })}
            onInput={() => {
              props.watchDescription(watch('description'));
            }}
          />

          <input type="submit" />
        </form>
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
