import { useWPGFilterContext } from "../context/wpg_filter_context";
const WPGSort = function () {
  const {
    showFilterSideBarFunction,
    hideFilterSideBarFunction,
    show_filter_sidebar,
    filtered_wpg: wpg,
    sort,
    updateSort,
  } = useWPGFilterContext();

  return (
    <div className="cat-navigation flexitem">
      <div className="item-filter desktop-hide">
        <a className="filter-trigger label" onClick={showFilterSideBarFunction}>
          <i className="ri-menu-2-line ri-2x"></i>
          <span>Filter</span>
        </a>
      </div>
      <div className="label">
        <span>{wpg.length} items found</span>
      </div>
      <div className="item-sortir">
        <form>
          <label htmlFor="sort">sort by</label>
          <select
            name="sort"
            id="sort"
            className="sort-input"
            value={sort}
            onChange={updateSort}
          >
            <option value="price-lowest">Price(lowest)</option>
            <option value="price-highest">Price(highest)</option>
            <option value="name-a">Name(a-z)</option>
            <option value="name-z">Name(z-a)</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default WPGSort;
