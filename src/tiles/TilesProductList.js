import { useTilesFilterContext } from "../context/tiles_filter_context";
import TilesSingleItem from "./TilesSingleItem";
const TilesProductsList = function () {
  const { filtered_tiles: tiles } = useTilesFilterContext();
  return (
    <div className="products main flexwrap">
      {tiles.map((ele) => {
        return <TilesSingleItem tile={ele} key={ele.id} />;
      })}
    </div>
  );
};

export default TilesProductsList;
