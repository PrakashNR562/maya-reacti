import { GiConsoleController } from "react-icons/gi";
import { useMotorFilterContext } from "../context/motors_filter_context";
import { useEffect, useState } from "react";
import { formatPrice, getUniqueValues } from "../utils/helpers";
const MotorFilters = function ({ categoryAttached }) {
  const {
    showFilterSideBarFunction,
    hideFilterSideBarFunction,
    show_filter_sidebar,
    filters: { category, company, min_price, max_price, price },
    updateFilters,
    clearFilters,
    all_motor,
  } = useMotorFilterContext();
  const classes = show_filter_sidebar ? "filter show" : "filter";
  const categories = getUniqueValues(all_motor, "category");

  const companies = getUniqueValues(all_motor, "company");

  const [selectedCategories, setSelectedCategories] = useState("");

  const [selectedCompany, setSelectedCompany] = useState("");

  const [selectedPrice, setSelectedPrice] = useState(100);
  const handleCategoryChange = (event) => {
    event.preventDefault();

    const category = event.target.value;
    if (selectedCategories === category) {
      console.log(selectedCategories, category);
      setSelectedCategories("all");
      updateFilters({ name: "category", value: "all" });
    } else {
      setSelectedCategories(category);
      updateFilters({ name: "category", value: category });
    }
  };
  const handleCompanyChange = (event) => {
    event.preventDefault();
    const company = event.target.value;
    if (selectedCompany === company) {
      setSelectedCompany("all");
      updateFilters({ name: "company", value: "all" });
    } else {
      setSelectedCompany(company);
      updateFilters({ name: "company", value: company });
    }
  };

  const handlePriceChange = function (event) {
    event.preventDefault();
    const price = event.target.value;
    setSelectedPrice(price);
    updateFilters({ name: "price", value: price });
  };
  useEffect(() => {
    if (categoryAttached) {
      setSelectedCategories(categoryAttached);
      updateFilters({ name: "category", value: categoryAttached });
    } else {
      setSelectedCategories("");
      updateFilters({ name: "category", value: "all" });
    }
  }, [categoryAttached]);
  return (
    <div className={classes}>
      <div className="filter-block">
        <div className="filter-upper">
          <h4>Category</h4>
          <i
            className="ri-close-line filter-close desktop-hide"
            onClick={hideFilterSideBarFunction}
          />
        </div>
        <ul>
          {categories.map((ele, i) => {
            return (
              <li key={i}>
                <input
                  type="checkbox"
                  name="checkbox"
                  id={ele}
                  value={ele}
                  checked={selectedCategories.includes(ele)}
                  onChange={handleCategoryChange}
                />
                <label htmlFor={ele}>
                  <span className="checked"></span>
                  <span>{ele}</span>
                </label>
                <span className="count">{categories.length}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="filter-block">
        <div className="filter-upper">
          <h4>Comapny</h4>
        </div>
        <ul>
          {companies &&
            companies.map((ele, i) => {
              return (
                <li key={i}>
                  <input
                    type="checkbox"
                    name="checkbox"
                    id={ele}
                    value={ele}
                    checked={selectedCompany.includes(ele)}
                    onChange={handleCompanyChange}
                  />
                  <label htmlFor={ele}>
                    <span className="checked"></span>
                    <span>{ele}</span>
                  </label>
                  <span className="count">15</span>
                </li>
              );
            })}
        </ul>
      </div>

      <div className="filter-block pricing">
        <h4>Price</h4>
        <div className="byprice">
          <div className="range-track">
            <input
              type="range"
              name="price"
              onChange={handlePriceChange}
              min={min_price}
              max={max_price}
              value={selectedPrice}
              onClick={(e) => e.preventDefault()}
            />
          </div>
          <div className="price-range">
            <span className="price-from">{formatPrice(min_price)}</span>
            <span className="price">{formatPrice(selectedPrice)}</span>
            <span className="price-to">{formatPrice(max_price)}</span>
          </div>
        </div>
      </div>
      <div
        className="filter-block clear-filters-button"
        style={{ textAlign: "center" }}
      >
        <button className="primary-button" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
      {/* search input */}
    </div>
  );
};

export default MotorFilters;
