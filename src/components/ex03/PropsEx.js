import { FoodMenu } from "./FoodMenu";
import { Intro } from "./Intro";

const foodMenus = [
  {
    week: "월요일",
    breakfast: "시리얼",
    lunch: "제육덮밥",
    dinner: "김치찌개",
  },
  {
    week: "화요일",
    breakfast: "쉐이크",
    lunch: "샤브샤브",
    dinner: "보쌈",
  },
  {
    week: "수요일",
    breakfast: "토스트",
    lunch: "중국집",
    dinner: "스시",
  },
];

const PropsEx = () => {
  return (
    <div>
      <Intro name={"김하림"} age={27} job={"취준생"} />
      <Intro name={"이정환"} age={12} job={"개발자"} />
      <br />
      <br />
      <hr />
      <FoodMenu
        week={foodMenus[0].week}
        breakfast={foodMenus[0].breakfast}
        lunch={foodMenus[0].lunch}
        dinner={foodMenus[0].dinner}
      />
      <FoodMenu
        week={foodMenus[1].week}
        breakfast={foodMenus[1].breakfast}
        lunch={foodMenus[1].lunch}
        dinner={foodMenus[1].dinner}
      />
      <FoodMenu
        week={foodMenus[2].week}
        breakfast={foodMenus[2].breakfast}
        lunch={foodMenus[2].lunch}
        dinner={foodMenus[2].dinner}
      />
    </div>
  );
};

export default PropsEx;
