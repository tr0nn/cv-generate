import { useForm, SubmitHandler } from 'react-hook-form';
import '../styles/persInfo.css';
import { useState } from 'react';

type PersInfoInputs = {
  name: string;
  surname: string;
  aboutMe: string;
  email: string;
  phone: string;
};

function PersInfo(props: any) {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors }
  } = useForm<PersInfoInputs>();

  const onSubmit: SubmitHandler<PersInfoInputs> = data => {
    props.CwWrapperNameState(data.name);
  };

  //props.watchName = watch('name');
  //console.log(watch('name'));

  function onImageChange(e: any) {
    const imageUrl = URL.createObjectURL(e.target.files[0]);

    props.watchImage(imageUrl);
  }

  return (
    <div className="PersInfo-wrapper-with-btn">
      <div className="btn-Title">
        <button
          className="back-Btn"
          onClick={() => props.stateChangerBack(false)}
        >
          back
        </button>
        <div className="title-hr">
          <div className="title-13">
            <h1>პირადი ინფო</h1>
            <p className="x13">1/3</p>
          </div>
          <hr />
        </div>
      </div>

      <div className="PersInfo-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder={'აკირა'}
            {...register('name', { required: true })}
            onInput={() => {
              props.watchName(watch('name'));
            }}
          />

          <input
            placeholder={'უზუმაკი'}
            {...register('surname', { required: true })}
            onInput={() => {
              props.watchSurname(watch('surname'));
            }}
          />
          {errors.surname && <span>this filed is required</span>}

          <input
            name="atvirte"
            style={{ cursor: 'pointer' }}
            type="file"
            onChange={onImageChange}
          />

          <h3>ჩემ შესახებ (არასავალდებულო)</h3>
          <input
            placeholder={'ზოგადი ინფო შენ შესახებ'}
            {...register('aboutMe')}
            onInput={() => {
              props.watchAboutMe(watch('aboutMe'));
            }}
          />

          <h3>ელ-ფოსტა</h3>
          <input
            placeholder={'akira666@gmail.com'}
            {...register('email')}
            onInput={() => {
              props.watchEmail(watch('email'));
            }}
          />

          <h3>მობილურის ნომერი</h3>
          <input
            placeholder="+995 555 55 55 55"
            {...register('phone')}
            onInput={() => {
              props.watchPhone(watch('phone'));
            }}
          />

          <input type="submit" />
        </form>

        <button
          onClick={() => {
            props.stateChangerNext(true);
            props.stateChangeHidePerInfo(false);
          }}
        >
          next{' '}
        </button>
      </div>
    </div>
  );
}

export default PersInfo;
