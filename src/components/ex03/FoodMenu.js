export const FoodMenu = ({ week, breakfast, lunch, dinner }) => {
  return (
    <>
      <h2>{week} 메뉴</h2>
      <h3>아침: {breakfast}</h3>
      <h3>점심: {lunch}</h3>
      <h3>저녁: {dinner}</h3>
      <hr />
    </>
  );
};
