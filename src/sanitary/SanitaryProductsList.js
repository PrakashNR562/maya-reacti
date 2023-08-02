import { useSanitaryFilterContext } from "../context/sanitary_filter_context";
import SanitarySingleItem from "./SanitarySingleItem";
const SanitaryProductsList = function () {
  const { filtered_sanitary } = useSanitaryFilterContext();
  return (
    <div className="products main flexwrap">
      {filtered_sanitary.map((ele) => {
        return <SanitarySingleItem sanitary={ele} key={ele.id} />;
      })}
    </div>
  );
};

export default SanitaryProductsList;
