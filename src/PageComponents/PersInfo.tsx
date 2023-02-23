import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

type PersInfoInputs = {
  name: string;
  surname: string;
  aboutMe: string;
  email: string;
  phone: string;
};

function PersInfo(props: any) {
  const [imageUpload, setImageUpload] = useState('url');

  const [nameWatch, setNameWatch] = useState();

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
    setImageUpload(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div>
      <h1>პირადი ინფო</h1>
      <hr />
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
        />
        {errors.surname && <span>this filed is required</span>}

        <input
          style={{ cursor: 'pointer' }}
          type="file"
          onChange={onImageChange}
        />

        <img style={{ width: 100 }} src={imageUpload} />

        <h3>ჩემ შესახებ (არასავალდებულო)</h3>
        <input
          placeholder={'ზოგადი ინფო შენ შესახებ'}
          {...register('aboutMe')}
        />

        <h3>ელ-ფოსტა</h3>
        <input placeholder={'akira666@gmail.com'} {...register('email')} />

        <h3>მობილურის ნომერი</h3>
        <input placeholder="+995 555 55 55 55" {...register('phone')} />

        <input type="submit" />
      </form>

      <button onClick={() => props.stateChangerBack(false)}>back</button>
      <button
        onClick={() => {
          props.stateChangerNext(true);
          props.stateChangeHidePerInfo(false);
        }}
      >
        next{' '}
      </button>
      <h1>persInfo</h1>
    </div>
  );
}

export default PersInfo;
