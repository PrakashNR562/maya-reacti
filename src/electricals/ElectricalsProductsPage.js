import { NavBarCategories, PageHero, Loading, Error } from "../components";
import ElectricalsFilters from "./ElectricalsFilters";
import ElectricalsSort from "./ElectricalsSort";
import { useElectricalsFilterContext } from "../context/electricals_filter_context";
import ElectricalsProductsList from "./ElectricalsProductsList";
import { useElectricalsContext } from "../context/electricals_context";
import { useLocation } from "react-router-dom";
const ElectricalsProductsPage = function () {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category") || "";

  const {
    showFilterSideBarFunction,
    hideFilterSideBarFunction,
    show_filter_sidebar,
  } = useElectricalsFilterContext();
  const { electricals_loading: loading, electricals_error: error } =
    useElectricalsContext();
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
                    {/* <TilesFilters categoryAttached={category} /> */}
                    <ElectricalsFilters />
                  </div>
                  <div className="section">
                    <div className="row">
                      <div className="cat-head">
                        <PageHero title={null} product="Electricals" />

                        <div className="page-title">
                          <h1>Electricals</h1>
                        </div>
                        <div className="cat-description">
                          <p>
                            Welcome to our extensive collection of electrical
                            products! Explore a wide range of high-quality
                            appliances designed to enhance your home or office.
                            From fans to geysers, bulbs to spotlights, and much
                            more, we offer an extensive selection from renowned
                            brands like Philips, Havells, V-Guard, Racold,
                            Crompton, and Johnson. Rest assured, all our
                            products are retail SKUs known for their exceptional
                            durability, ensuring they stand the test of time.
                            Plus, we go the extra mile by providing excellent
                            after-sales service assistance, ensuring your
                            complete satisfaction with your purchase. Discover
                            reliable electrical solutions that not only perform
                            flawlessly but are also backed by our commitment to
                            customer care. Start shopping today and experience
                            the convenience and longevity our products offer!
                          </p>
                        </div>
                        <ElectricalsSort />
                      </div>
                    </div>
                    <ElectricalsProductsList />
                    {/* <!-- COPYING FEATURED PRODUCTS ITEM --> */}
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

export default ElectricalsProductsPage;
