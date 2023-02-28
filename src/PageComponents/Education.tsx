import { useForm, SubmitHandler } from 'react-hook-form';
import '../styles/Education.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

type EducationInputs = {
  university: any;
  quality: string;
  educationEndDate: any;
  description: string;
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
    console.log(data.quality);
  };

  return (
    <div className="Education-wrapper">
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

      <div className="Education-input-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>სასწავლებელი</h3>
          <input
            placeholder="სასწავლებელი"
            {...register('university', { required: true, minLength: 2 })}
          />
          {errors.university && <span>მინიმუმ 2 სიმბოლო</span>}

          <h3>ხარისხი</h3>
          <select
            onInput={axiosHandleChange}
            value={qualityAxiosVal}
            {...register('quality', { required: true })}
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
          />

          <h3>აღწერა</h3>
          <textarea
            placeholder="განათლების აღწერა"
            {...register('description', { required: true })}
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
