import * as React from 'react';
import './style.css';
import PetHair from './PetHair';

export default function App() {
  let A = '1';
  let B = 1;
  let C = 1;

  return (
    <div>
      <h1>타입 지정하기</h1>
      <p>타입을 지정해보자!</p>
      <PetHair A={A} B={B} C={C} />
    </div>
  );
}
