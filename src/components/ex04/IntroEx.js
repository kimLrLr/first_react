const users = [
  {
    id: 0,
    name: "김하림",
    age: 27,
  },
  {
    id: 1,
    name: "박기준",
    age: 31,
  },
  {
    id: 2,
    name: "김채교",
    age: 30,
  },
];

export const IntroEx = () => {
  return (
    <div>
      {users.map((man) => (
        <div key={man.id}>
          <h2>자기소개</h2>
          <h3>이름: {man.name}</h3>
          <h3>나이: {man.age}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
};
