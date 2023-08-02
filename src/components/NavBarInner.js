import { Link } from "react-router-dom";
const NavBarInner = function () {
  return (
    <div className="dpt-menu">
      <ul className="second-links">
        <li className="has-child paints">
          <a href="#" className="outer-links">
            <div className="icon-large">
              <i className="ri-bear-smile-line"></i>
            </div>
            Paints
            <div className="icon-small">
              <i className="ri-arrow-right-s-line"></i>
            </div>
          </a>
          <ul>
            <li>
              <a href="#">Exterior Paints</a>
            </li>
            <li>
              <a href="#">Interior Paints</a>
            </li>
            <li>
              <a href="#">Royale Play</a>
            </li>
            <li>
              <a href="#">Waterproofing</a>
            </li>
            <li>
              <a href="#">Cracks & Leakages</a>
            </li>
            <li>
              <a href="#">Tools & Accessories</a>
            </li>
            <li>
              <a href="#">Tile/Floor Paints</a>
            </li>
          </ul>
        </li>
        <li className="has-child tiles">
          <Link to="/tiles" className="outer-links">
            <div className="icon-large">
              <i className="ri-bluetooth-connect-line"></i>
            </div>
            Tiles
            <div className="icon-small">
              <i className="ri-arrow-right-s-line"></i>
            </div>
          </Link>
          <ul>
            <li>
              <Link to="/tiles?category=floor">Floor Tiles</Link>
            </li>
            <li>
              <Link to="/tiles?category=front-elevation">Front Elevation</Link>
            </li>
            <li>
              <Link to="/tiles?category=parking/terrace">Parking/Terrace</Link>
            </li>
            <li>
              <Link to="/tiles?category=antiskids">Anti Skids</Link>
            </li>
            <li>
              <Link to="/tiles?category=bathroom-wall">Bathroom Wall</Link>
            </li>
            <li>
              <Link to="/tiles?category=kitchen-wall">Kitchen Wall</Link>
            </li>
          </ul>
        </li>
        <li className="has-child bathware">
          <Link to="/sanitary" className="outer-links">
            <div className="icon-large">
              <i className="ri-t-shirt-air-line"></i>
            </div>
            Sanitary
            <div className="icon-small">
              <i className="ri-arrow-right-s-line"></i>
            </div>
          </Link>
          <ul>
            <li>
              <Link to="/sanitary?category=Accessories">Accessories</Link>
            </li>
            <li>
              <Link to="/sanitary?category=Commode">Commodes</Link>
            </li>
            <li>
              <Link to="/tiles?category=Sink-Tap">Sink-Taps</Link>
            </li>
            <li>
              <Link to="/tiles?category=Wash-Basin">Wash-Basin</Link>
            </li>
            <li>
              <Link to="/tiles?category=Mirror">Mirror</Link>
            </li>
            <li>
              <Link to="/tiles?category=Diverter">Diverters</Link>
            </li>
            <li>
              <Link to="/tiles?category=Spout">Spout</Link>
            </li>
            <li>
              <Link to="/tiles?category=PillarTaps">PillarTaps</Link>
            </li>
            <li>
              <Link to="/tiles?category=Angle-Tap">Angle-Taps</Link>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="outer-links">
            <div className="icon-large">
              <i className="ri-shirt-line"></i>
            </div>
            Water Pumps
          </a>
        </li>
        <li>
          <Link to="/wpg" className="outer-links">
            <div className="icon-large">
              <i className="ri-user-5-line"></i>
            </div>
            Waterproofing & Grout
          </Link>
        </li>
        <li>
          <a href="#" className="outer-links">
            <div className="icon-large">
              <i className="ri-user-6-line"></i>
            </div>
            Geysers
          </a>
        </li>
        <li>
          <a href="#" className="outer-links">
            <div className="icon-large">
              <i className="ri-heart-pulse-line"></i>
            </div>
            Safe Painting Service
          </a>
        </li>
        <li className="has-child electrical">
          <a href="#" className="outer-links">
            <div className="icon-large">
              <i className="ri-home-8-line"></i>
            </div>
            Electricals
            <div className="icon-small">
              <i className="ri-arrow-right-s-line"></i>
            </div>
          </a>
          <div className="mega">
            <div className="flexcol">
              <div className="row">
                <h4>
                  <a href="#">Lightings</a>
                </h4>
                <ul>
                  <li>
                    <a href="#">Ceiling Fans</a>
                  </li>
                  <li>
                    <a href="#">Geysers</a>
                  </li>
                  <li>
                    <a href="#">Wires</a>
                  </li>
                  <li>
                    <a href="#">Switches</a>
                  </li>
                  <li>
                    <a href="#">Exhaust Fans</a>
                  </li>
                </ul>
              </div>
              <div className="row">
                <h4>
                  <a href="#">Plumbing</a>
                </h4>
                <ul>
                  <li>
                    <a href="#">CPVC Items</a>
                  </li>
                  <li>
                    <a href="#">PVC Items</a>
                  </li>
                  <li>
                    <a href="#">PVC Taps</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="#" className="outer-links">
            <div className="icon-large outer-links">
              <i className="ri-android-line"></i>
            </div>
            Electric Wires
          </a>
        </li>
        <li>
          <a href="#" className="outer-links">
            <div className="icon-large">
              <i className="ri-basketball-line"></i>
            </div>
            Waterproofing
          </a>
        </li>
        <li>
          <a href="#" className="outer-links">
            <div className="icon-large">
              <i className="ri-shield-star-line"></i>
            </div>
            Best Seller
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBarInner;
