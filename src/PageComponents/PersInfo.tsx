import { type } from 'os';

function PersInfo(props: any) {
  return (
    <div>
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
