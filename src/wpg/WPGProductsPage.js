import { NavBarCategories, PageHero, Loading, Error } from "../components";
import WPGFilters from "./WPGFilters";
import WPGSort from "./WPGSort";
import { useWPGFilterContext } from "../context/wpg_filter_context";
import WPGProductsList from "./WPGProductsList";
import { useWPGContext } from "../context/wpg_context";
import { useLocation } from "react-router-dom";
const WPGProductsPage = function () {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category") || "";

  const {
    showFilterSideBarFunction,
    hideFilterSideBarFunction,
    show_filter_sidebar,
  } = useWPGFilterContext();
  const { wpg_loading: loading, wpg_error: error } = useWPGContext();
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
                    <WPGFilters />
                  </div>
                  <div className="section">
                    <div className="row">
                      <div className="cat-head">
                        <PageHero title={null} product="WaterProofing/Grout" />

                        <div className="page-title">
                          <h1>WaterProofing & Grouting</h1>
                        </div>
                        <div className="cat-description">
                          <p>
                            Introducing our Tile Sale Catalogue! Revamp your
                            space with our exquisite selection of tiles, now
                            available at unbeatable prices. Discover a wide
                            range of high-quality tiles crafted to elevate your
                            interiors and exteriors. Whether you're renovating
                            your home or working on a commercial project, our
                            catalogue offers a variety of styles, colors, and
                            patterns to suit every taste and requirement. Choose
                            from stylish ceramic tiles, durable porcelain tiles,
                            natural stone tiles, versatile vinyl tiles, or
                            trendy mosaic tiles. Visit our showroom or browse
                            our online catalogue to explore the full range of
                            tiles on sale. Spruce up your space with our
                            exceptional tiles and transform your surroundings
                            with style. Upgrade your space today with our
                            premium tiles at irresistible prices!
                          </p>
                        </div>
                        <WPGSort />
                      </div>
                    </div>
                    <WPGProductsList />
                    {/* <!-- COPYING FEATURED PRODUCTS ITEM --> */}

                    <div className="load-more flexcenter">
                      <a href="#" className="secondary-button">
                        Load more
                      </a>
                    </div>
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

export default WPGProductsPage;
