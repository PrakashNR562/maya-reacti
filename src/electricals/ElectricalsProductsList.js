import { useElectricalsFilterContext } from "../context/electricals_filter_context";
import ElectricalsSingleItem from "./ElectricalsSingleItem";
const ElectricalsProductsList = function () {
  const { filtered_electricals: electricals } = useElectricalsFilterContext();
  console.log(electricals);
  return (
    <div className="products main flexwrap">
      {electricals.map((ele) => {
        return <ElectricalsSingleItem electricals={ele} key={ele.id} />;
      })}
    </div>
  );
};

export default ElectricalsProductsList;
