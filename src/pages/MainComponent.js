import { Fragment } from "react";
import CardFive from "../common/cards/CardFive";
import CardFour from "../common/cards/CardFour";
import CardOne from "../common/cards/CardOne";
import CardSeven from "../common/cards/CardSeven";
import CardSix from "../common/cards/CardSix";
import CardThree from "../common/cards/CardThree";
import CardTwo from "../common/cards/CardTwo";

const MainComponent = () => {
  return (
    <Fragment>
      <CardOne />
      <CardTwo />
      <CardThree/>
      <CardFour/>
      <CardFive/>
      <CardSix/>
      <CardSeven/>
    </Fragment>
  );
};
export default MainComponent;
