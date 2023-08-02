import { NavBarCategories, PageHero, Loading, Error } from "../components";
import TilesFilters from "./TilesFilters";
import TilesSort from "./TilesSort";
import { useTilesFilterContext } from "../context/tiles_filter_context";
import TilesProductsList from "./TilesProductList";
import { useTilesContext } from "../context/tiles_context";
import { useLocation } from "react-router-dom";
const TilesProductPage = function () {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category") || "all";

  const {
    showFilterSideBarFunction,
    hideFilterSideBarFunction,
    show_filter_sidebar,
  } = useTilesFilterContext();
  const { tiles_loading: loading, tiles_error: error } = useTilesContext();
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
                    <TilesFilters categoryAttached={category} />
                  </div>
                  <div className="section">
                    <div className="row">
                      <div className="cat-head">
                        <PageHero title={null} product="tiles" />

                        <div className="page-title">
                          <h1>Tiles</h1>
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
                        <TilesSort />
                      </div>
                    </div>
                    <TilesProductsList />
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

export default TilesProductPage;
