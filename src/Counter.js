import React from 'react';
import {useRecoilState, iseRecoilValue, useRecoilValue} from 'recoil';
import { counterState } from './recoilState';

const Counter = () => {
  const [count,setCount] = useRecoilState(counterState);

  const countValue = useRecoilValue(counterState);

  return(
    <div>
      <p>useRecoilState로 상태 업데이트: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>

      <p>useRecolValue로 상태 읽기 전용:{countValue}</p>
    </div>
  )
}

export default Counter