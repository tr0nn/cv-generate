import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
type PersInfoInputs = {
  name: string;
  surname: string;
};

function PersInfo(props: any) {
  const [imageUpload, setImageUpload] = useState('url');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<PersInfoInputs>();
  const onSubmit: SubmitHandler<PersInfoInputs> = data => console.log(data);

  console.log(watch('name'));
  console.log(imageUpload);

  function onImageChange(e) {
    console.log(e.target.files);
    setImageUpload(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div>
      <h1>პირადი ინფო</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*       new        */}
        <input
          defaultValue={'აკირა'}
          {...register('name', { required: true })}
        />
        {/*       new        */}
        <input
          defaultValue={'უზუმაკი'}
          {...register('surname', { required: true })}
        />
        {errors.surname && <span>this filed is required</span>}
        {/*       new        */}
        <input
          style={{ cursor: 'pointer' }}
          type="file"
          onChange={onImageChange}
        />
        {/*       new        */}
        <img src={imageUpload} />
        {/*       new        */}
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
