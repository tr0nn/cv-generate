import { useForm, SubmitHandler } from 'react-hook-form';
import '../styles/Education.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

type EducationInputs = {
  university: any;
  quality: string;
  educationEndDate: any;
  description2: string;
};
type EducationAxios = { id: any; title: string };

function Education(props: any) {
  const [qualityAxios, setQualityAxios] = useState<EducationAxios[] | null>();

  const getInitialState = () => {
    const value = '';
    return value;
  };

  const [qualityAxiosVal, setQualityAxiosVal] = useState(getInitialState);

  const axiosHandleChange = (e: any) => {
    setQualityAxiosVal(e.target.value);
  };

  useEffect(() => {
    const request = async () => {
      const rensponse = await axios.get(
        'https://resume.redberryinternship.ge/api/degrees'
      );
      const data = rensponse.data;
      setQualityAxios(data);
    };
    request();
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors }
  } = useForm<EducationInputs>();

  const onSubmit: SubmitHandler<EducationInputs> = data => {
    props.CvWrapperUniversityState(data.university);
    props.CvWrapperQualityState(qualityAxiosVal);
    props.CvWrapperEducationEndDateState(data.educationEndDate);
    props.CvWrapperDescription2State(data.description2);
  };

  return (
    <div className="Education-wrapper">
      <div className="btn-Title">
        <button
          className="back-Btn-3"
          onClick={() => {
            props.stateBackExperience(true);
            props.stateBackHideEducation(false);
          }}
        >
          {'<'}
        </button>

        <div className="title-hr-3">
          <div className="title-13-3">
            <h1 className="education-title">განათლება</h1>
            <p className="x13-3">3/3</p>
          </div>
          <hr className="pers-info-hr-3" />
        </div>
      </div>

      <div className="Education-input-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>სასწავლებელი</h3>
          <input
            placeholder="სასწავლებელი"
            {...register('university', { required: true, minLength: 2 })}
            onInput={() => {
              props.watchUniversity(watch('university'));
            }}
          />
          {errors.university && <span>მინიმუმ 2 სიმბოლო</span>}

          <h3>ხარისხი</h3>
          <select
            value={qualityAxiosVal}
            {...register('quality', { required: true })}
            onInput={axiosHandleChange}
            onChange={() => {
              console.log(qualityAxiosVal);
              props.watchQuality(qualityAxiosVal);
            }}
          >
            {qualityAxios &&
              qualityAxios.map(qualityAxios => (
                <option key={qualityAxios.id} value={qualityAxios.title}>
                  {qualityAxios.title}
                </option>
              ))}
          </select>
          <p>{qualityAxiosVal}</p>

          <h3>დამთავრების რიცხვი</h3>
          <input
            type="date"
            {...register('educationEndDate', { required: true })}
            onInput={() => {
              props.watchEducationEndDate(watch('educationEndDate'));
            }}
          />

          <h3>აღწერა</h3>
          <textarea
            placeholder="განათლების აღწერა"
            {...register('description2', { required: true })}
            onInput={() => {
              props.watchDescription2(watch('description2'));
            }}
          />

          <input type="submit" />
        </form>
        <button
          onClick={() => {
            props.stateEducationHide(false);
            props.stateSubmitResumeShow(true);
          }}
        >
          next{' '}
        </button>
      </div>
    </div>
  );
}

export default Education;
