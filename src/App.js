// import React, { lazy, Suspense } from "react";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { NavBarNew, Footer } from "./components";
// import {
//   Home,
//   SingleProduct,
//   Checkout,
//   Error,
//   About,
//   Products,
//   PrivateRoute,
//   AuthWrapper,
//   SingleTiles,
// } from "./pages";
// import Loading from "./components/Loading";
// import CartPage from "./Cart/CartPage";
// import { TilesProductPage, TilesIndividualPage } from "./tiles";
// import SanitaryProductPage from "./sanitary/SanitaryProductsPage";
// import SanitaryIndividualPage from "./sanitary/SanitaryIndividualPage";
// import ScrollToTop from "./ScrollToTop";
// import { WPGProductsPage } from "./wpg";
// import WPGIndividualPage from "./wpg/WPSIndividualPage";
// import MotorProductsPage from "./motor/MotorProductsPage";
// import MotorIndividualPage from "./motor/MotorIndividualPage";
// // import ElectricalsProductsPage from "./electricals/ElectricalsProductsPage";

// import ElectricalsIndividualPage from "./electricals/ElectricalsIndividualPage";
// import CheckOutMain from "./checkout/CheckOutMain";
// const ElectricalsProductsPage = lazy(() => {
//   import("./electricals/ElectricalsProductsPage");
// });
// function App() {
//   return (
//     <BrowserRouter>
//       <NavBarNew />
//       <ScrollToTop>
//         <Suspense>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="about" element={<About />} />
//             <Route path="cart" element={<CartPage />} />
//             <Route path="products" element={<Products />} />
//             <Route path="products/:id" element={<SingleProduct />} />
//             <Route path="loading" element={<Loading />} />
//             <Route path="paints" element={<TilesProductPage />} />
//             <Route path="tiles" element={<TilesProductPage />} />
//             <Route path="tiles/:id" element={<TilesIndividualPage />} />
//             <Route path="sanitary" element={<SanitaryProductPage />} />
//             <Route path="sanitary/:id" element={<SanitaryIndividualPage />} />
//             <Route path="wpg" element={<WPGProductsPage />} />
//             <Route path="wpg/:id" element={<WPGIndividualPage />} />
//             <Route path="checkout" element={<CheckOutMain />} />

//             <Route
//               path="checkout"
//               element={
//                 <PrivateRoute>
//                   <Checkout />
//                 </PrivateRoute>
//               }
//             />
//             <Route path="motor" element={<MotorProductsPage />} />
//             <Route path="motor/:id" element={<MotorIndividualPage />} />
//             <Route path="electricals" element={<ElectricalsProductsPage />} />
//             <Route
//               path="electricals/:id"
//               element={<ElectricalsIndividualPage />}
//             />
//             <Route path="error" element={<Error />} />
//           </Routes>
//         </Suspense>
//       </ScrollToTop>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBarNew, Footer } from "./components";
import Loading from "./components/Loading";
import ScrollToTop from "./ScrollToTop";

const Home = lazy(() => import("./pages/HomePage"));
const SingleProduct = lazy(() => import("./pages/SingleProductPage"));
const Checkout = lazy(() => import("./pages/CheckoutPage"));
const Error = lazy(() => import("./pages/ErrorPage"));
const About = lazy(() => import("./pages/AboutPage"));
const Products = lazy(() => import("./pages/ProductsPage"));
const PrivateRoute = lazy(() => import("./pages/PrivateRoute"));
const AuthWrapper = lazy(() => import("./pages/AuthWrapper"));

const SanitaryIndividualPage = lazy(() =>
  import("./sanitary/SanitaryIndividualPage")
);

const CartPage = lazy(() => import("./Cart/CartPage"));
const TilesIndividualPage = lazy(() => import("./tiles/TilesIndividualPage"));
const TilesProductPage = lazy(() => import("./tiles/TilesProductsPage"));

const SanitaryProductPage = lazy(() =>
  import("./sanitary/SanitaryProductsPage")
);
const WPGProductsPage = lazy(() => import("./wpg/WPGProductsPage"));
const WPGIndividualPage = lazy(() => import("./wpg/WPSIndividualPage"));
const MotorProductsPage = lazy(() => import("./motor/MotorProductsPage"));
const MotorIndividualPage = lazy(() => import("./motor/MotorIndividualPage"));
const ElectricalsProductsPage = lazy(() =>
  import("./electricals/ElectricalsProductsPage")
);
const ElectricalsIndividualPage = lazy(() => {
  "./electricals/ElectricalsIndividualPage";
});
function App() {
  return (
    <BrowserRouter>
      <NavBarNew />
      <ScrollToTop>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<SingleProduct />} />
            <Route path="loading" element={<Loading />} />
            <Route path="paints" element={<TilesProductPage />} />
            <Route path="tiles" element={<TilesProductPage />} />
            <Route path="tiles/:id" element={<TilesIndividualPage />} />
            <Route path="sanitary" element={<SanitaryProductPage />} />
            <Route path="sanitary/:id" element={<SanitaryIndividualPage />} />
            <Route path="wpg" element={<WPGProductsPage />} />
            <Route path="wpg/:id" element={<WPGIndividualPage />} />
            {/* <Route path="checkout" element={<CheckOut/>} /> */}

            {/* Remove the duplicate checkout route and use PrivateRoute as a wrapper */}

            <Route path="motor" element={<MotorProductsPage />} />
            <Route path="motor/:id" element={<MotorIndividualPage />} />

            {/* Use the lazy-loaded ElectricalsProductsPage */}
            <Route path="electricals" element={<ElectricalsProductsPage />} />
            <Route
              path="electricals/:id"
              element={<ElectricalsIndividualPage />}
            />

            <Route path="error" element={<Error />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
