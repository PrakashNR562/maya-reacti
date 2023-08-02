import { useWPGFilterContext } from "../context/wpg_filter_context";
import WPGSingleItem from "./WPGSingleItem";
const WPGProductsList = function () {
  const { filtered_wpg: wpg } = useWPGFilterContext();
  return (
    <div className="products main flexwrap">
      {wpg.map((ele) => {
        return <WPGSingleItem wpg={ele} key={ele.id} />;
      })}
    </div>
  );
};

export default WPGProductsList;
