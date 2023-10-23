const nums = [1, 2, 3, 4, 5];
// console.log(nums);

export const MapFnEx = () => {
  //   nums.map((n) => console.log(n + "😘"));
  //   nums.map((n) => console.log(n * 2 + "😁"));
  return (
    <div>
      {nums.map((num) => (
        <i key={num}>{num}</i>
      ))}
    </div>
  );
};
