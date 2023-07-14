import AlooParathaimage from "../../assets/AlooParatha.jpg";
import chholeimage from "../../assets/chhole.jpg";
import Dalimage from "../../assets/Dal.jpg";
import KadhaiPaneerimage from "../../assets/KadhaiPaneer.jpg";
import Naanimage from "../../assets/Naan.jpg";
import PalakPaneerimage from "../../assets/PalakPaneer.jpg";
import PaneerButterMasalaimage from "../../assets/PaneerButterMasala.jpg";
import TandoriRotiimage from "../../assets/TandooriRoti.jpg";

import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Aloo Paratha",
    image: <img src={AlooParathaimage} alt="" />,
    description: "Our speciality",
    price: 50,
  },
  {
    id: "m2",
    name: "chhole",
    image: <img src={chholeimage} alt="" />,
    description: "Our speciality",
    price: 120,
  },
  {
    id: "m3",
    name: "Dal",
    image: <img src={Dalimage} alt="" />,
    description: "Our speciality",
    price: 110,
  },
  {
    id: "m4",
    name: "Kadhai Paneer",
    image: <img src={KadhaiPaneerimage} alt="" />,
    description: "Our speciality",
    price: 200,
  },
  {
    id: "m5",
    name: "Naan",
    image: <img src={Naanimage} alt="" />,
    description: "Our speciality",
    price: 80,
  },
  {
    id: "m6",
    name: "Palak Paneer",
    image: <img src={PalakPaneerimage} alt="" />,
    description: "Our speciality",
    price: 180,
  },
  {
    id: "m7",
    name: "Paneer Butter Masala",
    image: <img src={PaneerButterMasalaimage} alt="" />,
    description: "Our speciality",
    price: 220,
  },
  {
    id: "m8",
    name: "Tandori Roti",
    image: <img src={TandoriRotiimage} alt="" />,
    description: "Our speciality",
    price: 12,
  },
];

const AvailableMeals = () => {
  const MealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      image={meal.image}
      price={meal.price}
    />
  ));
  return <Card className={classes.meals}>{MealsList}</Card>;
};
export default AvailableMeals;
