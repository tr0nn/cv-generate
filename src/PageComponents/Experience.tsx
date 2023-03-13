import { useState } from 'react';
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
  const [counter, setCounter] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
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
          className="back-Btn-2"
          onClick={() => {
            props.stateChangeBack(false);
            props.stateShowPersInfo(true);
          }}
        >
          {'<'}
        </button>
        <div className="title-hr-2">
          <div className="title-13-2">
            <h1 className="experience-title">გამოცდილება</h1>
            <p className="x13-2">2/3</p>
          </div>
          <hr className="pers-info-hr-2" />
        </div>
      </div>

      <div className="Experience-input-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="position-title">თანამდებობა</h3>
          <input
            className="pos-empl-input"
            placeholder={'დეველოპერი, დიზაინერი, ა.შ.'}
            {...register('position', {
              required: true,
              minLength: 2
            })}
            onInput={() => {
              props.watchPosition(watch('position'));
            }}
          />
          {errors.position && (
            <span className="exp-error">
              <br />
              მინიმუმ 2 სიმბოლო
            </span>
          )}

          <h3 className="experience-titles">დამსაქმებელი</h3>
          <input
            className="pos-empl-input"
            placeholder={'დამსაქმებელი'}
            {...register('employer', {
              required: true,
              minLength: 2
            })}
            onInput={() => {
              props.watchEmployer(watch('employer'));
            }}
          />
          {errors.employer && (
            <span className="exp-error">
              <br />
              მინიმუმ 2 სიმბოლო
            </span>
          )}

          <div className="date-wrapper">
            <div>
              <h3 className="experience-titles">დაწყების რიცხვი</h3>
              <input
                className="date-input-2"
                type="date"
                {...register('startDate', { required: true })}
                onInput={() => {
                  props.watchStartDate(watch('startDate'));
                }}
              />
            </div>
            <div className="endDate-wrapper">
              <h3 className="experience-titles">დამთავრების რიცხვი</h3>
              <input
                className="date-input-2"
                type="date"
                {...register('endDate', { required: true })}
                onInput={() => {
                  props.watchEndDate(watch('endDate'));
                }}
              />
            </div>
          </div>

          <h3 className="experience-titles">აღწერა</h3>
          <textarea
            className="textarea-input"
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            {...register('description', { required: true })}
            onInput={() => {
              props.watchDescription(watch('description'));
            }}
          />

          <input
            className="exp-submit-btn"
            type="submit"
            value={'შემდეგი'}
            onClick={() => {
              if (
                !errors.description &&
                !errors.employer &&
                !errors.endDate &&
                !errors.position &&
                !errors.startDate &&
                counter > 0
              ) {
                props.stateExperienceHide(false);
                props.stateEqucationShow(true);
                console.log(counter);
              } else {
                setCounter(counter + 1);
                console.log(counter);
              }
            }}
          />
        </form>
        <button
          onClick={() => {
            props.stateExperienceHide(false);
            props.stateEqucationShow(true);
          }}
        >
          next{' '}
        </button>
      </div>
    </div>
  );
}

export default Experience;
