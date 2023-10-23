import { useState } from "react";

export const EventEx = () => {
  const [num, setNum] = useState(0);
  console.log(num);

  //   const plusHandler = () => setNum(num + 1);

  //   const minusHandler = () => {
  //     setNum(num - 1);
  //   };

  //   let num = 0;
  //   const plusHandler = () => {
  //     num++;
  //     console.log(num);
  //   };
  // => 윗 코드처럼 사용 불가

  return (
    <div>
      <h3>클릭할때 숫자 증감</h3>
      <h3>{num}</h3>

      {/* <button onClick={plusHandler}>+</button>
      <button>-</button> */}

      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
};
