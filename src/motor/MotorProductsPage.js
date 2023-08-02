import { NavBarCategories, PageHero, Loading, Error } from "../components";
import MotorFilters from "./MotorFilters";
import MotorSort from "./MotorSort";
import { useMotorFilterContext } from "../context/motors_filter_context";
import MotorProductsList from "./MotorProductsList";
import { useMotorContext } from "../context/motors_context";
import { useLocation } from "react-router-dom";
const MotorProductsPage = function () {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category") || "";

  const {
    showFilterSideBarFunction,
    hideFilterSideBarFunction,
    show_filter_sidebar,
  } = useMotorFilterContext();
  const { motor_loading: loading, motor_error: error } = useMotorContext();
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
                    <MotorFilters />
                  </div>
                  <div className="section">
                    <div className="row">
                      <div className="cat-head">
                        <PageHero title={null} product="Motors/Stabilizers" />

                        <div className="page-title">
                          <h1>Motors & Stabilizers</h1>
                        </div>
                        <div className="cat-description">
                          <p>
                            At our shop, we take pride in offering a wide range
                            of high-quality motors, pumps, and stabilizers. We
                            stock products from renowned brands like V-Guard,
                            Suguna, and Sharp, known for their exceptional
                            performance and reliability. Our selection ensures
                            that you can find the perfect solution to meet your
                            specific needs. Whether you require efficient
                            motors, powerful pumps, or reliable stabilizers, we
                            have you covered. Shop with confidence knowing that
                            our products are carefully chosen to provide
                            durability and optimal performance. Experience the
                            peace of mind that comes with investing in trusted
                            brands for your motor, pump, and stabilizer
                            requirements.
                          </p>
                        </div>
                        <MotorSort />
                      </div>
                    </div>
                    <MotorProductsList />
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

export default MotorProductsPage;
