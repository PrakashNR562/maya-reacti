import { useMotorFilterContext } from "../context/motors_filter_context";
import MotorSingleItem from "./MotorSingleItem";
const MotorProductsList = function () {
  const { filtered_motor } = useMotorFilterContext();

  return (
    <div className="products main flexwrap">
      {filtered_motor.map((ele) => {
        return <MotorSingleItem motor={ele} key={ele.id} />;
      })}
    </div>
  );
};

export default MotorProductsList;
