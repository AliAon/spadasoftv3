import { Fragment } from "react";
import CardFive from "../common/cards/CardFive";
import CardFour from "../common/cards/CardFour";
import CardOne from "../common/cards/CardOne";
import CardSeven from "../common/cards/CardSeven";
import CardSix from "../common/cards/CardSix";
import CardThree from "../common/cards/CardThree";
import CardTwo from "../common/cards/CardTwo";
import JobCard from "../common/cards/JobCard";
import ProfileCardNine from "../common/cards/ProfileCardNine";

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
      <ProfileCardNine/>
      <JobCard/>
    </Fragment>
  );
};
export default MainComponent;
