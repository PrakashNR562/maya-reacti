import { NavBarCategories, PageHero, Loading, Error } from "../components";
import SanitaryFilters from "./SanitaryFilters";
import SanitarySort from "./SanitarySort";
import { useSanitaryFilterContext } from "../context/sanitary_filter_context";
import SanitaryProductsList from "./SanitaryProductsList";
import { useSanitaryContext } from "../context/sanitary_context";
import { useLocation } from "react-router-dom";

const SanitaryProductPage = function () {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category") || "";
  const {
    showFilterSideBarFunction,
    hideFilterSideBarFunction,
    show_filter_sidebar,
  } = useSanitaryFilterContext();
  const { sanitary_loading: loading, sanitary_error: error } =
    useSanitaryContext();
  if (loading) {
    return (
      <>
        <NavBarCategories toShow={false} />
        <Loading />
      </>
    );
  }
  if (error) {
    return (
      <>
        <NavBarCategories toShow={false} />
        <Error />
      </>
    );
  }
  return (
    <div id="page" className="site page-category">
      <NavBarCategories toShow={false} />
      <main>
        <div className="single-category">
          <div className="container">
            <div className="wrapper">
              <div className="column">
                <div className="holder">
                  <div className="row sidebar">
                    <SanitaryFilters categoryAttached={category} />
                  </div>
                  <div className="section">
                    <div className="row">
                      <div className="cat-head">
                        <PageHero title={null} product="sanitary" />

                        <div className="page-title">
                          <h1>Sanitary</h1>
                        </div>
                        <div className="cat-description">
                          <p>
                            Explore our wide range of high-quality sanitary
                            items that redefine elegance and functionality for
                            your bathroom. From meticulously crafted taps to
                            stylish one-piece commodes, we offer a selection
                            that combines exquisite design with superior
                            performance. Enhance your bathroom's appeal with our
                            premium towel rods, soap stands, and wash basins,
                            each thoughtfully designed to add a touch of luxury.
                            Experience invigorating showers with our diverse
                            range of showerheads. Discover exceptional sanitary
                            solutions that elevate your bathroom to new heights
                            of beauty and convenience.
                          </p>
                        </div>
                        <SanitarySort />
                      </div>
                    </div>
                    <SanitaryProductsList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SanitaryProductPage;
