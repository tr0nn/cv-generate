import { useForm, SubmitHandler } from 'react-hook-form';
import '../styles/persInfo.css';
import { useState } from 'react';

type PersInfoInputs = {
  name: string;
  surname: string;
  image: any;
  aboutMe: string;
  email: string;
  phone: string;
};

function PersInfo(props: any) {
  const [counter, setCounter] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors }
  } = useForm<PersInfoInputs>();

  const onSubmit: SubmitHandler<PersInfoInputs> = data => {
    props.CwWrapperNameState(data.name);
    props.CvWrapperSurNameState(data.surname);
    props.CvWrapperAboutMeState(data.aboutMe);
    props.CvWrapperEmailState(data.email);
    props.CvWrapperPhoneState(data.phone);
  };

  function onImageChange(e: any) {
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    props.CvWrapperImageState(imageUrl);
    props.watchImage(imageUrl);
  }

  return (
    <div className="PersInfo-wrapper-with-btn">
      <div className="btn-Title">
        <button
          className="back-Btn"
          onClick={() => props.stateChangerBack(false)}
        >
          {'<'}
        </button>
        <div className="title-hr">
          <div className="title-13">
            <h1 className="pers-info-title">პირადი ინფო</h1>
            <p className="x13">1/3</p>
          </div>
          <hr className="pers-info-hr" />
        </div>
      </div>

      <div className="PersInfo-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="name-surname-wrapper">
            <div className="name-wrapper">
              <h3 className="persInfo-name-surname">სახელი</h3>
              <input
                className="name-surname-input"
                placeholder={'აკირა'}
                {...register('name', {
                  required: true,
                  minLength: 2,
                  pattern: {
                    value: /^[ა-ჰ]+$/,
                    message: 'მინიმუმ 2 ასო, ქართული ასოები'
                  }
                })}
                onInput={() => {
                  props.watchName(watch('name'));
                }}
              />{' '}
              <br />
              {errors.name && (
                <span className="name-error">
                  მინიმუმ 2 ასო, ქართული ასოები
                </span>
              )}
            </div>

            <div className="surname-wrapper">
              <h3 className="persInfo-name-surname">გვარი</h3>
              <input
                className="name-surname-input"
                placeholder={'უზუმაკი'}
                {...register('surname', {
                  required: true,
                  minLength: 2,
                  pattern: {
                    value: /^[ა-ჰ]+$/,
                    message: 'მინიმუმ 2 ასო, ქართული ასოები'
                  }
                })}
                onInput={() => {
                  props.watchSurname(watch('surname'));
                }}
              />{' '}
              <br />
              {errors.surname && (
                <span className="name-error">
                  მინიმუმ 2 ასო, ქართული ასოები
                </span>
              )}
            </div>
          </div>

          <div className="pers-photo-btn">
            <h3 className="pers-photo-title">პირადი ფოტოს ატვირთვა</h3>
            <label className="upload-img-btn">
              <input
                {...register('image', {
                  required: true
                })}
                name="atvirte"
                style={{ cursor: 'pointer' }}
                type="file"
                onChange={onImageChange}
              />
              ატვირთვა
            </label>
          </div>

          <h3 className="aboutMe-title">ჩემ შესახებ (არასავალდებულო)</h3>
          <input
            className="aboutMe-input"
            placeholder={'ზოგადი ინფო შენ შესახებ'}
            {...register('aboutMe')}
            onInput={() => {
              props.watchAboutMe(watch('aboutMe'));
            }}
          />

          <h3 className="email-phone-title">ელ-ფოსტა</h3>
          <input
            className="email-phone-input"
            placeholder={'akira666@redberry.ge'}
            {...register('email', {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9+_.-]+@redberry.ge$/,
                message: 'უნდა მთავრდებოდეს @redberry.ge-ით'
              }
            })}
            onInput={() => {
              props.watchEmail(watch('email'));
            }}
          />
          {errors.email && (
            <span className="email-phone-error">
              {' '}
              <br />
              უნდა მთავრდებოდეს @redberry.ge-ით
            </span>
          )}

          <h3 className="email-phone-title">მობილურის ნომერი</h3>
          <input
            className="email-phone-input"
            placeholder="+995 555 55 55 55"
            {...register('phone', {
              required: true,
              pattern: {
                value: /^[+]9955[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}$/,
                message: 'უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს'
              }
            })}
            onInput={() => {
              props.watchPhone(watch('phone'));
            }}
          />
          {errors.phone && (
            <span className="email-phone-error">
              <br />
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </span>
          )}

          <br />

          <input
            className="persInfo-submit-btn"
            type="submit"
            value={'შემდეგი'}
            onClick={() => {
              if (
                !errors.name &&
                !errors.surname &&
                !errors.image &&
                !errors.aboutMe &&
                !errors.email &&
                !errors.phone &&
                counter > 0
              ) {
                props.stateChangerNext(true);
                props.stateChangeHidePerInfo(false);

                console.log(counter);
              } else {
                setCounter(counter + 1);
                console.log(counter);
              }
            }}
          />
        </form>{' '}
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
